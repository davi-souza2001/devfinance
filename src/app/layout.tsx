'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { AuthProvider } from '../service/context/AuthContext'

import './globals.css'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html>
			<body className='font-poppins'>
				<AuthProvider>
					<CacheProvider>
						<ChakraProvider>
							<Header />
							{props.children}
						</ChakraProvider>
					</CacheProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
