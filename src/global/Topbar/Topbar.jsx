import Logo from "../../assets/svg component/Logo";

const Topbar = () => {
    return (
        <div className="header">
            <div className="navbar">
                <Logo />
                <span className="navbar__title" path="/">Protoapp</span>
                <ul className="navbar__navigation">
                    <li className="navbar__btn" path="/">
                        Home
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Topbar;