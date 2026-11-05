import { defineEventHandler, getQuery, createError } from 'h3';
import { U as USER_TYPES } from './enums.mjs';

const listImages = defineEventHandler(async (event) => {
  var _a, _b;
  const { id, pageToken } = getQuery(event);
  if (!event.context.auth || ![
    USER_TYPES.user,
    USER_TYPES.groupLeader
  ].includes(event.context.auth.userType)) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
  if (typeof id !== "string" || !/^[a-zA-Z0-9_-]+$/.test(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid FolderId"
    });
  }
  if (pageToken !== void 0 && (typeof pageToken !== "string" || !pageToken)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid pageToken"
    });
  }
  try {
    const response = await event.context.drive.files.list({
      q: `'${id}' in parents and trashed = false`,
      fields: "nextPageToken,files(id,name,thumbnailLink,mimeType)",
      pageSize: 50,
      pageToken: pageToken || void 0,
      orderBy: "name_natural"
    });
    return {
      files: (_a = response.data.files) != null ? _a : [],
      nextPageToken: (_b = response.data.nextPageToken) != null ? _b : null
    };
  } catch (error) {
    console.error("Failed to load Google Drive folder:", error);
    throw createError({
      statusCode: 502,
      statusMessage: "Could not load photos"
    });
  }
});

export { listImages as default };
//# sourceMappingURL=listImages.mjs.map
