import Stores from "../models/Stores";
import db from "../utils/db";
import StoreInfo from "../components/storeinfo";
import Layout from "../components/layout";


export default function Home({stores}) {
  return (
    <Layout title='Home Page'>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 ml-7 ">
        {stores.map((sto) => (
          <StoreInfo
            storeinfo={sto}
            key={sto.id}
            />
        ))}
    </div>
    </Layout>
  )
}
export async function getServerSideProps() {
  await db.connect();
  const stores = await Stores.find().lean();
  return {
    props: {
      stores: stores.map(db.convertDocToObj),
    }
  }
}