import React from 'react'
import Head from 'next/head';
import cla from './form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image'

function Destinywig({landingdata}) {

    const refName = useRef();
    const refTel = useRef();
    const refEmail = useRef();
   
    const router = useRouter()
    const [Radio, setRadio] = useState();

    async function submitHandler(event) {
      event.preventDefault();
      const enteredName = refName.current.value;
      const enteredTel = refTel.current.value;
      const enteredEmail = refEmail.current.value;
      const enteredPrize = Radio;
     
      const inputData ={
        name: enteredName,
        tel: enteredTel,
        email: enteredEmail,
        prize: enteredPrize,
        date: Date(),
      }
      console.log(inputData);
      addDataHandler(inputData)

       document.getElementById('name').value='';
       document.getElementById('tel').value='';
       document.getElementById('email').value='';
       document.getElementsByName('prize').value='';
    }
    async function addDataHandler(inputData) {

     const response = await fetch('/api/postswig',
         {
             method: 'POST',
             body: JSON.stringify(inputData),
             headers: {
                 'Content-type': 'application/json'
             }
         })
     const data = await response.json();
     router.push('/thanks')
 }

  return (
    <div >
    <div className="flex justify-center">
  <div className='flex-col'>
  <div>
      <Image src='https://bijouxhair.com/tim/landing2/destinywighead.jpg' alt='banner' width={1400} height={800} className="element"/>
      </div>
  <div className='bg-slate-200'>
      <div className='flex justify-between p-10'>
          <Image src='https://bijouxhair.com/tim/landing/st25.jpg' alt='banner' width={300} height={533} className="element"/>
          <Image src='https://bijouxhair.com/tim/landing/BD34.jpg' alt='banner' width={300} height={533} className="element1"/>
          <Image src='https://bijouxhair.com/tim/landing/dreamgirl1.jpg' alt='banner' width={300} height={533} className="element2"/>
          <Image src='https://bijouxhair.com/tim/landing/TD.jpg' alt='banner' width={300} height={533} className="element3"/>

      </div>
     <div className='flex justify-between p-10'>
          <Image src='https://bijouxhair.com/tim/landing/greencelebrity28.jpg' alt='banner' width={300} height={533} className="element4"/>
          <Image src='https://bijouxhair.com/tim/landing/cardi.jpg' alt='banner' width={300} height={533} className="element5"/>
          <Image src='https://bijouxhair.com/tim/landing/lightbang.jpg' alt='banner' width={300} height={533} className="element1"/>
          <Image src='https://bijouxhair.com/tim/landing/sally18.jpg' alt='banner' width={300} height={533} className="element2"/>
      </div>
       {/* <div className='flex justify-between p-10'>
          <Image src='/images/4X-XPRESSION-9.jpg' alt='banner' width={300} height={533} className="element3"/>
          <Image src='/images/4X-XPRESSION-10.jpg' alt='banner' width={300} height={533} className="element4"/>
          <Image src='/images/4X-XPRESSION-4.jpg' alt='banner' width={300} height={533} className="element5"/>
          <Image src='/images/4X-XPRESSION-3.jpg' alt='banner' width={300} height={533} className="element1"/>
      </div> */}
  </div>
  </div>
  </div>
</div>
    )
  }
    // <div>
    //   <main >
    //     <center>
        
    //   <Image src='https://bijouxhair.com/tim/landing2/destinywighead.jpg' alt='banner' width='800px' height='500px' />
    //   <div className={cla.ula2}>Fill out the Registration and Win !</div>
    //    <form onSubmit={submitHandler}>
    //     <input type='text' id='name' ref={refName} placeholder='Name' required  className={cla.inputbox} /><br/>  
    //      <input type='text' id='tel' ref={refTel} placeholder='Tel' required className={cla.inputbox}/><br/>
    //      <input type='text' id='email' ref={refEmail} placeholder='Email'  required className={cla.inputbox} />
    //      <fieldset  className={cla.fieldset}>
    //    <div className={cla.optionbox}>   
		// 	<legend className={cla.ula2}>Select the Giveaway Wig you want</legend>
		// 	<label className={cla.container}>Destiny ST25 Wig- bellow 1st Image 
		// 		<input  type="checkbox" value='ST25' checked={Radio ==='ST25'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox2}/>       
    //     <span className={cla.checkmark}></span>
		// 	</label>
    //   <label className={cla.container}>Destiny BD34 Wig - bellow 2nd Image 
		// 		<input  type="checkbox" value='BD34' checked={Radio ==='BD34'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox2} />       
    //     <span className={cla.checkmark}></span>
		// 	</label>
		// 	<label className={cla.container}>	Destiny DreamGirl-bellow 3rd Image 
		// 		<input  type="checkbox" value='DreamGirl' checked={Radio ==='DreamGirl'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox2}/>
    //     <span className={cla.checkmark}></span>
		// 	</label >
    //   <label className={cla.container}>	Destiny TD Wig - bellow 4th Image 
		// 		<input  type="checkbox" value='TD' checked={Radio ==='TD'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox2}/>
    //     <span className={cla.checkmark}></span>
		// 	</label >
    //   <label className={cla.container}>	Destiny Celebrity28-bellow 5th Image 
		// 		<input  type="checkbox" value='Celebrity28' checked={Radio ==='Celebrity28'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox2}/>
    //     <span className={cla.checkmark}></span>
		// 	</label >
    //   <label className={cla.container}>	Destiny Cardi Wig - bellow 6st Image 
		// 		<input  type="checkbox" value='Cardi' checked={Radio ==='Cardi'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox2}/>
    //     <span className={cla.checkmark}></span>
		// 	</label >
    //   <label className={cla.container}>	Destiny LightBang28- 7th Image 
		// 		<input  type="checkbox" value='LightBang28' checked={Radio ==='LightBang28'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox2}/>
    //     <span className={cla.checkmark}></span>
		// 	</label >
    //   <label className={cla.container}>	Destiny Sally Wig - bellow 8th Image 
		// 		<input  type="checkbox" value='Sally' checked={Radio ==='Sally'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox2}/>
    //     <span className={cla.checkmark}></span>
		// 	</label >
    //   </div>
		// </fieldset>
    //      <button className={cla.btn}>Submit</button>
    //    </form>
     
    //    <div className={cla.textbox}>
    //    <div className={cla.ula2}>To get the free giveaway wig: </div>
    //    <ul className={cla.ula}>
    //      <li> Fill out the registration above.</li>
    //      <li> Select the wig you want bellow.</li>
    //      <li> 5 winners are selected every 2 weeks.</li>
    //    </ul>
         
    //    </div>
    //    </center>
    //    <div className={cla.phototitle}>Giveaway Wigs</div>
    //    <div className={cla.album}>
    //    <div className={cla.box} >
    //           <Image src='https://bijouxhair.com/tim/landing/st25.jpg' alt='banner' width='800px' height='1400px' className={cla.image}/>
    //           <div className={cla.videotitle}>Destiny ST25 Wig</div>
    //   </div>
    //   </div>
    //    <div className={cla.album}>
    //    <div className={cla.box} >
    //           <Image src='https://bijouxhair.com/tim/landing/BD34.jpg' alt='banner' width='800px' height='1350px' className={cla.image}/>
    //           <div className={cla.videotitle}>Destiny BD34 Wig</div>
    //   </div>
    //   </div>
    //    <div className={cla.album}>
    //    <div className={cla.box} >
    //           <Image src='https://bijouxhair.com/tim/landing/dreamgirl1.jpg' alt='banner' width='800px' height='1350px' className={cla.image}/>
    //           <div className={cla.videotitle}>Destiny DREAMGIRL40 Wig</div>
    //   </div>
    //   </div>
    //    <div className={cla.album}>
    //    <div className={cla.box} >
    //           <Image src='https://bijouxhair.com/tim/landing/TD.jpg' alt='banner' width='800px' height='1350px' className={cla.image}/>
    //           <div className={cla.videotitle}>Destiny TD Wig</div>
    //   </div>
    //   </div>
    //    <div className={cla.album}>
    //    <div className={cla.box} >
    //           <Image src='https://bijouxhair.com/tim/landing/greencelebrity28.jpg' alt='banner' width='800px' height='1350px' className={cla.image}/>
    //           <div className={cla.videotitle}>Destiny GREEN CELEBRITY28 Wig</div>
    //   </div>
    //   </div>
    //    <div className={cla.album}>
    //    <div className={cla.box} >
    //           <Image src='https://bijouxhair.com/tim/landing/cardi.jpg' alt='banner' width='800px' height='1350px' className={cla.image}/>
    //           <div className={cla.videotitle}>Destiny CARDI Wig</div>
    //   </div>
    //   </div>
    //    <div className={cla.album}>
    //    <div className={cla.box} >
    //           <Image src='https://bijouxhair.com/tim/landing/lightbang.jpg' alt='banner' width='800px' height='1350px' className={cla.image}/>
    //           <div className={cla.videotitle}>LIGHT BANG28</div>
    //   </div>
    //   </div>
    //    <div className={cla.album}>
    //    <div className={cla.box} >
    //           <Image src='https://bijouxhair.com/tim/landing/sally18.jpg' alt='banner' width='800px' height='1350px' className={cla.image}/>
    //           <div className={cla.videotitle}>Destiny SALLY18 Wig</div>
    //   </div>
    //   </div>
       
    //    <div className={cla.footer}>
    //     <div className={cla.footimage}>
    //     <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
    //       ><img alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" /></a>
      
    //   </div>
    //    </div>
    //   </main>
    //  </div>
    // </div>



export default Destinywig