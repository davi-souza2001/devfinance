interface BackgroundProps{
	children: any
}

export function Background(props: BackgroundProps){
	return (
		<main className="h-screen w-screen bg-purpleDefault text-white font-poppins">
			{props.children}
		</main>

	)
}
