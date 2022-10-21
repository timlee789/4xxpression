
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function StoreInfo({storeinfo}) {
  
  return (
    <div className='card mt-5'>
        <Link href={`/store/${storeinfo.storename}`}>
            <a>
                <Image src={storeinfo.img1} alt={storeinfo.name} className="rounded shadow-md" width={320} height={250}/>
            </a>
        </Link>
        <div>
            <h2 className='text-md'>{storeinfo.name}</h2>
           
            <h2 className='text-md'>{storeinfo.state}</h2>
        </div>
    </div>
  )
}

export default StoreInfo