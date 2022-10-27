import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Layout from '../components/layout';

function HomePage() {
  const [displaybanner, setDisplybanner] = useState(
    <ReactPlayer
      url="/images/Horizontal.mp4"
      playing={true}
      loop={true}
      width={400}
      height={250}
      className="md:hidden"
    />
  );
  const [displaybannerl, setDisplybannerl] = useState(
    <ReactPlayer
      url="/images/Horizontal.mp4"
      playing={true}
      loop={true}
      width={1480}
      height={845}
      className="hidden md:block  "
    />
  );
  const [display1, setDisply1] = useState(
    <ReactPlayer
      url="/images/braiding1.mp4"
      playing={true}
      loop={true}
      width={350}
      height={573}
    />
  );
  const [display2, setDisply2] = useState(
    <ReactPlayer
      url="/images/braiding2.mp4"
      playing={true}
      loop={true}
      width={350}
      height={573}
    />
  );

  return (
    <div className="flex justify-center bg-slate-100">
      <div>
        <div className="md:hidden">
          <Image
            src="/images/mainbanner3.jpg"
            alt="banner"
            width={700}
            height={150}
          />
        </div>
        {/* <div className="hidden md:block">
          <Image
            src="/images/mainbanner3.jpg"
            alt="banner"
            width={1480}
            height={330}
            className="hidden"
          />
        </div> */}
        <div></div>
        <div>
          <div className=" grid grid-cols-2 p-5 gap-5 md:grid-cols-4 ">
            <Image
              src="/images/4X-XPRESSION-2.jpg"
              alt="banner"
              width={300}
              height={573}
              className="element1 card"
            />

            <div className="element5 hidden md:block ">{display2}</div>
            <Image
              src="/images/4X-XPRESSION-13.jpg"
              alt="banner"
              width={300}
              height={573}
              className="element2"
            />
            <Image
              src="/images/4X-XPRESSION-11.jpg"
              alt="banner"
              width={300}
              height={573}
              className="element3"
            />
            <div className="md:hidden">
              <Image
                src="/images/4X-XPRESSION-5.jpg"
                alt="banner"
                width={300}
                height={573}
                className="element4 "
              />
            </div>
          </div>
          <div className="p-5 md:hidden ">{display2}</div>
          <div className=" grid grid-cols-2 p-5 gap-5 md:grid-cols-4">
            <Image
              src="/images/4X-XPRESSION-12.jpg"
              alt="banner"
              width={300}
              height={573}
              className="element1"
            />
            <Image
              src="/images/4X-XPRESSION-8.jpg"
              alt="banner"
              width={300}
              height={573}
              className="element2"
            />
            <Image
              src="/images/4X-XPRESSION-9.jpg"
              alt="banner"
              width={300}
              height={573}
              className="element3"
            />
            <div className="hidden md:block">{display1}</div>
            <div className="md:hidden">
              <Image
                src="/images/4X-XPRESSION-10.jpg"
                alt="banner"
                width={300}
                height={573}
                className="element4"
              />
            </div>
          </div>
          {displaybanner}
          {displaybannerl}
          <div className="p-5 md:hidden">{display1}</div>
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
      </div>
    </div>
  );
}

export default HomePage;
