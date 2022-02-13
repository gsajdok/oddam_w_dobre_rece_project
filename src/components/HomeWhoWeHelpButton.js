import {useEffect, useMemo, useState} from "react";

export const HomeWhoWeHelpButton = ({pageClickHandler, i, currentPage}) => {
    const [isActive, setActive] = useState(false);

    const buttonClickHandler = () => {
        pageClickHandler();
    }

    useMemo(() => {
        setActive(false);
        if(currentPage === i+1) {
            setActive(true);
        }
    }, [currentPage])

    return (
        <>
        <button onClick={buttonClickHandler} className={`button button--small ${isActive && "button--active"}`} id={i+1}>{i+1}</button>
        </>
    )
}