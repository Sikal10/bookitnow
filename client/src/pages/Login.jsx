import Navigation from "../components/Navigation";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {loginUser} from "../api/user.api";
import {useMutation} from "react-query";
import {Button} from "antd";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {isLoading, mutate} = useMutation(loginUser, {
        onSuccess: () => navigate("/")
    });

    const handleLogin = (e) => {
        e.preventDefault();

        mutate({username, password});
    }

    return (
        <>
            <Navigation />
            <div className={"login"}>
                <div className={"login__container"}>
                    <h2>Sign in or Create an account</h2>
                    <form onSubmit={handleLogin}>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder={"username"}/>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder={"password"}/>

                        <Button className={"button"} onClick={handleLogin} loading={isLoading}>Login</Button>
                    </form>
                    <p>Don't have an account? <span><Link to={"/register"}>Register</Link></span></p>
                </div>
            </div>
        </>
    );
};

export default Login;