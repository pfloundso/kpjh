
import { USER_TYPES } from '~/enums/enums'

export default defineEventHandler(async (event) => {
    const { id, pageToken } = getQuery(event)

    // Check authentication
    if (
        !event.context.auth ||
        ![
            USER_TYPES.user,
            USER_TYPES.groupLeader,
        ].includes(event.context.auth.userType)
    ) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    }

    // Validate folder ID
    if (
        typeof id !== 'string' ||
        !/^[a-zA-Z0-9_-]+$/.test(id)
    ) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid FolderId',
        })
    }

    // Validate pagination token
    if (
        pageToken !== undefined &&
        (typeof pageToken !== 'string' || !pageToken)
    ) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid pageToken',
        })
    }

    try {
        const response = await event.context.drive.files.list({
            q: `'${id}' in parents and trashed = false`,
            fields: 'nextPageToken,files(id,name,thumbnailLink,mimeType)',
            pageSize: 50,
            pageToken: pageToken || undefined,
            orderBy: 'name_natural',
        })

        return {
            files: response.data.files ?? [],
            nextPageToken: response.data.nextPageToken ?? null,
        }
    } catch (error) {
        console.error('Failed to load Google Drive folder:', error)

        throw createError({
            statusCode: 502,
            statusMessage: 'Could not load photos',
        })
    }
})


// const getFilesOfFolder = async (folderId, drive) => {
// 	try {
// const response = await drive.files.list({
// 	q: "'"+folderId+"' in parents"
// });
// 		let array = response.data.files
// 		array.filter(file => file.mimeType === "application/vnd.google-apps.folder").map(async file => {
// 			file.kind = "drive#folder"
// 			let children = await getFilesOfFolder(file.id,drive)
// 			file.files = []
// 		})
// 		return array
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

//   export default defineEventHandler(async (event) => {

// 	const folderId = getQuery(event).id;
// 	if(folderId && event.context.auth && (event.context.auth.userType == USER_TYPES.user || event.context.auth.userType == USER_TYPES.groupLeader)) {
// 		if (!folderId) throw createError({ statusCode: 400, statusMessage: 'No FolderId' })
// 			try {
// 				const response = await event.context.drive.files.list({
// 					q: `'${folderId}' in parents and mimeType contains 'image/'`,
// 					fields: 'files(id,thumbnailLink,mimeType)',
// 				});
// 				const imageIds = response.data.files
// 				console.log(imageIds)
// 				return imageIds
// 			} catch (error) {
// 				console.log(error)
// 			}
// 	} else {
// 		throw createError({
// 			statusCode: 401,
// 			statusMessage: 'Unauthorized',
// 		})
// 	}
//   });
