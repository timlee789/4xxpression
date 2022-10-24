import Stores from '../models/Stores';
import db from '../utils/db';
import StoreInfo from '../components/storeinfo';
import Layout from '../components/layout';

export default function Home({ storeinfo }) {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 ml-7 ">
        {storeinfo.map((sto) => (
          <StoreInfo storeinfo={sto} key={sto.id} />
        ))}
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const stores = await Stores.find().lean();
  return {
    props: {
      storeinfo: stores.map((sto) => ({
        _id: sto._id.toString(),
        name: sto.name,
        phone: sto.phone || null,
        address: sto.address || null,
        city: sto.city || null,
        zip: sto.zip || null,
        state: sto.state || null,
        storename: sto.storename,
        img1: sto.img1 || null,
        img2: sto.img2 || null,
        campaign: [
          {
            campaignname: sto.campaignname || null,
            period: sto.period || null,
            reach: sto.reach || null,
            visitor: sto.visitor || null,
            content: sto.content || null,
          },
        ],
        product: [
          {
            productname: sto.productname || null,
            price: sto.price || null,
            description1: sto.description1 || null,
            description2: sto.description2 || null,
            image: sto.image || null,
            _id: sto._id.toString() || null,
          },
        ],
      })),
    },
  };
}
