"use strict";

(() => {
  const DISMISS_KEY = "amal-alghad-pwa-dismissed-until";
  const DISMISS_DURATION = 7 * 24 * 60 * 60 * 1000;

  let deferredPrompt = null;
  let delayElapsed = false;
  let installed = false;
  let panel = null;

  const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches ||
    navigator.standalone === true;

  const isIosSafari = () => {
    const userAgent = navigator.userAgent;
    const isIos =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari =
      /Safari/.test(userAgent) &&
      !/CriOS|FxiOS|EdgiOS|OPiOS/.test(userAgent);

    return isIos && isSafari;
  };

  const getDismissedUntil = () => {
    try {
      return Number(localStorage.getItem(DISMISS_KEY)) || 0;
    } catch (error) {
      console.warn("Could not read the PWA reminder preference.", error);
      return 0;
    }
  };

  const saveDismissal = () => {
    try {
      localStorage.setItem(
        DISMISS_KEY,
        String(Date.now() + DISMISS_DURATION)
      );
    } catch (error) {
      console.warn("Could not save the PWA reminder preference.", error);
    }
  };

  const addStyles = () => {
    if (document.getElementById("pwa-install-styles")) return;

    const style = document.createElement("style");
    style.id = "pwa-install-styles";
    style.textContent = `
      .pwa-install-panel {
        position: fixed;
        z-index: 2200;
        inset: auto 1rem 1rem;
        width: min(28rem, calc(100% - 2rem));
        margin-inline: auto;
        padding: 1.1rem 1.2rem;
        border: 1px solid rgba(227, 199, 122, .65);
        border-radius: 8px;
        color: #fff;
        background: #1f3f30;
        box-shadow: 0 16px 48px rgba(27, 42, 58, .24);
        font: 500 1rem/1.6 "Cairo", "DM Sans", sans-serif;
        animation: pwa-install-in .25s ease-out both;
      }
      .pwa-install-panel p { margin: 0 0 .85rem; }
      .pwa-install-actions { display: flex; flex-wrap: wrap; gap: .6rem; }
      .pwa-install-actions button {
        min-height: 2.6rem;
        padding: .45rem 1rem;
        border: 1px solid #e3c77a;
        border-radius: 3px;
        font: inherit;
        font-size: .9rem;
        font-weight: 700;
        cursor: pointer;
      }
      .pwa-install-confirm { color: #1f3f30; background: #e3c77a; }
      .pwa-install-later { color: #fff; background: transparent; }
      .pwa-install-actions button:focus-visible {
        outline: 3px solid #fff;
        outline-offset: 3px;
      }
      @keyframes pwa-install-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (prefers-reduced-motion: reduce) {
        .pwa-install-panel { animation: none; }
      }
    `;

    document.head.append(style);
  };

  const hidePanel = () => {
    panel?.remove();
    panel = null;
  };

  const showPanel = () => {
    const iosSafari = isIosSafari();

    if (
      installed ||
      isStandalone() ||
      getDismissedUntil() > Date.now() ||
      (!deferredPrompt && !iosSafari) ||
      panel
    ) {
      return;
    }

    addStyles();

    const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
    const text = isEnglish
      ? {
          instruction: iosSafari
            ? "To install this app: Share → Add to Home Screen."
            : "Install Amal Alghad on your device for quick access.",
          install: "Install",
          later: "Later"
        }
      : {
          instruction: iosSafari
            ? "لإضافة التطبيق: مشاركة ← إضافة إلى الشاشة الرئيسية."
            : "ثبّت تطبيق أمل الغد للوصول إليه بسهولة.",
          install: "تثبيت",
          later: "لاحقًا"
        };

    const aside = document.createElement("aside");
    aside.className = "pwa-install-panel";
    aside.setAttribute("role", "status");
    aside.setAttribute("aria-live", "polite");
    aside.dir = document.documentElement.dir || "rtl";

    const message = document.createElement("p");
    message.textContent = text.instruction;

    const actions = document.createElement("div");
    actions.className = "pwa-install-actions";

    if (deferredPrompt && !iosSafari) {
      const installButton = document.createElement("button");
      installButton.type = "button";
      installButton.className = "pwa-install-confirm";
      installButton.textContent = text.install;

      installButton.addEventListener("click", async () => {
        const installPrompt = deferredPrompt;
        if (!installPrompt) return;

        installButton.disabled = true;

        try {
          await installPrompt.prompt();
          await installPrompt.userChoice;
          deferredPrompt = null;
          hidePanel();
        } catch (error) {
          console.error("The PWA installation prompt failed.", error);
          installButton.disabled = false;
        }
      });

      actions.append(installButton);
    }

    const laterButton = document.createElement("button");
    laterButton.type = "button";
    laterButton.className = "pwa-install-later";
    laterButton.textContent = text.later;
    laterButton.addEventListener("click", () => {
      saveDismissal();
      hidePanel();
    });

    actions.append(laterButton);
    aside.append(message, actions);
    document.body.append(aside);
    panel = aside;
  };

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch((error) => {
        console.error("Service worker registration failed.", error);
      });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    if (delayElapsed) showPanel();
  });

  window.addEventListener("appinstalled", () => {
    installed = true;
    deferredPrompt = null;
    hidePanel();
  });

  window.setTimeout(() => {
    delayElapsed = true;
    showPanel();
  }, 5000);

  const languageObserver = new MutationObserver(() => {
    if (panel) {
      hidePanel();
      showPanel();
    }
  });

  languageObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang", "dir"]
  });
})();