globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, readBody, setCookie, createError } from 'h3';
import jwt from 'jsonwebtoken';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'googleapis';
import 'ipx';

const login_post = defineEventHandler(async (event) => {
  const { userType, password } = await readBody(event);
  const userPws = {
    user: useRuntimeConfig().userPw,
    groupLeader: useRuntimeConfig().groupleaderPw
  };
  if (Object.prototype.hasOwnProperty.call(userPws, userType)) {
    if (password === userPws[userType]) {
      const token = jwt.sign(userType, useRuntimeConfig().jwtSecret);
      setCookie(event, "token", token, {
        httpOnly: true,
        secure: !globalThis._importMeta_.dev,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7
      });
      return {
        statusCode: 200,
        statusMessage: "success"
      };
    } else {
      throw createError({
        statusCode: 401,
        statusMessage: "Wrong password"
      });
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid usertype"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
