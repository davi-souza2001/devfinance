'use client'
import { setCookie } from 'cookies-next'
import { useState } from "react"
import { createContext } from "react"
import decode from 'jwt-decode'

interface User {
	name: string
	email: string
	password: string
	patrimony?: number
	salary?: number
}

interface AuthContextProps {
	user: User
	registerUser: (data: User) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
	user: {
		name: '',
		email: '',
		password: ''
	},
	registerUser: async () => { }
})

const route = 'http://localhost:3333'
const tokenBase = 'tokenAuthFinance'

export function AuthProvider(props: any) {
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

	return (
		<AuthContext.Provider value={{
			user,
			registerUser
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
