import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { getError } from '../utils/error';

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, campaigns: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default function CampaignHistoryScreen() {
    const [{loading, error, campaigns}, dispatch ] = useReducer(reducer, {
        loading: true,
        campaigns: [],
        error: '',
    })

    useEffect(() => {
        const fetchOrders = async() => {
            try {
                dispatch({type: 'FETCH_REQUEST'});
                const {data} = await axios.get(`/api/campaign/history`);
                dispatch({type: 'FETCH_SUCCESS', payload:data});
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', payload: getError(err)});
            }
        };
        fetchOrders();
    },[]);
  return (
    <Layout title="Order History">
    <h1 className="mb-4 text-xl">Campaign History</h1>
    {loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div className="alert-error">{error}</div>
    ) : (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-5 text-left">
                <td className="p-5 ">Event Name</td>
                <td className="p-5 text-left">Event Period</td>
                <td className="p-5 text-left">AD Reach</td>
                <td className="p-5 text-left">Landing Page Visitors</td>
                <td className="p-5 text-left">ACTION</td>
                </th>  
            </tr>
          </thead>
          <tbody>        
          {campaigns.map((order, index,) => (
              <div key={index} >
                {order.campaign.map((subcam, i) => (
                  <tr key={i} className="border-b">
                    <td className='p-5 '>{subcam.campaignname}</td>
                    <td className=" p-5 ">{subcam.period}</td>
                    <td className=" p-5 ">{subcam.reach}</td>
                    <td className=" p-5 ">{subcam.visit}</td>           
                    <td className=" p-5 ">
                      <Link href={`/order/${order._id}`} passHref>
                        <a>Details</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </div>
              
            
            ))} 
          </tbody>
        </table>
      </div>
    )}
  </Layout>
  )
}
CampaignHistoryScreen.auth = true;
