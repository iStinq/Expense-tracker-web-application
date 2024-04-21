import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAddTransaction } from "../Hooks/useAddTransaction";
import { useGetTransaction } from "../Hooks/useGetTransaction";
import { useState } from "react";


export const Expense = () => {
    const [user] = useAuthState(auth);
    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");
    const {addTransaction} = useAddTransaction();
    const {transactions} = useGetTransaction();
    
    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            description,
            transactionAmount,
            transactionType
        });
    }

    return (
        <>
            <div>
                <div>
                    <h1>{user?.displayName}'s Expense Tracker</h1>
                    <div>
                        <h3>Your balance</h3>
                        <h2>$0.00</h2>
                    </div>
                    <div>
                        <div>
                            <h4>Income</h4>
                            <p>$0.00</p>
                        </div>
                        <div>
                            <h4>Expenses</h4>
                            <p>$0.00</p>
                        </div>
                    </div>
                    <form action="" onSubmit={onSubmit}>
                        <input type="text" placeholder="Description" required onChange={(event) => setDescription(event.target.value) }/>
                        <input type="number" placeholder="Amount" required onChange={(event) => setTransactionAmount(event.target.value) } />
                        <input type="radio" value="expense" id="expense" name="radioButton" required onChange={(event) => setTransactionType(event.target.value) }/>
                        <label htmlFor="expense">Expense</label>
                        <input type="radio" value="income" id="income" name="radioButton" required onChange={(event) => setTransactionType(event.target.value) }/>
                        <label htmlFor="income">Income</label>
                        <button type="submit">Add Transaction</button>
                    </form>
                </div>
            </div>
            <div>
                <h3>Transactions</h3>
                <ul>
                    {transactions.map((transaction) => {
                        return <li>
                            <h4>{transaction.description}</h4>
                            <p>${transaction.transactionAmount} - <label>{transaction.transactionType}</label></p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}