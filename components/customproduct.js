import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
// import CustomItemScreen from './customitem';
// import Link from 'next/link';
//import UsaVipStores from '../models/Stores';

// import { getError } from '../utils/error';

// import { signIn, useSession } from 'next-auth/react';
// import Image from 'next/image';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true, error: '' };
//     case 'FETCH_SUCCESS':
//       return { ...state, loading: false, products: action.payload, error: '' };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// }

export default function CustomProductList(storeinfo) {
  // const [{ loading, error, products }, dispatch] = useReducer(reducer, {
  //   loading: true,
  //   products: [],
  //   error: '',
  // });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        //dispatch({ type: 'FETCH_REQUEST' });
        await db.connect();
        const data = await UsaVipStores.find({ storename: storeinfo });
        await db.disconnect();
        // const { data } = await axios.get(
        //   `/api/product/productlist`
        // );
        //dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        //dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchOrders();
  }, [storeinfo]);
  console.log(storeinfo);
  return (
    <div className="flex justify-center mt-100">
      <div>
        <div className="2xl:bg-slate-200">
          <div className=" grid grid-cols-2 p-5 gap-5 md:grid-cols-4 ">{}</div>
        </div>
      </div>
    </div>
  );
}
//CustomProductList.auth = true;
