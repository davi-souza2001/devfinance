'use client'
import { DefaultBackground } from "@/components/DefaultBackground";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

export default function Transactions() {
	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your Transactions, Davi Souza! 📆</span>
				<span className="font-light text-slate-400">Here you can manage your monthly transactions.</span>
			</div>
			<div className="h-24 w-full p-5 flex items-center justify-between">
				<div className="flex items-center justify-center p-2 rounded bg-[#232358]">
					<HiArrowNarrowLeft/>
					<span className="mx-2">Fev / 2023</span>
					<HiArrowNarrowRight/>
				</div>
				<div className="p-2 rounded bg-[#232358]">
					<span>Add Transaction</span>
				</div>
			</div>
		</DefaultBackground>
	)
}
