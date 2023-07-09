import UseAuth from '@/service/hooks/useAuth'

import { Loading } from './Loading'

interface defaultBackgroundProps {
	children: React.ReactNode
}

export function DefaultBackground(props: defaultBackgroundProps) {
	const { loading } = UseAuth()
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className="h-screen w-screen text-white bg-purpleDefault overflow-y-auto">
					{props.children}
				</div>
			)
			}
		</>
	)
}
