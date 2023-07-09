import { createContext } from 'react'

interface Transaction {
	name: string;
	value: number;
	recurrent: boolean;
	expense: boolean;
}

interface TransactionProps {
	sendTransaction: (data: Transaction, email: string, token: string) => Promise<void>
}

const TransactionContext = createContext<TransactionProps>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	sendTransaction: async () => { },
})

export function TransactionProvider(props: { children: React.ReactNode }) {
	async function sendTransaction(data: Transaction, email: string, token: string) {
		const transaction = { ...data, emailUser: email }
		await fetch(`${process.env.NEXT_PUBLIC_ROUTE}/expenses/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${token}`
			},
			body: JSON.stringify(transaction)
		})
	}

	return (
		<TransactionContext.Provider value={{
			sendTransaction
		}}>
			{props.children}
		</TransactionContext.Provider>
	)
}

export default TransactionContext
