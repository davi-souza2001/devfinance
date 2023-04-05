'use client'

import { Header } from '@/components/Header'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import './globals.css'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html>
			<body className='font-poppins'>
				<CacheProvider>
					<ChakraProvider>
						<Header />
						{props.children}
					</ChakraProvider>
				</CacheProvider>
			</body>
		</html>
	)
}
