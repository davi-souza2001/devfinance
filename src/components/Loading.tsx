import { HiOutlineRefresh } from 'react-icons/hi'

export function Loading() {
	return (
		<div className='h-full w-full flex items-center justify-center' >
			<HiOutlineRefresh className='animate-spin text-5xl text-purpleDefault' />
		</div>
	)
}
