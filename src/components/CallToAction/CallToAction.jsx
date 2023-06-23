import LaravelBadge from "../../assets/svg component/LaravelBadge";
import EyeglassBadge from "../../assets/svg component/EyeglassBadge";

const CallToAction = () => {
    return (
        <div className="call-to-action">
            <span className="call-to-action__title">
                Last Call to Action
            </span>
            <p className="call-to-action__description">
                Another section content goes here
            </p>
            <div className="call-to-action__btn">
                <div className="automation">
                    <div className="logo">
                        <LaravelBadge />
                        <div className="sub-title">
                            <span>
                                AUTOMATION
                            </span>
                        </div>
                    </div>
                    <div className="description">
                        <span className="short-description">
                            ROLL OUT
                        </span>
                        <span className="title">
                            Automatic Prototyping
                        </span>
                        <p className="long-description">
                            Webpack is the most powerful and flexible
                            asset compilation tool available today. With
                            that power, however, comes a certain level of complexity.
                        </p>
                    </div>
                </div>
                <div className="simplicity">
                    <div className="logo">
                        <EyeglassBadge />
                        <div className="sub-title">
                            <span>
                                SIMPLICITY
                            </span>
                        </div>
                    </div>
                    <div className="description">
                        <span className="short-description">
                            SIP COFFEE
                        </span>
                        <span className="title">
                            Complexity Simplified
                        </span>
                        <p className="long-description">
                            I know too many backend developers who are stifled
                            by one glaring phobia: CSS, How do you construct a
                            layout when nothing lines up?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;