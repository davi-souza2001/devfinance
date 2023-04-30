'use client'
import { DefaultBackground } from "@/components/DefaultBackground"
import { Progress } from "@chakra-ui/react"

export default function MyWallet() {
	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your Wallet, Davi Souza! 💰</span>
				<span className="font-light text-slate-400">Here you can check your equity and how much is estimated for next month's profits.</span>
			</div>
			<div className="w-2/3 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="text-xl mb-3 font-semibold">My patrimony</span>
				<span className="font-thin">Jan - R$ 52,00</span>
				<Progress colorScheme='blue' height='22px' value={20} className="mb-3 rounded outline-none border-none" />
			</div>
		</DefaultBackground>
	)
}
