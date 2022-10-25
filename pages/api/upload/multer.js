import db from '../../../utils/db';
import UsaVipStores from '../../../models/Stores';
import upload from './filehelper';

const putHandler = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }
  const { formData } = req.body;
  const result = upload.single(formData);

  res.send(result);
};

export default putHandler;
