"use strict";

const CACHE_PREFIX = "amal-alghad-";
const CACHE_VERSION = "v1";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;
const BASE_URL = self.registration.scope;

const PRECACHE_PATHS = [
  "./",
  "./index.html",
  "./404.html",
  "./offline.html",
  "./manifest.json",
  "./css/style.css",
  "./js/main.js",
  "./js/pwa.js",
  "./assets/logo.png",
  "./assets/logo.svg",
  "./assets/images/cotton-field.svg",
  "./assets/images/world-map.svg",
  "./assets/pwa/icon-192.svg",
  "./assets/pwa/icon-512.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    await Promise.all(PRECACHE_PATHS.map(async (path) => {
      const url = new URL(path, BASE_URL);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to precache ${url}: ${response.status}`);
      }

      await cache.put(url, response);
    }));

    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();

    await Promise.all(cacheNames
      .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map((name) => caches.delete(name)));

    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);
  const scopeUrl = new URL(BASE_URL);

  if (
    request.method !== "GET" ||
    requestUrl.origin !== scopeUrl.origin ||
    !requestUrl.pathname.startsWith(scopeUrl.pathname)
  ) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      let response;

      try {
        response = await fetch(request);
      } catch {
        return (await cache.match(request, { ignoreSearch: true })) ||
          (await cache.match(new URL("./index.html", BASE_URL))) ||
          (await cache.match(new URL("./offline.html", BASE_URL)));
      }

      if (response.ok) {
        await cache.put(request, response.clone());
      }

      return response;
    })());

    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);

    if (cached) {
      return cached;
    }

    const response = await fetch(request);

    if (response.ok && response.type === "basic") {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }

    return response;
  })());
});