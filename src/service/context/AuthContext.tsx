import { useState } from "react"
import { createContext } from "react"

interface AuthContextProps {
	user: any
}

const AuthContext = createContext<AuthContextProps>({
	user: {}
})

export function AuthProvider(props: any) {
	const [user, setUser] = useState({ name: 'test' })

	return (
		<AuthContext.Provider value={{
			user,
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
