
import db from "../../../utils/db";
import Store from '../../../models/Stores'

const putHandler = async(req, res) => {
    await db.connect();
    const campaigndb = await Store.findById(req.query.id);
   
        // campaigndb.campaign.campaignname = req.body.eventname;
        // campaigndb.campaign.period = req.body.eventperiod;
        // campaigndb.campaign.reach = req.body.adreach;
        // campaigndb.campaign.visitor = req.body.visitor;
        //await campaigndb.Store.save();
        await Store.updateMany({_id: req.query.id},{
            campaignname: req.body.eventname,
            period: req.body.eventperiod,
            reach: req.body.adreach,
            visitor: req.body.visitor,
        })
        await db.disconnect();
        //console.log(campaigndb)
        res.send({ message: "Campaign Updated successfully"});
   
}

export default putHandler;