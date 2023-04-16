import Image from 'next/image'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HiOutlineUserCircle, HiViewGrid } from "react-icons/hi"
import { HiOutlineWallet } from "react-icons/hi2"
import { TbMoneybag } from "react-icons/tb"

import Logo from '../../public/Logo.svg'

export function Header() {
	return (
		<div className='h-16 w-full bg-purpleHeader flex items-center justify-between text-white xl:h-full xl:w-80 xl:items-start xl:justify-start xl:flex-col'>
			<div className='h-full w-40 flex items-center justify-around text-lg font-semibold xl:h-28 xl:w-full xl:justify-start xl:text-2xl'>
				<Image alt='Logo' src={Logo} className='xl:mx-3' />
				<p className='xl:mt-2'>Devfinance</p>
			</div>

			<div className='hidden xl:flex h-14 w-full items-center justify-center mt-8'>
				<div className='h-full w-5/6 flex items-center justify-start p-5 rounded-md bg-purpleLight cursor-pointer hover:bg-violet-700 transition-all'>
					<HiViewGrid className='h-8 w-8 mr-2' />
					<p className='font-medium'>Dashboard</p>
				</div>
			</div>
			<div className='hidden xl:flex h-14 w-full items-center justify-center mt-8'>
				<div className='h-full w-5/6 flex items-center justify-start p-5 rounded-md bg-purpleLight cursor-pointer hover:bg-violet-700 transition-all'>
					<HiOutlineWallet className='h-8 w-8 mr-2' />
					<p className='font-medium'>My Wallet</p>
				</div>
			</div>
			<div className='hidden xl:flex h-14 w-full items-center justify-center mt-8'>
				<div className='h-full w-5/6 flex items-center justify-start p-5 rounded-md bg-purpleLight cursor-pointer hover:bg-violet-700 transition-all'>
					<TbMoneybag className='h-8 w-8 mr-2' />
					<p className='font-medium'>My Expenses</p>
				</div>
			</div>
			<div className='hidden xl:flex h-14 w-full items-center justify-center mt-8'>
				<div className='h-0.5 w-5/6 bg-purpleLight' />
			</div>
			<div className='hidden xl:flex h-14 w-full items-center justify-center mt-8'>
				<div className='h-full w-5/6 flex items-center justify-start p-5 rounded-md bg-purpleLight cursor-pointer hover:bg-violet-700 transition-all'>
					<HiOutlineUserCircle className='h-8 w-8 mr-2' />
					<p className='font-medium'>Davi Souza</p>
				</div>
			</div>


			<div className='h-full w-40 flex items-center justify-end font-medium xl:hidden'>
				<div className='mr-5'>
					<Menu>
						<MenuButton>
							Actions
						</MenuButton>
						<MenuList className='bg-purpleDefault border-none outline-none'>
							<MenuItem>Dashboard</MenuItem>
							<MenuItem>My Wallet</MenuItem>
							<MenuItem>My Expenses</MenuItem>
							<MenuItem>Profile</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
		</div>
	)
}
