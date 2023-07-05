'use client'
import Image from 'next/image'
import { Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { HiMenu, HiOutlineUserCircle, HiViewGrid } from "react-icons/hi"
import { HiOutlineWallet } from "react-icons/hi2"
import { TbMoneybag } from "react-icons/tb"

import Logo from '../../public/Logo.svg'
import Link from 'next/link'
import UseAuth from '@/service/hooks/useAuth'
import { useState } from 'react'

interface Dashboard {
	option: 'Dashboard' | 'My Wallet' | 'My Transactions' | 'Account'
}

export function Header() {
	const { user } = UseAuth()
	const [optionSelected, setOptionSelected] = useState<Dashboard>({ option: 'Dashboard' })

	return (
		<div className='h-16 w-full bg-purpleHeader flex items-center justify-between text-white lg:h-full lg:w-80 lg:items-start lg:justify-start lg:flex-col'>
			<Link href={'/'} className='h-full w-40 flex items-center justify-around text-lg font-semibold lg:h-28 lg:w-full lg:justify-start lg:text-2xl'>
				<Image alt='Logo' src={Logo} className='lg:mx-3' />
				<p className='lg:mt-2'>Devfinance</p>
			</Link>

			<div className='hidden lg:flex h-14 w-full items-center justify-center mt-8' onClick={() => setOptionSelected({ option: 'Dashboard' })}>
				<Link href={'/'} className={`h-full w-5/6 flex items-center justify-start p-5 rounded-md ${optionSelected.option === 'Dashboard' && 'bg-purpleLight'} cursor-pointer hover:bg-violet-700 transition-all`}>
					<HiViewGrid className='h-8 w-8 mr-2' />
					<p className='font-medium'>Dashboard</p>
				</Link>
			</div>
			<div className='hidden lg:flex h-14 w-full items-center justify-center mt-8' onClick={() => setOptionSelected({ option: 'My Wallet' })}>
				<Link href={'/myWallet'} className={`h-full w-5/6 flex items-center justify-start p-5 rounded-md ${optionSelected.option === 'My Wallet' && 'bg-purpleLight'} cursor-pointer hover:bg-violet-700 transition-all`}>
					<HiOutlineWallet className='h-8 w-8 mr-2' />
					<p className='font-medium'>My Wallet</p>
				</Link>
			</div>
			<div className='hidden lg:flex h-14 w-full items-center justify-center mt-8' onClick={() => setOptionSelected({ option: 'My Transactions' })}>
				<Link href={'/transactions'} className={`h-full w-5/6 flex items-center justify-start p-5 rounded-md ${optionSelected.option === 'My Transactions' && 'bg-purpleLight'} cursor-pointer hover:bg-violet-700 transition-all`}>
					<TbMoneybag className='h-8 w-8 mr-2' />
					<p className='font-medium'>My Transactions</p>
				</Link>
			</div>
			<div className='hidden lg:flex h-14 w-full items-center justify-center mt-8'>
				<div className='h-0.5 w-5/6 bg-purpleLight' />
			</div>
			<div className='hidden lg:flex h-14 w-full items-center justify-center my-8' onClick={() => setOptionSelected({ option: 'Account' })}>
				<Link href={'/account'} className={`h-full w-5/6 flex items-center justify-start p-5 rounded-md ${optionSelected.option === 'Account' && 'bg-purpleLight'} cursor-pointer hover:bg-violet-700 transition-all`}>
					<HiOutlineUserCircle className='h-8 w-8 mr-2' />
					<p className='font-medium'>{user?.name?.length ? user.name : 'usuário'}</p>
				</Link>
			</div>

			<div className='h-full w-40 flex items-center justify-end font-medium lg:hidden'>
				<div className='mr-5'>
					<Menu>
						<MenuButton className='flex items-center justify-center'>
							<HiMenu className='text-3xl' />
						</MenuButton>
						<MenuList className='bg-purpleDefault border-none outline-none flex flex-col'>
							<Link href={'/'} className="p-2">Dashboard</Link>
							<Link href={'/myWallet'} className="p-2">My Wallet</Link>
							<Link href={'/transactions'} className="p-2">My Transactions</Link>
							<Link href={'/account'} className="p-2">Account</Link>
						</MenuList>
					</Menu>
				</div>
			</div>
		</div>
	)
}
