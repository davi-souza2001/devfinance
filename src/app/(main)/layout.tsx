'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { AuthProvider } from '../../service/context/AuthContext'
import { TransactionProvider } from '../../service/context/TransactionContext'

import '../globals.css'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html>
			<body className='font-poppins' suppressHydrationWarning={true} >
				<AuthProvider>
					<TransactionProvider>
						<CacheProvider>
							<ChakraProvider>
								<div className='h-screen w-screen lg:flex'>
									<Header />
									{props.children}
								</div>
							</ChakraProvider>
						</CacheProvider>
					</TransactionProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
