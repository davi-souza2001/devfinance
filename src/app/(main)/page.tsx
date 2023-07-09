'use client'
import { HiArrowCircleDown, HiArrowCircleUp } from 'react-icons/hi'
import { Progress, Stat, StatArrow, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { DefaultBackground } from '@/components/DefaultBackground'

export default function Home() {
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
								<span className="lg:text-xl">R$32,00</span>
								<span className="hidden lg:flex ml-5 text-sm">
									<Stat>
										<StatArrow type='increase' />
										23.36%
									</Stat>
								</span>
							</div>
						</div>
					</div>
					<div className="h-20 w-40 flex items-center justify-around bg-purpleHeader rounded-md lg:w-72">
						<HiArrowCircleUp className="text-4xl mr-[-30px] text-red-400 xl:text-6xl" />
						<div className="flex flex-col">
							<span className="lg:hidden">Outcome</span>
							<span className="hidden lg:block text-lg font-thin">Total Outcome</span>
							<div className="flex items-center justify-center">
								<span className="lg:text-xl">R$32,00</span>
								<span className="hidden lg:flex ml-5 text-sm">
									<Stat>
										<StatArrow type='decrease' />
										23.36%
									</Stat>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col mt-10 p-5 bg-purpleHeader rounded">
					<span className="text-xl mb-3 font-semibold">Analytics</span>
					<span className="font-thin">Jan - R$ 52,00</span>
					<Progress colorScheme='blue' height='22px' value={20} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">Fev - R$ 52,00</span>
					<Progress colorScheme='blue' height='22px' value={20} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">Mar - R$ 52,00</span>
					<Progress colorScheme='blue' height='22px' value={20} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">Abr - R$ 52,00</span>
					<Progress colorScheme='blue' height='22px' value={20} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">Mai - R$ 52,00</span>
					<Progress colorScheme='blue' height='22px' value={20} className="mb-3 rounded outline-none border-none" />
					<span className="font-thin">Jun - R$ 52,00</span>
					<Progress colorScheme='blue' height='22px' value={20} className="mb-3 rounded outline-none border-none" />
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
