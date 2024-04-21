import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { provider, auth } from "../firebase-config";

export const Home = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        navigate('/expense');
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={signInWithGoogle}>Sign in using Google</button>
        </div>
    )
}