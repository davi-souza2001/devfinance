import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Image from 'next/image'

import Logo from '../../public/Logo.svg'

export function Header() {
	return (
		<div className='h-16 w-full bg-purpleHeader flex items-center justify-between text-white'>
			<div className='h-full w-40 flex items-center justify-around text-lg font-semibold'>
				<Image alt='Logo' src={Logo} />
				<p>Devfinance</p>
			</div>
			<div className='h-full w-40 flex items-center justify-end font-medium'>
				<div className='mr-5'>
					<Menu>
						<MenuButton>
							Actions
						</MenuButton>
						<MenuList className='bg-purpleDefault border-none outline-none'>
							<MenuItem>Home</MenuItem>
							<MenuItem>My Wallet</MenuItem>
							<MenuItem>My Expenses</MenuItem>
							<MenuItem>My Account</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
		</div>
	)
}
