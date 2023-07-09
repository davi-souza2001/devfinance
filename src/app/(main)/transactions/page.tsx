'use client'
import { DefaultBackground } from '@/components/DefaultBackground'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import UseAuth from '@/service/hooks/useAuth'
import UseTransaction from '@/service/hooks/useTransaction'

const createTransactionFormSchema = z.object({
	name: z.string()
		.nonempty('Your transaction name is required.')
		.toLowerCase(),
	value: z.string()
		.nonempty('Your transaction value is required.')
		.transform((val) => parseInt(val)),
	recurrent: z.string()
		.nonempty()
		.transform((val) => val === 'yes' ? true : false),
	expense: z.string()
		.nonempty()
		.transform((val) => val === 'yes' ? true : false)
})

type CreateTransactionFormData = z.infer<typeof createTransactionFormSchema>

export default function Transactions() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { user } = UseAuth()
	const { sendTransaction } = UseTransaction()
	const { register, handleSubmit, formState: { errors } } = useForm<CreateTransactionFormData>({
		resolver: zodResolver(createTransactionFormSchema)
	})

	async function handleSendTransaction(data: CreateTransactionFormData) {
		await sendTransaction(data, user.email, user.token ?? '')
		onClose()
	}

	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 mt-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your Transactions, Davi Souza! 📆</span>
				<span className="font-light text-slate-400">Here you can manage your monthly transactions.</span>
				<div className="mt-6 flex max-w-md gap-x-4">
					<input type="text" required className="min-w-0 flex-auto rounded-md border-none outline-none bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your transaction" />
					<button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
						Search
					</button>
				</div>
			</div>
			<div className="h-24 w-full lg:w-1/2 p-5 flex items-center justify-between">
				<div className="flex items-center justify-center p-3 rounded bg-[#232358]">
					<HiArrowNarrowLeft className="cursor-pointer hover:bg-[#2f2f70]" />
					<span className="mx-2">Fev / 2023</span>
					<HiArrowNarrowRight className="cursor-pointer  hover:bg-[#2f2f70]" />
				</div>
				<div className="p-1 rounded bg-[#232358]">
					<Button onClick={onOpen} className="hover:bg-[#2f2f70]">Add Transaction</Button>
					<Modal isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Transaction</ModalHeader>
							<ModalBody>
								<ModalCloseButton className="bg-red-400 text-white hover:bg-red-300" />
								<form onSubmit={handleSubmit(handleSendTransaction)} className="flex flex-col items-start justify-center">
									<label htmlFor="name" className="font-semibold text-lg mb-2">Name</label>
									<input type="text" {...register('name')} className="h-7 bg-slate-200 border-none outline-none rounded-sm mb-5" />
									{errors.name && <span>{errors.name.message}</span>}

									<label htmlFor="value" className="font-semibold text-lg mb-2">Value</label>
									<input type="number" {...register('value')} className="h-7 w-28 bg-slate-200 border-none outline-none rounded-sm mb-5" />
									{errors.value && <span>{errors.value.message}</span>}

									<label htmlFor="recurrent" className="font-semibold text-lg mb-2">Recurrent</label>
									<select {...register('recurrent')} className="h-7 w-28 bg-slate-200 border-none outline-none rounded-sm mb-3">
										<option value="yes">Yes</option>
										<option value="no">No</option>
									</select>
									{errors.recurrent && <span>{errors.recurrent.message}</span>}

									<label htmlFor="expense" className="font-semibold text-lg mb-2">Expense</label>
									<select {...register('expense')} className="h-7 w-28 bg-slate-200 border-none outline-none rounded-sm">
										<option value="yes">Yes</option>
										<option value="no">No</option>
									</select>
									{errors.expense && <span>{errors.expense.message}</span>}

									<div className="w-full flex items-end justify-end">
										<button type='submit' className="p-2 font-semibold rounded-md transition-all text-white bg-indigo-400 hover:bg-indigo-300">
											Submit
										</button>
									</div>
								</form>
							</ModalBody>
						</ModalContent>
					</Modal>
				</div>
			</div>
			<div className="w-3/3 lg:w-1/2 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="text-xl font-semibold">Expenses</span>
				<TableContainer>
					<Table variant='simple' size={'lg'}>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th isNumeric>Value</Th>
								<Th>Recurrent</Th>
								<Th>Expense</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>inches</Td>
								<Td isNumeric>25.4</Td>
								<Td>Yes</Td>
								<Td>Yes</Td>
							</Tr>
							<Tr>
								<Td>feet</Td>
								<Td isNumeric>30.48</Td>
								<Td>Yes</Td>
								<Td>Yes</Td>
							</Tr>
							<Tr>
								<Td>yards</Td>
								<Td isNumeric>0.91444</Td>
								<Td>Yes</Td>
								<Td>Yes</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</div>
		</DefaultBackground>
	)
}
