'use client'
import Link from 'next/link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { DefaultBackground } from '@/components/DefaultBackground'
import UseAuth from '@/service/hooks/useAuth'
import { useRouter } from 'next/navigation'

const createUserFormSchema = z.object({
	email: z.string()
		.nonempty('O e-mail é obrigatório!')
		.email('Formato de e-mail inválido!')
		.toLowerCase(),
	password: z.string()
		.nonempty('A senha é obrigatório!')
		.min(6, 'A senha precisa ter no mínimo 6 caracteres!')
})

type CreateUserFOrmData = z.infer<typeof createUserFormSchema>

export default function Login() {
	const { push } = useRouter()
	const { loginUser } = UseAuth()
	const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFOrmData>({
		resolver: zodResolver(createUserFormSchema)
	})

	async function handleLoginUser(data: any) {
		await loginUser(data)
		push('/')
	}

	return (
		<DefaultBackground>
			<div className="h-full w-full relative isolate overflow-hidden bg-gray-900 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
				<svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
					<circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
					<defs>
						<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
							<stop stopColor="#7775D6" />
							<stop offset="1" stopColor="#E935C1" />
						</radialGradient>
					</defs>
				</svg>
				<div className="h-full w-full hidden lg:flex items-start justify-center flex-col text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left ">
					<h2 className="text-2xl font-bold tracking-tight text-white sm:text-5xl">Boost your productivity.<br />Start using our app today.</h2>
					<p className="mt-6 text-xl leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
					<div className="mt-10 flex flex-col items-center justify-center gap-x-6lg:justify-start">
						<Link href="/register" className="rounded-md bg-white px-3.5 py-2.5 text-base font-semibold text-gray-900 shadow-sm mb-2 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</Link>
						<Link href="https://github.com/davi-souza2001/devfinance" target={'_blank'} className="text-base font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></Link>
					</div>
				</div>
				<div className="h-full w-full lg:w-1/2 flex flex-col items-center justify-center">
					<form
						onSubmit={handleSubmit(handleLoginUser)}
						className="h-[30rem] w-full flex flex-col items-center justify-center bg-[#151d2e] rounded-md"
					>
						<h1 className="text-3xl my-8 font-semibold">Login</h1>
						<div className="flex flex-col gap-3 ">
							<label htmlFor="email" className="font-semibold text-xl">Email</label>
							<input
								className="h-10 w-80 border mb-5 border-zinc-200 shadow-sm rounded outline-none text-black"
								type='email'
								{...register('email')}
							/>
							{errors.email && <span>{errors.email.message}</span>}
						</div>

						<div className="flex flex-col gap-1 ">
							<label htmlFor="password" className="font-semibold text-xl">Password</label>
							<input
								className="h-10 w-80 border mb-14 border-zinc-200 shadow-sm rounded outline-none text-black"
								type='password'
								{...register('password')}
							/>
							{errors.password && <span>{errors.password.message}</span>}
						</div>

						<button
							type="submit"
							className="h-10 w-32 bg-emerald-500 rounded font-semibold hover:bg-emerald-600"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</DefaultBackground>
	)
}
