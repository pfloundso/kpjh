globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, getCookie, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { Auth, google } from 'googleapis';
import jwt from 'jsonwebtoken';
import { createIPX, createIPXMiddleware } from 'ipx';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{"cartoApiKey":""},"contentfulToken":"","contentfulApi":"","googleApplicationCredentials":"","jwtSecret":"","userPw":"","groupleaderPw":"","ipx":{"dir":"../public","domains":["images.ctfassets.net"],"sharp":{},"alias":{}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3786-jy+csvXVxygdxiMG+TSWt2f/kDU\"",
    "mtime": "2026-11-05T15:39:27.868Z",
    "size": 14214,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/AvenirNext-Bold.421395d6.ttf": {
    "type": "font/ttf",
    "etag": "\"4fd94-FXrar6ELZfbU7tRJTkfCgHc+/os\"",
    "mtime": "2026-11-05T15:39:27.418Z",
    "size": 327060,
    "path": "../public/_nuxt/AvenirNext-Bold.421395d6.ttf"
  },
  "/_nuxt/AvenirNext-Italic.4cc1bb13.ttf": {
    "type": "font/ttf",
    "etag": "\"64b44-2ijlM/egZC0jp4uVXSZEL4sDPWc\"",
    "mtime": "2026-11-05T15:39:27.409Z",
    "size": 412484,
    "path": "../public/_nuxt/AvenirNext-Italic.4cc1bb13.ttf"
  },
  "/_nuxt/AvenirNext-Regular.c113d4e9.ttf": {
    "type": "font/ttf",
    "etag": "\"66ce8-ST5lERRD0egmXRmrGFY+mhzbTmk\"",
    "mtime": "2026-11-05T15:39:27.409Z",
    "size": 421096,
    "path": "../public/_nuxt/AvenirNext-Regular.c113d4e9.ttf"
  },
  "/_nuxt/DefaultView.45846933.js": {
    "type": "application/javascript",
    "etag": "\"2fa-UWxWFLc5jBuFgLa0G19S+OPRvhQ\"",
    "mtime": "2026-11-05T15:39:27.408Z",
    "size": 762,
    "path": "../public/_nuxt/DefaultView.45846933.js"
  },
  "/_nuxt/DefaultView.df3464d6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"249-cQ6oDrBaIqIRMSM2BYKPQuyLtfY\"",
    "mtime": "2026-11-05T15:39:27.408Z",
    "size": 585,
    "path": "../public/_nuxt/DefaultView.df3464d6.css"
  },
  "/_nuxt/Diashow.ac875225.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"489-WqffbinfDK4cc/uS1eBt9AhKNME\"",
    "mtime": "2026-11-05T15:39:27.408Z",
    "size": 1161,
    "path": "../public/_nuxt/Diashow.ac875225.css"
  },
  "/_nuxt/Diashow.c348beb8.js": {
    "type": "application/javascript",
    "etag": "\"6b70-sw8rsxveV/W3dj4sbBdqzcUbF/s\"",
    "mtime": "2026-11-05T15:39:27.407Z",
    "size": 27504,
    "path": "../public/_nuxt/Diashow.c348beb8.js"
  },
  "/_nuxt/Downloads.0e7abe45.js": {
    "type": "application/javascript",
    "etag": "\"4ba-BMH65WL3dkjsmuSS+yDWio1lKyU\"",
    "mtime": "2026-11-05T15:39:27.407Z",
    "size": 1210,
    "path": "../public/_nuxt/Downloads.0e7abe45.js"
  },
  "/_nuxt/Downloads.da5d309f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f6-T7YPW82TvYtjEeUYRezzGnttCdI\"",
    "mtime": "2026-11-05T15:39:27.398Z",
    "size": 502,
    "path": "../public/_nuxt/Downloads.da5d309f.css"
  },
  "/_nuxt/FileSaver.min.29897430.js": {
    "type": "application/javascript",
    "etag": "\"a38-NKd3xQCbOnUxcUXOErP7GpZzZn8\"",
    "mtime": "2026-11-05T15:39:27.389Z",
    "size": 2616,
    "path": "../public/_nuxt/FileSaver.min.29897430.js"
  },
  "/_nuxt/Satzung-KPJH.068e13f3.pdf": {
    "type": "application/pdf",
    "etag": "\"9ece9-ZamThd0/m+z+6XEcrE0WSYTz/qs\"",
    "mtime": "2026-11-05T15:39:27.388Z",
    "size": 650473,
    "path": "../public/_nuxt/Satzung-KPJH.068e13f3.pdf"
  },
  "/_nuxt/_commonjsHelpers.87174ba5.js": {
    "type": "application/javascript",
    "etag": "\"2da-xJJ3/FuJSlj8XC0qYZEWxUDCKjU\"",
    "mtime": "2026-11-05T15:39:27.388Z",
    "size": 730,
    "path": "../public/_nuxt/_commonjsHelpers.87174ba5.js"
  },
  "/_nuxt/_id_.5550ca66.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"937-OyFNVIhtIxM+HI5kRMtGYCcbQ+s\"",
    "mtime": "2026-11-05T15:39:27.368Z",
    "size": 2359,
    "path": "../public/_nuxt/_id_.5550ca66.css"
  },
  "/_nuxt/_id_.b95942ec.js": {
    "type": "application/javascript",
    "etag": "\"91a4-j1Qsu8EuuBGMXy5PV/7X7KrkZwY\"",
    "mtime": "2026-11-05T15:39:27.368Z",
    "size": 37284,
    "path": "../public/_nuxt/_id_.b95942ec.js"
  },
  "/_nuxt/board.2245c14e.jpeg": {
    "type": "image/jpeg",
    "etag": "\"34d497-AhGctfhDT6EKlOo+l+Iuy6vjIqY\"",
    "mtime": "2026-11-05T15:39:27.359Z",
    "size": 3462295,
    "path": "../public/_nuxt/board.2245c14e.jpeg"
  },
  "/_nuxt/datenschutz.5165737d.js": {
    "type": "application/javascript",
    "etag": "\"7bfd-wt1TQ5Kt1eUdnbe4dv1SA5f/YGA\"",
    "mtime": "2026-11-05T15:39:27.358Z",
    "size": 31741,
    "path": "../public/_nuxt/datenschutz.5165737d.js"
  },
  "/_nuxt/datenschutz.be7a94a4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"117-qEA/BvyoawmLpbP6Pdisc3p2hWU\"",
    "mtime": "2026-11-05T15:39:27.358Z",
    "size": 279,
    "path": "../public/_nuxt/datenschutz.be7a94a4.css"
  },
  "/_nuxt/entry.20cd287f.js": {
    "type": "application/javascript",
    "etag": "\"5abb5-7GUUfKa9QQH5lI7cFeT+IoJF3W4\"",
    "mtime": "2026-11-05T15:39:27.348Z",
    "size": 371637,
    "path": "../public/_nuxt/entry.20cd287f.js"
  },
  "/_nuxt/entry.3b60ac46.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"34705-TRcVe6IqJUM4rPb0hsjXoTJXmP0\"",
    "mtime": "2026-11-05T15:39:27.348Z",
    "size": 214789,
    "path": "../public/_nuxt/entry.3b60ac46.css"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2026-11-05T15:39:27.348Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-404.89a1079a.js": {
    "type": "application/javascript",
    "etag": "\"8a4-mGQqNXLhYa6Yh9IOHky1RtenHI0\"",
    "mtime": "2026-11-05T15:39:27.339Z",
    "size": 2212,
    "path": "../public/_nuxt/error-404.89a1079a.js"
  },
  "/_nuxt/error-500.612d3bdf.js": {
    "type": "application/javascript",
    "etag": "\"752-KDQBf9NKRZEEE+3sb9UYVkBioe4\"",
    "mtime": "2026-11-05T15:39:27.339Z",
    "size": 1874,
    "path": "../public/_nuxt/error-500.612d3bdf.js"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2026-11-05T15:39:27.338Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/error-component.91ac0f13.js": {
    "type": "application/javascript",
    "etag": "\"45e-rr5BbxaDOEd981V0fxSiJBxWhPk\"",
    "mtime": "2026-11-05T15:39:27.338Z",
    "size": 1118,
    "path": "../public/_nuxt/error-component.91ac0f13.js"
  },
  "/_nuxt/gruppen.0eab36a3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"622-vsp+4RR/2D3RsU/xp6GUhMsjmSM\"",
    "mtime": "2026-11-05T15:39:27.338Z",
    "size": 1570,
    "path": "../public/_nuxt/gruppen.0eab36a3.css"
  },
  "/_nuxt/gruppen.674a19ea.js": {
    "type": "application/javascript",
    "etag": "\"cf2-V6DtFMF6TW9e/n75+KdrsOjNGYg\"",
    "mtime": "2026-11-05T15:39:27.338Z",
    "size": 3314,
    "path": "../public/_nuxt/gruppen.674a19ea.js"
  },
  "/_nuxt/header.10c98faf.svg": {
    "type": "image/svg+xml",
    "etag": "\"378-b9PmvJrAn5tzfpYN5Jf+kSOEJpI\"",
    "mtime": "2026-11-05T15:39:27.329Z",
    "size": 888,
    "path": "../public/_nuxt/header.10c98faf.svg"
  },
  "/_nuxt/imageError.ef762fd4.svg": {
    "type": "image/svg+xml",
    "etag": "\"5c2-v5Nwmp99vBCgSP2TUul0yWqzyEs\"",
    "mtime": "2026-11-05T15:39:27.328Z",
    "size": 1474,
    "path": "../public/_nuxt/imageError.ef762fd4.svg"
  },
  "/_nuxt/impressum.366e66a1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"93-HdXiAzhk2veXdx3R1IDFZszwJdM\"",
    "mtime": "2026-11-05T15:39:27.328Z",
    "size": 147,
    "path": "../public/_nuxt/impressum.366e66a1.css"
  },
  "/_nuxt/impressum.6cc95507.js": {
    "type": "application/javascript",
    "etag": "\"7c1-LG3+NbKbArcjpSeikz9YKqJSIPU\"",
    "mtime": "2026-11-05T15:39:27.328Z",
    "size": 1985,
    "path": "../public/_nuxt/impressum.6cc95507.js"
  },
  "/_nuxt/index.2182f04c.js": {
    "type": "application/javascript",
    "etag": "\"1a53-FrY2u5dw4wAtTytnxOdsfDOm86o\"",
    "mtime": "2026-11-05T15:39:27.318Z",
    "size": 6739,
    "path": "../public/_nuxt/index.2182f04c.js"
  },
  "/_nuxt/index.ce16057c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"877-tFZM0bADWBmsvZZXBNRc2kptRS4\"",
    "mtime": "2026-11-05T15:39:27.318Z",
    "size": 2167,
    "path": "../public/_nuxt/index.ce16057c.css"
  },
  "/_nuxt/index.e9546ee9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6d6-akSOzzelXPZ1m7KcW1FaiPGhPoE\"",
    "mtime": "2026-11-05T15:39:27.318Z",
    "size": 1750,
    "path": "../public/_nuxt/index.e9546ee9.css"
  },
  "/_nuxt/index.f0333464.js": {
    "type": "application/javascript",
    "etag": "\"2e37-K2/tVi4nBF5km9OZP2gP3JDyKds\"",
    "mtime": "2026-11-05T15:39:27.318Z",
    "size": 11831,
    "path": "../public/_nuxt/index.f0333464.js"
  },
  "/_nuxt/kjg_kpjh_logo_white.14b584b7.svg": {
    "type": "image/svg+xml",
    "etag": "\"ec81-NAHv+iIMR0qA+aFBAxUuFdGBOZ0\"",
    "mtime": "2026-11-05T15:39:27.309Z",
    "size": 60545,
    "path": "../public/_nuxt/kjg_kpjh_logo_white.14b584b7.svg"
  },
  "/_nuxt/kontakt.3357d86a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5f3-AQ8P4g9uuTcmUnj1aOYvknYTTI0\"",
    "mtime": "2026-11-05T15:39:27.309Z",
    "size": 1523,
    "path": "../public/_nuxt/kontakt.3357d86a.css"
  },
  "/_nuxt/kontakt.b529bb8f.js": {
    "type": "application/javascript",
    "etag": "\"10a7-zu5lLzfztV9R+aExhyb6eyPN1/k\"",
    "mtime": "2026-11-05T15:39:27.308Z",
    "size": 4263,
    "path": "../public/_nuxt/kontakt.b529bb8f.js"
  },
  "/_nuxt/leaflet-src.57deb872.js": {
    "type": "application/javascript",
    "etag": "\"24682-roekZSJYGzPKiUCBrnjl2oOYbRs\"",
    "mtime": "2026-11-05T15:39:27.308Z",
    "size": 149122,
    "path": "../public/_nuxt/leaflet-src.57deb872.js"
  },
  "/_nuxt/leaflet-src.esm.457c3857.js": {
    "type": "application/javascript",
    "etag": "\"24425-WfRufZrxdUlw/vxku6lLgSKuzw0\"",
    "mtime": "2026-11-05T15:39:27.307Z",
    "size": 148517,
    "path": "../public/_nuxt/leaflet-src.esm.457c3857.js"
  },
  "/_nuxt/marker-icon-2x.e148f0f7.js": {
    "type": "application/javascript",
    "etag": "\"d0f-9taCJZEDvhselFvjnU+0TJnTs3w\"",
    "mtime": "2026-11-05T15:39:27.298Z",
    "size": 3343,
    "path": "../public/_nuxt/marker-icon-2x.e148f0f7.js"
  },
  "/_nuxt/marker-icon.d6994ad0.js": {
    "type": "application/javascript",
    "etag": "\"7db-sJriJD5q2dV0lEGFeC08mKiMJGk\"",
    "mtime": "2026-11-05T15:39:27.268Z",
    "size": 2011,
    "path": "../public/_nuxt/marker-icon.d6994ad0.js"
  },
  "/_nuxt/marker-shadow.a7f70f89.js": {
    "type": "application/javascript",
    "etag": "\"36f-qFgYeALZmdm0hiP2vulXRvkHXyo\"",
    "mtime": "2026-11-05T15:39:27.268Z",
    "size": 879,
    "path": "../public/_nuxt/marker-shadow.a7f70f89.js"
  },
  "/_nuxt/secondaryFont.c44dbe1c.ttf": {
    "type": "font/ttf",
    "etag": "\"575384-tCm4JBMKuJIZHuhjP/WOW+iG7Uo\"",
    "mtime": "2026-11-05T15:39:27.259Z",
    "size": 5723012,
    "path": "../public/_nuxt/secondaryFont.c44dbe1c.ttf"
  },
  "/_nuxt/ueberuns.3a59c6a8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b7-pJInb3LEpJyFKZwdteVokDMqCE8\"",
    "mtime": "2026-11-05T15:39:27.258Z",
    "size": 1975,
    "path": "../public/_nuxt/ueberuns.3a59c6a8.css"
  },
  "/_nuxt/ueberuns.ffafd887.js": {
    "type": "application/javascript",
    "etag": "\"13cf-ttiE20mMhXa6cxL8Y0dbcLaWTu4\"",
    "mtime": "2026-11-05T15:39:27.256Z",
    "size": 5071,
    "path": "../public/_nuxt/ueberuns.ffafd887.js"
  },
  "/images/Irrel2018_12_Party.jpg": {
    "type": "image/jpeg",
    "etag": "\"726b6-77kKUsRM1RDGQMuGvUqpBxqPxVM\"",
    "mtime": "2026-11-05T15:39:27.868Z",
    "size": 468662,
    "path": "../public/images/Irrel2018_12_Party.jpg"
  },
  "/images/Irrel2018_Voko_Feuer.jpg": {
    "type": "image/jpeg",
    "etag": "\"4db42-yuM3zf2hCBxFaWkLqR2MYd0eA8s\"",
    "mtime": "2026-11-05T15:39:27.868Z",
    "size": 318274,
    "path": "../public/images/Irrel2018_Voko_Feuer.jpg"
  },
  "/images/Lagerwochenende-225.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e0607-MP5/UbLAF+1/bE6bkqPmRg9sdTk\"",
    "mtime": "2026-11-05T15:39:27.762Z",
    "size": 4064775,
    "path": "../public/images/Lagerwochenende-225.jpg"
  },
  "/images/Zeltlager2017_Feuer.jpg": {
    "type": "image/jpeg",
    "etag": "\"8377c-rwJR3Hqq9GmW0K8EJynWk1eY8dE\"",
    "mtime": "2026-11-05T15:39:27.761Z",
    "size": 538492,
    "path": "../public/images/Zeltlager2017_Feuer.jpg"
  },
  "/images/buellingen.jpg": {
    "type": "image/jpeg",
    "etag": "\"6e144b-QhmzccuhvJh0rpJu34teBigDDx0\"",
    "mtime": "2026-11-05T15:39:27.422Z",
    "size": 7214155,
    "path": "../public/images/buellingen.jpg"
  },
  "/images/kpjh-website.gif": {
    "type": "image/gif",
    "etag": "\"18db6f-m4IalAr/TI1l4JQ8b6Pp2LZMlVY\"",
    "mtime": "2026-11-05T15:39:27.420Z",
    "size": 1629039,
    "path": "../public/images/kpjh-website.gif"
  },
  "/images/location.svg": {
    "type": "image/svg+xml",
    "etag": "\"289-Tu4Zd81FxcElaL8f9kvIFv4pq04\"",
    "mtime": "2026-11-05T15:39:27.420Z",
    "size": 649,
    "path": "../public/images/location.svg"
  },
  "/images/runningkids.jpg": {
    "type": "image/jpeg",
    "etag": "\"414bd-sfitwGVebKm2jDqkLBXsc8keKbc\"",
    "mtime": "2026-11-05T15:39:27.419Z",
    "size": 267453,
    "path": "../public/images/runningkids.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _TbZ8oH = defineEventHandler(async (event) => {
  const auth = new Auth.GoogleAuth({
    keyFile: useRuntimeConfig().googleApplicationCredentials,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"]
  });
  const client = await auth.getClient();
  const drive = google.drive({ version: "v3", auth: client });
  event.context.drive = drive;
  const token = getCookie(event, "token");
  let user = null;
  if (token) {
    jwt.verify(
      token,
      useRuntimeConfig().jwtSecret,
      (err, decoded) => {
        if (!err) {
          user = decoded;
        }
      }
    );
  }
  event.context.auth = { userType: user };
});

const _CrjdBs = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx;
  const ipxOptions = {
    ...opts || {},
    dir: fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const _lazy_l4VyUo = () => import('../login.post.mjs');
const _lazy_lYYJfy = () => import('../user.mjs');
const _lazy_3xd2of = () => import('../image.mjs');
const _lazy_H5Ixuu = () => import('../listImages.mjs');
const _lazy_SCuWPV = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _TbZ8oH, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/login', handler: _lazy_l4VyUo, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/user', handler: _lazy_lYYJfy, lazy: true, middleware: false, method: undefined },
  { route: '/api/image', handler: _lazy_3xd2of, lazy: true, middleware: false, method: undefined },
  { route: '/api/listImages', handler: _lazy_H5Ixuu, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_SCuWPV, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _CrjdBs, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_SCuWPV, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useNitroApp as a, getRouteRules as g, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
