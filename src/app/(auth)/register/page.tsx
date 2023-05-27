'use client'
import Link from "next/link"
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { DefaultBackground } from "@/components/DefaultBackground"

const createUserFormSchema = z.object({
	name: z.string()
		.nonempty('O nome é obrigatório!')
		.transform(name => {
			return name.trim().split(' ').map(word => {
				return word[0].toLocaleUpperCase().concat(word.substring(1))
			}).join(' ')
		}),
	email: z.string()
		.nonempty('O e-mail é obrigatório!')
		.email('Formato de e-mail inválido!')
		.toLowerCase(),
	password: z.string()
		.nonempty('A senha é obrigatório!')
		.min(6, 'A senha precisa ter no mínimo 6 caracteres!')
})

type CreateUserFOrmData = z.infer<typeof createUserFormSchema>

export default function Register() {
	const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFOrmData>({
		resolver: zodResolver(createUserFormSchema)
	})

	function loginUser(data: any) {
		console.log(data)
	}

	return (
		<DefaultBackground>
			<div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-indigo-900 ">
				<div className="h-[27rem] w-96 flex flex-col items-center justify-around rounded-md p-5 bg-white">
					<p className="text-black text-2xl font-semibold">Create an account</p>
					<form
						onSubmit={handleSubmit(loginUser)}
						className="flex flex-col items-center justify-center gap-4 mt-2"
					>
						<div className="flex flex-col gap-1 text-black">
							<label htmlFor="name" className="font-semibold text-xl">Name</label>
							<input
								className="h-10 w-72 border border-zinc-200 shadow-sm rounded outline-none text-black"
								type='password'
								{...register('name')}
							/>
							{errors.name && <span>{errors.name.message}</span>}
						</div>

						<div className="flex flex-col gap-1 text-black">
							<label htmlFor="email" className="font-semibold text-xl">Email</label>
							<input
								className="h-10 w-72 border border-zinc-200 shadow-sm rounded outline-none text-black"
								type='email'
								{...register('email')}
							/>
							{errors.email && <span>{errors.email.message}</span>}
						</div>

						<div className="flex flex-col gap-1 text-black">
							<label htmlFor="password" className="font-semibold text-xl">Password</label>
							<input
								className="h-10 w-72 border border-zinc-200 shadow-sm rounded outline-none text-black"
								type='password'
								{...register('password')}
							/>
							{errors.password && <span>{errors.password.message}</span>}
						</div>

						<button
							type="submit"
							className="h-10 w-32 bg-emerald-500 rounded font-semibold hover:bg-emerald-600"
						>
							Create
						</button>
					</form>
					<p className="text-black font-thin">
						Already have an account?&nbsp;
						<Link href='/login' className="font-normal text-blue-400">Log In</Link>
					</p>
				</div>
			</div>
		</DefaultBackground>
	)
}
