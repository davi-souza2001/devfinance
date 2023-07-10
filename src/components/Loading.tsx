import { HiOutlineRefresh } from 'react-icons/hi'

export function Loading() {
	return (
		<div className='h-screen w-screen flex items-center justify-center bg-purpleDefault' >
			<HiOutlineRefresh className='animate-spin text-5xl text-white' />
		</div>
	)
}
