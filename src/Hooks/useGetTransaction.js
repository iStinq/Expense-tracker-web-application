import { onSnapshot, orderBy, query, where, collection } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";



export const useGetTransaction = () => {
    const [transactions, setTransactions] = useState([]);
    const transactionRef = collection(db, "transactions");
    const [user] = useAuthState(auth);
    const userID = user?.uid;

    const getTransactions = async () => {
        try {
            const queryTransactions = query(
                transactionRef,
                where("userID", "==", userID),
                orderBy("createdAt")
            );

            let docs = [];
            onSnapshot(queryTransactions, (snapshot) =>{
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id
                    docs.push({...data, id});
                })
            });

            setTransactions(docs);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTransactions();
    }, [])


    return { transactions }
}