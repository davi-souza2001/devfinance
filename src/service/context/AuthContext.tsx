'use client'
import { setCookie, getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { createContext } from 'react'
import decode from 'jwt-decode'
import Router from 'next/router'

export interface User {
	name: string
	email: string
	password: string
	patrimony?: number
	salary?: number
}

interface UserResponse {
	payload: User
}

interface AuthContextProps {
	user: User
	registerUser: (data: User) => Promise<void>
	loginUser: (data: User) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
	user: {
		name: '',
		email: '',
		password: ''
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	registerUser: async () => { },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	loginUser: async () => { }
})

const route = 'http://localhost:3333'
const tokenBase = 'tokenAuthFinance'

interface AuthProps {
	children: React.ReactNode
}

export function AuthProvider(props: AuthProps) {
	const token = getCookie(tokenBase)?.toString()
	const [user, setUser] = useState<User>({
		name: '',
		email: '',
		password: ''
	})

	async function registerUser(data: User) {
		const response = await fetch(`${route}/user/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		const userToken = await response.json()

		const user = decode(userToken.token) as User

		setUser(user)

		setCookie(tokenBase, userToken.token)
	}

	async function loginUser(data: User) {
		const response = await fetch(`${route}/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		const userToken = await response.json()

		const user = decode(userToken.token) as User

		setUser(user)

		setCookie(tokenBase, userToken.token)
	}

	useEffect(() => {
		if (token) {
			const user = decode(token) as UserResponse
			setUser(user.payload)
		}
	}, [token])

	return (
		<AuthContext.Provider value={{
			user,
			registerUser,
			loginUser
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
