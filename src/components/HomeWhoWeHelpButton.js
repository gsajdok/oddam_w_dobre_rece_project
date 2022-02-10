import {useEffect, useState} from "react";

export const HomeWhoWeHelpButton = ({pageClickHandler, i}) => {
    const buttonClickHandler = () => {
        pageClickHandler();
    }

    return (
        <>
        <button onClick={buttonClickHandler} className={`button button--small`} id={i+1}>{i+1}</button>
        </>
    )
}