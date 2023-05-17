'use client'
import { DefaultBackground } from "@/components/DefaultBackground";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stat, StatArrow, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { HiOutlineUserCircle, HiPencil } from "react-icons/hi";

export default function Account() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<DefaultBackground>
			<div className="h-24 w-full p-5 flex flex-col items-start justify-center">
				<span className="text-xl font-semibold">Your account, Davi Souza! ✌️</span>
				<span className="font-light text-slate-400">Here you can manage your personal datas.</span>
			</div>
			<div className="w-3/3 lg:w-1/2 flex items-center justify-start m-8 p-5 bg-purpleHeader rounded">
				<HiOutlineUserCircle className='h-14 w-14 mr-2' />
				<span className="text-2xl font-semibold">Davi Souza</span>
				<HiPencil className="ml-5 text-xl" />
			</div>
			<div className="w-3/3 lg:w-1/2 flex items-center justify-center m-10 p-5 bg-purpleHeader rounded">
				<div className="w-1/2 flex flex-col">
					<span className="flex items-center text-xl mb-3 font-semibold">Patrimony</span>
					<span className="text-2xl font-semibold">R$ 52,00</span>
				</div>
				<div className="w-1/2 flex flex-col">
					<span className="flex items-center text-xl mb-3 font-semibold text-green-300">Next Month</span>
					<span className="text-2xl font-semibold text-green-300">R$ 52,00</span>
				</div>
			</div>
			<div className="w-3/3 lg:w-1/2 flex items-center justify-center m-10 p-5 bg-purpleHeader rounded">
				<Button onClick={onOpen} className="p-5 text-xl hover:bg-[#2f2f70]">Add Transaction</Button>
			</div>
			<div className="p-1rounded bg-[#232358]">
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Modal Title</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus impedit
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3} onClick={onClose}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</div>
			<div className="w-3/3 lg:w-1/2 flex flex-col m-10 p-5 bg-purpleHeader rounded">
				<span className="text-xl font-semibold">Fixed Expenses</span>
				<TableContainer>
					<Table variant='simple' size={"lg"}>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th isNumeric>Value</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>inches</Td>
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
