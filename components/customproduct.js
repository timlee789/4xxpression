import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
// import Product from '../models/Product';
//  import CustomItemScreen from './customitem';


export default function CustomProductList() {
 
    
  
 

console.log(data)
  return (
    <div className="flex justify-center mt-100">
      <div>
        <div className="2xl:bg-slate-200">
          <div className=" grid grid-cols-2 p-5 gap-5 md:grid-cols-4 ">
            {/* {data.map((dat) => (
              <CustomItemScreen
                key={dat._id}
                image={dat.image}
                productname={dat.productname}
                price={dat.price}
                description1={dat.description1}
              />
            ))

            } */}
          </div>
        </div>
      </div>
    </div>
  );
}
//CustomProductList.auth = true;
