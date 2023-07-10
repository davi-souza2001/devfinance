'use client'
import { useRouter } from 'next/navigation'
import { HiOutlineUserCircle } from 'react-icons/hi'

import UseAuth from '@/service/hooks/useAuth'
import { DefaultBackground } from '@/components/DefaultBackground'

export default function Account() {
	const { push } = useRouter()
	const { logoutUser } = UseAuth()
	function handleLogout() {
		logoutUser()
		push('/login')
	}

	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your account, Davi Souza! ✌️</span>
				<span className="font-light text-slate-400">Here you can manage your personal datas.</span>
			</div>
			<div className="w-3/3 lg:w-1/2 flex items-center justify-start m-8 p-5 bg-purpleHeader rounded">
				<HiOutlineUserCircle className='h-14 w-14 mr-2' />
				<span className="text-2xl font-semibold mr-10">Davi Souza</span>
				<button onClick={handleLogout} type="submit" className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
					Logout
				</button>
			</div>
		</DefaultBackground>
	)
}
