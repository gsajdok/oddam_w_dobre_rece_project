import { query, collection, getDocs, where } from "firebase/firestore";
import {auth, db, logout} from "./firebase";

export const fetchUserEmail = async (setEmail, user) => {
    try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setEmail(data.email);
    } catch (err) {
        console.error(err);
        //alert("An error occured while fetching user data");
    }
};