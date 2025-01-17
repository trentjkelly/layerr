// Sets the cookie for jwt
export const POST = async ({ cookies, request }) => {
    try {
        const body = await request.json()

        const { jwtToken, refreshToken } = body
        
        cookies.set('refresh', refreshToken, {
            httpOnly: true, 
            secure: true, 
            path: "/", 
            sameSite: 'strict'
        })

        cookies.set('jwt', jwtToken, { 
            httpOnly: true, 
            secure: true, 
            path: "/", 
            sameSite: 'strict' 
        })

        return new Response('JWT Cookie set successfully', { status: 200 })

    } catch (error) {
        return new Response('Failed to process request', { status: 400 })
    }
}