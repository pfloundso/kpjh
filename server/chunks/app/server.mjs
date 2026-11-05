import { version as version$1, toRef, isRef, getCurrentInstance, inject, ref, watchEffect, watch, onServerPrefetch, defineComponent, computed, h, resolveComponent, mergeProps, useSSRContext, createApp, reactive, unref, provide, onErrorCaptured, createVNode, resolveDynamicComponent, shallowRef, isReadonly, defineAsyncComponent, nextTick, Suspense, Transition, withCtx, createTextVNode, withModifiers, openBlock, createBlock, withDirectives, Fragment as Fragment$1, renderList, toDisplayString, vModelSelect, vModelText } from 'vue';
import { $fetch } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { renderSSRHead } from '@unhead/ssr';
import { composableNames, getActiveHead, createServerHead as createServerHead$1 } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { createMemoryHistory, createRouter, RouterView } from 'vue-router';
import { createError as createError$1, appendHeader, sanitizeStatusCode } from 'h3';
import { hasProtocol, parseURL, parseQuery, encodeParam, withTrailingSlash, withoutTrailingSlash, joinURL, withLeadingSlash, encodePath } from 'ufo';
import { hash, isEqual } from 'ohash';
import destr from 'destr';
import { defu } from 'defu';
import { invariant, InvariantError } from 'ts-invariant';
import { Kind, visit, print, Source, BREAK, isSelectionNode } from 'graphql';
import { Observable } from 'zen-observable-ts';
import { parse, serialize } from 'cookie-es';
import { wrap, dep } from 'optimism';
import { equal } from '@wry/equality';
import { Trie } from '@wry/trie';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { gql } from 'graphql-tag';
import { u as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'googleapis';
import 'jsonwebtoken';
import 'ipx';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function maybe$2(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe$2(function() { return globalThis }) ||
  maybe$2(function() { return window }) ||
  maybe$2(function() { return self }) ||
  maybe$2(function() { return global }) ||
  // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  maybe$2(function() { return maybe$2.constructor("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe$2(function() { return "production" }) &&
      !maybe$2(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change globalThis.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.4.3";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtAppCtx.callAsync(nuxtApp, () => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = [];
  for (const plugin of _plugins2) {
    if (typeof plugin !== "function") {
      continue;
    }
    let _plugin = plugin;
    if (plugin.length > 1) {
      _plugin = (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    plugins2.push(_plugin);
  }
  plugins2.sort((a, b) => {
    var _a, _b;
    return (((_a = a.meta) == null ? void 0 : _a.order) || orderMap.default) - (((_b = b.meta) == null ? void 0 : _b.order) || orderMap.default);
  });
  return plugins2;
}
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function defineNuxtPlugin(plugin, meta) {
  var _a;
  if (typeof plugin === "function") {
    return /* @__PURE__ */ defineNuxtPlugin({ setup: plugin }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin.hooks) {
      nuxtApp.hooks.addHooks(plugin.hooks);
    }
    if (plugin.setup) {
      return plugin.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: (meta == null ? void 0 : meta.name) || plugin.name || ((_a = plugin.setup) == null ? void 0 : _a.name),
    order: (meta == null ? void 0 : meta.order) || plugin.order || orderMap[plugin.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      {
        throw new Error("[nuxt] instance unavailable");
      }
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version$1.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [{ "src": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", "body": true }], "noscript": [], "viewport": "width=device-width, initial-scale=1" };
const appPageTransition = false;
const appKeepalive = false;
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      async function redirect() {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return inMiddleware ? (
          /* abort route navigation */
          false
        ) : void 0;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect() : void 0);
        return to;
      }
      return redirect();
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const _routes = [
  {
    name: "datenschutz",
    path: "/datenschutz",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/datenschutz-4ab0d0df.mjs').then((m) => m.default || m)
  },
  {
    name: "fotos-id",
    path: "/fotos/:id()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_id_-f6677d11.mjs').then((m) => m.default || m)
  },
  {
    name: "fotos",
    path: "/fotos",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-7db518b3.mjs').then((m) => m.default || m)
  },
  {
    name: "gruppen",
    path: "/gruppen",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/gruppen-05044813.mjs').then((m) => m.default || m)
  },
  {
    name: "impressum",
    path: "/impressum",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/impressum-53aa7098.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-de335a77.mjs').then((m) => m.default || m)
  },
  {
    name: "kontakt",
    path: "/kontakt",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/kontakt-5836342e.mjs').then((m) => m.default || m)
  },
  {
    name: "ueberuns",
    path: "/ueberuns",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/ueberuns-23c9cdec.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const getDefault = () => null;
function useAsyncData(...args) {
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(getCachedData() ?? ((_a = options.default) == null ? void 0 : _a.call(options)) ?? null),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(((_a2 = options.default) == null ? void 0 : _a2.call(options)) ?? null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useRequestHeaders(include) {
  var _a;
  const headers = ((_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.node.req.headers) ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  const event = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event;
  return (event == null ? void 0 : event.$fetch) || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watch2,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    const writeAndUnhook = () => {
      unhook();
      return writeFinalCookieValue();
    };
    nuxtApp.hooks.hookOnce("app:error", writeAndUnhook);
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.node.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* @__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$3 = /* @__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });
const auth_45global = /* @__PURE__ */ defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const { data } = ([__temp, __restore] = executeAsync(() => useFetch("/api/auth/user", "$2Mq4CATJT7")), __temp = await __temp, __restore(), __temp);
  if (data.value && data.value.userType) {
    useState("loggedIn").value = true;
    useState("userType").value = data.value.userType;
  }
});
const transition_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const transition = {
    name: to.path === "/" || from.path === "/" ? "fullfade" : "fade",
    mode: "out-in"
  };
  from.meta.pageTransition = transition;
  to.meta.pageTransition = transition;
});
const globalMiddleware = [
  validate,
  auth_45global,
  transition_45global
];
const namedMiddleware = {};
const router_jmwsqit4Rs = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      route[key] = computed(() => _route.value[key]);
    }
    nuxtApp._route = reactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
      for (const component of to.matched) {
        const componentMiddleware = component.meta.middleware;
        if (!componentMiddleware) {
          continue;
        }
        if (Array.isArray(componentMiddleware)) {
          for (const entry2 of componentMiddleware) {
            middlewareEntries.add(entry2);
          }
        } else {
          middlewareEntries.add(componentMiddleware);
        }
      }
      for (const entry2 of middlewareEntries) {
        const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
        if (!middleware) {
          throw new Error(`Unknown route middleware: '${entry2}'.`);
        }
        const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error2 = result || createError$1({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            await callWithNuxt(nuxtApp, showError, [error2]);
            return false;
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await callWithNuxt(nuxtApp, showError, [createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      } else if (to.redirectedFrom) {
        await callWithNuxt(nuxtApp, navigateTo, [to.fullPath || "/"]);
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #$4982
          force: true
        });
      } catch (error2) {
        await callWithNuxt(nuxtApp, showError, [error2]);
      }
    });
    return { provide: { router } };
  }
}, 1);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry2 of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry2.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL: baseURL2 } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL2) {
    baseURL2 = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL2, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$bjZKOzPngb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [
    "images.ctfassets.net"
  ],
  "alias": {}
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$bjZKOzPngb, defaults: {} }
};
const plugin_OrkQhMqHci = /* @__PURE__ */ defineNuxtPlugin(() => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  });
  return {
    provide: {
      img
    }
  };
});
function maybe$1(thunk) {
  try {
    return thunk();
  } catch (_a) {
  }
}
const global$1 = maybe$1(function() {
  return globalThis;
}) || maybe$1(function() {
  return window;
}) || maybe$1(function() {
  return self;
}) || maybe$1(function() {
  return global;
}) || maybe$1(function() {
  return maybe$1.constructor("return this")();
});
var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
  try {
    return Boolean(false);
  } catch (_a) {
    Object.defineProperty(global$1, GLOBAL_KEY, {
      value: maybe$1(function() {
        return "production";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return global$1[GLOBAL_KEY];
  }
}
const DEV = getDEV();
function removeTemporaryGlobals() {
  return typeof Source === "function" ? remove() : remove();
}
function checkDEV() {
  invariant("boolean" === typeof DEV, 39);
}
removeTemporaryGlobals();
checkDEV();
function shouldInclude(_a, variables) {
  var directives = _a.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a2) {
    var directive = _a2.directive, ifArgument = _a2.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      invariant(evaledValue !== void 0, 40);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function hasDirectives(names, root, all) {
  var nameSet = new Set(names);
  var uniqueCount = nameSet.size;
  visit(root, {
    Directive: function(node) {
      if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
        return BREAK;
      }
    }
  });
  return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document2) {
  return document2 && hasDirectives(["client", "export"], document2, true);
}
function isInclusionDirective(_a) {
  var value = _a.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      directive.name.value;
      invariant(directiveArguments && directiveArguments.length === 1, 41);
      var ifArgument = directiveArguments[0];
      invariant(ifArgument.name && ifArgument.name.value === "if", 42);
      var ifValue = ifArgument.value;
      invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 43);
      result.push({ directive, ifArgument });
    });
  }
  return result;
}
function getFragmentQueryDocument(document2, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document2.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw new InvariantError(44);
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    invariant(fragments.length === 1, 45);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign(__assign({}, document2), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document2.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragmentName = selection.name.value;
      if (typeof fragmentMap === "function") {
        return fragmentMap(fragmentName);
      }
      var fragment = fragmentMap && fragmentMap[fragmentName];
      invariant(fragment, 46);
      return fragment || null;
    }
    default:
      return null;
  }
}
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw new InvariantError(55);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a) {
          var name = _a.name, value = _a.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a) {
      var name = _a.name, value = _a.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(stringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = stringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous = stringify;
    stringify = s;
    return previous;
  }
});
var stringify = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function(copy, key) {
      copy[key] = value[key];
      return copy;
    }, {});
  }
  return value;
}
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a) {
      var name = _a.name, value = _a.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
  if (typeof result.__typename === "string") {
    return result.__typename;
  }
  for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
    var selection = _a[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}
function checkDocument(doc) {
  invariant(doc && doc.kind === "Document", 47);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw new InvariantError(48);
    }
    return definition;
  });
  invariant(operations.length <= 1, 49);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && !!definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  invariant(queryDef && queryDef.operation === "query", 50);
  return queryDef;
}
function getFragmentDefinition(doc) {
  invariant(doc.kind === "Document", 51);
  invariant(doc.definitions.length <= 1, 52);
  var fragmentDef = doc.definitions[0];
  invariant(fragmentDef.kind === "FragmentDefinition", 53);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
    var definition = _a[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw new InvariantError(54);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}
var isArray = Array.isArray;
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}
var TYPENAME_FIELD = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: "__typename"
  }
};
function isEmpty(op, fragmentMap) {
  return !op || op.selectionSet.selections.every(function(selection) {
    return selection.kind === Kind.FRAGMENT_SPREAD && isEmpty(fragmentMap[selection.name.value], fragmentMap);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
  var nameSet = /* @__PURE__ */ new Set();
  var tests = [];
  directives.forEach(function(directive) {
    if (directive.name) {
      nameSet.add(directive.name);
    } else if (directive.test) {
      tests.push(directive.test);
    }
  });
  return function(directive) {
    return nameSet.has(directive.name.value) || tests.some(function(test) {
      return test(directive);
    });
  };
}
function makeInUseGetterFunction(defaultKey) {
  var map = /* @__PURE__ */ new Map();
  return function inUseGetterFunction(key) {
    if (key === void 0) {
      key = defaultKey;
    }
    var inUse = map.get(key);
    if (!inUse) {
      map.set(key, inUse = {
        variables: /* @__PURE__ */ new Set(),
        fragmentSpreads: /* @__PURE__ */ new Set()
      });
    }
    return inUse;
  };
}
function removeDirectivesFromDocument(directives, doc) {
  var getInUseByOperationName = makeInUseGetterFunction("");
  var getInUseByFragmentName = makeInUseGetterFunction("");
  var getInUse = function(ancestors) {
    for (var p = 0, ancestor = void 0; p < ancestors.length && (ancestor = ancestors[p]); ++p) {
      if (isArray(ancestor))
        continue;
      if (ancestor.kind === Kind.OPERATION_DEFINITION) {
        return getInUseByOperationName(ancestor.name && ancestor.name.value);
      }
      if (ancestor.kind === Kind.FRAGMENT_DEFINITION) {
        return getInUseByFragmentName(ancestor.name.value);
      }
    }
    return null;
  };
  var operationCount = 0;
  for (var i = doc.definitions.length - 1; i >= 0; --i) {
    if (doc.definitions[i].kind === Kind.OPERATION_DEFINITION) {
      ++operationCount;
    }
  }
  var directiveMatcher = getDirectiveMatcher(directives);
  var hasRemoveDirective = directives.some(function(directive) {
    return directive.remove;
  });
  var shouldRemoveField = function(nodeDirectives) {
    return hasRemoveDirective && nodeDirectives && nodeDirectives.some(directiveMatcher);
  };
  var originalFragmentDefsByPath = /* @__PURE__ */ new Map();
  var firstVisitMadeChanges = false;
  var fieldOrInlineFragmentVisitor = {
    enter: function(node) {
      if (shouldRemoveField(node.directives)) {
        firstVisitMadeChanges = true;
        return null;
      }
    }
  };
  var docWithoutDirectiveSubtrees = visit(doc, {
    Field: fieldOrInlineFragmentVisitor,
    InlineFragment: fieldOrInlineFragmentVisitor,
    VariableDefinition: {
      enter: function() {
        return false;
      }
    },
    Variable: {
      enter: function(node, _key, _parent, _path, ancestors) {
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.variables.add(node.name.value);
        }
      }
    },
    FragmentSpread: {
      enter: function(node, _key, _parent, _path, ancestors) {
        if (shouldRemoveField(node.directives)) {
          firstVisitMadeChanges = true;
          return null;
        }
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.fragmentSpreads.add(node.name.value);
        }
      }
    },
    FragmentDefinition: {
      enter: function(node, _key, _parent, path) {
        originalFragmentDefsByPath.set(JSON.stringify(path), node);
      },
      leave: function(node, _key, _parent, path) {
        var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
        if (node === originalNode) {
          return node;
        }
        if (operationCount > 0 && node.selectionSet.selections.every(function(selection) {
          return selection.kind === Kind.FIELD && selection.name.value === "__typename";
        })) {
          getInUseByFragmentName(node.name.value).removed = true;
          firstVisitMadeChanges = true;
          return null;
        }
      }
    },
    Directive: {
      leave: function(node) {
        if (directiveMatcher(node)) {
          firstVisitMadeChanges = true;
          return null;
        }
      }
    }
  });
  if (!firstVisitMadeChanges) {
    return doc;
  }
  var populateTransitiveVars = function(inUse) {
    if (!inUse.transitiveVars) {
      inUse.transitiveVars = new Set(inUse.variables);
      if (!inUse.removed) {
        inUse.fragmentSpreads.forEach(function(childFragmentName) {
          populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function(varName) {
            inUse.transitiveVars.add(varName);
          });
        });
      }
    }
    return inUse;
  };
  var allFragmentNamesUsed = /* @__PURE__ */ new Set();
  docWithoutDirectiveSubtrees.definitions.forEach(function(def) {
    if (def.kind === Kind.OPERATION_DEFINITION) {
      populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function(childFragmentName) {
        allFragmentNamesUsed.add(childFragmentName);
      });
    } else if (def.kind === Kind.FRAGMENT_DEFINITION && operationCount === 0 && !getInUseByFragmentName(def.name.value).removed) {
      allFragmentNamesUsed.add(def.name.value);
    }
  });
  allFragmentNamesUsed.forEach(function(fragmentName) {
    populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function(childFragmentName) {
      allFragmentNamesUsed.add(childFragmentName);
    });
  });
  var fragmentWillBeRemoved = function(fragmentName) {
    return !!(!allFragmentNamesUsed.has(fragmentName) || getInUseByFragmentName(fragmentName).removed);
  };
  var enterVisitor = {
    enter: function(node) {
      if (fragmentWillBeRemoved(node.name.value)) {
        return null;
      }
    }
  };
  return nullIfDocIsEmpty(visit(docWithoutDirectiveSubtrees, {
    FragmentSpread: enterVisitor,
    FragmentDefinition: enterVisitor,
    OperationDefinition: {
      leave: function(node) {
        if (node.variableDefinitions) {
          var usedVariableNames_1 = populateTransitiveVars(getInUseByOperationName(node.name && node.name.value)).transitiveVars;
          if (usedVariableNames_1.size < node.variableDefinitions.length) {
            return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions.filter(function(varDef) {
              return usedVariableNames_1.has(varDef.variable.name.value);
            }) });
          }
        }
      }
    }
  }));
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === Kind.OPERATION_DEFINITION) {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d) {
          return d.name.value === "export";
        })) {
          return;
        }
        return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
var connectionRemoveConfig = {
  test: function(directive) {
    var willRemove = directive.name.value === "connection";
    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function(arg) {
        return arg.name.value === "key";
      }))
        ;
    }
    return willRemove;
  }
};
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function buildQueryFromSelectionSet(document2) {
  var definition = getMainDefinition(document2);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document2;
  }
  var modifiedDoc = visit(document2, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document2) {
  checkDocument(document2);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document2);
  return modifiedDoc;
}
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
  function DeepMerger2(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }
    this.reconciler = reconciler;
    this.isObject = isNonNullObject;
    this.pastCopies = /* @__PURE__ */ new Set();
  }
  DeepMerger2.prototype.merge = function(target, source) {
    var _this = this;
    var context = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }
    if (isNonNullObject(source) && isNonNullObject(target)) {
      Object.keys(source).forEach(function(sourceKey) {
        if (hasOwnProperty$2.call(target, sourceKey)) {
          var targetValue = target[sourceKey];
          if (source[sourceKey] !== targetValue) {
            var result = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
            if (result !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }
    return source;
  };
  DeepMerger2.prototype.shallowCopyForMerge = function(value) {
    if (isNonNullObject(value)) {
      if (!this.pastCopies.has(value)) {
        if (Array.isArray(value)) {
          value = value.slice(0);
        } else {
          value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        this.pastCopies.add(value);
      }
    }
    return value;
  };
  return DeepMerger2;
}();
var toString = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}
function maybeDeepFreeze(obj) {
  return obj;
}
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}
function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function(observer) {
    var next = observer.next, error = observer.error, complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function(arg) {
          ++activeCallbackCount;
          var both = function() {
            return examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result) {
            --activeCallbackCount;
            next && next.call(observer, result);
            if (completed) {
              handler.complete();
            }
          }, function(error2) {
            --activeCallbackCount;
            throw error2;
          }).catch(function(caught) {
            error && error.call(observer, caught);
          });
        };
      } else {
        return function(arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }
    var handler = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error),
      complete: function() {
        completed = true;
        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}
var canUseWeakMap = typeof WeakMap === "function" && maybe$1(function() {
  return navigator.product;
}) !== "ReactNative";
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
typeof maybe$1(function() {
  return window.document.createElement;
}) === "function";
maybe$1(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
}) || false;
function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }
  set("@@species");
  return subclass;
}
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = function(_super) {
  __extends(Concast2, _super);
  function Concast2(sources) {
    var _this = _super.call(this, function(observer) {
      _this.addObserver(observer);
      return function() {
        return _this.removeObserver(observer);
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function(result) {
        if (_this.sub !== null) {
          _this.latest = ["next", result];
          _this.notify("next", result);
          iterateObserversSafely(_this.observers, "next", result);
        }
      },
      error: function(error) {
        var sub = _this.sub;
        if (sub !== null) {
          if (sub)
            setTimeout(function() {
              return sub.unsubscribe();
            });
          _this.sub = null;
          _this.latest = ["error", error];
          _this.reject(error);
          _this.notify("error", error);
          iterateObserversSafely(_this.observers, "error", error);
        }
      },
      complete: function() {
        var _a = _this, sub = _a.sub, _b = _a.sources, sources2 = _b === void 0 ? [] : _b;
        if (sub !== null) {
          var value = sources2.shift();
          if (!value) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }
            _this.notify("complete");
            iterateObserversSafely(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function(obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };
    _this.nextResultListeners = /* @__PURE__ */ new Set();
    _this.cancel = function(reason) {
      _this.reject(reason);
      _this.sources = [];
      _this.handlers.complete();
    };
    _this.promise.catch(function(_) {
    });
    if (typeof sources === "function") {
      sources = [new Observable(sources)];
    }
    if (isPromiseLike(sources)) {
      sources.then(function(iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }
    return _this;
  }
  Concast2.prototype.start = function(sources) {
    if (this.sub !== void 0)
      return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };
  Concast2.prototype.deliverLastMessage = function(observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];
      if (method) {
        method.call(observer, this.latest[1]);
      }
      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };
  Concast2.prototype.addObserver = function(observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
    }
  };
  Concast2.prototype.removeObserver = function(observer) {
    if (this.observers.delete(observer) && this.observers.size < 1) {
      this.handlers.complete();
    }
  };
  Concast2.prototype.notify = function(method, arg) {
    var nextResultListeners = this.nextResultListeners;
    if (nextResultListeners.size) {
      this.nextResultListeners = /* @__PURE__ */ new Set();
      nextResultListeners.forEach(function(listener) {
        return listener(method, arg);
      });
    }
  };
  Concast2.prototype.beforeNext = function(callback) {
    var called = false;
    this.nextResultListeners.add(function(method, arg) {
      if (!called) {
        called = true;
        callback(method, arg);
      }
    });
  };
  return Concast2;
}(Observable);
fixObservableSubclass(Concast);
function isExecutionPatchIncrementalResult(value) {
  return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
  return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
  return isExecutionPatchIncrementalResult(value) || isExecutionPatchInitialResult(value);
}
function isApolloPayloadResult(value) {
  return isNonNullObject(value) && "payload" in value;
}
function mergeIncrementalData(prevResult, result) {
  var mergedData = prevResult;
  var merger = new DeepMerger();
  if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
    result.incremental.forEach(function(_a) {
      var data = _a.data, path = _a.path;
      for (var i = path.length - 1; i >= 0; --i) {
        var key = path[i];
        var isNumericKey = !isNaN(+key);
        var parent_1 = isNumericKey ? [] : {};
        parent_1[key] = data;
        data = parent_1;
      }
      mergedData = merger.merge(mergedData, data);
    });
  }
  return mergedData;
}
function graphQLResultHasError(result) {
  var errors = getGraphQLErrorsFromResult(result);
  return isNonEmptyArray(errors);
}
function getGraphQLErrorsFromResult(result) {
  var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
  if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
    result.incremental.forEach(function(incrementalResult) {
      if (incrementalResult.errors) {
        graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
      }
    });
  }
  return graphQLErrors;
}
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result[key] = value;
      }
    });
  });
  return result;
}
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
function mergeOptions(defaults, options) {
  return compact(defaults, options, options.variables && {
    variables: __assign(__assign({}, defaults && defaults.variables), options.variables)
  });
}
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}
var throwServerError = function(response, result, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result;
  throw error;
};
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
    var key = _a[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw new InvariantError(27);
    }
  }
  return operation;
}
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext2 = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext2 = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext2
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext2
  });
  return operation;
}
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
(function(_super) {
  __extends(LinkError, _super);
  function LinkError(message, link) {
    var _this = _super.call(this, message) || this;
    _this.link = link;
    return _this;
  }
  return LinkError;
})(Error);
var ApolloLink = function() {
  function ApolloLink2(request) {
    if (request)
      this.request = request;
  }
  ApolloLink2.empty = function() {
    return new ApolloLink2(function() {
      return Observable.of();
    });
  };
  ApolloLink2.from = function(links) {
    if (links.length === 0)
      return ApolloLink2.empty();
    return links.map(toLink).reduce(function(x, y) {
      return x.concat(y);
    });
  };
  ApolloLink2.split = function(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink2(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink2(function(operation) {
        return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
      });
    }
  };
  ApolloLink2.execute = function(link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
  };
  ApolloLink2.concat = function(first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
      return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
      return new ApolloLink2(function(operation) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op) || Observable.of();
        }) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op, forward) || Observable.of();
        }) || Observable.of();
      });
    }
  };
  ApolloLink2.prototype.split = function(test, left, right) {
    return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
  };
  ApolloLink2.prototype.concat = function(next) {
    return ApolloLink2.concat(this, next);
  };
  ApolloLink2.prototype.request = function(operation, forward) {
    throw new InvariantError(22);
  };
  ApolloLink2.prototype.onError = function(error, observer) {
    if (observer && observer.error) {
      observer.error(error);
      return false;
    }
    throw error;
  };
  ApolloLink2.prototype.setOnError = function(fn) {
    this.onError = fn;
    return this;
  };
  return ApolloLink2;
}();
var execute = ApolloLink.execute;
function onError(errorHandler) {
  return new ApolloLink(function(operation, forward) {
    return new Observable(function(observer) {
      var sub;
      var retriedSub;
      var retriedResult;
      try {
        sub = forward(operation).subscribe({
          next: function(result) {
            if (result.errors) {
              retriedResult = errorHandler({
                graphQLErrors: result.errors,
                response: result,
                operation,
                forward
              });
              if (retriedResult) {
                retriedSub = retriedResult.subscribe({
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer)
                });
                return;
              }
            }
            observer.next(result);
          },
          error: function(networkError) {
            retriedResult = errorHandler({
              operation,
              networkError,
              graphQLErrors: networkError && networkError.result && networkError.result.errors,
              forward
            });
            if (retriedResult) {
              retriedSub = retriedResult.subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer)
              });
              return;
            }
            observer.error(networkError);
          },
          complete: function() {
            if (!retriedResult) {
              observer.complete.bind(observer)();
            }
          }
        });
      } catch (e) {
        errorHandler({ networkError: e, operation, forward });
        observer.error(e);
      }
      return function() {
        if (sub)
          sub.unsubscribe();
        if (retriedSub)
          sub.unsubscribe();
      };
    });
  });
}
(function(_super) {
  __extends(ErrorLink, _super);
  function ErrorLink(errorHandler) {
    var _this = _super.call(this) || this;
    _this.link = onError(errorHandler);
    return _this;
  }
  ErrorLink.prototype.request = function(operation, forward) {
    return this.link.request(operation, forward);
  };
  return ErrorLink;
})(ApolloLink);
var version = "3.7.13";
function isNodeResponse(value) {
  return !!value.body;
}
function isReadableStream(value) {
  return !!value.getReader;
}
function isAsyncIterableIterator(value) {
  return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
  return !!value.stream;
}
function isBlob(value) {
  return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
  return !!value.pipe;
}
function asyncIterator(source) {
  var _a;
  var iterator = source[Symbol.asyncIterator]();
  return _a = {
    next: function() {
      return iterator.next();
    }
  }, _a[Symbol.asyncIterator] = function() {
    return this;
  }, _a;
}
function nodeStreamIterator(stream) {
  var cleanup = null;
  var error = null;
  var done = false;
  var data = [];
  var waiting = [];
  function onData(chunk) {
    if (error)
      return;
    if (waiting.length) {
      var shiftedArr = waiting.shift();
      if (Array.isArray(shiftedArr) && shiftedArr[0]) {
        return shiftedArr[0]({ value: chunk, done: false });
      }
    }
    data.push(chunk);
  }
  function onError2(err) {
    error = err;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[1](err);
    });
    !cleanup || cleanup();
  }
  function onEnd() {
    done = true;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[0]({ value: void 0, done: true });
    });
    !cleanup || cleanup();
  }
  cleanup = function() {
    cleanup = null;
    stream.removeListener("data", onData);
    stream.removeListener("error", onError2);
    stream.removeListener("end", onEnd);
    stream.removeListener("finish", onEnd);
    stream.removeListener("close", onEnd);
  };
  stream.on("data", onData);
  stream.on("error", onError2);
  stream.on("end", onEnd);
  stream.on("finish", onEnd);
  stream.on("close", onEnd);
  function getNext() {
    return new Promise(function(resolve, reject) {
      if (error)
        return reject(error);
      if (data.length)
        return resolve({ value: data.shift(), done: false });
      if (done)
        return resolve({ value: void 0, done: true });
      waiting.push([resolve, reject]);
    });
  }
  var iterator = {
    next: function() {
      return getNext();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function promiseIterator(promise) {
  var resolved = false;
  var iterator = {
    next: function() {
      if (resolved)
        return Promise.resolve({
          value: void 0,
          done: true
        });
      resolved = true;
      return new Promise(function(resolve, reject) {
        promise.then(function(value) {
          resolve({ value, done: false });
        }).catch(reject);
      });
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function readerIterator(reader) {
  var iterator = {
    next: function() {
      return reader.read();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function responseIterator(response) {
  var body = response;
  if (isNodeResponse(response))
    body = response.body;
  if (isAsyncIterableIterator(body))
    return asyncIterator(body);
  if (isReadableStream(body))
    return readerIterator(body.getReader());
  if (isStreamableBlob(body)) {
    return readerIterator(body.stream().getReader());
  }
  if (isBlob(body))
    return promiseIterator(body.arrayBuffer());
  if (isNodeReadableStream(body))
    return nodeStreamIterator(body);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var PROTOCOL_ERRORS_SYMBOL = Symbol();
function graphQLResultHasProtocolErrors(result) {
  if (result.extensions) {
    return Array.isArray(result.extensions[PROTOCOL_ERRORS_SYMBOL]);
  }
  return false;
}
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var errors = __spreadArray(__spreadArray(__spreadArray([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
  if (err.networkError)
    errors.push(err.networkError);
  return errors.map(function(err2) {
    return isNonNullObject(err2) && err2.message || "Error message not found.";
  }).join("\n");
};
var ApolloError = function(_super) {
  __extends(ApolloError2, _super);
  function ApolloError2(_a) {
    var graphQLErrors = _a.graphQLErrors, protocolErrors = _a.protocolErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
    var _this = _super.call(this, errorMessage) || this;
    _this.name = "ApolloError";
    _this.graphQLErrors = graphQLErrors || [];
    _this.protocolErrors = protocolErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError2.prototype;
    return _this;
  }
  return ApolloError2;
}(Error);
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function readMultipartBody(response, observer) {
  var _a, _b, _c, _d, _e;
  return __awaiter(this, void 0, void 0, function() {
    var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _f, value, done, chunk, bi, message, i, headers, contentType_1, body, result, next;
    var _g, _h;
    return __generator(this, function(_j) {
      switch (_j.label) {
        case 0:
          if (TextDecoder === void 0) {
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          }
          decoder = new TextDecoder("utf-8");
          contentType = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get("content-type");
          delimiter = "boundary=";
          boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-";
          boundary = "--".concat(boundaryVal);
          buffer = "";
          iterator = responseIterator(response);
          running = true;
          _j.label = 1;
        case 1:
          if (!running)
            return [3, 3];
          return [4, iterator.next()];
        case 2:
          _f = _j.sent(), value = _f.value, done = _f.done;
          chunk = typeof value === "string" ? value : decoder.decode(value);
          running = !done;
          buffer += chunk;
          bi = buffer.indexOf(boundary);
          while (bi > -1) {
            message = void 0;
            _g = [
              buffer.slice(0, bi),
              buffer.slice(bi + boundary.length)
            ], message = _g[0], buffer = _g[1];
            if (message.trim()) {
              i = message.indexOf("\r\n\r\n");
              headers = parseHeaders(message.slice(0, i));
              contentType_1 = headers["content-type"];
              if (contentType_1 && contentType_1.toLowerCase().indexOf("application/json") === -1) {
                throw new Error("Unsupported patch content type: application/json is required.");
              }
              body = message.slice(i);
              try {
                result = parseJsonBody(response, body.replace("\r\n", ""));
                if (Object.keys(result).length > 1 || "data" in result || "incremental" in result || "errors" in result || "payload" in result) {
                  if (isApolloPayloadResult(result)) {
                    next = {};
                    if ("payload" in result) {
                      next = __assign({}, result.payload);
                    }
                    if ("errors" in result) {
                      next = __assign(__assign({}, next), { extensions: __assign(__assign({}, "extensions" in next ? next.extensions : null), (_h = {}, _h[PROTOCOL_ERRORS_SYMBOL] = result.errors, _h)) });
                    }
                    (_b = observer.next) === null || _b === void 0 ? void 0 : _b.call(observer, next);
                  } else {
                    (_c = observer.next) === null || _c === void 0 ? void 0 : _c.call(observer, result);
                  }
                } else if (Object.keys(result).length === 1 && "hasNext" in result && !result.hasNext) {
                  (_d = observer.complete) === null || _d === void 0 ? void 0 : _d.call(observer);
                }
              } catch (err) {
                handleError(err, observer);
              }
            }
            bi = buffer.indexOf(boundary);
          }
          return [3, 1];
        case 3:
          (_e = observer.complete) === null || _e === void 0 ? void 0 : _e.call(observer);
          return [2];
      }
    });
  });
}
function parseHeaders(headerText) {
  var headersInit = {};
  headerText.split("\n").forEach(function(line) {
    var i = line.indexOf(":");
    if (i > -1) {
      var name_1 = line.slice(0, i).trim().toLowerCase();
      var value = line.slice(i + 1).trim();
      headersInit[name_1] = value;
    }
  });
  return headersInit;
}
function parseJsonBody(response, bodyText) {
  if (response.status >= 300) {
    var getResult = function() {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        return bodyText;
      }
    };
    throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
  }
  try {
    return JSON.parse(bodyText);
  } catch (err) {
    var parseError = err;
    parseError.name = "ServerParseError";
    parseError.response = response;
    parseError.statusCode = response.status;
    parseError.bodyText = bodyText;
    throw parseError;
  }
}
function handleError(err, observer) {
  var _a, _b;
  if (err.name === "AbortError")
    return;
  if (err.result && err.result.errors && err.result.data) {
    (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, err.result);
  }
  (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, err);
}
function readJsonBody(response, operation, observer) {
  parseAndCheckHttpResponse(operation)(response).then(function(result) {
    var _a, _b;
    (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, result);
    (_b = observer.complete) === null || _b === void 0 ? void 0 : _b.call(observer);
  }).catch(function(err) {
    return handleError(err, observer);
  });
}
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      return parseJsonBody(response, bodyText);
    }).then(function(result) {
      if (response.status >= 300) {
        throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
      }
      if (!Array.isArray(result) && !hasOwnProperty$1.call(result, "data") && !hasOwnProperty$1.call(result, "errors")) {
        throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result;
    });
  };
}
var serializeFetchParameter = function(p, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = new InvariantError(24);
    parseError.parseError = e;
    throw parseError;
  }
  return serialized;
};
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false,
  preserveHeaderCase: false
};
var defaultHeaders = {
  accept: "*/*",
  "content-type": "application/json"
};
var defaultOptions = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), config.headers) });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign(__assign({}, http), config.http);
  });
  if (options.headers) {
    options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
  }
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query, print);
  return {
    options,
    body
  };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
  if (!preserveHeaderCase) {
    var normalizedHeaders_1 = /* @__PURE__ */ Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
      normalizedHeaders_1[name.toLowerCase()] = headers[name];
    });
    return normalizedHeaders_1;
  }
  var headerData = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(headers)).forEach(function(name) {
    headerData[name.toLowerCase()] = { originalName: name, value: headers[name] };
  });
  var normalizedHeaders = /* @__PURE__ */ Object.create(null);
  Object.keys(headerData).forEach(function(name) {
    normalizedHeaders[headerData[name].originalName] = headerData[name].value;
  });
  return normalizedHeaders;
}
var createSignalIfSupported = function() {
  if (typeof AbortController === "undefined")
    return { controller: false, signal: false };
  var controller = new AbortController();
  var signal = controller.signal;
  return { controller, signal };
};
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}
var backupFetch = maybe$1(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a = linkOptions.uri, uri = _a === void 0 ? "/graphql" : _a, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  var linkConfig = {
    http: { includeExtensions, preserveHeaderCase },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a2 = context.clientAwareness, name_1 = _a2.name, version2 = _a2.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      var unusedNames_1 = new Set(Object.keys(body.variables));
      visit(operation.query, {
        Variable: function(node, _key, parent) {
          if (parent && parent.kind !== "VariableDefinition") {
            unusedNames_1.delete(node.name.value);
          }
        }
      });
      if (unusedNames_1.size) {
        body.variables = __assign({}, body.variables);
        unusedNames_1.forEach(function(name) {
          delete body.variables[name];
        });
      }
    }
    var controller;
    if (!options.signal) {
      var _c2 = createSignalIfSupported(), _controller = _c2.controller, signal = _c2.signal;
      controller = _controller;
      if (controller)
        options.signal = signal;
    }
    var definitionIsMutation = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "mutation";
    };
    var definitionIsSubscription = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "subscription";
    };
    var isSubscription = definitionIsSubscription(getMainDefinition(operation.query));
    var hasDefer = hasDirectives(["defer"], operation.query);
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (hasDefer || isSubscription) {
      options.headers = options.headers || {};
      var acceptHeader = "multipart/mixed;";
      if (isSubscription) {
        acceptHeader += "boundary=graphql;subscriptionSpec=1.0,application/json";
      } else if (hasDefer) {
        acceptHeader += "deferSpec=20220824,application/json";
      }
      options.headers.accept = acceptHeader;
    }
    if (options.method === "GET") {
      var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable(function(observer) {
      var currentFetch = preferredFetch || maybe$1(function() {
        return fetch;
      }) || backupFetch;
      currentFetch(chosenURI, options).then(function(response) {
        var _a3;
        operation.setContext({ response });
        var ctype = (_a3 = response.headers) === null || _a3 === void 0 ? void 0 : _a3.get("content-type");
        if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
          return readMultipartBody(response, observer);
        } else {
          return readJsonBody(response, operation, observer);
        }
      }).catch(function(err) {
        return handleError(err, observer);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};
var HttpLink = function(_super) {
  __extends(HttpLink2, _super);
  function HttpLink2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this, createHttpLink(options).request) || this;
    _this.options = options;
    return _this;
  }
  return HttpLink2;
}(ApolloLink);
var ApolloCache = function() {
  function ApolloCache2() {
    this.getFragmentDoc = wrap(getFragmentQueryDocument);
  }
  ApolloCache2.prototype.batch = function(options) {
    var _this = this;
    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    var updateResult;
    this.performTransaction(function() {
      return updateResult = options.update(_this);
    }, optimisticId);
    return updateResult;
  };
  ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
    this.performTransaction(transaction, optimisticId);
  };
  ApolloCache2.prototype.transformDocument = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.transformForLink = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.identify = function(object) {
    return;
  };
  ApolloCache2.prototype.gc = function() {
    return [];
  };
  ApolloCache2.prototype.modify = function(options) {
    return false;
  };
  ApolloCache2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
  };
  ApolloCache2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
  };
  ApolloCache2.prototype.writeQuery = function(_a) {
    var id = _a.id, data = _a.data, options = __rest(_a, ["id", "data"]);
    return this.write(Object.assign(options, {
      dataId: id || "ROOT_QUERY",
      result: data
    }));
  };
  ApolloCache2.prototype.writeFragment = function(_a) {
    var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = __rest(_a, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id,
      result: data
    }));
  };
  ApolloCache2.prototype.updateQuery = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readQuery(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeQuery(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  ApolloCache2.prototype.updateFragment = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readFragment(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeFragment(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  return ApolloCache2;
}();
var MissingFieldError = function(_super) {
  __extends(MissingFieldError2, _super);
  function MissingFieldError2(message, path, query, variables) {
    var _a;
    var _this = _super.call(this, message) || this;
    _this.message = message;
    _this.path = path;
    _this.query = query;
    _this.variables = variables;
    if (Array.isArray(_this.path)) {
      _this.missing = _this.message;
      for (var i = _this.path.length - 1; i >= 0; --i) {
        _this.missing = (_a = {}, _a[_this.path[i]] = _this.missing, _a);
      }
    } else {
      _this.missing = _this.path;
    }
    _this.__proto__ = MissingFieldError2.prototype;
    return _this;
  }
  return MissingFieldError2;
}(Error);
var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
  return value === null || value === void 0;
}
function defaultDataIdFromObject(_a, context) {
  var __typename = _a.__typename, id = _a.id, _id = _a._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = !isNullish(id) ? { id } : !isNullish(_id) ? { _id } : void 0;
    }
    if (isNullish(id) && !isNullish(_id)) {
      id = _id;
    }
    if (!isNullish(id)) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
  if (isNonNullObject(result)) {
    return isArray(result) ? result.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
function extractFragmentContext(document2, fragments) {
  var fragmentMap = createFragmentMap(getFragmentDefinitions(document2));
  return {
    fragmentMap,
    lookupFragment: function(name) {
      var def = fragmentMap[name];
      if (!def && fragments) {
        def = fragments.lookup(name);
      }
      return def || null;
    }
  };
}
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = function() {
  function EntityStore2(policies, group) {
    var _this = this;
    this.policies = policies;
    this.group = group;
    this.data = /* @__PURE__ */ Object.create(null);
    this.rootIds = /* @__PURE__ */ Object.create(null);
    this.refs = /* @__PURE__ */ Object.create(null);
    this.getFieldValue = function(objectOrReference, storeFieldName) {
      return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };
    this.canRead = function(objOrRef) {
      return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };
    this.toReference = function(objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return makeReference(objOrIdOrRef);
      }
      if (isReference(objOrIdOrRef)) {
        return objOrIdOrRef;
      }
      var id = _this.policies.identify(objOrIdOrRef)[0];
      if (id) {
        var ref2 = makeReference(id);
        if (mergeIntoStore) {
          _this.merge(id, objOrIdOrRef);
        }
        return ref2;
      }
    };
  }
  EntityStore2.prototype.toObject = function() {
    return __assign({}, this.data);
  };
  EntityStore2.prototype.has = function(dataId) {
    return this.lookup(dataId, true) !== void 0;
  };
  EntityStore2.prototype.get = function(dataId, fieldName) {
    this.group.depend(dataId, fieldName);
    if (hasOwn.call(this.data, dataId)) {
      var storeObject = this.data[dataId];
      if (storeObject && hasOwn.call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }
    if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };
  EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
    if (dependOnExistence)
      this.group.depend(dataId, "__exists");
    if (hasOwn.call(this.data, dataId)) {
      return this.data[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }
    if (this.policies.rootTypenamesById[dataId]) {
      return /* @__PURE__ */ Object.create(null);
    }
  };
  EntityStore2.prototype.merge = function(older, newer) {
    var _this = this;
    var dataId;
    if (isReference(older))
      older = older.__ref;
    if (isReference(newer))
      newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming)
      return;
    invariant(typeof dataId === "string", 1);
    var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;
    if (merged !== existing) {
      delete this.refs[dataId];
      if (this.group.caching) {
        var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
        if (!existing)
          fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function(storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }
            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });
        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }
        Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };
  EntityStore2.prototype.modify = function(dataId, fields) {
    var _this = this;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var changedFields_1 = /* @__PURE__ */ Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE,
        INVALIDATE,
        isReference,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(fieldNameOrOptions, from) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from || makeReference(dataId)
          } : fieldNameOrOptions, { store: _this });
        }
      };
      Object.keys(storeObject).forEach(function(storeFieldName) {
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0)
          return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE)
              newValue = void 0;
            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
            }
          }
        }
        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });
      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);
        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }
          this.group.dirty(dataId, "__exists");
        }
        return true;
      }
    }
    return false;
  };
  EntityStore2.prototype.delete = function(dataId, fieldName, args) {
    var _a;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a = {}, _a[storeFieldName] = delModifier, _a) : delModifier);
    }
    return false;
  };
  EntityStore2.prototype.evict = function(options, limit) {
    var evicted = false;
    if (options.id) {
      if (hasOwn.call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }
      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }
      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }
    return evicted;
  };
  EntityStore2.prototype.clear = function() {
    this.replace(null);
  };
  EntityStore2.prototype.extract = function() {
    var _this = this;
    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function(id) {
      if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
        extraRootIds.push(id);
      }
    });
    if (extraRootIds.length) {
      obj.__META = { extraRootIds: extraRootIds.sort() };
    }
    return obj;
  };
  EntityStore2.prototype.replace = function(newData) {
    var _this = this;
    Object.keys(this.data).forEach(function(dataId) {
      if (!(newData && hasOwn.call(newData, dataId))) {
        _this.delete(dataId);
      }
    });
    if (newData) {
      var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
      Object.keys(rest_1).forEach(function(dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });
      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };
  EntityStore2.prototype.retain = function(rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };
  EntityStore2.prototype.release = function(rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count)
        delete this.rootIds[rootId];
      return count;
    }
    return 0;
  };
  EntityStore2.prototype.getRootIdSet = function(ids) {
    if (ids === void 0) {
      ids = /* @__PURE__ */ new Set();
    }
    Object.keys(this.rootIds).forEach(ids.add, ids);
    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }
    return ids;
  };
  EntityStore2.prototype.gc = function() {
    var _this = this;
    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function(id) {
      if (hasOwn.call(snapshot, id)) {
        Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
        delete snapshot[id];
      }
    });
    var idsToRemove = Object.keys(snapshot);
    if (idsToRemove.length) {
      var root_1 = this;
      while (root_1 instanceof Layer)
        root_1 = root_1.parent;
      idsToRemove.forEach(function(id) {
        return root_1.delete(id);
      });
    }
    return idsToRemove;
  };
  EntityStore2.prototype.findChildRefIds = function(dataId) {
    if (!hasOwn.call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
      var root = this.data[dataId];
      if (!root)
        return found_1;
      var workSet_1 = /* @__PURE__ */ new Set([root]);
      workSet_1.forEach(function(obj) {
        if (isReference(obj)) {
          found_1[obj.__ref] = true;
        }
        if (isNonNullObject(obj)) {
          Object.keys(obj).forEach(function(key) {
            var child = obj[key];
            if (isNonNullObject(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }
    return this.refs[dataId];
  };
  EntityStore2.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  };
  return EntityStore2;
}();
var CacheGroup = function() {
  function CacheGroup2(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }
    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }
  CacheGroup2.prototype.resetCaching = function() {
    this.d = this.caching ? dep() : null;
    this.keyMaker = new Trie(canUseWeakMap);
  };
  CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = fieldNameFromStoreName(storeFieldName);
      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }
      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };
  CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };
  return CacheGroup2;
}();
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = function(_super) {
    __extends(Root2, _super);
    function Root2(_a) {
      var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
      _this.stump = new Stump(_this);
      _this.storageTrie = new Trie(canUseWeakMap);
      if (seed)
        _this.replace(seed);
      return _this;
    }
    Root2.prototype.addLayer = function(layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };
    Root2.prototype.removeLayer = function() {
      return this;
    };
    Root2.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    };
    return Root2;
  }(EntityStore2);
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
  __extends(Layer2, _super);
  function Layer2(id, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;
    _this.id = id;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }
  Layer2.prototype.addLayer = function(layerId, replay) {
    return new Layer2(layerId, this, replay, this.group);
  };
  Layer2.prototype.removeLayer = function(layerId) {
    var _this = this;
    var parent = this.parent.removeLayer(layerId);
    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function(dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);
          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");
            Object.keys(parentStoreObject).forEach(function(storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function(storeFieldName) {
              if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }
      return parent;
    }
    if (parent === this.parent)
      return this;
    return parent.addLayer(this.id, this.replay);
  };
  Layer2.prototype.toObject = function() {
    return __assign(__assign({}, this.parent.toObject()), this.data);
  };
  Layer2.prototype.findChildRefIds = function(dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };
  Layer2.prototype.getStorage = function() {
    var p = this.parent;
    while (p.parent)
      p = p.parent;
    return p.getStorage.apply(p, arguments);
  };
  return Layer2;
}(EntityStore);
var Stump = function(_super) {
  __extends(Stump2, _super);
  function Stump2(root) {
    return _super.call(this, "EntityStore.Stump", root, function() {
    }, new CacheGroup(root.group.caching, root.group)) || this;
  }
  Stump2.prototype.removeLayer = function() {
    return this;
  };
  Stump2.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  };
  return Stump2;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = function() {
  function ObjectCanon2() {
    this.known = new (canUseWeakSet ? WeakSet : Set)();
    this.pool = new Trie(canUseWeakMap);
    this.passes = /* @__PURE__ */ new WeakMap();
    this.keysByJSON = /* @__PURE__ */ new Map();
    this.empty = this.admit({});
  }
  ObjectCanon2.prototype.isKnown = function(value) {
    return isNonNullObject(value) && this.known.has(value);
  };
  ObjectCanon2.prototype.pass = function(value) {
    if (isNonNullObject(value)) {
      var copy = shallowCopy(value);
      this.passes.set(copy, value);
      return copy;
    }
    return value;
  };
  ObjectCanon2.prototype.admit = function(value) {
    var _this = this;
    if (isNonNullObject(value)) {
      var original = this.passes.get(value);
      if (original)
        return original;
      var proto = Object.getPrototypeOf(value);
      switch (proto) {
        case Array.prototype: {
          if (this.known.has(value))
            return value;
          var array = value.map(this.admit, this);
          var node = this.pool.lookupArray(array);
          if (!node.array) {
            this.known.add(node.array = array);
          }
          return node.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(value))
            return value;
          var proto_1 = Object.getPrototypeOf(value);
          var array_1 = [proto_1];
          var keys = this.sortedKeys(value);
          array_1.push(keys.json);
          var firstValueIndex_1 = array_1.length;
          keys.sorted.forEach(function(key) {
            array_1.push(_this.admit(value[key]));
          });
          var node = this.pool.lookupArray(array_1);
          if (!node.object) {
            var obj_1 = node.object = Object.create(proto_1);
            this.known.add(obj_1);
            keys.sorted.forEach(function(key, i) {
              obj_1[key] = array_1[firstValueIndex_1 + i];
            });
          }
          return node.object;
        }
      }
    }
    return value;
  };
  ObjectCanon2.prototype.sortedKeys = function(obj) {
    var keys = Object.keys(obj);
    var node = this.pool.lookupArray(keys);
    if (!node.keys) {
      keys.sort();
      var json = JSON.stringify(keys);
      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = { sorted: keys, json });
      }
    }
    return node.keys;
  };
  return ObjectCanon2;
}();
var canonicalStringify = Object.assign(function(value) {
  if (isNonNullObject(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }
    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);
    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }
    return json;
  }
  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    options.context.canonizeResults
  ];
}
var StoreReader = function() {
  function StoreReader2(config) {
    var _this = this;
    this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
    this.config = compact(config, {
      addTypename: config.addTypename !== false,
      canonizeResults: shouldCanonizeResults(config)
    });
    this.canon = config.canon || new ObjectCanon();
    this.executeSelectionSet = wrap(function(options) {
      var _a;
      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;
      var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
      if (other) {
        if (canonizeResults) {
          return __assign(__assign({}, other), { result: _this.canon.admit(other.result) });
        }
        return other;
      }
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = wrap(function(options) {
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(_a) {
        var field = _a.field, array = _a.array, context = _a.context;
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(field, array, context.varString);
        }
      }
    });
  }
  StoreReader2.prototype.resetCanon = function() {
    this.canon = new ObjectCanon();
  };
  StoreReader2.prototype.diffQueryAgainstStore = function(_a) {
    var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
    var rootRef = makeReference(rootId);
    var execResult = this.executeSelectionSet({
      selectionSet: getMainDefinition(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: __assign({ store, query, policies, variables, varString: canonicalStringify(variables), canonizeResults }, extractFragmentContext(query, this.config.fragments))
    });
    var missing;
    if (execResult.missing) {
      missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
      if (!returnPartialData) {
        throw missing[0];
      }
    }
    return {
      result: execResult.result,
      complete: !missing,
      missing
    };
  };
  StoreReader2.prototype.isFresh = function(result, parent, selectionSet, context) {
    if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
      if (latest && result === latest.result) {
        return true;
      }
    }
    return false;
  };
  StoreReader2.prototype.execSelectionSetImpl = function(_a) {
    var _this = this;
    var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
    if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
      };
    }
    var variables = context.variables, policies = context.policies, store = context.store;
    var typename = store.getFieldValue(objectOrReference, "__typename");
    var objectsToMerge = [];
    var missing;
    var missingMerger = new DeepMerger();
    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      objectsToMerge.push({ __typename: typename });
    }
    function handleMissing(result2, resultName) {
      var _a2;
      if (result2.missing) {
        missing = missingMerger.merge(missing, (_a2 = {}, _a2[resultName] = result2.missing, _a2));
      }
      return result2.result;
    }
    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function(selection) {
      var _a2, _b;
      if (!shouldInclude(selection, variables))
        return;
      if (isField(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = resultKeyNameFromField(selection);
        if (fieldValue === void 0) {
          if (!addTypenameToDocument.added(selection)) {
            missing = missingMerger.merge(missing, (_a2 = {}, _a2[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a2));
          }
        } else if (isArray(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef,
            context
          }), resultName);
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
            context
          }), resultName);
        }
        if (fieldValue !== void 0) {
          objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
        }
      } else {
        var fragment = getFragmentFromSelection(selection, context.lookupFragment);
        if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
          throw new InvariantError(5);
        }
        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var result = mergeDeepArray(objectsToMerge);
    var finalResult = { result, missing };
    var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
    if (frozen.result) {
      this.knownResults.set(frozen.result, selectionSet);
    }
    return frozen;
  };
  StoreReader2.prototype.execSubSelectedArrayImpl = function(_a) {
    var _this = this;
    var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
    var missing;
    var missingMerger = new DeepMerger();
    function handleMissing(childResult, i) {
      var _a2;
      if (childResult.missing) {
        missing = missingMerger.merge(missing, (_a2 = {}, _a2[i] = childResult.missing, _a2));
      }
      return childResult.result;
    }
    if (field.selectionSet) {
      array = array.filter(context.store.canRead);
    }
    array = array.map(function(item, i) {
      if (item === null) {
        return null;
      }
      if (isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field,
          array: item,
          enclosingRef,
          context
        }), i);
      }
      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: isReference(item) ? item : enclosingRef,
          context
        }), i);
      }
      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array) : array,
      missing
    };
  };
  return StoreReader2;
}();
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result) {
    return result;
  }
}
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = function() {
  return (
    /** @class */
    function() {
      function Slot2() {
        this.id = [
          "slot",
          idCounter++,
          Date.now(),
          Math.random().toString(36).slice(2)
        ].join(":");
      }
      Slot2.prototype.hasValue = function() {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
          if (this.id in context_1.slots) {
            var value = context_1.slots[this.id];
            if (value === MISSING_VALUE)
              break;
            if (context_1 !== currentContext) {
              currentContext.slots[this.id] = value;
            }
            return true;
          }
        }
        if (currentContext) {
          currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
      };
      Slot2.prototype.getValue = function() {
        if (this.hasValue()) {
          return currentContext.slots[this.id];
        }
      };
      Slot2.prototype.withValue = function(value, callback, args, thisArg) {
        var _a;
        var slots = (_a = {
          __proto__: null
        }, _a[this.id] = value, _a);
        var parent = currentContext;
        currentContext = { parent, slots };
        try {
          return callback.apply(thisArg, args);
        } finally {
          currentContext = parent;
        }
      };
      Slot2.bind = function(callback) {
        var context = currentContext;
        return function() {
          var saved = currentContext;
          try {
            currentContext = context;
            return callback.apply(this, arguments);
          } finally {
            currentContext = saved;
          }
        };
      };
      Slot2.noContext = function(callback, args, thisArg) {
        if (currentContext) {
          var saved = currentContext;
          try {
            currentContext = null;
            return callback.apply(thisArg, args);
          } finally {
            currentContext = saved;
          }
        } else {
          return callback.apply(thisArg, args);
        }
      };
      return Slot2;
    }()
  );
};
function maybe(fn) {
  try {
    return fn();
  } catch (ignored) {
  }
}
var globalKey = "@wry/context:Slot";
var host = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  maybe(function() {
    return globalThis;
  }) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  maybe(function() {
    return global;
  }) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
);
var globalHost = host;
var Slot = globalHost[globalKey] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[globalKey] || function(Slot2) {
  try {
    Object.defineProperty(globalHost, globalKey, {
      value: Slot2,
      enumerable: false,
      writable: false,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: true
    });
  } finally {
    return Slot2;
  }
}(makeSlotClass());
Slot.bind;
Slot.noContext;
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from, key) {
      return context.readField(key, from);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      invariant(extracted !== void 0, 2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a) {
    var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (isArray(s)) {
        getSpecifierPaths(s).forEach(function(p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}
getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a) {
  var mergeObjects = _a.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
  return incoming;
};
var Policies = function() {
  function Policies2(config) {
    this.config = config;
    this.typePolicies = /* @__PURE__ */ Object.create(null);
    this.toBeAdded = /* @__PURE__ */ Object.create(null);
    this.supertypeMap = /* @__PURE__ */ new Map();
    this.fuzzySubtypes = /* @__PURE__ */ new Map();
    this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
    this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
    this.usingPossibleTypes = false;
    this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");
    if (config.possibleTypes) {
      this.addPossibleTypes(config.possibleTypes);
    }
    if (config.typePolicies) {
      this.addTypePolicies(config.typePolicies);
    }
  }
  Policies2.prototype.identify = function(object, partialContext) {
    var _a;
    var policies = this;
    var typename = partialContext && (partialContext.typename || ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;
    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }
    var storeObject = partialContext && partialContext.storeObject || object;
    var context = __assign(__assign({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
      var options = normalizeReadFieldOptions(arguments, storeObject);
      return policies.readField(options, {
        store: policies.cache["data"],
        variables: options.variables
      });
    } });
    var id;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
    while (keyFn) {
      var specifierOrId = keyFn(object, context);
      if (isArray(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id = specifierOrId;
        break;
      }
    }
    id = id ? String(id) : void 0;
    return context.keyObject ? [id, context.keyObject] : [id];
  };
  Policies2.prototype.addTypePolicies = function(typePolicies) {
    var _this = this;
    Object.keys(typePolicies).forEach(function(typename) {
      var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = __rest(_a, ["queryType", "mutationType", "subscriptionType"]);
      if (queryType)
        _this.setRootTypename("Query", typename);
      if (mutationType)
        _this.setRootTypename("Mutation", typename);
      if (subscriptionType)
        _this.setRootTypename("Subscription", typename);
      if (hasOwn.call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };
  Policies2.prototype.updateTypePolicy = function(typename, incoming) {
    var _this = this;
    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields, fields = incoming.fields;
    function setMerge(existing2, merge) {
      existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
    }
    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
    if (fields) {
      Object.keys(fields).forEach(function(fieldName) {
        var existing2 = _this.getFieldPolicy(typename, fieldName, true);
        var incoming2 = fields[fieldName];
        if (typeof incoming2 === "function") {
          existing2.read = incoming2;
        } else {
          var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
          existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
          if (typeof read === "function") {
            existing2.read = read;
          }
          setMerge(existing2, merge);
        }
        if (existing2.read && existing2.merge) {
          existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };
  Policies2.prototype.setRootTypename = function(which, typename) {
    if (typename === void 0) {
      typename = which;
    }
    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];
    if (typename !== old) {
      invariant(!old || old === which, 3);
      if (old)
        delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };
  Policies2.prototype.addPossibleTypes = function(possibleTypes) {
    var _this = this;
    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function(supertype) {
      _this.getSupertypeSet(supertype, true);
      possibleTypes[supertype].forEach(function(subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);
        var match = subtype.match(TypeOrFieldNameRegExp);
        if (!match || match[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };
  Policies2.prototype.getTypePolicy = function(typename) {
    var _this = this;
    if (!hasOwn.call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
      policy_1.fields = /* @__PURE__ */ Object.create(null);
      var supertypes = this.supertypeMap.get(typename);
      if (supertypes && supertypes.size) {
        supertypes.forEach(function(supertype) {
          var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = __rest(_a, ["fields"]);
          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }
    var inbox = this.toBeAdded[typename];
    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function(policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }
    return this.typePolicies[typename];
  };
  Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
    }
  };
  Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);
    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
    }
    return supertypeSet;
  };
  Policies2.prototype.fragmentMatches = function(fragment, typename, result, variables) {
    var _this = this;
    if (!fragment.typeCondition)
      return true;
    if (!typename)
      return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype)
      return true;
    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];
      var maybeEnqueue_1 = function(subtype) {
        var supertypeSet2 = _this.getSupertypeSet(subtype, false);
        if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
          workQueue_1.push(supertypeSet2);
        }
      };
      var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
      for (var i = 0; i < workQueue_1.length; ++i) {
        var supertypeSet = workQueue_1[i];
        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            typenameSupertypeSet.add(supertype);
          }
          return true;
        }
        supertypeSet.forEach(maybeEnqueue_1);
        if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
          needToCheckFuzzySubtypes = false;
          this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
            var match = typename.match(regExp);
            if (match && match[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }
    return false;
  };
  Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };
  Policies2.prototype.getStoreFieldName = function(fieldSpec) {
    var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;
    if (keyFn && typename) {
      var context = {
        typename,
        fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);
      while (keyFn) {
        var specifierOrString = keyFn(args, context);
        if (isArray(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }
    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
    }
    if (storeFieldName === false) {
      return fieldName;
    }
    return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };
  Policies2.prototype.readField = function(options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference)
      return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField)
      return;
    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename)
        options.typename = typename;
    }
    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;
    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
    }
    return existing;
  };
  Policies2.prototype.getReadFunction = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return policy && policy.read;
  };
  Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge = policy && policy.merge;
    if (!merge && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge = policy && policy.merge;
    }
    return merge;
  };
  Policies2.prototype.runMergeFunction = function(existing, incoming, _a, context, storage) {
    var field = _a.field, typename = _a.typename, merge = _a.merge;
    if (merge === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }
    if (merge === mergeFalseFn) {
      return incoming;
    }
    if (context.overwrite) {
      existing = void 0;
    }
    return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename, fieldName: field.name.value, field, variables: context.variables }, context, storage || /* @__PURE__ */ Object.create(null)));
  };
  return Policies2;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (void 0 === options.variables) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw new InvariantError(4);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = function() {
  function StoreWriter2(cache, reader, fragments) {
    this.cache = cache;
    this.reader = reader;
    this.fragments = fragments;
  }
  StoreWriter2.prototype.writeToStore = function(store, _a) {
    var _this = this;
    var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
    var operationDefinition = getOperationDefinition(query);
    var merger = makeProcessedFieldsMerger();
    variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
    var context = __assign(__assign({ store, written: /* @__PURE__ */ Object.create(null), merge: function(existing, incoming) {
      return merger.merge(existing, incoming);
    }, variables, varString: canonicalStringify(variables) }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: /* @__PURE__ */ new Map(), clientOnly: false, deferred: false, flavors: /* @__PURE__ */ new Map() });
    var ref2 = this.processSelectionSet({
      result: result || /* @__PURE__ */ Object.create(null),
      dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context
    });
    if (!isReference(ref2)) {
      throw new InvariantError(7);
    }
    context.incomingById.forEach(function(_a2, dataId2) {
      var storeObject = _a2.storeObject, mergeTree = _a2.mergeTree;
      _a2.fieldNodeSet;
      var entityRef = makeReference(dataId2);
      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
        if (isReference(applied)) {
          return;
        }
        storeObject = applied;
      }
      store.merge(dataId2, storeObject);
    });
    store.retain(ref2.__ref);
    return ref2;
  };
  StoreWriter2.prototype.processSelectionSet = function(_a) {
    var _this = this;
    var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
    var policies = this.cache.policies;
    var incoming = /* @__PURE__ */ Object.create(null);
    var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
    if ("string" === typeof typename) {
      incoming.__typename = typename;
    }
    var readField = function() {
      var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
      if (isReference(options.from)) {
        var info = context.incomingById.get(options.from.__ref);
        if (info) {
          var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
          if (result_1 !== void 0) {
            return result_1;
          }
        }
      }
      return policies.readField(options, context);
    };
    var fieldNodeSet = /* @__PURE__ */ new Set();
    this.flattenFields(selectionSet, result, context, typename).forEach(function(context2, field) {
      var _a2;
      var resultFieldKey = resultKeyNameFromField(field);
      var value = result[resultFieldKey];
      fieldNodeSet.add(field);
      if (value !== void 0) {
        var storeFieldName = policies.getStoreFieldName({
          typename,
          fieldName: field.name.value,
          field,
          variables: context2.variables
        });
        var childTree = getChildMergeTree(mergeTree, storeFieldName);
        var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
        var childTypename = void 0;
        if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
          childTypename = readField("__typename", incomingValue);
        }
        var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
        if (merge) {
          childTree.info = {
            field,
            typename,
            merge
          };
        } else {
          maybeRecycleChildMergeTree(mergeTree, storeFieldName);
        }
        incoming = context2.merge(incoming, (_a2 = {}, _a2[storeFieldName] = incomingValue, _a2));
      }
    });
    try {
      var _b = policies.identify(result, {
        typename,
        selectionSet,
        fragmentMap: context.fragmentMap,
        storeObject: incoming,
        readField
      }), id = _b[0], keyObject = _b[1];
      dataId = dataId || id;
      if (keyObject) {
        incoming = context.merge(incoming, keyObject);
      }
    } catch (e) {
      if (!dataId)
        throw e;
    }
    if ("string" === typeof dataId) {
      var dataRef = makeReference(dataId);
      var sets = context.written[dataId] || (context.written[dataId] = []);
      if (sets.indexOf(selectionSet) >= 0)
        return dataRef;
      sets.push(selectionSet);
      if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
        return dataRef;
      }
      var previous_1 = context.incomingById.get(dataId);
      if (previous_1) {
        previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
        previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
        fieldNodeSet.forEach(function(field) {
          return previous_1.fieldNodeSet.add(field);
        });
      } else {
        context.incomingById.set(dataId, {
          storeObject: incoming,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          fieldNodeSet
        });
      }
      return dataRef;
    }
    return incoming;
  };
  StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
    var _this = this;
    if (!field.selectionSet || value === null) {
      return value;
    }
    if (isArray(value)) {
      return value.map(function(item, i) {
        var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
        maybeRecycleChildMergeTree(mergeTree, i);
        return value2;
      });
    }
    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context,
      mergeTree
    });
  };
  StoreWriter2.prototype.flattenFields = function(selectionSet, result, context, typename) {
    if (typename === void 0) {
      typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
    }
    var fieldMap = /* @__PURE__ */ new Map();
    var policies = this.cache.policies;
    var limitingTrie = new Trie(false);
    (function flatten(selectionSet2, inheritedContext) {
      var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
      if (visitedNode.visited)
        return;
      visitedNode.visited = true;
      selectionSet2.selections.forEach(function(selection) {
        if (!shouldInclude(selection, context.variables))
          return;
        var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
        if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
          selection.directives.forEach(function(dir) {
            var name = dir.name.value;
            if (name === "client")
              clientOnly = true;
            if (name === "defer") {
              var args = argumentsObjectFromField(dir, context.variables);
              if (!args || args.if !== false) {
                deferred = true;
              }
            }
          });
        }
        if (isField(selection)) {
          var existing = fieldMap.get(selection);
          if (existing) {
            clientOnly = clientOnly && existing.clientOnly;
            deferred = deferred && existing.deferred;
          }
          fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
        } else {
          var fragment = getFragmentFromSelection(selection, context.lookupFragment);
          if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
            throw new InvariantError(8);
          }
          if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
            flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
          }
        }
      });
    })(selectionSet, context);
    return fieldMap;
  };
  StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
    var _a;
    var _this = this;
    if (mergeTree.map.size && !isReference(incoming)) {
      var e_1 = !isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
      var i_1 = incoming;
      if (e_1 && !getStorageArgs) {
        getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
      }
      var changedFields_1;
      var getValue_1 = function(from, name) {
        return isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
      };
      mergeTree.map.forEach(function(childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (void 0 === iVal)
          return;
        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }
        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
          changedFields_1.set(storeFieldName, aVal);
        }
        if (getStorageArgs) {
          invariant(getStorageArgs.pop() === storeFieldName);
        }
      });
      if (changedFields_1) {
        incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
        changedFields_1.forEach(function(value, name) {
          incoming[name] = value;
        });
      }
    }
    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
    }
    return incoming;
  };
  return StoreWriter2;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
  var map = _a.map;
  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
  var map = _a.map;
  var childTree = map.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}
var InMemoryCache = function(_super) {
  __extends(InMemoryCache2, _super);
  function InMemoryCache2(config) {
    if (config === void 0) {
      config = {};
    }
    var _this = _super.call(this) || this;
    _this.watches = /* @__PURE__ */ new Set();
    _this.typenameDocumentCache = /* @__PURE__ */ new Map();
    _this.makeVar = makeVar;
    _this.txCount = 0;
    _this.config = normalizeConfig(config);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new Policies({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });
    _this.init();
    return _this;
  }
  InMemoryCache2.prototype.init = function() {
    var rootStore = this.data = new EntityStore.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };
  InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
    var _this = this;
    var previousReader = this.storeReader;
    var fragments = this.config.fragments;
    this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: shouldCanonizeResults(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon,
      fragments
    }), fragments);
    this.maybeBroadcastWatch = wrap(function(c, options) {
      return _this.broadcastWatch(c, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(c) {
        var store = c.optimistic ? _this.optimisticData : _this.data;
        if (supportsResultCaching(store)) {
          var optimistic = c.optimistic, id = c.id, variables = c.variables;
          return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic, id, variables }));
        }
      }
    });
    (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(group) {
      return group.resetCaching();
    });
  };
  InMemoryCache2.prototype.restore = function(data) {
    this.init();
    if (data)
      this.data.replace(data);
    return this;
  };
  InMemoryCache2.prototype.extract = function(optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return (optimistic ? this.optimisticData : this.data).extract();
  };
  InMemoryCache2.prototype.read = function(options) {
    var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
    try {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
    } catch (e) {
      if (e instanceof MissingFieldError) {
        return null;
      }
      throw e;
    }
  };
  InMemoryCache2.prototype.write = function(options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.modify = function(options) {
    if (hasOwn.call(options, "id") && !options.id) {
      return false;
    }
    var store = options.optimistic ? this.optimisticData : this.data;
    try {
      ++this.txCount;
      return store.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.diff = function(options) {
    return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
  };
  InMemoryCache2.prototype.watch = function(watch2) {
    var _this = this;
    if (!this.watches.size) {
      recallCache(this);
    }
    this.watches.add(watch2);
    if (watch2.immediate) {
      this.maybeBroadcastWatch(watch2);
    }
    return function() {
      if (_this.watches.delete(watch2) && !_this.watches.size) {
        forgetCache(_this);
      }
      _this.maybeBroadcastWatch.forget(watch2);
    };
  };
  InMemoryCache2.prototype.gc = function(options) {
    canonicalStringify.reset();
    var ids = this.optimisticData.gc();
    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }
    return ids;
  };
  InMemoryCache2.prototype.retain = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };
  InMemoryCache2.prototype.release = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };
  InMemoryCache2.prototype.identify = function(object) {
    if (isReference(object))
      return object.__ref;
    try {
      return this.policies.identify(object)[0];
    } catch (e) {
    }
  };
  InMemoryCache2.prototype.evict = function(options) {
    if (!options.id) {
      if (hasOwn.call(options, "id")) {
        return false;
      }
      options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
    }
    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.reset = function(options) {
    var _this = this;
    this.init();
    canonicalStringify.reset();
    if (options && options.discardWatches) {
      this.watches.forEach(function(watch2) {
        return _this.maybeBroadcastWatch.forget(watch2);
      });
      this.watches.clear();
      forgetCache(this);
    } else {
      this.broadcastWatches();
    }
    return Promise.resolve();
  };
  InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };
  InMemoryCache2.prototype.batch = function(options) {
    var _this = this;
    var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
    var updateResult;
    var perform = function(layer) {
      var _a2 = _this, data = _a2.data, optimisticData = _a2.optimisticData;
      ++_this.txCount;
      if (layer) {
        _this.data = _this.optimisticData = layer;
      }
      try {
        return updateResult = update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };
    var alreadyDirty = /* @__PURE__ */ new Set();
    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch2) {
        alreadyDirty.add(watch2);
        return false;
      } }));
    }
    if (typeof optimistic === "string") {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }
    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }
    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch2, diff) {
        var result = onWatchUpdated.call(this, watch2, diff);
        if (result !== false) {
          alreadyDirty.delete(watch2);
        }
        return result;
      } }));
      if (alreadyDirty.size) {
        alreadyDirty.forEach(function(watch2) {
          return _this.maybeBroadcastWatch.dirty(watch2);
        });
      }
    } else {
      this.broadcastWatches(options);
    }
    return updateResult;
  };
  InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
    return this.batch({
      update,
      optimistic: optimisticId || optimisticId !== null
    });
  };
  InMemoryCache2.prototype.transformDocument = function(document2) {
    if (this.addTypename) {
      var result = this.typenameDocumentCache.get(document2);
      if (!result) {
        result = addTypenameToDocument(document2);
        this.typenameDocumentCache.set(document2, result);
        this.typenameDocumentCache.set(result, result);
      }
      return result;
    }
    return document2;
  };
  InMemoryCache2.prototype.transformForLink = function(document2) {
    var fragments = this.config.fragments;
    return fragments ? fragments.transform(document2) : document2;
  };
  InMemoryCache2.prototype.broadcastWatches = function(options) {
    var _this = this;
    if (!this.txCount) {
      this.watches.forEach(function(c) {
        return _this.maybeBroadcastWatch(c, options);
      });
    }
  };
  InMemoryCache2.prototype.broadcastWatch = function(c, options) {
    var lastDiff = c.lastDiff;
    var diff = this.diff(c);
    if (options) {
      if (c.optimistic && typeof options.optimistic === "string") {
        diff.fromOptimisticTransaction = true;
      }
      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
        return;
      }
    }
    if (!lastDiff || !equal(lastDiff.result, diff.result)) {
      c.callback(c.lastDiff = diff, lastDiff);
    }
  };
  return InMemoryCache2;
}(ApolloCache);
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}
var assign = Object.assign;
var ObservableQuery = function(_super) {
  __extends(ObservableQuery2, _super);
  function ObservableQuery2(_a) {
    var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
    var _this = _super.call(this, function(observer) {
      try {
        var subObserver = observer._subscription._observer;
        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a2) {
      }
      var first = !_this.observers.size;
      _this.observers.add(observer);
      var last = _this.last;
      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }
      if (first) {
        _this.reobserve().catch(function() {
        });
      }
      return function() {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.subscriptions = /* @__PURE__ */ new Set();
    _this.queryInfo = queryInfo;
    _this.queryManager = queryManager;
    _this.isTornDown = false;
    var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
    var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
    _this.options = __assign(__assign({}, options), { initialFetchPolicy, fetchPolicy });
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = getOperationDefinition(_this.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    return _this;
  }
  Object.defineProperty(ObservableQuery2.prototype, "query", {
    get: function() {
      return this.queryManager.transform(this.options.query).document;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ObservableQuery2.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });
  ObservableQuery2.prototype.result = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var observer = {
        next: function(result) {
          resolve(result);
          _this.observers.delete(observer);
          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }
          setTimeout(function() {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };
      var subscription = _this.subscribe(observer);
    });
  };
  ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }
    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
    var result = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
    var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
    if (fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby" || this.queryManager.transform(this.options.query).hasForcedResolvers)
      ;
    else {
      var diff = this.queryInfo.getDiff();
      if (diff.complete || this.options.returnPartialData) {
        result.data = diff.result;
      }
      if (equal(result.data, {})) {
        result.data = void 0;
      }
      if (diff.complete) {
        delete result.partial;
        if (diff.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
          result.networkStatus = NetworkStatus.ready;
          result.loading = false;
        }
      } else {
        result.partial = true;
      }
    }
    if (saveAsLastResult) {
      this.updateLastResult(result);
    }
    return result;
  };
  ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult, variables) {
    return !this.last || !equal(this.last.result, newResult) || variables && !equal(this.last.variables, variables);
  };
  ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
    var last = this.last;
    if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
      return last[key];
    }
  };
  ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };
  ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };
  ObservableQuery2.prototype.resetLastResults = function() {
    delete this.last;
    this.isTornDown = false;
  };
  ObservableQuery2.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  };
  ObservableQuery2.prototype.refetch = function(variables) {
    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;
    if (fetchPolicy === "cache-and-network") {
      reobserveOptions.fetchPolicy = fetchPolicy;
    } else if (fetchPolicy === "no-cache") {
      reobserveOptions.fetchPolicy = "no-cache";
    } else {
      reobserveOptions.fetchPolicy = "network-only";
    }
    if (variables && !equal(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
    }
    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, NetworkStatus.refetch);
  };
  ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
    var _this = this;
    var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
    var qid = this.queryManager.generateQueryId();
    var queryInfo = this.queryInfo;
    var originalNetworkStatus = queryInfo.networkStatus;
    queryInfo.networkStatus = NetworkStatus.fetchMore;
    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.observe();
    }
    var updatedQuerySet = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
      _this.queryManager.removeQuery(qid);
      if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
        queryInfo.networkStatus = originalNetworkStatus;
      }
      _this.queryManager.cache.batch({
        update: function(cache) {
          var updateQuery = fetchMoreOptions.updateQuery;
          if (updateQuery) {
            cache.updateQuery({
              query: _this.query,
              variables: _this.variables,
              returnPartialData: true,
              optimistic: false
            }, function(previous) {
              return updateQuery(previous, {
                fetchMoreResult: fetchMoreResult.data,
                variables: combinedOptions.variables
              });
            });
          } else {
            cache.writeQuery({
              query: combinedOptions.query,
              variables: combinedOptions.variables,
              data: fetchMoreResult.data
            });
          }
        },
        onWatchUpdated: function(watch2) {
          updatedQuerySet.add(watch2.query);
        }
      });
      return fetchMoreResult;
    }).finally(function() {
      if (!updatedQuerySet.has(_this.query)) {
        reobserveCacheFirst(_this);
      }
    });
  };
  ObservableQuery2.prototype.subscribeToMore = function(options) {
    var _this = this;
    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function(subscriptionData) {
        var updateQuery = options.updateQuery;
        if (updateQuery) {
          _this.updateQuery(function(previous, _a) {
            var variables = _a.variables;
            return updateQuery(previous, {
              subscriptionData,
              variables
            });
          });
        }
      },
      error: function(err) {
        if (options.onError) {
          options.onError(err);
          return;
        }
      }
    });
    this.subscriptions.add(subscription);
    return function() {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };
  ObservableQuery2.prototype.setOptions = function(newOptions) {
    return this.reobserve(newOptions);
  };
  ObservableQuery2.prototype.setVariables = function(variables) {
    if (equal(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }
    this.options.variables = variables;
    if (!this.observers.size) {
      return Promise.resolve();
    }
    return this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables
    }, NetworkStatus.setVariables);
  };
  ObservableQuery2.prototype.updateQuery = function(mapFn) {
    var queryManager = this.queryManager;
    var result = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result, {
      variables: this.variables
    });
    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };
  ObservableQuery2.prototype.startPolling = function(pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };
  ObservableQuery2.prototype.stopPolling = function() {
    this.options.pollInterval = 0;
    this.updatePolling();
  };
  ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
    if (options.nextFetchPolicy) {
      var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
      if (fetchPolicy === "standby")
        ;
      else if (typeof options.nextFetchPolicy === "function") {
        options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
          reason,
          options,
          observable: this,
          initialFetchPolicy
        });
      } else if (reason === "variables-changed") {
        options.fetchPolicy = initialFetchPolicy;
      } else {
        options.fetchPolicy = options.nextFetchPolicy;
      }
    }
    return options.fetchPolicy;
  };
  ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager["fetchConcastWithInfo"](this.queryId, options, newNetworkStatus);
  };
  ObservableQuery2.prototype.updatePolling = function() {
    var _this = this;
    if (this.queryManager.ssrMode) {
      return;
    }
    var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }
      return;
    }
    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }
    invariant(pollInterval, 13);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;
    var maybeFetch = function() {
      if (_this.pollingInfo) {
        if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, NetworkStatus.poll).then(poll, poll);
        } else {
          poll();
        }
      }
    };
    var poll = function() {
      var info2 = _this.pollingInfo;
      if (info2) {
        clearTimeout(info2.timeout);
        info2.timeout = setTimeout(maybeFetch, info2.interval);
      }
    };
    poll();
  };
  ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    this.last = __assign(__assign({}, this.last), { result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables });
    if (!isNonEmptyArray(newResult.errors)) {
      delete this.last.error;
    }
    return this.last;
  };
  ObservableQuery2.prototype.reobserveAsConcast = function(newOptions, newNetworkStatus) {
    var _this = this;
    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
    var oldVariables = this.options.variables;
    var oldFetchPolicy = this.options.fetchPolicy;
    var mergedOptions = compact(this.options, newOptions || {});
    var options = useDisposableConcast ? mergedOptions : assign(this.options, mergedOptions);
    if (!useDisposableConcast) {
      this.updatePolling();
      if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && options.fetchPolicy !== "standby" && options.fetchPolicy === oldFetchPolicy) {
        this.applyNextFetchPolicy("variables-changed", options);
        if (newNetworkStatus === void 0) {
          newNetworkStatus = NetworkStatus.setVariables;
        }
      }
    }
    var variables = options.variables && __assign({}, options.variables);
    var _a = this.fetch(options, newNetworkStatus), concast = _a.concast, fromLink = _a.fromLink;
    var observer = {
      next: function(result) {
        _this.reportResult(result, variables);
      },
      error: function(error) {
        _this.reportError(error, variables);
      }
    };
    if (!useDisposableConcast && fromLink) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
      }
      this.concast = concast;
      this.observer = observer;
    }
    concast.addObserver(observer);
    return concast;
  };
  ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
    return this.reobserveAsConcast(newOptions, newNetworkStatus).promise;
  };
  ObservableQuery2.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };
  ObservableQuery2.prototype.reportResult = function(result, variables) {
    var lastError = this.getLastError();
    if (lastError || this.isDifferentFromLastResult(result, variables)) {
      if (lastError || !result.partial || this.options.returnPartialData) {
        this.updateLastResult(result, variables);
      }
      iterateObserversSafely(this.observers, "next", result);
    }
  };
  ObservableQuery2.prototype.reportError = function(error, variables) {
    var errorResult = __assign(__assign({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
    this.updateLastResult(errorResult, variables);
    iterateObserversSafely(this.observers, "error", this.last.error = error);
  };
  ObservableQuery2.prototype.hasObservers = function() {
    return this.observers.size > 0;
  };
  ObservableQuery2.prototype.tearDownQuery = function() {
    if (this.isTornDown)
      return;
    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }
    this.stopPolling();
    this.subscriptions.forEach(function(sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };
  return ObservableQuery2;
}(Observable);
fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
  var _a = obsQuery.options, fetchPolicy = _a.fetchPolicy, nextFetchPolicy = _a.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      nextFetchPolicy: function() {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof nextFetchPolicy === "function") {
          return nextFetchPolicy.apply(this, arguments);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
}
var LocalState = function() {
  function LocalState2(_a) {
    var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap();
    this.cache = cache;
    if (client) {
      this.client = client;
    }
    if (resolvers) {
      this.addResolvers(resolvers);
    }
    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }
  LocalState2.prototype.addResolvers = function(resolvers) {
    var _this = this;
    this.resolvers = this.resolvers || {};
    if (Array.isArray(resolvers)) {
      resolvers.forEach(function(resolverGroup) {
        _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = mergeDeep(this.resolvers, resolvers);
    }
  };
  LocalState2.prototype.setResolvers = function(resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };
  LocalState2.prototype.getResolvers = function() {
    return this.resolvers || {};
  };
  LocalState2.prototype.runResolvers = function(_a) {
    var document2 = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_c) {
        if (document2) {
          return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
            return __assign(__assign({}, remoteResult), { data: localResult.result });
          })];
        }
        return [2, remoteResult];
      });
    });
  };
  LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };
  LocalState2.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  };
  LocalState2.prototype.clientQuery = function(document2) {
    if (hasDirectives(["client"], document2)) {
      if (this.resolvers) {
        return document2;
      }
    }
    return null;
  };
  LocalState2.prototype.serverQuery = function(document2) {
    return removeClientSetsFromDocument(document2);
  };
  LocalState2.prototype.prepareContext = function(context) {
    var cache = this.cache;
    return __assign(__assign({}, context), { cache, getCacheKey: function(obj) {
      return cache.identify(obj);
    } });
  };
  LocalState2.prototype.addExportedVariables = function(document2, variables, context) {
    if (variables === void 0) {
      variables = {};
    }
    if (context === void 0) {
      context = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        if (document2) {
          return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
            return __assign(__assign({}, variables), data.exportedVariables);
          })];
        }
        return [2, __assign({}, variables)];
      });
    });
  };
  LocalState2.prototype.shouldForceResolvers = function(document2) {
    var forceResolvers = false;
    visit(document2, {
      Directive: {
        enter: function(node) {
          if (node.name.value === "client" && node.arguments) {
            forceResolvers = node.arguments.some(function(arg) {
              return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
            });
            if (forceResolvers) {
              return BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };
  LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
    return this.cache.diff({
      query: buildQueryFromSelectionSet(document2),
      variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };
  LocalState2.prototype.resolveDocument = function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }
    if (variables === void 0) {
      variables = {};
    }
    if (fragmentMatcher === void 0) {
      fragmentMatcher = function() {
        return true;
      };
    }
    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a, cache, client, execContext, isClientFieldDescendant;
      return __generator(this, function(_b) {
        mainDefinition = getMainDefinition(document2);
        fragments = getFragmentDefinitions(document2);
        fragmentMap = createFragmentMap(fragments);
        selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
        _a = this, cache = _a.cache, client = _a.client;
        execContext = {
          fragmentMap,
          context: __assign(__assign({}, context), { cache, client }),
          variables,
          fragmentMatcher,
          defaultOperationType,
          exportedVariables: {},
          selectionsToResolve,
          onlyRunForcedResolvers
        };
        isClientFieldDescendant = false;
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(result) {
          return {
            result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };
  LocalState2.prototype.resolveSelectionSet = function(selectionSet, isClientFieldDescendant, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var fragmentMap, context, variables, resultsToMerge, execute2;
      var _this = this;
      return __generator(this, function(_a) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];
        execute2 = function(selection) {
          return __awaiter(_this, void 0, void 0, function() {
            var fragment, typeCondition;
            return __generator(this, function(_a2) {
              if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                return [2];
              }
              if (!shouldInclude(selection, variables)) {
                return [2];
              }
              if (isField(selection)) {
                return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function(fieldResult) {
                  var _a3;
                  if (typeof fieldResult !== "undefined") {
                    resultsToMerge.push((_a3 = {}, _a3[resultKeyNameFromField(selection)] = fieldResult, _a3));
                  }
                })];
              }
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                invariant(fragment, 11);
              }
              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }
              return [2];
            });
          });
        };
        return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
          return mergeDeepArray(resultsToMerge);
        })];
      });
    });
  };
  LocalState2.prototype.resolveField = function(field, isClientFieldDescendant, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
      var _this = this;
      return __generator(this, function(_a) {
        if (!rootValue) {
          return [2, null];
        }
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = resultKeyNameFromField(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);
        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];
          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
            if (resolve) {
              resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                rootValue,
                argumentsObjectFromField(field, variables),
                execContext.context,
                { field, fragmentMap: execContext.fragmentMap }
              ]));
            }
          }
        }
        return [2, resultPromise.then(function(result) {
          var _a2, _b;
          if (result === void 0) {
            result = defaultResult;
          }
          if (field.directives) {
            field.directives.forEach(function(directive) {
              if (directive.name.value === "export" && directive.arguments) {
                directive.arguments.forEach(function(arg) {
                  if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }
          if (!field.selectionSet) {
            return result;
          }
          if (result == null) {
            return result;
          }
          var isClientField = (_b = (_a2 = field.directives) === null || _a2 === void 0 ? void 0 : _a2.some(function(d) {
            return d.name.value === "client";
          })) !== null && _b !== void 0 ? _b : false;
          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result, execContext);
          }
          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result, execContext);
          }
        })];
      });
    });
  };
  LocalState2.prototype.resolveSubSelectedArray = function(field, isClientFieldDescendant, result, execContext) {
    var _this = this;
    return Promise.all(result.map(function(item) {
      if (item === null) {
        return null;
      }
      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
      }
      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
      }
    }));
  };
  LocalState2.prototype.collectSelectionsToResolve = function(mainDefinition, fragmentMap) {
    var isSingleASTNode = function(node) {
      return !Array.isArray(node);
    };
    var selectionsToResolveCache = this.selectionsToResolveCache;
    function collectByDefinition(definitionNode) {
      if (!selectionsToResolveCache.has(definitionNode)) {
        var matches_1 = /* @__PURE__ */ new Set();
        selectionsToResolveCache.set(definitionNode, matches_1);
        visit(definitionNode, {
          Directive: function(node, _, __2, ___, ancestors) {
            if (node.name.value === "client") {
              ancestors.forEach(function(node2) {
                if (isSingleASTNode(node2) && isSelectionNode(node2)) {
                  matches_1.add(node2);
                }
              });
            }
          },
          FragmentSpread: function(spread, _, __2, ___, ancestors) {
            var fragment = fragmentMap[spread.name.value];
            invariant(fragment, 12);
            var fragmentSelections = collectByDefinition(fragment);
            if (fragmentSelections.size > 0) {
              ancestors.forEach(function(node) {
                if (isSingleASTNode(node) && isSelectionNode(node)) {
                  matches_1.add(node);
                }
              });
              matches_1.add(spread);
              fragmentSelections.forEach(function(selection) {
                matches_1.add(selection);
              });
            }
          }
        });
      }
      return selectionsToResolveCache.get(definitionNode);
    }
    return collectByDefinition(mainDefinition);
  };
  return LocalState2;
}();
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = function() {
  function QueryInfo2(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }
    this.queryId = queryId;
    this.listeners = /* @__PURE__ */ new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.subscriptions = /* @__PURE__ */ new Set();
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache = this.cache = queryManager.cache;
    if (!destructiveMethodCounts.has(cache)) {
      destructiveMethodCounts.set(cache, 0);
      wrapDestructiveCacheMethod(cache, "evict");
      wrapDestructiveCacheMethod(cache, "modify");
      wrapDestructiveCacheMethod(cache, "reset");
    }
  }
  QueryInfo2.prototype.init = function(query) {
    var networkStatus = query.networkStatus || NetworkStatus.loading;
    if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
      networkStatus = NetworkStatus.setVariables;
    }
    if (!equal(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }
    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus
    });
    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }
    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }
    return this;
  };
  QueryInfo2.prototype.reset = function() {
    cancelNotifyTimeout(this);
    this.dirty = false;
  };
  QueryInfo2.prototype.getDiff = function(variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    var options = this.getDiffOptions(variables);
    if (this.lastDiff && equal(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }
    this.updateWatch(this.variables = variables);
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return { complete: false };
    }
    var diff = this.cache.diff(options);
    this.updateLastDiff(diff, options);
    return diff;
  };
  QueryInfo2.prototype.updateLastDiff = function(diff, options) {
    this.lastDiff = diff ? {
      diff,
      options: options || this.getDiffOptions()
    } : void 0;
  };
  QueryInfo2.prototype.getDiffOptions = function(variables) {
    var _a;
    if (variables === void 0) {
      variables = this.variables;
    }
    return {
      query: this.document,
      variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults
    };
  };
  QueryInfo2.prototype.setDiff = function(diff) {
    var _this = this;
    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff);
    if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
      this.dirty = true;
      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function() {
          return _this.notify();
        }, 0);
      }
    }
  };
  QueryInfo2.prototype.setObservableQuery = function(oq) {
    var _this = this;
    if (oq === this.observableQuery)
      return;
    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }
    this.observableQuery = oq;
    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function() {
        var diff = _this.getDiff();
        if (diff.fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          reobserveCacheFirst(oq);
        }
      });
    } else {
      delete this.oqListener;
    }
  };
  QueryInfo2.prototype.notify = function() {
    var _this = this;
    cancelNotifyTimeout(this);
    if (this.shouldNotify()) {
      this.listeners.forEach(function(listener) {
        return listener(_this);
      });
    }
    this.dirty = false;
  };
  QueryInfo2.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }
    if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;
      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }
    return true;
  };
  QueryInfo2.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo2.prototype.cancel;
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      var oq = this.observableQuery;
      if (oq)
        oq.stopPolling();
    }
  };
  QueryInfo2.prototype.cancel = function() {
  };
  QueryInfo2.prototype.updateWatch = function(variables) {
    var _this = this;
    if (variables === void 0) {
      variables = this.variables;
    }
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }
    var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
      return _this.setDiff(diff);
    } });
    if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };
  QueryInfo2.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  };
  QueryInfo2.prototype.shouldWrite = function(result, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
  };
  QueryInfo2.prototype.markResult = function(result, document2, options, cacheWriteBehavior) {
    var _this = this;
    var merger = new DeepMerger();
    var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
    this.reset();
    if ("incremental" in result && isNonEmptyArray(result.incremental)) {
      var mergedData = mergeIncrementalData(this.getDiff().result, result);
      result.data = mergedData;
    } else if ("hasNext" in result && result.hasNext) {
      var diff = this.getDiff();
      result.data = merger.merge(diff.result, result.data);
    }
    this.graphQLErrors = graphQLErrors;
    if (options.fetchPolicy === "no-cache") {
      this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result, options.errorPolicy)) {
        this.cache.performTransaction(function(cache) {
          if (_this.shouldWrite(result, options.variables)) {
            cache.writeQuery({
              query: document2,
              data: result.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result.data = _this.lastDiff.diff.result;
              return;
            }
          }
          var diffOptions = _this.getDiffOptions(options.variables);
          var diff2 = cache.diff(diffOptions);
          if (!_this.stopped) {
            _this.updateWatch(options.variables);
          }
          _this.updateLastDiff(diff2, diffOptions);
          if (diff2.complete) {
            result.data = diff2.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };
  QueryInfo2.prototype.markReady = function() {
    this.networkError = null;
    return this.networkStatus = NetworkStatus.ready;
  };
  QueryInfo2.prototype.markError = function(error) {
    this.networkStatus = NetworkStatus.error;
    this.lastWrite = void 0;
    this.reset();
    if (error.graphQLErrors) {
      this.graphQLErrors = error.graphQLErrors;
    }
    if (error.networkError) {
      this.networkError = error.networkError;
    }
    return error;
  };
  return QueryInfo2;
}();
function shouldWriteResult(result, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result);
  if (!writeWithErrors && ignoreErrors && result.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = function() {
  function QueryManager2(_a) {
    var cache = _a.cache, link = _a.link, defaultOptions2 = _a.defaultOptions, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
    this.clientAwareness = {};
    this.queries = /* @__PURE__ */ new Map();
    this.fetchCancelFns = /* @__PURE__ */ new Map();
    this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    this.cache = cache;
    this.link = link;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({ cache });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;
    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
  }
  QueryManager2.prototype.stop = function() {
    var _this = this;
    this.queries.forEach(function(_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(new InvariantError(14));
  };
  QueryManager2.prototype.cancelPendingFetches = function(error) {
    this.fetchCancelFns.forEach(function(cancel) {
      return cancel(error);
    });
    this.fetchCancelFns.clear();
  };
  QueryManager2.prototype.mutate = function(_a) {
    var _b, _c;
    var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _d = _a.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _f = _a.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a.keepRootFields, context = _a.context;
    return __awaiter(this, void 0, void 0, function() {
      var mutationId, _h, document2, hasClientExports2, mutationStoreValue, self2;
      return __generator(this, function(_j) {
        switch (_j.label) {
          case 0:
            invariant(mutation, 15);
            invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 16);
            mutationId = this.generateMutationId();
            _h = this.transform(mutation), document2 = _h.document, hasClientExports2 = _h.hasClientExports;
            mutation = this.cache.transformForLink(document2);
            variables = this.getVariables(mutation, variables);
            if (!hasClientExports2)
              return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];
          case 1:
            variables = _j.sent();
            _j.label = 2;
          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation,
              variables,
              loading: true,
              error: null
            });
            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
            }
            this.broadcastQueries();
            self2 = this;
            return [2, new Promise(function(resolve, reject) {
              return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse }), variables, false), function(result) {
                if (graphQLResultHasError(result) && errorPolicy === "none") {
                  throw new ApolloError({
                    graphQLErrors: getGraphQLErrorsFromResult(result)
                  });
                }
                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }
                var storeResult = __assign({}, result);
                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }
                if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }
                return self2.markMutationResult({
                  mutationId,
                  result: storeResult,
                  document: mutation,
                  variables,
                  fetchPolicy,
                  errorPolicy,
                  context,
                  update: updateWithProxyFn,
                  updateQueries,
                  awaitRefetchQueries,
                  refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated,
                  keepRootFields
                });
              }).subscribe({
                next: function(storeResult) {
                  self2.broadcastQueries();
                  if (!("hasNext" in storeResult) || storeResult.hasNext === false) {
                    resolve(storeResult);
                  }
                },
                error: function(err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }
                  if (optimisticResponse) {
                    self2.cache.removeOptimistic(mutationId);
                  }
                  self2.broadcastQueries();
                  reject(err instanceof ApolloError ? err : new ApolloError({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };
  QueryManager2.prototype.markMutationResult = function(mutation, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = this.cache;
    }
    var result = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";
    if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
      if (!isExecutionPatchIncrementalResult(result)) {
        cacheWrites.push({
          result: result.data,
          dataId: "ROOT_MUTATION",
          query: mutation.document,
          variables: mutation.variables
        });
      }
      if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
        var diff = cache.diff({
          id: "ROOT_MUTATION",
          query: this.transform(mutation.document).asQuery,
          variables: mutation.variables,
          optimistic: false,
          returnPartialData: true
        });
        var mergedData = void 0;
        if (diff.result) {
          mergedData = mergeIncrementalData(diff.result, result);
        }
        if (typeof mergedData !== "undefined") {
          result.data = mergedData;
          cacheWrites.push({
            result: mergedData,
            dataId: "ROOT_MUTATION",
            query: mutation.document,
            variables: mutation.variables
          });
        }
      }
      var updateQueries_1 = mutation.updateQueries;
      if (updateQueries_1) {
        this.queries.forEach(function(_a, queryId) {
          var observableQuery = _a.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;
          if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
            return;
          }
          var updater = updateQueries_1[queryName];
          var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
          var _c = cache.diff({
            query: document2,
            variables,
            returnPartialData: true,
            optimistic: false
          }), currentQueryResult = _c.result, complete = _c.complete;
          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result,
              queryName: document2 && getOperationName(document2) || void 0,
              queryVariables: variables
            });
            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: "ROOT_QUERY",
                query: document2,
                variables
              });
            }
          }
        });
      }
    }
    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function(cache2) {
          if (!skipCache) {
            cacheWrites.forEach(function(write) {
              return cache2.write(write);
            });
          }
          var update = mutation.update;
          var isFinalResult = !isExecutionPatchResult(result) || isExecutionPatchIncrementalResult(result) && !result.hasNext;
          if (update) {
            if (!skipCache) {
              var diff2 = cache2.diff({
                id: "ROOT_MUTATION",
                query: _this.transform(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });
              if (diff2.complete) {
                result = __assign(__assign({}, result), { data: diff2.result });
                if ("incremental" in result) {
                  delete result.incremental;
                }
                if ("hasNext" in result) {
                  delete result.hasNext;
                }
              }
            }
            if (isFinalResult) {
              update(cache2, result, {
                context: mutation.context,
                variables: mutation.variables
              });
            }
          }
          if (!skipCache && !mutation.keepRootFields && isFinalResult) {
            cache2.modify({
              id: "ROOT_MUTATION",
              fields: function(value, _a) {
                var fieldName = _a.fieldName, DELETE2 = _a.DELETE;
                return fieldName === "__typename" ? value : DELETE2;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function(result2) {
        return results_1.push(result2);
      });
      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function() {
          return result;
        });
      }
    }
    return Promise.resolve(result);
  };
  QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
    var _this = this;
    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function(cache) {
      try {
        _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache);
      } catch (error) {
      }
    }, mutation.mutationId);
  };
  QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
    return this.fetchQueryObservable(queryId, options, networkStatus).promise;
  };
  QueryManager2.prototype.getQueryStore = function() {
    var store = /* @__PURE__ */ Object.create(null);
    this.queries.forEach(function(info, queryId) {
      store[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store;
  };
  QueryManager2.prototype.resetErrors = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) {
      queryInfo.networkError = void 0;
      queryInfo.graphQLErrors = [];
    }
  };
  QueryManager2.prototype.transform = function(document2) {
    var transformCache = this.transformCache;
    if (!transformCache.has(document2)) {
      var transformed = this.cache.transformDocument(document2);
      var noConnection = removeConnectionDirectiveFromDocument(transformed);
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = noConnection && this.localState.serverQuery(noConnection);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: hasClientExports(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery,
        serverQuery,
        defaultVars: getDefaultValues(getOperationDefinition(transformed)),
        asQuery: __assign(__assign({}, transformed), { definitions: transformed.definitions.map(function(def) {
          if (def.kind === "OperationDefinition" && def.operation !== "query") {
            return __assign(__assign({}, def), { operation: "query" });
          }
          return def;
        }) })
      };
      var add = function(doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };
      add(document2);
      add(transformed);
      add(clientQuery);
      add(serverQuery);
    }
    return transformCache.get(document2);
  };
  QueryManager2.prototype.getVariables = function(document2, variables) {
    return __assign(__assign({}, this.transform(document2).defaultVars), variables);
  };
  QueryManager2.prototype.watchQuery = function(options) {
    options = __assign(__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
    if (typeof options.notifyOnNetworkStatusChange === "undefined") {
      options.notifyOnNetworkStatusChange = false;
    }
    var queryInfo = new QueryInfo(this);
    var observable = new ObservableQuery({
      queryManager: this,
      queryInfo,
      options
    });
    this.queries.set(observable.queryId, queryInfo);
    queryInfo.init({
      document: observable.query,
      observableQuery: observable,
      variables: observable.variables
    });
    return observable;
  };
  QueryManager2.prototype.query = function(options, queryId) {
    var _this = this;
    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }
    invariant(options.query, 17);
    invariant(options.query.kind === "Document", 18);
    invariant(!options.returnPartialData, 19);
    invariant(!options.pollInterval, 20);
    return this.fetchQuery(queryId, options).finally(function() {
      return _this.stopQuery(queryId);
    });
  };
  QueryManager2.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  };
  QueryManager2.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  };
  QueryManager2.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  };
  QueryManager2.prototype.stopQueryInStore = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo)
      queryInfo.stop();
  };
  QueryManager2.prototype.clearStore = function(options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }
    this.cancelPendingFetches(new InvariantError(21));
    this.queries.forEach(function(queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = NetworkStatus.loading;
      } else {
        queryInfo.stop();
      }
    });
    if (this.mutationStore) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
    return this.cache.reset(options);
  };
  QueryManager2.prototype.getObservableQueries = function(include) {
    var _this = this;
    if (include === void 0) {
      include = "active";
    }
    var queries = /* @__PURE__ */ new Map();
    var queryNamesAndDocs = /* @__PURE__ */ new Map();
    var legacyQueryOptions = /* @__PURE__ */ new Set();
    if (Array.isArray(include)) {
      include.forEach(function(desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (isDocumentNode(desc)) {
          queryNamesAndDocs.set(_this.transform(desc).document, false);
        } else if (isNonNullObject(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }
    this.queries.forEach(function(_a, queryId) {
      var oq = _a.observableQuery, document2 = _a.document;
      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }
        var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }
        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document2 && queryNamesAndDocs.has(document2)) {
          queries.set(queryId, oq);
          if (queryName)
            queryNamesAndDocs.set(queryName, true);
          if (document2)
            queryNamesAndDocs.set(document2, true);
        }
      }
    });
    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function(options) {
        var queryId = makeUniqueId("legacyOneTimeQuery");
        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });
        var oq = new ObservableQuery({
          queryManager: _this,
          queryInfo,
          options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
        });
        invariant(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }
    return queries;
  };
  QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
    var _this = this;
    if (includeStandby === void 0) {
      includeStandby = false;
    }
    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();
      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }
      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };
  QueryManager2.prototype.setObservableQuery = function(observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };
  QueryManager2.prototype.startGraphQLSubscription = function(_a) {
    var _this = this;
    var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);
    var makeObservable = function(variables2) {
      return _this.getObservableFromLink(query, context, variables2).map(function(result) {
        if (fetchPolicy !== "no-cache") {
          if (shouldWriteResult(result, errorPolicy)) {
            _this.cache.write({
              query,
              result: result.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: variables2
            });
          }
          _this.broadcastQueries();
        }
        var hasErrors = graphQLResultHasError(result);
        var hasProtocolErrors = graphQLResultHasProtocolErrors(result);
        if (hasErrors || hasProtocolErrors) {
          var errors = {};
          if (hasErrors) {
            errors.graphQLErrors = result.errors;
          }
          if (hasProtocolErrors) {
            errors.protocolErrors = result.extensions[PROTOCOL_ERRORS_SYMBOL];
          }
          throw new ApolloError(errors);
        }
        return result;
      });
    };
    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
      return new Observable(function(observer) {
        var sub = null;
        observablePromise_1.then(function(observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function() {
          return sub && sub.unsubscribe();
        };
      });
    }
    return makeObservable(variables);
  };
  QueryManager2.prototype.stopQuery = function(queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };
  QueryManager2.prototype.removeQuery = function(queryId) {
    this.fetchCancelFns.delete(queryId);
    if (this.queries.has(queryId)) {
      this.getQuery(queryId).stop();
      this.queries.delete(queryId);
    }
  };
  QueryManager2.prototype.broadcastQueries = function() {
    if (this.onBroadcast)
      this.onBroadcast();
    this.queries.forEach(function(info) {
      return info.notify();
    });
  };
  QueryManager2.prototype.getLocalState = function() {
    return this.localState;
  };
  QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
    var _this = this;
    var _a;
    if (deduplication === void 0) {
      deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication;
    }
    var observable;
    var serverQuery = this.transform(query).serverQuery;
    if (serverQuery) {
      var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
      var operation = {
        query: serverQuery,
        variables,
        operationName: getOperationName(serverQuery) || void 0,
        context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication }))
      };
      context = operation.context;
      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || /* @__PURE__ */ new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = canonicalStringify(variables);
        observable = byVariables_1.get(varJson_1);
        if (!observable) {
          var concast = new Concast([
            execute(link, operation)
          ]);
          byVariables_1.set(varJson_1, observable = concast);
          concast.beforeNext(function() {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(serverQuery);
            }
          });
        }
      } else {
        observable = new Concast([
          execute(link, operation)
        ]);
      }
    } else {
      observable = new Concast([
        Observable.of({ data: {} })
      ]);
      context = this.prepareContext(context);
    }
    var clientQuery = this.transform(query).clientQuery;
    if (clientQuery) {
      observable = asyncMap(observable, function(result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context,
          variables
        });
      });
    }
    return observable;
  };
  QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    var linkDocument = this.cache.transformForLink(this.transform(queryInfo.document).document);
    return asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function(result) {
      var graphQLErrors = getGraphQLErrorsFromResult(result);
      var hasErrors = graphQLErrors.length > 0;
      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new ApolloError({
            graphQLErrors
          }));
        }
        queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
        queryInfo.markReady();
      }
      var aqr = {
        data: result.data,
        loading: false,
        networkStatus: NetworkStatus.ready
      };
      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = graphQLErrors;
        aqr.networkStatus = NetworkStatus.error;
      }
      return aqr;
    }, function(networkError) {
      var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error);
      }
      throw error;
    });
  };
  QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
    return this.fetchConcastWithInfo(queryId, options, networkStatus).concast;
  };
  QueryManager2.prototype.fetchConcastWithInfo = function(queryId, options, networkStatus) {
    var _this = this;
    if (networkStatus === void 0) {
      networkStatus = NetworkStatus.loading;
    }
    var query = this.transform(options.query).document;
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var defaults = this.defaultOptions.watchQuery;
    var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query,
      variables,
      fetchPolicy,
      errorPolicy,
      returnPartialData,
      notifyOnNetworkStatusChange,
      context
    });
    var fromVariables = function(variables2) {
      normalized.variables = variables2;
      var sourcesWithInfo2 = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
      if (normalized.fetchPolicy !== "standby" && sourcesWithInfo2.sources.length > 0 && queryInfo.observableQuery) {
        queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
      }
      return sourcesWithInfo2;
    };
    var cleanupCancelFn = function() {
      return _this.fetchCancelFns.delete(queryId);
    };
    this.fetchCancelFns.set(queryId, function(reason) {
      cleanupCancelFn();
      setTimeout(function() {
        return concast.cancel(reason);
      });
    });
    var concast, containsDataFromLink;
    if (this.transform(normalized.query).hasClientExports) {
      concast = new Concast(this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables).then(function(sourcesWithInfo2) {
        return sourcesWithInfo2.sources;
      }));
      containsDataFromLink = true;
    } else {
      var sourcesWithInfo = fromVariables(normalized.variables);
      containsDataFromLink = sourcesWithInfo.fromLink;
      concast = new Concast(sourcesWithInfo.sources);
    }
    concast.promise.then(cleanupCancelFn, cleanupCancelFn);
    return {
      concast,
      fromLink: containsDataFromLink
    };
  };
  QueryManager2.prototype.refetchQueries = function(_a) {
    var _this = this;
    var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
    var includedQueriesById = /* @__PURE__ */ new Map();
    if (include) {
      this.getObservableQueries(include).forEach(function(oq, queryId) {
        includedQueriesById.set(queryId, {
          oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }
    var results = /* @__PURE__ */ new Map();
    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic,
        onWatchUpdated: function(watch2, diff, lastDiff) {
          var oq = watch2.watcher instanceof QueryInfo && watch2.watcher.observableQuery;
          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result = onQueryUpdated(oq, diff, lastDiff);
              if (result === true) {
                result = oq.refetch();
              }
              if (result !== false) {
                results.set(oq, result);
              }
              return result;
            }
            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
            }
          }
        }
      });
    }
    if (includedQueriesById.size) {
      includedQueriesById.forEach(function(_a2, queryId) {
        var oq = _a2.oq, lastDiff = _a2.lastDiff, diff = _a2.diff;
        var result;
        if (onQueryUpdated) {
          if (!diff) {
            var info = oq["queryInfo"];
            info.reset();
            diff = info.getDiff();
          }
          result = onQueryUpdated(oq, diff, lastDiff);
        }
        if (!onQueryUpdated || result === true) {
          result = oq.refetch();
        }
        if (result !== false) {
          results.set(oq, result);
        }
        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }
    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }
    return results;
  };
  QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a, networkStatus) {
    var _this = this;
    var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: this.transform(query).document,
      variables,
      networkStatus
    });
    var readCache = function() {
      return queryInfo.getDiff(variables);
    };
    var resultsFromCache = function(diff2, networkStatus2) {
      if (networkStatus2 === void 0) {
        networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
      }
      var data = diff2.result;
      var fromData = function(data2) {
        return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
      };
      if (data && _this.transform(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: { data },
          context,
          variables,
          onlyRunForcedResolvers: true
        }).then(function(resolved) {
          return fromData(resolved.data || void 0);
        });
      }
      if (errorPolicy === "none" && networkStatus2 === NetworkStatus.refetch && Array.isArray(diff2.missing)) {
        return fromData(void 0);
      }
      return fromData(data);
    };
    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
    var resultsFromLink = function() {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        variables,
        context,
        fetchPolicy,
        errorPolicy
      });
    };
    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
    switch (fetchPolicy) {
      default:
      case "cache-first": {
        var diff = readCache();
        if (diff.complete) {
          return { fromLink: false, sources: [resultsFromCache(diff, queryInfo.markReady())] };
        }
        if (returnPartialData || shouldNotify) {
          return { fromLink: true, sources: [resultsFromCache(diff), resultsFromLink()] };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      }
      case "cache-and-network": {
        var diff = readCache();
        if (diff.complete || returnPartialData || shouldNotify) {
          return { fromLink: true, sources: [resultsFromCache(diff), resultsFromLink()] };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      }
      case "cache-only":
        return { fromLink: false, sources: [resultsFromCache(readCache(), queryInfo.markReady())] };
      case "network-only":
        if (shouldNotify) {
          return { fromLink: true, sources: [resultsFromCache(readCache()), resultsFromLink()] };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      case "no-cache":
        if (shouldNotify) {
          return {
            fromLink: true,
            sources: [
              resultsFromCache(queryInfo.getDiff()),
              resultsFromLink()
            ]
          };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      case "standby":
        return { fromLink: false, sources: [] };
    }
  };
  QueryManager2.prototype.getQuery = function(queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new QueryInfo(this, queryId));
    }
    return this.queries.get(queryId);
  };
  QueryManager2.prototype.prepareContext = function(context) {
    if (context === void 0) {
      context = {};
    }
    var newContext = this.localState.prepareContext(context);
    return __assign(__assign({}, newContext), { clientAwareness: this.clientAwareness });
  };
  return QueryManager2;
}();
var ApolloClient = function() {
  function ApolloClient2(options) {
    var _this = this;
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? false : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
    var link = options.link;
    if (!link) {
      link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
    }
    if (!cache) {
      throw new InvariantError(9);
    }
    this.link = link;
    this.cache = cache;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.typeDefs = typeDefs;
    if (ssrForceFetchDelay) {
      setTimeout(function() {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }
    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    if (connectToDevTools && false) {
      window.__APOLLO_CLIENT__ = this;
    }
    this.version = version;
    this.localState = new LocalState({
      cache,
      client: this,
      resolvers,
      fragmentMatcher
    });
    this.queryManager = new QueryManager({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication,
      ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults,
      onBroadcast: connectToDevTools ? function() {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
  }
  ApolloClient2.prototype.stop = function() {
    this.queryManager.stop();
  };
  ApolloClient2.prototype.watchQuery = function(options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }
    if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.watchQuery(options);
  };
  ApolloClient2.prototype.query = function(options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }
    invariant(options.fetchPolicy !== "cache-and-network", 10);
    if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.query(options);
  };
  ApolloClient2.prototype.mutate = function(options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }
    return this.queryManager.mutate(options);
  };
  ApolloClient2.prototype.subscribe = function(options) {
    return this.queryManager.startGraphQLSubscription(options);
  };
  ApolloClient2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readQuery(options, optimistic);
  };
  ApolloClient2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readFragment(options, optimistic);
  };
  ApolloClient2.prototype.writeQuery = function(options) {
    var ref2 = this.cache.writeQuery(options);
    if (options.broadcast !== false) {
      this.queryManager.broadcastQueries();
    }
    return ref2;
  };
  ApolloClient2.prototype.writeFragment = function(options) {
    var ref2 = this.cache.writeFragment(options);
    if (options.broadcast !== false) {
      this.queryManager.broadcastQueries();
    }
    return ref2;
  };
  ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
    this.devToolsHookCb = cb;
  };
  ApolloClient2.prototype.__requestRaw = function(payload) {
    return execute(this.link, payload);
  };
  ApolloClient2.prototype.resetStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function() {
      return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
        return fn();
      }));
    }).then(function() {
      return _this.reFetchObservableQueries();
    });
  };
  ApolloClient2.prototype.clearStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function() {
      return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
        return fn();
      }));
    });
  };
  ApolloClient2.prototype.onResetStore = function(cb) {
    var _this = this;
    this.resetStoreCallbacks.push(cb);
    return function() {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.onClearStore = function(cb) {
    var _this = this;
    this.clearStoreCallbacks.push(cb);
    return function() {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };
  ApolloClient2.prototype.refetchQueries = function(options) {
    var map = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map.forEach(function(result2, obsQuery) {
      queries.push(obsQuery);
      results.push(result2);
    });
    var result = Promise.all(results);
    result.queries = queries;
    result.results = results;
    result.catch(function(error) {
    });
    return result;
  };
  ApolloClient2.prototype.getObservableQueries = function(include) {
    if (include === void 0) {
      include = "active";
    }
    return this.queryManager.getObservableQueries(include);
  };
  ApolloClient2.prototype.extract = function(optimistic) {
    return this.cache.extract(optimistic);
  };
  ApolloClient2.prototype.restore = function(serializedState) {
    return this.cache.restore(serializedState);
  };
  ApolloClient2.prototype.addResolvers = function(resolvers) {
    this.localState.addResolvers(resolvers);
  };
  ApolloClient2.prototype.setResolvers = function(resolvers) {
    this.localState.setResolvers(resolvers);
  };
  ApolloClient2.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  };
  ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };
  ApolloClient2.prototype.setLink = function(newLink) {
    this.link = this.queryManager.link = newLink;
  };
  return ApolloClient2;
}();
var ApolloClients = Symbol("apollo-clients");
function setContext(setter) {
  return new ApolloLink(function(operation, forward) {
    var request = __rest(operation, []);
    return new Observable(function(observer) {
      var handle;
      var closed = false;
      Promise.resolve(request).then(function(req) {
        return setter(req, operation.getContext());
      }).then(operation.setContext).then(function() {
        if (closed)
          return;
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
      }).catch(observer.error.bind(observer));
      return function() {
        closed = true;
        if (handle)
          handle.unsubscribe();
      };
    });
  });
}
const NuxtApollo = {
  proxyCookies: true,
  clientAwareness: false,
  cookieAttributes: { "maxAge": 604800, "secure": true },
  clients: { "default": { "httpEndpoint": "https://graphql.contentful.com/content/v1/spaces/r7d67u2dckd4/", "tokenName": "contentful-token", "connectToDevTools": true, "authType": "Bearer", "authHeader": "Authorization", "tokenStorage": "cookie" } }
};
function useAsyncQuery(...args) {
  const { key, fn } = prep(...args);
  return useAsyncData(key, fn, "$WvHsgSk08j");
}
const prep = (...args) => {
  var _a, _b, _c, _d, _e;
  const { clients } = useApollo();
  const query = ((_a = args == null ? void 0 : args[0]) == null ? void 0 : _a.query) || (args == null ? void 0 : args[0]);
  ((_b = args == null ? void 0 : args[0]) == null ? void 0 : _b.cache) ?? true;
  const variables = ((_c = args == null ? void 0 : args[0]) == null ? void 0 : _c.variables) || typeof (args == null ? void 0 : args[1]) !== "string" && (args == null ? void 0 : args[1]) || void 0;
  let clientId = ((_d = args == null ? void 0 : args[0]) == null ? void 0 : _d.clientId) || typeof (args == null ? void 0 : args[1]) === "string" && (args == null ? void 0 : args[1]) || void 0;
  if (!clientId || !(clients == null ? void 0 : clients[clientId])) {
    clientId = (clients == null ? void 0 : clients.default) ? "default" : Object.keys(clients)[0];
  }
  const key = ((_e = args == null ? void 0 : args[0]) == null ? void 0 : _e.key) || hash({ query: print(query), variables, clientId });
  const fn = () => {
    var _a2;
    return (_a2 = clients[clientId]) == null ? void 0 : _a2.query({ query, variables, fetchPolicy: "no-cache" }).then((r) => r.data);
  };
  return { key, query, clientId, variables, fn };
};
const useApollo = () => {
  const nuxtApp = useNuxtApp();
  const getToken = async (client) => {
    var _a;
    client = client || "default";
    const conf = (_a = NuxtApollo == null ? void 0 : NuxtApollo.clients) == null ? void 0 : _a[client];
    const token = ref(null);
    await nuxtApp.callHook("apollo:auth", { token, client });
    if (token.value) {
      return token.value;
    }
    const tokenName = conf.tokenName;
    return (conf == null ? void 0 : conf.tokenStorage) === "cookie" ? useCookie(tokenName).value : null;
  };
  const updateAuth = async ({ token, client, mode, skipResetStore }) => {
    var _a, _b, _c;
    client = client || "default";
    const conf = (_a = NuxtApollo == null ? void 0 : NuxtApollo.clients) == null ? void 0 : _a[client];
    const tokenName = client && conf.tokenName;
    if ((conf == null ? void 0 : conf.tokenStorage) === "cookie") {
      const cookieOpts = client && (conf == null ? void 0 : conf.cookieAttributes) || (NuxtApollo == null ? void 0 : NuxtApollo.cookieAttributes);
      const cookie = useCookie(tokenName, cookieOpts);
      if (!cookie.value && mode === "logout") {
        return;
      }
      cookie.value = mode === "login" && token || null;
    }
    if ((_b = nuxtApp == null ? void 0 : nuxtApp._apolloWsClients) == null ? void 0 : _b[client]) {
      nuxtApp._apolloWsClients[client].restart();
    }
    if (skipResetStore) {
      return;
    }
    await ((_c = nuxtApp == null ? void 0 : nuxtApp._apolloClients) == null ? void 0 : _c[client].resetStore().catch((e) => console.log("%cError on cache reset", "color: orange;", e.message)));
  };
  return {
    /**
     * Retrieve the auth token for the specified client. Adheres to the `apollo:auth` hook.
     *
     * @param {string} client The client who's token to retrieve. Defaults to `default`.
     */
    getToken,
    /**
     * Access the configured apollo clients.
     */
    clients: nuxtApp == null ? void 0 : nuxtApp._apolloClients,
    /**
     * Apply auth token to the specified Apollo client, and optionally reset it's cache.
     *
     * @param {string} token The token to be applied.
     * @param {string} client - Name of the Apollo client. Defaults to `default`.
     * @param {boolean} skipResetStore - If `true`, the cache will not be reset.
     * */
    onLogin: (token, client, skipResetStore) => updateAuth({ token, client, skipResetStore, mode: "login" }),
    /**
     * Remove the auth token from the Apollo client, and optionally reset it's cache.
     *
     * @param {string} client - Name of the Apollo client. Defaults to `default`.
     * @param {boolean} skipResetStore - If `true`, the cache will not be reset.
     * */
    onLogout: (client, skipResetStore) => updateAuth({ client, skipResetStore, mode: "logout" })
  };
};
const plugin_eTVJQYlCmx = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a, _b;
  const requestCookies = useRequestHeaders(["cookie"]) || void 0;
  const clients = {};
  for (const [key, clientConfig] of Object.entries(NuxtApollo.clients)) {
    const getAuth = async () => {
      var _a2, _b2, _c, _d;
      const token = ref();
      await nuxtApp.callHook("apollo:auth", { token, client: key });
      if (!token.value) {
        if (clientConfig.tokenStorage === "cookie") {
          if (requestCookies == null ? void 0 : requestCookies.cookie) {
            token.value = (_b2 = (_a2 = requestCookies.cookie.split(";").find((c) => c.trim().startsWith(`${clientConfig.tokenName}=`))) == null ? void 0 : _a2.split("=")) == null ? void 0 : _b2[1];
          }
        }
        if (!token.value) {
          return;
        }
      }
      const authScheme = !!((_d = (_c = token.value) == null ? void 0 : _c.match(/^[a-zA-Z]+\s/)) == null ? void 0 : _d[0]);
      if (authScheme || (clientConfig == null ? void 0 : clientConfig.authType) === null) {
        return token.value;
      }
      return `${clientConfig == null ? void 0 : clientConfig.authType} ${token.value}`;
    };
    const authLink = setContext(async (_, { headers }) => {
      const auth = await getAuth();
      if (!auth) {
        return;
      }
      return {
        headers: {
          ...headers,
          ...requestCookies && requestCookies,
          [clientConfig.authHeader]: auth
        }
      };
    });
    const httpLink = authLink.concat(createHttpLink({
      ...(clientConfig == null ? void 0 : clientConfig.httpLinkOptions) && clientConfig.httpLinkOptions,
      uri: clientConfig.httpEndpoint,
      headers: { ...((_a = clientConfig == null ? void 0 : clientConfig.httpLinkOptions) == null ? void 0 : _a.headers) || {} }
    }));
    const errorLink = onError((err) => {
      nuxtApp.callHook("apollo:error", err);
    });
    const link = ApolloLink.from([
      errorLink,
      ...[httpLink]
    ]);
    const cache = new InMemoryCache(clientConfig.inMemoryCacheOptions);
    clients[key] = new ApolloClient({
      link,
      cache,
      ...NuxtApollo.clientAwareness,
      ...{ ssrMode: true },
      connectToDevTools: clientConfig.connectToDevTools || false,
      defaultOptions: clientConfig == null ? void 0 : clientConfig.defaultOptions
    });
    if (!(clients == null ? void 0 : clients.default) && !((_b = NuxtApollo == null ? void 0 : NuxtApollo.clients) == null ? void 0 : _b.default) && key === Object.keys(NuxtApollo.clients)[0]) {
      clients.default = clients[key];
    }
    const cacheKey = `_apollo:${key}`;
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload.data[cacheKey] = cache.extract();
    });
  }
  nuxtApp.vueApp.provide(ApolloClients, clients);
  nuxtApp._apolloClients = clients;
  const defaultClient = clients == null ? void 0 : clients.default;
  return {
    provide: {
      apolloHelpers: useApollo(),
      apollo: { clients, defaultClient }
    }
  };
});
const apollo_IRWTEOPleP = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    token.value = useRuntimeConfig().contentfulToken;
  });
});
const _plugins = [
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  router_jmwsqit4Rs,
  plugin_OrkQhMqHci,
  plugin_eTVJQYlCmx,
  apollo_IRWTEOPleP
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {
  props: {
    buttonColor: {
      type: String,
      default: "white"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.show) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "ModalWrapper" }, _attrs))} data-v-e8b16bdf><div class="Modal" data-v-e8b16bdf><svg viewBox="0 0 45 45" style="${ssrRenderStyle({ stroke: $props.buttonColor })}" class="closeButton" xmlns="http://www.w3.org/2000/svg" data-v-e8b16bdf><path d="M11.3137 10.9602L33.5876 33.234" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" data-v-e8b16bdf></path><path d="M10.9602 33.234L33.2341 10.9602" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" data-v-e8b16bdf></path></svg>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div><div class="Backdrop" data-v-e8b16bdf></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/Modal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e8b16bdf"]]);
const USER_TYPES = Object.freeze({
  user: "user",
  groupLeader: "groupLeader"
});
const _sfc_main$5 = {
  data() {
    return {
      selectedUserType: USER_TYPES.user,
      userTypes: [
        { text: "Nutzer", value: USER_TYPES.user },
        { text: "Gruppenleiter", value: USER_TYPES.groupLeader }
      ],
      password: "",
      showLogin: useState("showLogin"),
      loading: false
    };
  },
  methods: {
    async submit() {
      await useFetch("/api/auth/login", {
        method: "POST",
        body: {
          userType: this.selectedUserType,
          password: this.password
        },
        onRequest: () => this.loading = true,
        onResponse: ({ response }) => {
          setTimeout(() => {
            this.loading = false;
            if (response.ok) {
              this.showLogin = false;
              useState("userType").value = this.selectedUserType;
              useState("loggedIn").value = true;
              this.password = "";
            }
          }, 500);
        }
      }, "$ABNRyb1YFZ");
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_Modal, mergeProps({
    show: $data.showLogin,
    "button-color": "var(--primaryBg)",
    onClose: ($event) => $data.showLogin = false
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form class="loginForm" data-v-15416ac2${_scopeId}><svg viewBox="0 0 34 41" class="lockIcon" xmlns="http://www.w3.org/2000/svg" fill="#304C5C" data-v-15416ac2${_scopeId}><path d="M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z" data-v-15416ac2${_scopeId}></path></svg><div class="form-group" data-v-15416ac2${_scopeId}><select class="form-select" data-v-15416ac2${_scopeId}><!--[-->`);
        ssrRenderList($data.userTypes, (userType, index) => {
          _push2(`<option${ssrRenderAttr("value", userType.value)} data-v-15416ac2${_scopeId}>${ssrInterpolate(userType.text)}</option>`);
        });
        _push2(`<!--]--></select><input id="passwordInput"${ssrRenderAttr("value", $data.password)} type="password" class="form-control" placeholder="Password" data-v-15416ac2${_scopeId}></div><button type="submit" class="btn btn-primary" data-v-15416ac2${_scopeId}> Anmelden </button><div class="info" data-v-15416ac2${_scopeId}><svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-15416ac2${_scopeId}><path d="M10.5 4.16439e-05C7.71516 4.16439e-05 5.04456 1.10634 3.07539 3.07542C1.1063 5.04451 0 7.71543 0 10.5C0 13.2846 1.1063 15.9554 3.07539 17.9246C5.04448 19.8937 7.7154 21 10.5 21C13.2846 21 15.9554 19.8937 17.9246 17.9246C19.8937 15.9555 21 13.2846 21 10.5C21 8.65693 20.5148 6.84622 19.5932 5.25001C18.6717 3.6538 17.3462 2.3283 15.75 1.40675C14.1538 0.485209 12.343 0 10.5 0L10.5 4.16439e-05ZM11.9001 15.8667C11.9001 16.3669 11.6332 16.829 11.2 17.0792C10.7668 17.3293 10.2332 17.3293 9.79996 17.0792C9.36683 16.829 9.09991 16.3669 9.09991 15.8667V9.80006C9.09991 9.29989 9.36684 8.83781 9.79996 8.58764C10.2332 8.33748 10.7668 8.33748 11.2 8.58764C11.6332 8.8378 11.9001 9.29989 11.9001 9.80006V15.8667ZM10.5 6.53339C10.1287 6.53339 9.77262 6.38593 9.51008 6.12323C9.24755 5.8607 9.09992 5.50456 9.09992 5.13331C9.09992 4.76205 9.24755 4.40593 9.51008 4.14339C9.77261 3.88086 10.1287 3.7334 10.5 3.7334C10.8713 3.7334 11.2274 3.88086 11.4899 4.14339C11.7525 4.40593 11.9001 4.76206 11.9001 5.13331C11.9001 5.50457 11.7525 5.86069 11.4899 6.12323C11.2274 6.38593 10.8713 6.53339 10.5 6.53339Z" fill="#304C5C" data-v-15416ac2${_scopeId}></path></svg><span data-v-15416ac2${_scopeId}>Melde dich bei deinem Leiter um das Passwort zu erhalten</span><div data-v-15416ac2${_scopeId}></div></div></form>`);
      } else {
        return [
          createVNode("form", {
            class: "loginForm",
            onSubmit: withModifiers($options.submit, ["prevent"])
          }, [
            (openBlock(), createBlock("svg", {
              viewBox: "0 0 34 41",
              class: "lockIcon",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "#304C5C"
            }, [
              createVNode("path", { d: "M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z" })
            ])),
            createVNode("div", { class: "form-group" }, [
              withDirectives(createVNode("select", {
                "onUpdate:modelValue": ($event) => $data.selectedUserType = $event,
                class: "form-select"
              }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList($data.userTypes, (userType, index) => {
                  return openBlock(), createBlock("option", {
                    key: index,
                    value: userType.value
                  }, toDisplayString(userType.text), 9, ["value"]);
                }), 128))
              ], 8, ["onUpdate:modelValue"]), [
                [vModelSelect, $data.selectedUserType]
              ]),
              withDirectives(createVNode("input", {
                id: "passwordInput",
                "onUpdate:modelValue": ($event) => $data.password = $event,
                type: "password",
                class: "form-control",
                placeholder: "Password"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.password]
              ])
            ]),
            createVNode("button", {
              type: "submit",
              class: "btn btn-primary",
              onClick: ($event) => $options.submit()
            }, " Anmelden ", 8, ["onClick"]),
            createVNode("div", { class: "info" }, [
              (openBlock(), createBlock("svg", {
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M10.5 4.16439e-05C7.71516 4.16439e-05 5.04456 1.10634 3.07539 3.07542C1.1063 5.04451 0 7.71543 0 10.5C0 13.2846 1.1063 15.9554 3.07539 17.9246C5.04448 19.8937 7.7154 21 10.5 21C13.2846 21 15.9554 19.8937 17.9246 17.9246C19.8937 15.9555 21 13.2846 21 10.5C21 8.65693 20.5148 6.84622 19.5932 5.25001C18.6717 3.6538 17.3462 2.3283 15.75 1.40675C14.1538 0.485209 12.343 0 10.5 0L10.5 4.16439e-05ZM11.9001 15.8667C11.9001 16.3669 11.6332 16.829 11.2 17.0792C10.7668 17.3293 10.2332 17.3293 9.79996 17.0792C9.36683 16.829 9.09991 16.3669 9.09991 15.8667V9.80006C9.09991 9.29989 9.36684 8.83781 9.79996 8.58764C10.2332 8.33748 10.7668 8.33748 11.2 8.58764C11.6332 8.8378 11.9001 9.29989 11.9001 9.80006V15.8667ZM10.5 6.53339C10.1287 6.53339 9.77262 6.38593 9.51008 6.12323C9.24755 5.8607 9.09992 5.50456 9.09992 5.13331C9.09992 4.76205 9.24755 4.40593 9.51008 4.14339C9.77261 3.88086 10.1287 3.7334 10.5 3.7334C10.8713 3.7334 11.2274 3.88086 11.4899 4.14339C11.7525 4.40593 11.9001 4.76206 11.9001 5.13331C11.9001 5.50457 11.7525 5.86069 11.4899 6.12323C11.2274 6.38593 10.8713 6.53339 10.5 6.53339Z",
                  fill: "#304C5C"
                })
              ])),
              createVNode("span", null, "Melde dich bei deinem Leiter um das Passwort zu erhalten"),
              createVNode("div")
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Login.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-15416ac2"]]);
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA6CAYAAAAOeSEWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhASURBVHgB7Vt9jFxVFT/nvvdmP6Z8LCxrsnbbZY1Nq0CaYrWVJlalYv8AVoNpNE38IGKoqaBJJVQT/0FjYlQwJhj0D4MkJm2DDWmMwYpBRQOysZYYSKBsabstLQi729mZ93kPv/uWWWan7wvYeUMov2Y6771z7rn3nHvuveecN0tUMkSk3428H1MXoKhkBKRvIWUNUBdgU9kQ2WAxXURdAFOHYdw2oGC1kBrDbUW03ozvGXxOaEWP95FzmJnrVAKWXNk9sscaD8avIouu1szboO7Hmbh/oUPmo0JyPwvv0KSfAe0kCx0T0RORFf2jn/tPUIewZMpiBj/s63A7sVwLsesocz/gSbRYgQtLkzwiId2pHX2RQ9anIi0XeMr5/gDzNL2TAAXZDcPrfR085ulAUj4NX8Lf4XMzjPGiedYQ70uu9iebPK4OTnsS3GHkNaQx6kXeD/0ovNcYkN4JCCTY7En4XIaS+PiHwbcRg1ZQ7kjzOf5dC6U2ezqcaeP/tyfeVUY+2vT4Et3uS/AzF/zULWAW7spWErMVhfdgwBfH/DhXW2n4t8k8dyX6dns7zH4tkOiuZl9TMtUPr/iKGwU/rYu8n8pCQ2QFrP9kjqL/90JvW7NNKOHWdh5gw4LMyP9tkpxAwkfBt7zJh+vLMNM7oPQu6jR88ddjbU1lKQqX+9e0uGNvGAfrT4cvJCi7tslzRs4sA8+xlGVwFP2ubR0H3PwK8D8Aw49SJwA3+io6DzJnVIIDx+V436KB6XBfoouLfKCVD+pvzpD9as2bX8ctCn8Im+IEDLHT7Ae0VMD6+W7u+pTg6brUF60nDGIsjR9rb6S9Hzx/KGOjm4S8C1v50d8IDLwH9AdBu5TeLrByfpKnKGZvclZmz+nM1d6BtDYmqmrnx7MrQaunLpHIv6+9zXGRPhjiAYzhuRnX/SC9VZizroiiSWvHDYLrMtqF5jxN7FOHezPaRWh3XVI7V/wdoL8Mt/4IvVm4Et6QpyiOiGkIX5fYXgd/y2hrpjYxAcHz0RzjPts8ztqBnfoW0F9yxV1FRQFhQxjsi7nKSvT1lPYb8trWpPa+tP7R997sfv2709p6YThugpe0nfqcnSwkvRM+ljqY1xX6TYWtXyfRsHN/h3JQpepMqmymX1Jm33wrZi9xffbY9n4kFX9XEu7DGHuz5MQ7HNzTz5mZQxC0LHkgcrGXd0TNr1krXRlROK8PZcnA7B9Maz8nc8NoP+FFwe52mlp84+xE+uVQKvhkhe1xpGm1JCqiIbOB5BUEPLSPUntg1qLpjxntTar26bR4ucrVkxC+C3J+MCcy3EpbUFZM3CnyTcqASPhzk4+m0S22tlI+JI9Bizybx6OEdqft6n3sPMJMf7Z1sKjWtaCsT/q21iT7XPCRWTX7K8oCyzrKR5THYFn0nzweWOyTSC8/kUa3yboTbnLjpEwurN1Y2XkL6espSzjLjiEeqqXSccDjKzf/xCDn8ngccv6LLy+Pj5VsT6UxP4Wv2jAN39R8FisbUrgJo1hN6QP8ay87D1MGIOMaKlStlNwKBAaKLuV4Ab6bkWysTKer/aytjc375uA+Q9lC76EcwDfXUjG8XIiL+elCbNr+QiqN9O8164817+fdmHhbWgOY+ESFrIcot1O+ggqB/SJcovlkET5WfFsaza/7R7APrcQSi+MGhWjjctykBtFwqHvn3SpncKxXUgEoHC1UCLrQzGKzWI7xJy7BarV6CgwHXQrXxH1L5G/IFKbsB6kAFPGyInyoG58uwqcUPUoFgUDoa6lEoQAnd2wMGJq3pvPRsR7mZygHsOygcGE3LlQX1uScpaJg+mwG8RRcfdRc2VB2MH7E/JjW0T+VsvrhtJ9DPXcYCzreEU1gbVM4Av+/MCRUebFScBo+30P0PNoFPvlDJKqXCgAGfKUI3yk6OjVMy6kgrjQZU1LAo5Q6A13WU6ws0SAYb+9RzsKOi/jyR7b0PI7QsYY4dD/p4Ax22ydhobqKpIcsOJkOt/hMY6gWoLBPh9vK7Tgj+RjFoaNcvrh7cc3/jUZjVPU6m2DAPhjZBDPCynm46UnD/vAqyghc2+FGvjn6jrY/x+CqTCoOdmzEupugxKId0sSXqAnvwgzfCvp20FOPi3q9PqJ67G9h0PAOegJGucOl2qEBHojPU5yDK3DWfV6x+h6MN6hIrUbl8A/QbYLJOoyZfsHYDujDWf1lBPpjMP4pUfpPLduiGZ8JRsy+kGgC27JHEgcovEYoqpjL1Ncfrxeyeou8dDIBt6WDm3qtyi8y5KEUGprSyrhi2uKwczCDdy1478flpZpldy85e5vjmJbpgQr1r3KIqzgyb4A9biSTvzIdgLmntI6Po5dER4NwYYiib0DJWkXZ5b45NEUzzNwrraXUNJh0c1a81QVkOpD5BF6X3I3rSjt9zvevRp3qqbQKR8dglDXlHJRCl/QdjqlPmxlPo8/I2yjGvVXE5U8UzpJKqWWg1J8ZKOozmZHqK5D5dKb/UjsLmvnyu19ZRCMm8DDHSG4C3wmUqqwdUEDzNarcxKITKFVZ5JaX4CyMsgpunUS5v4OybUu6M6kxSv/RVzdRtrIWdRHdUDakLqEbbnx+KIs9+E1kqEuPkmc2Op+U7S5KVtY6f3Zj1IPec+OyUKqyFp9Hu7EmNkWvRQqbH6yYYhyVgFL/RkDFBXa1qNLvS3Qf1nIDl1+kDqPcNausOWQ9l509e3bI3P4vrgbKNUriF8cdR8f/IKIV5tUh6sHm7dwREf0X5LVbUOS9YI6s9Zcwz1CHUW64yHza8xsb8T1hsbUG1fp9ePf70TIUNXgN8CesHHE+x7sAAAAASUVORK5CYII=";
const _sfc_main$4 = {
  data() {
    return {
      fixedBar: false,
      openMenu: false
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.fixedBar = window.scrollY > 40;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_Login = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["nav", { fixed: $data.fixedBar, open: $data.openMenu }]
  }, _attrs))} data-v-50fb9325><div class="wrapper" data-v-50fb9325>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} data-v-50fb9325${_scopeId}> KjG<br data-v-50fb9325${_scopeId}>Pfarrjugend Hüls `);
      } else {
        return [
          createVNode("img", { src: _imports_0$1 }),
          createTextVNode(" KjG"),
          createVNode("br"),
          createTextVNode("Pfarrjugend Hüls ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="links" data-v-50fb9325>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/ueberuns" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Über uns`);
      } else {
        return [
          createTextVNode("Über uns")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/gruppen" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gruppen`);
      } else {
        return [
          createTextVNode("Gruppen")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/fotos" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Fotos`);
      } else {
        return [
          createTextVNode("Fotos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/kontakt" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Kontakt`);
      } else {
        return [
          createTextVNode("Kontakt")
        ];
      }
    }),
    _: 1
  }, _parent));
  if (("useState" in _ctx ? _ctx.useState : unref(useState))("loggedIn").value) {
    _push(`<a class="btn-primary" data-v-50fb9325>Abmelden</a>`);
  } else {
    _push(`<a class="btn-primary" data-v-50fb9325>Anmelden</a>`);
  }
  _push(`</div><svg class="menuButton" viewBox="0 0 448 512" fill="white" xmlns="http://www.w3.org/2000/svg" data-v-50fb9325><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" data-v-50fb9325></path></svg></div>`);
  _push(ssrRenderComponent(_component_Login, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layoutComponents/Navbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-50fb9325"]]);
const __nuxt_component_1$1 = /* @__PURE__ */ defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", indicator.start);
    nuxtApp.hook("page:finish", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = /* @__PURE__ */ defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const __nuxt_component_2 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _sfc_main$3 = {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pictures" }, _attrs))} data-v-1e1f6ee7><div class="d-flex" data-v-1e1f6ee7><!--[-->`);
  ssrRenderList($props.items, (item, index) => {
    _push(`<div class="px-3 py-3" data-v-1e1f6ee7>`);
    ssrRenderSlot(_ctx.$slots, "item", { item }, null, _push, _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/ImageSlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1e1f6ee7"]]);
const useImage = () => {
  return useNuxtApp().$img;
};
const baseImageProps = {
  src: { type: String, required: true },
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  preload: { type: Boolean, default: void 0 },
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (props.sizes) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    return () => h("img", {
      ref: imgEl,
      key: src.value,
      src: src.value,
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _imports_0 = "" + __buildAssetsURL("kjg_kpjh_logo_white.14b584b7.svg");
const _sfc_main$2 = {
  async setup() {
    const isLargeScreen = false;
    const query = gql`
            query {
                sponsors: sponsorsCollection(limit: 0) {
                    items {
                        title
                        logo {
                            url
                        }
                    }
                }
            }
        `;
    let {
      data: {
        value: {
          sponsors: { items: sponsors }
        }
      }
    } = await useAsyncQuery(query);
    sponsors = sponsors || [];
    return { sponsors, isLargeScreen };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ImageSlider = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid footer" }, _attrs))} data-v-fa74ba7f><div class="sponsors" data-v-fa74ba7f><!--[-->`);
  ssrRenderList($setup.sponsors, (sponsor) => {
    _push(`<div data-v-fa74ba7f><img class="sponsor"${ssrRenderAttr("src", sponsor.logo.url)} data-v-fa74ba7f></div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_ImageSlider, {
    class: "sponsorSlider",
    items: $setup.sponsors
  }, {
    item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_nuxt_img, {
          src: item.logo.url,
          class: "slider-img"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_nuxt_img, {
            src: item.logo.url,
            class: "slider-img"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="row wrapper" data-v-fa74ba7f><div class="col logo" data-v-fa74ba7f><img class="kjg-logo"${ssrRenderAttr("src", _imports_0)} data-v-fa74ba7f></div><div class="col links" data-v-fa74ba7f>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home `);
      } else {
        return [
          createTextVNode("Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/gruppen" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gruppen`);
      } else {
        return [
          createTextVNode("Gruppen")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/fotos" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Fotos`);
      } else {
        return [
          createTextVNode("Fotos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/impressum" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Impressum`);
      } else {
        return [
          createTextVNode("Impressum")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/datenschutz" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Datenschutz`);
      } else {
        return [
          createTextVNode("Datenschutz")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col" data-v-fa74ba7f><div class="col info" data-v-fa74ba7f><svg viewBox="0 0 19 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-fa74ba7f><path d="M9.5001 0C4.25643 0 0 4.17113 0 9.30938C0 12.2277 1.37244 15.0195 3.07909 17.2965C5.48048 20.5017 8.48178 22.6625 8.50812 22.6818C9.09883 23.1061 9.90117 23.1061 10.4919 22.6818C10.5183 22.6625 13.5197 20.5017 15.9209 17.2965C17.6276 15.0194 19 12.2276 19 9.30938C19 4.17099 14.7434 0 9.4999 0H9.5001ZM9.5001 5.47636C11.6588 5.47636 13.412 7.19422 13.412 9.30957C13.412 11.4251 11.6588 13.143 9.5001 13.143C7.34141 13.143 5.58816 11.4251 5.58816 9.30957C5.58816 7.19422 7.34141 5.47636 9.5001 5.47636Z" data-v-fa74ba7f></path></svg><p data-v-fa74ba7f>Herrenweg 6, 47839 Krefeld-Hüls</p></div><div class="col info" data-v-fa74ba7f><svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-fa74ba7f><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" data-v-fa74ba7f></path></svg><p data-v-fa74ba7f>info@kpjh.de</p></div></div></div><div class="devs" data-v-fa74ba7f><small data-v-fa74ba7f>von den besten Entwicklern vonne Welt - Flocke&amp;Toni</small></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layoutComponents/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fa74ba7f"]]);
const _sfc_main$1 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { contentfulToken } = /* @__PURE__ */ useRuntimeConfig();
    const cookie = useCookie("contentful-token");
    cookie.value = cookie.value || contentfulToken;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0$1;
      const _component_NuxtLoadingIndicator = __nuxt_component_1$1;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-component-91c6baa2.mjs').then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-acef7e05.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useState as a, __nuxt_component_0$2 as b, createError as c, useRoute as d, entry$1 as default, useAsyncQuery as e, __nuxt_component_0$3 as f, useHead as g, useRuntimeConfig as u };
//# sourceMappingURL=server.mjs.map
