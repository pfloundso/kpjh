
import { sendStream, setResponseHeader } from 'h3'
import { USER_TYPES } from '~/enums/enums'

export default defineEventHandler(async (event) => {
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

    // Validate image ID
    const { id } = getQuery(event)

    if (
        typeof id !== 'string' ||
        !/^[a-zA-Z0-9_-]+$/.test(id)
    ) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid ImageId',
        })
    }

    try {
        // Request the original image as a stream
        const response = await event.context.drive.files.get(
            {
                fileId: id,
                alt: 'media',
            },
            {
                responseType: 'stream',
            }
        )

        // Preserve the original MIME type
        const contentType =
            response.headers?.['content-type'] ||
            'application/octet-stream'

        setResponseHeader(
            event,
            'Content-Type',
            contentType
        )

        // Prevent shared/proxy caching of private images
        setResponseHeader(
            event,
            'Cache-Control',
            'private, no-store'
        )

        setResponseHeader(
            event,
            'X-Content-Type-Options',
            'nosniff'
        )

        // Stream directly to the browser
        return sendStream(event, response.data)

    } catch (error) {
        console.error(
            'Failed to load image from Google Drive:',
            error
        )

        throw createError({
            statusCode: 502,
            statusMessage: 'Could not load image',
        })
    }
})
