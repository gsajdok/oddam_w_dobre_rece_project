import {scroller} from "react-scroll";

export const scrollFunction = (id) => {
    scroller.scrollTo(id, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart"}
    )
}