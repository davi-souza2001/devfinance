import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi"

export default function Home() {
	return (
		<div className="h-full w-full text-white bg-purpleDefault">
			<div className="h-24  w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Welcome, Davi Souza! ✌️</span>
				<span className="font-light text-slate-400">Here's what's happening with your patrimony today.</span>
			</div>
			<div className="h-24 w-full p-5 flex items-start justify-around">
				<div className="h-20 w-40 flex items-center justify-around bg-purpleHeader rounded-md lg:w-72">
					<HiArrowCircleDown className="text-4xl mr-[-30px] text-teal-200"/>
					<div className="flex flex-col">
						<span>Income</span>
						<span>R$32,00</span>
					</div>
				</div>
				<div className="h-20 w-40 flex items-center justify-around bg-purpleHeader rounded-md lg:w-72">
					<HiArrowCircleUp className="text-4xl mr-[-30px] text-red-400"/>
					<div className="flex flex-col">
						<span>Outcome</span>
						<span>R$32,00</span>
					</div>
				</div>
				<div className="hidden h-52 w-40 xl:flex items-center justify-start bg-purpleHeader rounded-md lg:w-96">
					<span className="text-xl font-semibold p-5">Activity</span>
				</div>
			</div>
		</div>
	)
}
