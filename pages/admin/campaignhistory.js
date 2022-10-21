import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getError } from '../../utils/error';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signIn, useSession } from 'next-auth/react';


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

export default function AdminCampaignHistoryScreen() {
    const [{loading, error, campaigns}, dispatch ] = useReducer(reducer, {
        loading: true,
        campaigns: [],
        error: '',
    })

    const {
        handleSubmit, register, formState: {errors},
      } = useForm();

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
    
    const submitHandler = async({ eventname, eventperiod, adreach, visitor, }) => {
        try {
            const id = campaigns[0]._id;
          await axios.put(`/api/campaign/${id}`, {
            eventname, eventperiod, adreach, visitor
          })
         
          if(result.error) {
            toast.error(result.error);
          }
        } catch (err) {
          toast.error(getError(err));
        }
       }
    
    const deleteHandler = async() => {

    }
  return (
    <Layout title="Order History">
     <h1 className="mb-4 text-xl">Campaign Registration</h1>
     {campaigns.name}
            <form className='mx-auto max-w-screen-md'
                    onSubmit={handleSubmit(submitHandler)}>
             
                <div className='mb-4'>
                    <label htmlFor= "eventname">Eventname</label>
                    <input type="text"
                    {...register('eventname',{required: 'Please enter eventname', 
                })}
                    className="w-full" id="eventname" autoFocus></input>
                    {errors.eventname && (
                    <div className='text-red-500'>{errors.eventname.message}</div>
                    )}
                </div>
                <div className='mb-4'>
                    <label htmlFor= "eventperiod">Eventperiod</label>
                    <input type="eventperiod"
                    {...register('eventperiod',{required: 'Please enter eventperiod', 
                    
                })}
                    className="w-full" id="eventperiod"></input>
                    {errors.eventperiod && (
                    <div className='text-red-500'>{errors.eventperiod.message}</div>
                    )}
                </div>
                <div className='mb-4'>
                    <label htmlFor='adreach'>adreach</label>
                    <input type="text" 
                    {...register('adreach',{required: 'Please enter adreach', 
                    
                })}
                    className="w-full" id="adreach" autoFocus></input>
                    {errors.adreach && (<div className='text-red-500'> {errors.adreach.message}</div>)}
                </div>

                <div className='mb-4'>
                    <label htmlFor='visitor'>Visitor</label>
                    <input type="text" 
                    {...register('visitor',{required: 'Please enter visitor', 
                   
                })}
                    className="w-full" id="visitor" autoFocus></input>
                    {errors.visitor && (<div className='text-red-500'> {errors.visitor.message}</div>)}
                   
                </div>

                <div className='mb-4'>
                    <button className='primary-button'>Register</button>
                </div>
                
                        
                </form>

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
              <div key={index} >{order._id}
                {order.campaign.map((subcam, i) => (
                  <tr key={i} className="border-b">
                    <td className='p-5 '>{subcam.campaignname}</td>
                    <td className=" p-5 ">{subcam.period}</td>
                    <td className=" p-5 ">{subcam.reach}</td>
                    <td className=" p-5 ">{subcam.visit}</td>           
                    <td className=" p-5 ">
                      
                        <a><button onClick={deleteHandler}>Delete</button></a>
                     
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
AdminCampaignHistoryScreen.auth = true;
