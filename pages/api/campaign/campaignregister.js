
import db from "../../../utils/db";
import Store from '../../../models/Stores'

const putHandler = async(req, res) => {
    await db.connect();
    const campaigndb = await Store.findById(req.query.id);
    if (campaigndb) {
        // campaigndb.campaign.campaignname = req.body.eventname;
        // campaigndb.campaign.period = req.body.eventperiod;
        // campaigndb.campaign.reach = req.body.adreach;
        // campaigndb.campaign.visitor = req.body.visitor;
        //await campaigndb.Store.save();
        await Store.updateMany({},{
            campaign: 'test'
        })
        await db.disconnect();
        res.send({ message: "Campaign Updated successfully"});
    } else {
        await db.disconnect();
        res.status(404).send({ message: "Campaign Update failed"})
    }
}

export default putHandler;