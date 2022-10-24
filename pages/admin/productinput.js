import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getError } from '../../utils/error';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function AdminProductScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    products: [],
    error: '',
  });
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get('/api/product/productlist');
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        router.push('/admin/productinput');
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);

  const submitHandler = async ({
    productname,
    price,
    description1,
    description2,
    image,
  }) => {
    try {
      console.log(description1, productname);
      await axios.post('/api/product/productregister', {
        productname,
        price,
        description1,
        description2,
        image,
      });

      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const deleteHandler = async () => {};
  return (
    <Layout title="Order History">
      <h1 className="mb-4 text-xl">Product Registration</h1>

      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="mb-4">
          <label htmlFor="productname">productname</label>
          <input
            type="text"
            {...register('productname', {
              required: 'Please enter productname',
            })}
            className="w-full"
            id="productname"
            autoFocus
          ></input>
          {errors.productname && (
            <div className="text-red-500">{errors.productname.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="price">price</label>
          <input
            type="price"
            {...register('price', { required: 'Please enter price' })}
            className="w-full"
            id="price"
          ></input>
          {errors.price && (
            <div className="text-red-500">{errors.price.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description1">description1</label>
          <input
            type="text"
            {...register('description1', {
              required: 'Please enter description1',
            })}
            className="w-full"
            id="description1"
            autoFocus
          ></input>
          {errors.description1 && (
            <div className="text-red-500"> {errors.description1.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description2">description2</label>
          <input
            type="text"
            {...register('description2', {
              required: 'Please enter description2',
            })}
            className="w-full"
            id="description2"
            autoFocus
          ></input>
          {errors.description2 && (
            <div className="text-red-500"> {errors.description2.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="image">image</label>
          <input
            type="text"
            {...register('image', { required: 'Please enter image' })}
            className="w-full"
            id="image"
            autoFocus
          ></input>
          {errors.image && (
            <div className="text-red-500"> {errors.image.message}</div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button">Register</button>
        </div>
      </form>

      <h1 className="mb-4 text-xl">Product List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="alert-error">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr className="px-5 text-left">
                <td className="p-5 ">Product Name</td>
                <td className="p-5 text-left">Price</td>
                <td className="p-5 text-left">Description</td>
                <td className="p-5 text-left">Description2</td>
                <td className="p-5 text-left">Image</td>
                <td className="p-5 text-left">ACTION</td>
              </tr>
            </thead>

            {products.map((order, index) => (
              <tbody key={index}>
                {order.product.map((subcam, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-5 ">{subcam.productname}</td>
                    <td className=" p-5 ">{subcam.price}</td>
                    <td className=" p-5 ">{subcam.description1}</td>
                    <td className=" p-5 ">{subcam.description2}</td>
                    <td className=" p-5 ">
                      <Image
                        src={subcam.image}
                        alt={subcam.productname}
                        width={150}
                        height={150}
                      />
                    </td>
                    <td className="p-5">
                      <a>
                        <button onClick={deleteHandler}>Delete</button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      )}
    </Layout>
  );
}
AdminProductScreen.auth = true;
