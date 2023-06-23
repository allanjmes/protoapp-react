import PlayStoreBadge from "../../assets/svg-component/PlayStoreBadge";
import AppStoreBadge from "../../assets/svg-component/AppStoreBadge";
import BgLeaves from "../../assets/svg-component/BgLeaves";
import BgDecals1 from "../../assets/svg-component/BgDecals1";

const Hero = ({ screenWidth }) => {
    let badgeWidth, badgeHeight;

    if (screenWidth < 768) {
      badgeWidth = 80;
      badgeHeight = 40;
    } else if (screenWidth >= 768 && screenWidth <= 1440) {
      badgeWidth = 200;
      badgeHeight = 140;
    } else {
      badgeWidth = 300;
      badgeHeight = 240;
    }

    return (
    <div className="hero">
        <BgLeaves />
        <BgDecals1 />
        <div className="hero__description">
            <span>
                Protoapp
            </span>
            <p>
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
            </p>
            <div className="cta-btn">
                Get Started
            </div>
        </div>
        <div className="hero__download-btn">
            <PlayStoreBadge width={badgeWidth} height={badgeHeight} />
            <AppStoreBadge width={badgeWidth} height={badgeHeight} />
        </div>
        <div className="hero__btm-description">
            <span>
                Meet Protoapp
            </span>
            <p>
                The app lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
            </p>
        </div>
    </div>
    );
}

export default Hero;