import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
    const { userType, password } = await readBody(event)

    const userPws = {
        user: useRuntimeConfig().userPw,
        groupLeader: useRuntimeConfig().groupleaderPw,
    }

    if (Object.prototype.hasOwnProperty.call(userPws, userType)) {
        if (password === userPws[userType]) {
            // Create a JWT token
            const token = jwt.sign(userType, useRuntimeConfig().jwtSecret)

            // Return the token to the client
            // return res.json({ token });
            setCookie(event, 'token', token, {
                httpOnly: true,
                secure: !import.meta.dev,
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7,
            })

            return {
                statusCode: 200,
                statusMessage: 'success',
            }
        } else {
            throw createError({
                statusCode: 401,
                statusMessage: 'Wrong password',
            })
        }
    } else {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid usertype',
        })
    }
})
