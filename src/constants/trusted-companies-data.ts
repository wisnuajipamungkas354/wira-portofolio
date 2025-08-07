import { StaticImageData } from "next/image";

import AdobeIcon from "../../public/icons/icon-adobe.svg";
import AirbnbIcon from "../../public/icons/icon-airbnb.svg";
import DataBricksIcon from "../../public/icons/icon-databricks.svg";
import DropboxIcon from "../../public/icons/icon-dropbox.svg";
import NetflixIcon from "../../public/icons/icon-netflix.svg";
import PostManIcon from "../../public/icons/icon-postman.svg";
import UpworkIcon from "../../public/icons/icon-upwork.svg";
import ZoomIcon from "../../public/icons/icon-zoom.svg";

type TrustedCompaniesImageProps = {
  src: StaticImageData;
  alt: string;
};

export const trustedCompaniesData: TrustedCompaniesImageProps[] = [
  {
    src: AdobeIcon,
    alt: "Adobe",
  },
  {
    src: AirbnbIcon,
    alt: "Airbnb",
  },
  {
    src: DataBricksIcon,
    alt: "DataBricks",
  },
  {
    src: DropboxIcon,
    alt: "Dropbox",
  },
  {
    src: NetflixIcon,
    alt: "Netflix",
  },
  {
    src: PostManIcon,
    alt: "PostMan",
  },
  {
    src: UpworkIcon,
    alt: "Upwork",
  },
  {
    src: ZoomIcon,
    alt: "Zoom",
  },
];
