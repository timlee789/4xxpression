import mongoose from 'mongoose';

const storesSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  storename: { type: String, required: true },
  url: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  img1: { type: String },

  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});
const Stores = mongoose.models.stores || mongoose.model('stores', storesSchema);
export default Stores;
