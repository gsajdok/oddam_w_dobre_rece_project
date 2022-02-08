import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeSimpleSteps} from "./HomeSimpleSteps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp";
import {HomeContact} from "./HomeContact";

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
        </>
    )
}