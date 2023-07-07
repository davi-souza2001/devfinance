'use client'
import { DefaultBackground } from '@/components/DefaultBackground'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

export default function Transactions() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 mt-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your Transactions, Davi Souza! 📆</span>
				<span className="font-light text-slate-400">Here you can manage your monthly transactions.</span>
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
								<ModalCloseButton className="bg-red-400 hover:bg-red-300" />
								<form className="flex flex-col items-start justify-center">
									<label htmlFor="name" className="font-semibold text-lg mb-2">Name</label>
									<input type="text" className="h-7 bg-slate-200 mb-2 border-none outline-none rounded-sm mb-5" />
									<label htmlFor="value" className="font-semibold text-lg mb-2">Value</label>
									<input type="number" className="h-7 w-28 bg-slate-200 border-none outline-none rounded-sm mb-5" />
									<label htmlFor="recurrent" className="font-semibold text-lg mb-2">Recurrent</label>
									<select name="recurrent" id="recurrent" className="h-7 w-28 bg-slate-200 border-none outline-none rounded-sm">
										<option value="yes">Yes</option>
										<option value="no">No</option>
									</select>
									<div className="w-full flex items-end justify-end">
										<button className="p-2 font-semibold rounded-md transition-all bg-green-400 hover:bg-green-300">Submit</button>
									</div>
								</form>
							</ModalBody>

						</ModalContent>
					</Modal>
				</div>
			</div>
			<div className="w-3/3 lg:w-1/2 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="text-xl font-semibold">Fixed Expenses</span>
				<TableContainer>
					<Table variant='simple' size={'lg'}>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th isNumeric>Value</Th>
								<Th>Recurrent</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>inches</Td>
								<Td isNumeric>25.4</Td>
								<Td>Yes</Td>
							</Tr>
							<Tr>
								<Td>feet</Td>
								<Td isNumeric>30.48</Td>
								<Td>Yes</Td>
							</Tr>
							<Tr>
								<Td>yards</Td>
								<Td isNumeric>0.91444</Td>
								<Td>Yes</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</div>
		</DefaultBackground>
	)
}
