import AppStoreBadge from "../../assets/svg-component/AppStoreBadge";
import PlayStoreBadge from "../../assets/svg-component/PlayStoreBadge";
import BgDecals2 from "../../assets/svg-component/BgDecals2";

const Download = ({ screenWidth }) => {
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
        <div className="download">
            <div className="download__description">
                <span>
                    Deep dive. Ready?
                </span>
                    <p>
                        So are we. Unless. You're Not. Word filler.
                    </p>
                </div>
                <div className="download__download-btn">
                    <PlayStoreBadge width={badgeWidth} height={badgeHeight} />
                    <AppStoreBadge width={badgeWidth} height={badgeHeight} />
                </div>
                <BgDecals2 />
        </div>
    );
}

export default Download;