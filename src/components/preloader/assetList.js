import AboutBg from "../../assets/images/about/AboutBg.webp";
import AboutTitle from "../../assets/images/about/AboutTitle.webp";
import RulesBg from "../../assets/images/rules/RulesBg.webp";
import RulesTitle from "../../assets/images/rules/RulesTitle.webp";
import ContactUsTitle from "../../assets/images/contactus/ContactUsTitle.webp";
import TimelineBg from "../../assets/images/timeline/TimelineBg.webp";
import TimelineTitle from "../../assets/images/timeline/TimelineTitle.webp";
import StepBg1 from "../../assets/images/timeline/StepBg_1.webp";
import StepBg2 from "../../assets/images/timeline/StepBg_2.webp";
import StepBg3 from "../../assets/images/timeline/StepBg_3.webp";
import RegisterBg from "../../assets/images/register/RegisterBg.webp";
import RegisterTitle from "../../assets/images/register/RegisterTitle.webp";
import KnowMoreBg from "../../assets/images/knowmore/KnowMoreBg.webp";
import FooterStrip from "../../assets/images/register/footerStrip.webp";
import BackArrow from "../../assets/images/register/BackArrow.png";
import BandInfoTitle from "../../assets/images/register/BandInfoTitle.png";
import ContactInfoTitle from "../../assets/images/register/ContactInfoTitle.png";
import RegisterTitle1 from "../../assets/images/register/RegisterTitle.webp";
import heroBg from "../../assets/images/home/heroBg.webp";
import heroLogo from "../../assets/images/home/heroLogo.webp";
import RegisterNow from "../../assets/images/home/RegisterNow.webp";
import ScrollDown from "../../assets/images/home/ScrollDown.webp";

// ── Past winners page: static images ─────────────────────────
import PastWinnersBg from "../../assets/images/pastWinners/PastWinnersBg.png";
import PastWinnersTitle from "../../assets/images/pastWinners/PastWinnersTitle.png";
import PastWinnersCardBg from "../../assets/images/pastWinners/PastWinnersCardBg.png";
import PastWinnersCardBg1 from "../../assets/images/pastWinners/PastWinnersCardBg1.png";
import WinnerDetailsBg from "../../assets/images/pastWinners/WinnerDetailsBg.png";
import PastWinnersBackArrow from "../../assets/images/pastWinners/BackArrow.png";
import SideImage_1 from "../../assets/images/pastWinners/2010-2015/sideimage1.png";
import SideImage_2 from "../../assets/images/pastWinners/2010-2015/sideimage2.png";

// ── Past winners page: every image inside pastWinnersData ────
// Walks the data and collects each image URL (decade titles, album
// stacks, band photos, left/middle/right images), so any image you
// add to pastWinnersData later is preloaded automatically.
import { pastWinnersData } from "../../data/pastWinnersData.js";

const IMAGE_REGEX = /\.(png|jpe?g|webp|gif|svg|avif)(\?.*)?$/i;

const collectImages = (value, found = new Set()) => {
  if (!value) return found;

  if (typeof value === "string") {
    if (IMAGE_REGEX.test(value) || value.startsWith("data:image")) {
      found.add(value);
    }
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectImages(item, found));
  } else if (typeof value === "object") {
    Object.values(value).forEach((item) => collectImages(item, found));
  }

  return found;
};

const pastWinnersImages = [...collectImages(pastWinnersData)];

const assetList = {
  images: [
    ...new Set([
      ContactUsTitle,
      AboutBg,
      BackArrow,
      ScrollDown,
      ContactInfoTitle,
      heroBg,
      AboutTitle,
      RegisterTitle1,
      BandInfoTitle,
      heroLogo,
      RulesBg,
      RegisterNow,
      RulesTitle,
      TimelineBg,
      TimelineTitle,
      StepBg1,
      StepBg2,
      StepBg3,
      RegisterBg,
      RegisterTitle,
      KnowMoreBg,
      FooterStrip,

      // past winners
      PastWinnersBg,
      PastWinnersTitle,
      PastWinnersCardBg,
      PastWinnersCardBg1,
      WinnerDetailsBg,
      PastWinnersBackArrow,
      SideImage_1,
      SideImage_2,
      ...pastWinnersImages,
    ]),
  ],

  videos: [],
};

export default assetList;