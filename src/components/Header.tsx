import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Image from 'next/image'

import Logo from '../../public/Logo.svg'

export function Header() {
	return (
		<div className='h-16 w-full bg-red-500 flex items-center justify-between'>
			<div className='h-full w-40 bg-yellow-500 flex items-center justify-around text-lg'>
				<Image alt='Logo' src={Logo} />
				<p>Devfinance</p>
			</div>
			<div className='h-full w-40 bg-yellow-300 flex items-center justify-end'>
				<Menu>
					<MenuButton as={Button} >
						Actions
					</MenuButton>
					<MenuList>
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</div>
	)
}
