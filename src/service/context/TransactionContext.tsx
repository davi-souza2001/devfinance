import { createContext, useEffect, useState } from 'react'
import UseAuth from '../hooks/useAuth'

interface Transaction {
	name: string
	value: number
	recurrent: boolean
	expense: boolean
}

interface TransactionProps {
	transactions: Transaction[]
	getTransactions: (email: string) => Promise<void>
	sendTransaction: (data: Transaction, email: string) => Promise<void>
}

const TransactionContext = createContext<TransactionProps>({
	transactions: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	getTransactions: async () => { },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	sendTransaction: async () => { },
})

export function TransactionProvider(props: { children: React.ReactNode }) {
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const { user } = UseAuth()

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

		const transactionsReceiveds = await response.json()
		setTransactions(transactionsReceiveds)
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
			sendTransaction
		}}>
			{props.children}
		</TransactionContext.Provider>
	)
}

export default TransactionContext
