import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const token = request.cookies.get('tokenAuthFinance')?.value
	console.log('asdasd')
	if (!token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}
}

export const config = {
	matcher: '/account',
}
