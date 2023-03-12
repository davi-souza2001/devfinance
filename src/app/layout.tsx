import { Header } from '@/components/Header'
import './globals.css'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html>
				<body className='font-poppins'>
					<Header />
					{props.children}
				</body>
		</html>
	)
}
