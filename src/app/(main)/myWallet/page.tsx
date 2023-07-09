'use client'
import { useEffect, useState } from 'react'
import { HiCurrencyDollar, HiMinusCircle, HiSortAscending } from 'react-icons/hi'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { DefaultBackground } from '@/components/DefaultBackground'
import { Transaction } from '@/service/context/TransactionContext'
import UseTransaction from '@/service/hooks/useTransaction'

export default function MyWallet() {
	const { transactions } = UseTransaction()
	const [recurrents, setRecurrents] = useState<Transaction[]>([])

	useEffect(() => {
		const filterRecurrent = transactions.filter((transaction) => transaction.recurrent === true)
		setRecurrents(filterRecurrent)
	}, [transactions])
	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your Wallet, Davi Souza! 💰</span>
				<span className="font-light text-slate-400">Here you can check your equity and how much is estimated for next month profits.</span>
			</div>
			<div className="w-3/3 lg:w-1/2 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="flex items-center text-xl mb-3 font-semibold">My Patrimony<HiCurrencyDollar className="ml-5 text-2xl" /> </span>
				<span className="text-2xl font-semibold">R$ 52,00</span>
			</div>
			<div className="w-3/3 lg:w-1/2 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="flex items-center text-xl mb-3 font-semibold">Total<HiSortAscending className="ml-5 text-2xl text-green-500" /> </span>
				<span className="text-2xl font-semibold">R$ 52,00</span>
			</div>
			<div className="w-3/3 lg:w-1/2 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="flex items-center text-xl mb-3 font-semibold">My Expenses<HiMinusCircle className="ml-5 text-2xl text-red-500" /> </span>
				<span className="text-2xl font-semibold">R$ 52,00</span>
			</div>
			<div className="w-3/3 lg:w-1/2 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="text-xl font-semibold">Fixed Expenses</span>
				{transactions.length === 0 ? (
					<span className="font-light text-slate-400 my-3">You don't have any expenses yet.</span>
				) : (
					<TableContainer>
						<Table variant='simple'>
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th isNumeric>Value</Th>
								</Tr>
							</Thead>
							<Tbody>
								{recurrents.map(t => {
									return (
										<Tr key={t.name}>
											<Td>{t.name}</Td>
											<Td isNumeric>{t.value}</Td>
										</Tr>
									)
								})}
							</Tbody>
						</Table>
					</TableContainer>
				)}

			</div>
		</DefaultBackground>
	)
}
