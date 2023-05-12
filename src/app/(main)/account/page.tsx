import { DefaultBackground } from "@/components/DefaultBackground";

export default function Account() {
	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your account, Davi Souza! ✌️</span>
				<span className="font-light text-slate-400">Here you can manage your personal datas.</span>
			</div>
		</DefaultBackground>
	)
}
