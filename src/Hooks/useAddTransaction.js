import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase-config";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";



export const useAddTransaction = () => {
    const transactionRef = collection(db, "transactions");
    const [user] = useAuthState(auth);
    
    const addTransaction = async ({
        description,
        transactionAmount,
        transactionType
    }) => {
        await addDoc(transactionRef, {
            userID : user?.uid,
            description,
            transactionAmount,
            transactionType,
            createdAt : serverTimestamp()
        });
    }




    return {addTransaction}
}