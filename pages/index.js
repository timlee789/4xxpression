import db from '../utils/db';
import StoreInfo from '../components/storeinfo';
import Layout from '../components/layout';
import User from '../models/Users';

export default function Home({ storeinfo }) {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 ml-7 ">
        {storeinfo.map((sto) => (
          <StoreInfo storeinfo={sto} key={sto._id} />
        ))}
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const stores = await User.find().lean();
  return {
    props: {
      storeinfo: stores.map((sto) => ({
        _id: sto._id.toString(),
        storename: sto.storename || null,
        city: sto.city || null,
        state: sto.state || null,
        url: sto.url || null,
        img1: sto.img1 || null,
      })),
    },
  };
}
