'use client'
import { DefaultBackground } from '@/components/DefaultBackground'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { HiCurrencyDollar, HiMinusCircle, HiPlusCircle, HiSortAscending } from 'react-icons/hi'

export default function MyWallet() {
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
				<span className="flex items-center text-xl mb-3 font-semibold">
					Add Fixed Expenses
					<HiPlusCircle className="cursor-pointer ml-5 text-2xl text-green-300" />
				</span>
				<div className="w-full flex flex-col items-start justify-center">
					<div className="w-full flex items-center justify-between">
						<input
							type='text'
							value={'R$ 0,00'}
							className="text-lg font-semibold bg-[#232358] p-1 rounded outline-none border-0" />
					</div>
				</div>
			</div>
			<div className="w-3/3 lg:w-1/2 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="text-xl font-semibold">Fixed Expenses</span>
				<TableContainer>
					<Table variant='simple'>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th isNumeric>Value</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Value</Td>
								<Td isNumeric>25.4</Td>
							</Tr>
							<Tr>
								<Td>feet</Td>
								<Td isNumeric>30.48</Td>
							</Tr>
							<Tr>
								<Td>yards</Td>
								<Td isNumeric>0.91444</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</div>
		</DefaultBackground>
	)
}
