import {Link} from "react-router-dom";
import Navigation from "../components/Navigation";
import {useState} from "react";
import {registerUser} from "../api/user.api";
import {toast} from "react-toastify";
import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const {isLoading, mutate} = useMutation(registerUser, {
        onSuccess: () => navigate("/login")
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) return toast.error("Passwords do not match.");

        mutate({username, email, password});
    };

    return (
        <>
            <Navigation />
            <div className={"register"}>
                <div className={"register__container"}>
                    <h2>Sign in or Create an account</h2>

                    <form onSubmit={handleRegister}>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder={"username"}/>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder={"email"}/>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder={"password"}/>
                        <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder={"confirm password"}/>

                        <button disabled={isLoading} type={"submit"}>Register</button>
                    </form>
                    <p>Already have an account? <span><Link to={"/login"}>Login</Link></span></p>
                </div>
            </div>
        </>
    );
};

export default Register;