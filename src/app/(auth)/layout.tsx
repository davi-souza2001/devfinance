'use client'
import { AuthProvider } from '@/service/context/AuthContext'
import '../globals.css'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<AuthProvider>
			<html lang="en">
				<body suppressHydrationWarning={true} >
					{children}
				</body>
			</html>
		</AuthProvider>
	)
}
