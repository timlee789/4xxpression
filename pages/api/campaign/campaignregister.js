
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
   const { campaignname, period, reach, visit, content } = req.body;
//    if( 
//         req.body
//    ) {
//     res.status(422).json({
//         message: 'Validation Error'
//     });
//     return;
//    }
   await db.connect();
//    const newCampaign = {
//         campaignname, period, reach, visit, content
//    }
   const campaign = await UsaVipStores.updateOne(
        {name: user.name},
        {
            $push: {
                campaign: {
                    campaignname, period, reach, visit, content 
                }
            }
        }
   )
   await db.disconnect();
   res.send(campaign);
}

export default putHandler;