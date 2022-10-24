
import db from "../../../utils/db";
import UsaVipStores from "../../../models/Stores";
import { getSession } from "next-auth/react";

const putHandler = async(req, res) => {
    const session = await getSession({req});
    if(!session) {
        return res.status(401).send({message: " Signin Required"});
    }
    const {user} = session;
   if(req.method !== 'POST') {
    return
   }
   const { productname, price, description1, description2, image } = req.body;

   await db.connect();
//    const newCampaign = {
//         campaignname, period, reach, visit, content
//    }
   const product = await UsaVipStores.updateOne(
        {name: user.name},
        {
            $push: {
                product: {
                    productname, price, description1, description2, image 
                }
            }
        }
   )
   await db.disconnect();
   res.send(product);
}

export default putHandler;