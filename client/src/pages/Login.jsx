import Navigation from "../components/Navigation";
import {Link} from "react-router-dom";

const Login = () => {

    return (
        <>
            <Navigation />
            <div className={"login"}>
                <div className={"login__container"}>
                    <h2>Sign in or Create an account</h2>
                    <form action="">
                        <input type="text" placeholder={"username"}/>
                        <input type="password" placeholder={"password"}/>

                        <button>Login</button>
                    </form>
                    <p>Don't have an account? <span><Link to={"/register"}>Register</Link></span></p>
                </div>
            </div>
        </>
    );
};

export default Login;