import {HomeContact} from "./HomeContact";
import {ShareItemsHeader} from "./ShareItemsHeader";
import {ShareItemsBody} from "./ShareItemsMainBody";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../helpers/firebase";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const ShareItems = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect( () => {
        if(user===null) {
            navigate('/')
        }
    })

    return (
        <>
            <ShareItemsHeader/>
            <ShareItemsBody/>
            <HomeContact/>
        </>
    )
}