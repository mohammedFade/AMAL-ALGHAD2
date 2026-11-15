/* Language, navigation, scroll effects, counters, and contact form behavior. */
(() => {
  "use strict";

  const translations = {
    ar: {
      brand: "أمل الغد",
      brandSub: "للأنشطة المتعددة المحدودة",
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navProducts: "منتجاتنا",
      navWhy: "لماذا أمل الغد",
      navMarkets: "الأسواق",
      navContact: "تواصل معنا",
      contactUs: "تواصل معنا",
      heroEyebrow: "من أرض السودان إلى العالم",
      heroTitle: "تصدير المحاصيل الزراعية السودانية إلى الأسواق العالمية",
      heroLead: "أمل الغد... جسر موثوق بين المحاصيل السودانية والأسواق العالمية.",
      discoverProducts: "اكتشف منتجاتنا",
      whatsappUs: "تواصل معنا عبر واتساب",
      scroll: "اكتشف المزيد",
      aboutEyebrow: "قصتنا",
      aboutTitle: "نبني جسوراً <em>من الثقة</em>",
      aboutText: "تأسست شركة أمل الغد عام 2025 في مدينة ود مدني، حاضرة ولاية الجزيرة. تجمع الشركة كفاءات متعددة، تتركز خبراتها في تصدير المحاصيل الزراعية السودانية.",
      aboutText2: "نعتمد على سلاسل إمداد قوية في المنطقة لتوريد السمسم الأبيض والأحمر، والقطن، وحب البطيخ، ونعمل على خدمة الأسواق العالمية، ولا سيما الأسواق العربية.",
      learnMore: "لنتحدث عن احتياجاتكم",
      statFounded: "سنة التأسيس",
      statCrops: "فئات المحاصيل الحالية",
      statMarkets: "وجهة التوريد",
      statMarketsValue: "عالمية",
      visualCaptionTitle: "من قلب الجزيرة",
      visualCaption: "إلى الأسواق حول العالم",
      visionEyebrow: "ما يقودنا",
      visionTitle: "رؤية واضحة، <em>ورسالة هادفة</em>",
      visionCardTitle: "رؤيتنا",
      visionText: "أن تكون أمل الغد جسراً موثوقاً بين المحاصيل الزراعية السودانية والأسواق العالمية، وأن تسهم في تعزيز حضور المنتجات السودانية في الأسواق الإقليمية والدولية.",
      missionCardTitle: "رسالتنا",
      missionText: "توفير وتسويق المحاصيل الزراعية السودانية وربطها بالأسواق والعملاء حول العالم، عبر بناء علاقات تجارية مستدامة وتطوير شبكة التوريد والتصدير.",
      productsEyebrow: "من خيرات الأرض",
      productsTitle: "منتجاتنا <em>السودانية</em>",
      productsIntro: "نختار محاصيلنا بعناية، وننسّق التوريد بما يتوافق مع متطلبات العملاء والأسواق المستهدفة.",
      productTagOne: "محصول رئيسي",
      sesameTitle: "السمسم السوداني",
      sesameDesc: "سمسم أبيض قضارف، أبيض سناري، أبيض غربي، وسمسم أحمر.",
      packing: "التعبئة",
      packingValue: "50 كجم",
      sesameNote: "التوريد وفق متطلبات العملاء والأسواق المستهدفة.",
      productTagTwo: "محصول سوداني",
      cottonTitle: "القطن السوداني",
      cottonDesc: "نوفر القطن الأسطواني والقطن المنشاري ضمن محاصيلنا الزراعية.",
      varieties: "الأنواع",
      cottonTypes: "أسطواني · منشاري",
      productTagThree: "ضمن التوريد",
      watermelonTitle: "حب البطيخ",
      watermelonDesc: "محصول سوداني ضمن منتجات أمل الغد، نوفره بالتنسيق مع احتياجات عملائنا.",
      supply: "التوريد",
      supplyValue: "حسب الطلب",
      productTagFour: "خطوة نحو الغد",
      expansionTitle: "التوسع الزراعي",
      expansionDesc: "نعمل على التوسع مستقبلاً في عدد من المحاصيل السودانية وتطوير نطاق صادراتنا تدريجياً.",
      futureProducts: "محاصيلنا المستقبلية",
      futureEyebrow: "خطواتنا القادمة",
      futureTitle: "نحو <em>مستقبل أوسع</em>",
      futureIntro: "تعمل شركة أمل الغد على توسيع حجم صادراتها والاستفادة من شبكة عملائها في الوطن العربي، مع التوسع تدريجياً في المنتجات والأسواق الدولية.",
      peanut: "الفول السوداني",
      gum: "الصمغ العربي",
      soy: "فول الصويا",
      kabkabi: "الكبكبي",
      lentils: "العدسية",
      futureFootnote: "محاصيل نعمل على استكشاف فرصها وتطويرها ضمن خطط التوسع المستقبلية.",
      whyEyebrow: "شريككم في التوريد",
      whyTitle: "لماذا <em>أمل الغد؟</em>",
      featureOneTitle: "منتجات سودانية",
      featureOneText: "تركيز على المحاصيل الزراعية السودانية وربطها بالأسواق.",
      featureTwoTitle: "سلاسل إمداد",
      featureTwoText: "ارتباط بمناطق الإنتاج الزراعي في السودان.",
      featureThreeTitle: "مرونة في التوريد",
      featureThreeText: "توفير المنتجات وفق احتياجات العملاء والكميات المطلوبة.",
      featureFourTitle: "توجه عالمي",
      featureFourText: "نعمل على ربط المنتجات السودانية بالأسواق الإقليمية والدولية.",
      marketsEyebrow: "من السودان إلى العالم",
      marketsTitle: "نحو <em>الأسواق العالمية</em>",
      marketsIntro: "تستهدف شركة أمل الغد الأسواق العربية كمرحلة أساسية، مع توجه للتوسع تدريجياً في الأسواق الدولية وفق طبيعة كل محصول واحتياجات السوق.",
      marketArabTitle: "الأسواق العربية",
      marketArabText: "الأسواق الحالية والمستهدفة.",
      marketAsiaTitle: "شرق آسيا",
      marketAsiaText: "الفول السوداني، الكبكبي، والعدسية.",
      marketEuropeTitle: "الأسواق الأوروبية",
      marketEuropeText: "الصمغ العربي وفول الصويا.",
      sudan: "السودان",
      arabRegion: "المنطقة العربية",
      eastAsia: "شرق آسيا",
      europe: "أوروبا",
      portSudan: "بورتسودان",
      rotterdam: "روتردام",
      dubai: "دبي",
      singapore: "سنغافورة",
      mapCaption: "جذورنا في السودان، ورؤيتنا للعالم",
      contactEyebrow: "يسعدنا التواصل",
      contactTitle: "لنبدأ <em>حواراً مثمراً</em>",
      contactIntro: "للاستفسار عن منتجاتنا أو فرص التعاون، تواصلوا معنا مباشرة أو أرسلوا تفاصيل طلبكم عبر النموذج.",
      companyName: "شركة أمل الغد للأنشطة المتعددة المحدودة",
      companyShort: "تصدير المحاصيل الزراعية السودانية",
      addressLabel: "العنوان",
      address: "السودان – ولاية الجزيرة – محلية مدني الكبرى – ود مدني – السوق المركزي",
      phoneLabel: "الهاتف / واتساب",
      emailLabel: "البريد الإلكتروني",
      chatWhatsapp: "راسلونا عبر واتساب",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الهاتف",
      formProduct: "المنتج المطلوب",
      chooseProduct: "اختر المنتج",
      otherProduct: "منتج آخر / استفسار",
      formQuantity: "الكمية المطلوبة",
      formMessage: "الرسالة",
      namePlaceholder: "الاسم الكامل",
      emailPlaceholder: "name@example.com",
      phonePlaceholder: "+249",
      quantityPlaceholder: "أدخل الكمية المطلوبة",
      messagePlaceholder: "كيف يمكننا مساعدتكم؟",
      sendMessage: "إرسال عبر واتساب",
      formNote: "سيتم فتح واتساب لإرسال رسالتك، ولا تُحفظ البيانات على هذا الموقع.",
      formSuccess: "تم تجهيز رسالتك. أكمل الإرسال عبر واتساب.",
      formError: "تعذر فتح واتساب. يمكنك التواصل معنا مباشرة على الرقم +249120215222.",
      quickLinks: "روابط سريعة",
      footerAbout: "جسر موثوق يربط المحاصيل الزراعية السودانية بالأسواق العالمية.",
      footerAddress: "ود مدني، ولاية الجزيرة، السودان",
      copyright: "© 2025 شركة أمل الغد. جميع الحقوق محفوظة.",
      footerSignature: "من السودان، إلى العالم"
    },
    en: {
      brand: "Amal Alghad",
      brandSub: "Multi Activities Limited",
      navHome: "Home",
      navAbout: "About",
      navProducts: "Products",
      navWhy: "Why Amal Alghad",
      navMarkets: "Markets",
      navContact: "Contact",
      contactUs: "Contact us",
      heroEyebrow: "From Sudan's fields to the world",
      heroTitle: "Exporting Sudanese Agricultural Crops to Global Markets",
      heroLead: "Amal Alghad is a trusted bridge connecting Sudanese crops with global markets.",
      discoverProducts: "Explore our products",
      whatsappUs: "Contact us on WhatsApp",
      scroll: "Discover more",
      aboutEyebrow: "Our story",
      aboutTitle: "Building bridges <em>of trust</em>",
      aboutText: "Founded in 2025 in Wad Madani, the capital of Al Jazirah State, Amal Alghad brings together professionals with diverse expertise, with a focus on exporting Sudanese agricultural crops.",
      aboutText2: "We draw on established regional supply chains for white and red sesame, cotton and watermelon seeds, serving international markets with a particular focus on the Arab region.",
      learnMore: "Discuss your requirements",
      statFounded: "Year established",
      statCrops: "Current crop categories",
      statMarkets: "Supply destination",
      statMarketsValue: "Global",
      visualCaptionTitle: "From the heart of Al Jazirah",
      visualCaption: "To markets around the world",
      visionEyebrow: "Our purpose",
      visionTitle: "A clear vision, <em>a meaningful mission</em>",
      visionCardTitle: "Our vision",
      visionText: "To become a trusted bridge between Sudanese agricultural crops and global markets, helping strengthen the presence of Sudanese products across regional and international markets.",
      missionCardTitle: "Our mission",
      missionText: "To source and market Sudanese agricultural crops for customers worldwide by building lasting trade relationships and developing our supply and export network.",
      productsEyebrow: "The harvest of our land",
      productsTitle: "Sudanese <em>products</em>",
      productsIntro: "We select our crops with care and coordinate supply in line with customer requirements and target-market needs.",
      productTagOne: "Core crop",
      sesameTitle: "Sudanese sesame",
      sesameDesc: "Gedaref white, Sennar white, western white and red sesame.",
      packing: "Packing",
      packingValue: "50 kg",
      sesameNote: "Supply is coordinated to meet customer and target-market requirements.",
      productTagTwo: "Sudanese crop",
      cottonTitle: "Sudanese cotton",
      cottonDesc: "Our agricultural range includes roller-ginned and saw-ginned cotton.",
      varieties: "Types",
      cottonTypes: "Roller-ginned · Saw-ginned",
      productTagThree: "Available for supply",
      watermelonTitle: "Watermelon seeds",
      watermelonDesc: "A Sudanese crop in Amal Alghad's portfolio, supplied in coordination with customer requirements.",
      supply: "Supply",
      supplyValue: "On request",
      productTagFour: "Looking ahead",
      expansionTitle: "Agricultural expansion",
      expansionDesc: "We plan to broaden our range of Sudanese crops and develop our export portfolio progressively.",
      futureProducts: "Future crops",
      futureEyebrow: "What lies ahead",
      futureTitle: "A broader <em>horizon</em>",
      futureIntro: "Amal Alghad is working to grow export volumes and build on its Arab-region customer network, while gradually expanding its products and international reach.",
      peanut: "Groundnuts",
      gum: "Gum arabic",
      soy: "Soybeans",
      kabkabi: "Kabkabi beans",
      lentils: "Lentils",
      futureFootnote: "These crops form part of our plans to assess and develop future expansion opportunities.",
      whyEyebrow: "Your supply partner",
      whyTitle: "Why <em>Amal Alghad?</em>",
      featureOneTitle: "Sudanese produce",
      featureOneText: "A dedicated focus on Sudanese agricultural crops and their route to market.",
      featureTwoTitle: "Supply networks",
      featureTwoText: "Connections to agricultural production regions across Sudan.",
      featureThreeTitle: "Flexible supply",
      featureThreeText: "Products coordinated around customer needs and requested quantities.",
      featureFourTitle: "Global outlook",
      featureFourText: "Working to connect Sudanese products with regional and international markets.",
      marketsEyebrow: "From Sudan to the world",
      marketsTitle: "Reaching <em>global markets</em>",
      marketsIntro: "Arab markets are a key focus for Amal Alghad, with a gradual international expansion shaped by each crop and the requirements of its market.",
      marketArabTitle: "Arab markets",
      marketArabText: "Current and target markets.",
      marketAsiaTitle: "East Asia",
      marketAsiaText: "Groundnuts, kabkabi beans and lentils.",
      marketEuropeTitle: "European markets",
      marketEuropeText: "Gum arabic and soybeans.",
      sudan: "Sudan",
      arabRegion: "Arab region",
      eastAsia: "East Asia",
      europe: "Europe",
      portSudan: "Port Sudan",
      rotterdam: "Rotterdam",
      dubai: "Dubai",
      singapore: "Singapore",
      mapCaption: "Rooted in Sudan. Looking to the world.",
      contactEyebrow: "We welcome your enquiry",
      contactTitle: "Let's start <em>a conversation</em>",
      contactIntro: "For product enquiries or collaboration opportunities, contact us directly or share your requirements using the form.",
      companyName: "Amal Alghad Multi Activities Limited Company",
      companyShort: "Exporting Sudanese agricultural crops",
      addressLabel: "Address",
      address: "Central Market, Wad Madani, Greater Madani Locality, Al Jazirah State, Sudan",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      chatWhatsapp: "Message us on WhatsApp",
      formName: "Name",
      formEmail: "Email address",
      formPhone: "Phone number",
      formProduct: "Product of interest",
      chooseProduct: "Select a product",
      otherProduct: "Other product / enquiry",
      formQuantity: "Required quantity",
      formMessage: "Message",
      namePlaceholder: "Full name",
      emailPlaceholder: "name@example.com",
      phonePlaceholder: "+249",
      quantityPlaceholder: "Enter the required quantity",
      messagePlaceholder: "How can we assist you?",
      sendMessage: "Send via WhatsApp",
      formNote: "WhatsApp will open to send your message. This website does not store form data.",
      formSuccess: "Your message is ready. Complete sending it in WhatsApp.",
      formError: "WhatsApp could not be opened. You can contact us directly at +249120215222.",
      quickLinks: "Quick links",
      footerAbout: "A trusted bridge connecting Sudanese agricultural crops with global markets.",
      footerAddress: "Wad Madani, Al Jazirah State, Sudan",
      copyright: "© 2025 Amal Alghad. All rights reserved.",
      footerSignature: "From Sudan, to the world"
    }
  };

  const html = document.documentElement;
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const header = document.querySelector(".site-header");
  const progressBar = document.querySelector(".scroll-progress");
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  let activeLanguage = "ar";

  function applyLanguage(language) {
    const selected = translations[language] ? language : "ar";
    activeLanguage = selected;
    html.lang = selected;
    html.dir = selected === "ar" ? "rtl" : "ltr";
    document.title = selected === "ar"
      ? "أمل الغد | تصدير المحاصيل الزراعية السودانية"
      : "Amal Alghad | Sudanese Agricultural Crop Exports";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[selected][element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = translations[selected][element.dataset.i18nPlaceholder];
      if (value !== undefined) element.placeholder = value;
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === selected));
    });
    document.querySelector(".menu-toggle").setAttribute("aria-label", selected === "ar" ? "فتح قائمة التنقل" : "Open navigation menu");
    const navElement = document.querySelector(".primary-nav");
    navElement.setAttribute("aria-label", selected === "ar" ? "التنقل الرئيسي" : "Main navigation");
    document.querySelector(".preloader").setAttribute("aria-label", selected === "ar" ? "جارٍ التحميل" : "Loading");
    const whatsapp = document.querySelector(".floating-whatsapp");
    whatsapp.setAttribute("aria-label", selected === "ar" ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp");
    try { localStorage.setItem("amal-alghad-language", selected); } catch (error) { /* Storage may be disabled in private browsing. */ }
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  try {
    const savedLanguage = localStorage.getItem("amal-alghad-language");
    if (savedLanguage && translations[savedLanguage]) applyLanguage(savedLanguage);
  } catch (error) {
    applyLanguage("ar");
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: "0px 0px -35px 0px" });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const counters = document.querySelectorAll(".counter");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function runCounter(element) {
    const target = Number(element.dataset.count);
    if (!Number.isFinite(target)) return;
    if (reducedMotion) {
      element.textContent = String(target);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.65 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach((counter) => { counter.textContent = counter.dataset.count; });
  }

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".primary-nav a");
  if ("IntersectionObserver" in window) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const current = link.getAttribute("href") === `#${entry.target.id}`;
          if (current) link.classList.add("is-active");
          else link.classList.remove("is-active");
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach((section) => spyObserver.observe(section));
  }

  let scrollQueued = false;
  function updateScrollState() {
    const scrollTop = window.scrollY || html.scrollTop;
    const scrollable = html.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
    header.classList.toggle("is-scrolled", scrollTop > 24);
    const heroBackdrop = document.querySelector(".hero-backdrop");
    if (!reducedMotion && heroBackdrop && scrollTop < window.innerHeight) {
      heroBackdrop.style.backgroundPosition = `center ${50 + scrollTop * 0.018}%`;
      if (activeLanguage === "ar") heroBackdrop.style.backgroundPosition = `center ${50 + scrollTop * 0.018}%`;
    }
    scrollQueued = false;
  }
  window.addEventListener("scroll", () => {
    if (!scrollQueued) {
      window.requestAnimationFrame(updateScrollState);
      scrollQueued = true;
    }
  }, { passive: true });
  updateScrollState();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.classList.remove("is-error");
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const productOption = form.elements.product.selectedOptions[0];
    const productLabel = productOption.textContent.trim();
    const labels = activeLanguage === "ar"
      ? { name: "الاسم", email: "البريد الإلكتروني", phone: "الهاتف", product: "المنتج المطلوب", quantity: "الكمية المطلوبة", message: "الرسالة" }
      : { name: "Name", email: "Email", phone: "Phone", product: "Product of interest", quantity: "Required quantity", message: "Message" };
    const message = [
      activeLanguage === "ar" ? "استفسار عبر موقع أمل الغد" : "Enquiry via Amal Alghad website",
      `${labels.name}: ${values.get("name")}`,
      `${labels.email}: ${values.get("email")}`,
      `${labels.phone}: ${values.get("phone")}`,
      `${labels.product}: ${productLabel}`,
      values.get("quantity") ? `${labels.quantity}: ${values.get("quantity")}` : "",
      `${labels.message}: ${values.get("message")}`
    ].filter(Boolean).join("\n");
    const whatsappUrl = `https://wa.me/249120215222?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    status.textContent = translations[activeLanguage][openedWindow ? "formSuccess" : "formError"];
    if (!openedWindow) status.classList.add("is-error");
  });

  window.addEventListener("load", () => {
    window.setTimeout(() => document.querySelector(".preloader").classList.add("is-hidden"), 250);
  });
})();
