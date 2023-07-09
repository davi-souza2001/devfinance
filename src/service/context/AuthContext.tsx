'use client'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { createContext } from 'react'
import decode from 'jwt-decode'

export interface User {
	name: string
	email: string
	password: string
	token: string
	patrimony?: number
	salary?: number
}

interface UserResponse {
	payload: User
}

interface UserLogin {
	email: string
	password: string
}

interface AuthContextProps {
	user: User
	loading: boolean
	registerUser: (data: User) => Promise<void>
	loginUser: (data: UserLogin) => Promise<void>
	logoutUser: () => void
}

const AuthContext = createContext<AuthContextProps>({
	user: {
		name: '',
		email: '',
		password: '',
		token: ''
	},
	loading: false,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	registerUser: async () => { },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	loginUser: async () => { },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	logoutUser: () => { }
})

const tokenBase = 'tokenAuthFinance'

interface AuthProps {
	children: React.ReactNode
}

export function AuthProvider(props: AuthProps) {
	const token = getCookie(tokenBase)?.toString()
	const [loading, setLoading] = useState<boolean>(false)
	const [user, setUser] = useState<User>({
		name: '',
		email: '',
		password: '',
		token: ''
	})

	async function registerUser(data: User) {
		setLoading(true)
		const response = await fetch(`${process.env.NEXT_PUBLIC_ROUTE}/user/create`, {
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
		setLoading(false)
	}

	async function loginUser(data: UserLogin) {
		setLoading(true)
		const response = await fetch(`${process.env.NEXT_PUBLIC_ROUTE}/user/login`, {
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
		setLoading(false)
	}

	async function logoutUser() {
		setLoading(true)
		deleteCookie(tokenBase)
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		if (token) {
			const user = decode(token) as UserResponse
			const userComplete = { ...user.payload, token }
			setUser(userComplete)
		}
		setLoading(false)
	}, [token])

	return (
		<AuthContext.Provider value={{
			user,
			loading,
			registerUser,
			loginUser,
			logoutUser
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
