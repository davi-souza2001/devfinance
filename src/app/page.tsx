'use client'
import { Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi"

export default function Home() {
	return (
		<div className="h-full w-full text-white bg-purpleDefault">
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Welcome, Davi Souza! ✌️</span>
				<span className="font-light text-slate-400">Here's what's happening with your patrimony today.</span>
			</div>
			<div className="w-full lg:w-2/3 p-5 flex flex-col items-start justify-center bg-red-500">
				<div className="w-full flex items-start justify-around">
					<div className="h-20 w-40 flex items-center justify-around bg-purpleHeader rounded-md lg:w-72">
						<HiArrowCircleDown className="text-4xl mr-[-30px] text-teal-200 xl:text-6xl" />
						<div className="flex flex-col">
							<span className="lg:hidden">Income</span>
							<span className="hidden lg:block text-lg font-thin">Total Income</span>
							<div className="flex items-center justify-center">
								<span className="lg:text-xl">R$32,00</span>
								<span className="hidden lg:flex ml-5 text-sm">
									<Stat>
										<StatArrow type='increase' />
										23.36%
									</Stat>
								</span>
							</div>
						</div>
					</div>
					<div className="h-20 w-40 flex items-center justify-around bg-purpleHeader rounded-md lg:w-72">
						<HiArrowCircleUp className="text-4xl mr-[-30px] text-red-400 xl:text-6xl" />
						<div className="flex flex-col">
							<span className="lg:hidden">Outcome</span>
							<span className="hidden lg:block text-lg font-thin">Total Outcome</span>
							<div className="flex items-center justify-center">
								<span className="lg:text-xl">R$32,00</span>
								<span className="hidden lg:flex ml-5 text-sm">
									<Stat>
										<StatArrow type='decrease' />
										23.36%
									</Stat>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
