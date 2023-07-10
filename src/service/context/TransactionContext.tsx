import { createContext, useEffect, useState } from 'react'

import UseAuth from '../hooks/useAuth'

export interface Transaction {
	id?: string
	name: string
	value: number
	recurrent: boolean
	expense: boolean
	date: number
}

interface TransactionProps {
	transactions: Transaction[]
	getTransactions: (email: string) => Promise<void>
	getSearchTransactions: (email: string, search: string) => Promise<void>
	sendTransaction: (data: Transaction, email: string) => Promise<void>
	updatePatrimony: (email: string, value: number, expense: boolean) => Promise<void>
	deleteTransaction: (id: string) => Promise<void>
}

const TransactionContext = createContext<TransactionProps>({
	transactions: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	getTransactions: async () => { },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	getSearchTransactions: async () => { },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	sendTransaction: async () => { },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updatePatrimony: async () => { },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	deleteTransaction: async () => { }
})

export function TransactionProvider(props: { children: React.ReactNode }) {
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const { user, getPatrimony } = UseAuth()

	async function sendTransaction(data: Transaction, email: string) {
		const transaction = { ...data, emailUser: email }
		await fetch(`${process.env.NEXT_PUBLIC_ROUTE}/expenses/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${user.token}`
			},
			body: JSON.stringify(transaction)
		})
	}

	async function getTransactions(email: string) {
		const response = await fetch(`${process.env.NEXT_PUBLIC_ROUTE}/expenses/getAll/${email}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${user.token}`
			},
		})

		const transactionsReceivedes = await response.json()
		setTransactions(transactionsReceivedes)
	}

	async function getSearchTransactions(email: string, search: string) {
		const response = await fetch(`
		${process.env.NEXT_PUBLIC_ROUTE}/expenses/search/${email}/${search}
		`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${user.token}`
			},
		})

		const transactionsReceivedes = await response.json()
		setTransactions(transactionsReceivedes)
	}

	async function deleteTransaction(id: string) {
		await fetch(`${process.env.NEXT_PUBLIC_ROUTE}/expenses/delete/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${user.token}`
			},
		})
	}

	async function updatePatrimony(email: string, value: number, expense: boolean) {
		if (expense) {
			const response = await getPatrimony(email)
			const patrimony = response - value
			const data = { email, patrimony }
			await fetch(`${process.env.NEXT_PUBLIC_ROUTE}/user/updatePatrimony`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'authorization': `Bearer ${user.token}`
				},
				body: JSON.stringify(data)
			})
		} else {
			const response = await getPatrimony(email)
			const patrimony = response + value
			const data = { email, patrimony }
			await fetch(`${process.env.NEXT_PUBLIC_ROUTE}/user/updatePatrimony`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'authorization': `Bearer ${user.token}`
				},
				body: JSON.stringify(data)
			})
		}

	}

	useEffect(() => {
		if (user.token !== '') {
			getTransactions(user.email)
		}
	}, [user])

	return (
		<TransactionContext.Provider value={{
			transactions,
			getTransactions,
			getSearchTransactions,
			sendTransaction,
			deleteTransaction,
			updatePatrimony
		}}>
			{props.children}
		</TransactionContext.Provider>
	)
}

export default TransactionContext
