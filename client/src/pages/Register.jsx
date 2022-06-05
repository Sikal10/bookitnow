import {Link} from "react-router-dom";
import Navigation from "../components/Navigation";

const Register = () => {
    return (
        <>
            <Navigation />
            <div className={"register"}>
                <div className={"register__container"}>
                    <h2>Sign in or Create an account</h2>

                    <form action="">
                        <input type="text" placeholder={"username"}/>
                        <input type="password" placeholder={"password"}/>
                        <input type="password" placeholder={"confirm password"}/>

                        <button>Register</button>
                    </form>
                    <p>Already have an account? <span><Link to={"/login"}>Login</Link></span></p>
                </div>
            </div>
        </>
    );
};

export default Register;