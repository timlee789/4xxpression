import { getSession } from "next-auth/react"
import StoreInfo from "../../components/storeinfo";
import db from "../../utils/db";

const handler = async (res, req) => {
    const session = await getSession({req});
    if (!session) {
        return res.status(401).send({message: 'signin required'});
    }
    const { user } = session;
    await db.connect();
    const campaign = await UsaVipStores.find({user: user.storename});
    await db.disconnect();
    res.send(orders);
};
export default handler;