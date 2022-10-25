import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Layout from '../components/layout';

function HomePage() {
  return (
    <div>
      <div className=" grid grid-cols-2 p-5 gap-5 md:grid-cols-4">
        <Image
          src="/images/4X-XPRESSION-B3.jpg"
          alt="banner"
          width={300}
          height={533}
          className="element5"
        />
        <Image
          src="/images/4X-XPRESSION-B2.jpg"
          alt="banner"
          width={300}
          height={533}
          className="element1"
        />

        <Image
          src="/images/4X-XPRESSION-B1.jpg"
          alt="banner"
          width={300}
          height={533}
          className="element5"
        />
        <Image
          src="/images/4X-XPRESSION-B4.jpg"
          alt="banner"
          width={300}
          height={533}
          className="element"
        />
      </div>

      <div className=" grid grid-cols-2 p-5 gap-5 md:grid-cols-4">
        <Image
          src="/images/4X-XPRESSION-4.jpg"
          alt="banner"
          width={300}
          height={533}
          className="element5"
        />
        <Image
          src="/images/4X-XPRESSION-3.jpg"
          alt="banner"
          width={300}
          height={533}
          className="element1"
        />

        <Image
          src="/images/4X-XPRESSION-6.jpg"
          alt="banner"
          width={300}
          height={533}
          className="element5"
        />
        <Image
          src="/images/4X-XPRESSION-1.jpg"
          alt="banner"
          width={300}
          height={533}
          className="element"
        />
      </div>
    </div>
  );
}

export default HomePage;
