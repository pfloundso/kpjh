import { defineEventHandler, createError, getQuery, setResponseHeader, sendStream } from 'h3';
import { U as USER_TYPES } from './enums.mjs';

const image = defineEventHandler(async (event) => {
  var _a;
  if (!event.context.auth || ![
    USER_TYPES.user,
    USER_TYPES.groupLeader
  ].includes(event.context.auth.userType)) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
  const { id } = getQuery(event);
  if (typeof id !== "string" || !/^[a-zA-Z0-9_-]+$/.test(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid ImageId"
    });
  }
  try {
    const response = await event.context.drive.files.get(
      {
        fileId: id,
        alt: "media"
      },
      {
        responseType: "stream"
      }
    );
    const contentType = ((_a = response.headers) == null ? void 0 : _a["content-type"]) || "application/octet-stream";
    setResponseHeader(
      event,
      "Content-Type",
      contentType
    );
    setResponseHeader(
      event,
      "Cache-Control",
      "private, no-store"
    );
    setResponseHeader(
      event,
      "X-Content-Type-Options",
      "nosniff"
    );
    return sendStream(event, response.data);
  } catch (error) {
    console.error(
      "Failed to load image from Google Drive:",
      error
    );
    throw createError({
      statusCode: 502,
      statusMessage: "Could not load image"
    });
  }
});

export { image as default };
//# sourceMappingURL=image.mjs.map
