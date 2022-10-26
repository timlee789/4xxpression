import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function StoreInfo({ storeinfo }) {
  return (
    <div className="card mt-5" key={storeinfo._id}>
      <Link href={`/store/${storeinfo._id}`}>
        <a>
          <Image
            src={storeinfo.img1}
            alt={storeinfo.storename}
            className="rounded shadow-md"
            width={320}
            height={250}
          />
        </a>
      </Link>
      <div>
        <h2 className="text-md">{storeinfo.storename}</h2>

        <h2 className="text-md">{storeinfo.state}</h2>
      </div>
    </div>
  );
}

export default StoreInfo;
