'use client'
import { useState, useEffect } from 'react'
import { HiArrowCircleDown, HiArrowCircleUp } from 'react-icons/hi'
import { Progress, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { DefaultBackground } from '@/components/DefaultBackground'
import UseAuth from '@/service/hooks/useAuth'
import UseTransaction from '@/service/hooks/useTransaction'

export default function Home() {
	const { patrimony, getPatrimony, user } = UseAuth()
	const { transactions } = UseTransaction()
	const [totalExpense, setTotalExpense] = useState<number>(0)

	function filterValueDate(month: number) {
		const transactionsInMonth = transactions.filter((transaction) => {
			const transactionDate = new Date(transaction.date)
			const transactionMonth = transactionDate.getMonth()
			if (transactionMonth === month) {
				return transactionMonth
			}
		})

		const totalExpense = transactionsInMonth.reduce((acc, curr) => acc + curr.value, 0)

		return totalExpense
	}
	useEffect(() => {
		const filterExpenses = transactions.filter((transaction) => transaction.expense === true)
		const filterTotalExpense = filterExpenses.reduce((acc, curr) => acc + curr.value, 0)

		setTotalExpense(filterTotalExpense)

		filterValueDate(6)

	}, [transactions])

	useEffect(() => {
		if (user.email !== '') {
			getPatrimony(user.email)
		}

	}, [user])

	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Welcome, Davi Souza! ✌️</span>
				<span className="font-light text-slate-400">Here is what is happening with your patrimony today.</span>
			</div>
			<div className="w-full lg:w-2/3 p-5 flex flex-col items-start justify-center ">
				<div className="w-full flex items-start justify-around">
					<div className="h-20 w-40 flex items-center justify-around bg-purpleHeader rounded-md lg:w-72">
						<HiArrowCircleDown className="text-4xl mr-[-30px] text-teal-200 xl:text-6xl" />
						<div className="flex flex-col">
							<span className="lg:hidden">Income</span>
							<span className="hidden lg:block text-lg font-thin">Total Income</span>
							<div className="flex items-center justify-center">
								<span className="lg:text-xl">R${patrimony},00</span>
								{/* <span className="hidden lg:flex ml-5 text-sm">
									<Stat>
										<StatArrow type='increase' />
										23.36%
									</Stat>
								</span> */}
							</div>
						</div>
					</div>
					<div className="h-20 w-40 flex items-center justify-around bg-purpleHeader rounded-md lg:w-72">
						<HiArrowCircleUp className="text-4xl mr-[-30px] text-red-400 xl:text-6xl" />
						<div className="flex flex-col">
							<span className="lg:hidden">Outcome</span>
							<span className="hidden lg:block text-lg font-thin">Total Outcome</span>
							<div className="flex items-center justify-center">
								<span className="lg:text-xl">R${totalExpense},00</span>
								{/* <span className="hidden lg:flex ml-5 text-sm">
									<Stat>
										<StatArrow type='decrease' />
										23.36%
									</Stat>
								</span> */}
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col mt-10 p-5 bg-purpleHeader rounded">
					<span className="text-xl mb-3 font-semibold">Analytics</span>
					<span className="font-thin">
						Jan - R$ {filterValueDate(1)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(1) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Feb - R$ {filterValueDate(2)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(2) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Mar - R$ {filterValueDate(3)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(3) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Apr - R$ {filterValueDate(4)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(4) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						May - R$ {filterValueDate(5)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(5) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Jun - R$ {filterValueDate(6)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(6) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Jul - R$ {filterValueDate(7)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(7) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Aug - R$ {filterValueDate(8)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(8) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Sep - R$ {filterValueDate(9)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(9) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Oct - R$ {filterValueDate(10)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(10) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Nov - R$ {filterValueDate(11)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(11) / 100} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">
						Dec - R$ {filterValueDate(12)},00
					</span>
					<Progress colorScheme='blue' height='22px' value={filterValueDate(12) / 100} className="mb-3 rounded outline-none border-none" />
				</div>
				<div className="w-full mt-10 p-5 bg-purpleHeader rounded">
					<span className="text-xl font-semibold">Transactions</span>
					<TableContainer>
						<Table variant='simple'>
							<Thead>
								<Tr>
									<Th>To convert</Th>
									<Th>into</Th>
									<Th isNumeric>multiply by</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>inches</Td>
									<Td>millimetres (mm)</Td>
									<Td isNumeric>25.4</Td>
								</Tr>
								<Tr>
									<Td>feet</Td>
									<Td>centimetres (cm)</Td>
									<Td isNumeric>30.48</Td>
								</Tr>
								<Tr>
									<Td>yards</Td>
									<Td>metres (m)</Td>
									<Td isNumeric>0.91444</Td>
								</Tr>
							</Tbody>
						</Table>
					</TableContainer>
				</div>
			</div>
		</DefaultBackground>
	)
}
