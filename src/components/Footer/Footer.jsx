import Logo from "../../assets/svg component/Logo";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__about">
                <div className="about">
                    <span className="title">
                        Protoapp
                    </span>
                    <span className="company">
                        Camp One Inc. LLC
                    </span>
                    <p className="description">
                        Que ad Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Qui reprehenderit rerum ullam necessitatibus,
                        at ab quae expedita illo, nobis ipsum maxime assumenda dolorum quo
                        ut deleniti possimus. Eveniet, voluptatem, provident.
                    </p>
                </div>
            </div>
            <span className="footer__copyright">
                © 2019 Protoapp. All rights reserved.
            </span>
        </div>
    );
}

export default Footer;