import { getSession } from "next-auth/react"
import User from "../../../models/Users";
import db from "../../../utils/db";
//import StoreScreen from "../../store/[id]";


const handler = async (req, res) => {
    const session = await getSession({req});
    if(!session) {
        return  res.status(401).send({message: 'signin required'});
    }
    const {user} = session;
    await db.connect();
    //const campaigns = user.name;
    const campaigns = await User.find({ name: user.name});
    await db.disconnect();
    res.send(campaigns);
    //return  res.status(201).send({message: user.name});
    
};
export default handler;