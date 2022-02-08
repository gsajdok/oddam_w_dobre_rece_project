import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeSimpleSteps} from "./HomeSimpleSteps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp";
import {HomeContact} from "./HomeContact";

export const Home = () => {
    return (
        <>
            <HomeHeader id="header"/>
            <HomeThreeColumns id="threeColumns"/>
            <HomeSimpleSteps id="simpleSteps"/>
            <HomeAboutUs id="aboutUs"/>
            <HomeWhoWeHelp id="whoWeHelp"/>
            <HomeContact id="contact"/>
        </>
    )
}