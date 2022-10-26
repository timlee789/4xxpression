import React, { useState } from 'react';
import db from '../../utils/db';
import Image from 'next/image';
// import CustomItemScreen from '../../components/customitem';
// import Ghanabraid from '../../components/hairs/Ghanabraid';
// import GhanaTwist from '../../components/hairs/GhanaTwist';
// import Destinywig from '../../components/hairs/Destinywig';
// import Bundlehair from '../../components/hairs/Bundlehair';
// import TapeClip from '../../components/hairs/TapeClip';
import HomePage from '../homepage';
import Layout from '../../components/layout';
import CustomItemScreen from '../../components/customitem';

import Product from '../../models/Product';

function StoreScreen({ store }) {
  console.log(store);
  //   const [menu, setMenu] = useState('');
  //   if (!store) {
  //     return <div>Product Not Found</div>;
  //   }

  //   const camp = () => {
  //     switch (menu) {
  //       case '1':
  //         return <Ghanabraid />;
  //       case '2':
  //         return <GhanaTwist />;
  //       case '3':
  //         return <Destinywig />;
  //       case '4':
  //         return <Bundlehair />;
  //       case '5':
  //         return <TapeClip />;
  //     }
  //   };
  //   const handleClick1 = (event) => {
  //     setMenu('1');
  //   };
  //   const handleClick2 = (event) => {
  //     setMenu('2');
  //   };
  //   const handleClick3 = (event) => {
  //     setMenu('3');
  //   };
  //   const handleClick4 = (event) => {
  //     setMenu('4');
  //   };
  //   const handleClick5 = (event) => {
  //     setMenu('5');
  //   };
  return (
    <Layout>
      <div>
        {/* <header>
          <nav className=" lg:flex h-4 items-center px-2 justify-center ">
            <Link href="#">
              <a className="text-md font-bold lg:text-3xl lg:text-center">
                {store.name}
              </a>
            </Link>
          </nav>
        </header> */}
        <div className="lg:justify-center mt-4">
          {/* <div className='flex justify-center'>
            <div className='flex justify-between p-5 gap-8 '>
            <div><button type='button' onClick={handleClick1}><a>
                    <Image src="https://bijouxhair.com/tim/landing2/btnghanabraid2.jpg" alt='ddsl'  width={250} height={180} objectFit='cover'/>
            </a></button></div>
            <div><button type='button' onClick={handleClick2}><a>
                    <Image src="https://bijouxhair.com/tim/landing2/btnghanatwist2.jpg" alt='ddsl'  width={250} height={180} objectFit='cover' />
            </a></button></div>
            <div><button type='button' onClick={handleClick3}><a>
                    <Image src="https://bijouxhair.com/tim/landing2/btndestiny2.jpg" alt='ddsl'  width={250} height={180} objectFit='cover'/>
            </a></button></div>
            <div><button type='button' onClick={handleClick4}><a>
                    <Image src="https://bijouxhair.com/tim/landing2/btntrio2.jpg" alt='ddsl'  width={250} height={180} objectFit='cover'/>
            </a></button></div>
            <div><button type='button' onClick={handleClick5}><a>
                    <Image src="https://bijouxhair.com/tim/landing2/btncliphair2.jpg" alt='ddsl'  width={250} height={180} objectFit='cover'/>
            </a></button></div>
        </div>
        </div> */}
          {/* <div>
            <Image
              src={store.img1}
              alt={store.name}
              width={1480}
              height={300}
            />
          </div> */}

          <div>
            <div className="2xl:bg-slate-200">
              <div className=" grid grid-cols-2 p-5 gap-5 md:grid-cols-4 ">
                {store.map((cam) => (
                  <CustomItemScreen
                    key={cam._id}
                    image={cam.image}
                    productname={cam.productname}
                    price={cam.price}
                  />
                ))}
              </div>
              <HomePage />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { storename } = params;

  await db.connect();
  const store = await Product.find({ user: storename }).lean();
  //.populate('product');
  await db.disconnect();
  return {
    props: {
      store: JSON.parse(JSON.stringify(store)),

      // store: store ? db.convertDocToObj(store) : null,
    },
  };
}
export default StoreScreen;
