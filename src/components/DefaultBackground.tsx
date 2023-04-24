interface defaultBackgroundProps {
	children: React.ReactNode
}

export function DefaultBackground(props: defaultBackgroundProps) {
	return (
		<div className="h-full w-full text-white bg-purpleDefault overflow-y-auto">
			{props.children}
		</div>
	)
}
