'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'

import { Background } from "@/components/Background"

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

	function createUser(data: any) {
		console.log(data)
	}

	return (
		<Background>
			<div className="h-20 w-full flex items-center justify-center font-semibold text-2xl">
				<p>Register</p>
			</div>
			<form
				onSubmit={handleSubmit(createUser)}
				className="h-[30rem] w-full flex flex-col items-center justify-center gap-4"
			>
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Name</label>
					<input
						className="h-10 border border-zinc-200 shadow-sm rounded text-black"
						type='string'
						{...register('name')}
					/>
					{errors.name && <span>{errors.name.message}</span>}
				</div>

				<div className="flex flex-col gap-1">
					<label htmlFor="email">E-mail</label>
					<input
						className="h-10 border border-zinc-200 shadow-sm rounded text-black"
						type='email'
						{...register('email')}
					/>
					{errors.email && <span>{errors.email.message}</span>}
				</div>

				<div className="flex flex-col gap-1">
					<label htmlFor="password">Senha</label>
					<input
						className="h-10 border border-zinc-200 shadow-sm rounded text-black"
						type='password'
						{...register('password')}
					/>
					{errors.password && <span>{errors.password.message}</span>}
				</div>

				<button
					type="submit"
					className="h-10 w-32 bg-emerald-500 rounded font-semibold hover:bg-emerald-600"
				>
					Criar
				</button>
			</form>
		</Background>
	)
}
