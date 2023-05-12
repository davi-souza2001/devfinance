import { DefaultBackground } from "@/components/DefaultBackground";
import { HiOutlineUserCircle, HiPencil } from "react-icons/hi";

export default function Account() {
	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your account, Davi Souza! ✌️</span>
				<span className="font-light text-slate-400">Here you can manage your personal datas.</span>
			</div>
			<div className="w-3/3 lg:w-1/2 flex items-center justify-start m-8 p-5 bg-purpleHeader rounded">
				<HiOutlineUserCircle className='h-14 w-14 mr-2' />
				<span className="text-2xl font-semibold">Davi Souza</span>
				<HiPencil className="ml-5 text-xl"/>
			</div>
		</DefaultBackground>
	)
}
