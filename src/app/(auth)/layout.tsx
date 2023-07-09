'use client'
import '../globals.css'

import { AuthProvider } from '@/service/context/AuthContext'

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
