import mongoose from "mongoose";

const usavipstoresSchema = new mongoose.Schema(
    {
        id: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        email: {type: String},
        storetitle:{type: String},
        name: {type: String, required: true },
        phone: {type: String},
        address: {type: String},
        city: {type: String},
        zip: {type:String},
        state: {type:String},
        storename: {type:String},
        img1: {type:String},
        img2: {type:String},
        img3: {type:String},
        campaign: [
            {
                campaignname: {type:String},
                period: {type:String},
                reach: {type:String},
                visit: {type:String},
                content: {type:String},
            }
        ]
    }
);
const UsaVipStores = mongoose.models.usavipstores || mongoose.model('usavipstores', usavipstoresSchema);
export default UsaVipStores;