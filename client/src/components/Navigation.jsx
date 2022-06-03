import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={"navigation"}>
            <div className="navigation__container">
                <span className={"navigation__container-logo"}>
                    <Link to={"/"}>Bookit</Link>
                </span>

                <div className="navigation__container-items">
                    <div className="nav-item">Login</div>
                    <div className="nav-item">Register</div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;