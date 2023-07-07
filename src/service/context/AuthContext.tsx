'use client'
import { setCookie, getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { createContext } from 'react'
import decode from 'jwt-decode'

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
	loading: boolean
	registerUser: (data: User) => Promise<void>
	loginUser: (data: User) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
	user: {
		name: '',
		email: '',
		password: ''
	},
	loading: false,
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
	const [loading, setLoading] = useState<boolean>(false)
	const [user, setUser] = useState<User>({
		name: '',
		email: '',
		password: ''
	})

	async function registerUser(data: User) {
		setLoading(true)
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
		setLoading(false)
	}

	async function loginUser(data: User) {
		setLoading(true)
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
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		if (token) {
			const user = decode(token) as UserResponse
			setUser(user.payload)
		}
		setLoading(false)
	}, [token])

	return (
		<AuthContext.Provider value={{
			user,
			loading,
			registerUser,
			loginUser
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
