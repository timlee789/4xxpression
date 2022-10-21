import cla from './form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';
import Head from 'next/head';

export default function Home({landingdata}) {

     const refName = useRef();
     const refTel = useRef();
     const refEmail = useRef();

     const router = useRouter()
     const [Radio, setRadio] = useState();
     const [Check, setCheck] = useState();
     async function submitHandler(event) {
       event.preventDefault();
       const enteredName = refName.current.value;
       const enteredTel = refTel.current.value;
       const enteredEmail = refEmail.current.value;
       const enteredPrize = Radio;
       const enteredCheck = Check;

       const inputData ={
         name: enteredName,
         tel: enteredTel,
         email: enteredEmail,
         prize: enteredPrize,
         beautician: enteredCheck,
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

      const response = await fetch('/api/postsbundle',
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
            <Image src='https://bijouxhair.com/tim/ad/trioheadbanner.jpg' alt='banner' width={1400} height={800} className="element"/>
            </div>
        <div className='bg-slate-200'>
            <div className='flex justify-between p-10'>
                <Image src='https://bijouxhair.com/tim/ad/trio-bohemian.jpg' alt='banner' width={300} height={533} className="element"/>
                <Image src='https://bijouxhair.com/tim/ad/trio-body.jpg' alt='banner' width={300} height={533} className="element1"/>
                <Image src='https://bijouxhair.com/tim/ad/trio-deep.jpg' alt='banner' width={300} height={533} className="element2"/>
                <Image src='https://bijouxhair.com/tim/ad/trio-straight.jpg' alt='banner' width={300} height={533} className="element3"/>

            </div>
            {/* <div className='flex justify-between p-10'>
                <Image src='/images/4X-XPRESSION-5.jpg' alt='banner' width={300} height={533} className="element4"/>
                <Image src='/images/4X-XPRESSION-6.jpg' alt='banner' width={300} height={533} className="element5"/>
                <Image src='/images/4X-XPRESSION-12.jpg' alt='banner' width={300} height={533} className="element1"/>
                <Image src='/images/4X-XPRESSION-8.jpg' alt='banner' width={300} height={533} className="element2"/>
            </div>
            <div className='flex justify-between p-10'>
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
      {/* <div >
        <center>
      <Image src='https://bijouxhair.com/tim/ad/trioheadbanner.jpg' width='1400px' height='800px' alt='banner' /> */}
      {/* <div className={cla.ula2}>Fill out the Registration and Win !</div>

       <form onSubmit={submitHandler}>
        <div className={cla.inputframe}>
         <input type='text' id='name' ref={refName} placeholder='Name' className={cla.inputbox} required /><br/>
         <input type='text' id='tel' ref={refTel} placeholder='Tel' className={cla.inputbox} required /><br/>
         <input type='text' id='email' ref={refEmail} placeholder='Email' className={cla.inputbox} required />
         </div>
         <fieldset  className={cla.fieldset}>
         <div className={cla.optionbox}>
         <div className={cla.ula2}>
         <legend >Select the Giveaway Trio Bundle Hair you want</legend></div>
			<label className={cla.container}>Trio Straight 14/16/18 inch
				<input  type="checkbox" value='straight' checked={Radio ==='straight'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox}/>
        <span className={cla.checkmark}></span>
			</label>
      <label className={cla.container}>Trio Body Curl 14/16/18 inch
				<input  type="checkbox" value='body' checked={Radio ==='body'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox} />
        <span className={cla.checkmark}></span>
			</label>
			<label className={cla.container}><div className={cla.textt}>Trio	Deep Curl 14/16/18 inch </div>
				<input  type="checkbox" value='deep' checked={Radio ==='deep'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox}/>
        <span className={cla.checkmark}></span>
			</label >
      <label className={cla.container}>Trio	Bohemian Curl 14/16/18 inch
				<input  type="checkbox" value='bohemian' checked={Radio ==='bohemian'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox}/>
        <span className={cla.checkmark}></span>
			</label >
        </div>
		</fieldset>
        <div className={cla.optionbox}>
    <fieldset  className={cla.fieldset}>
    <div className={cla.ula2}><legend >Are you Beautician?</legend></div>
          <label className={cla.container}>Yes I am a Beautician.
              <input  type="radio" value='beautician' checked={Check ==='beautician'} onChange={(e) =>setCheck(e.target.value)} name='beautician' className={cla.inputbox} />
              <span className={cla.checkmark}></span>
            </label>
          <label className={cla.container}>No I am not a Beautician.
              <input  type="radio" value='nobeautician' checked={Check ==='nobeautician'} onChange={(e) =>setCheck(e.target.value)} name='beautician' className={cla.inputbox} />
              <span className={cla.checkmark}></span>
            </label>
      </fieldset>
        </div>
         <button className={cla.btn}>Submit</button>
       </form> */}

       {/* <div className={cla.textbox}>
       <h3>To get the free giveaway Bundle Hair: </h3>
       <ul className={cla.ula}>
         <li>Fill out the registration above.</li>
         <li>Select the Brazilian Hair you want bellow.</li>
         <li>Follow @Bijouxhairusa</li>
         <li>3 winners are selected every 2 weeks.</li>
       </ul>

       </div> */}
       {/* </center>
       <div className={cla.phototitle}>Giveaway Brazilian Trio Hair</div>
       <div className={cla.album}>
       <div className={cla.box} >
         <Image src='https://bijouxhair.com/tim/ad/trio-bohemian.jpg' width='600px' height='800px'/>
         </div>
        </div>
        <div className={cla.album}>
       <div className={cla.box} >
        <Image src='https://bijouxhair.com/tim/ad/trio-body.jpg' width='600px' height='720px'/>
        </div>
        </div>
        <div className={cla.album}>
       <div className={cla.box} >
         <Image src='https://bijouxhair.com/tim/ad/trio-deep.jpg' width='600px' height='720px'/>
         </div>
        </div>
         <div className={cla.album}>
       <div className={cla.box} >
         <Image src='https://bijouxhair.com/tim/ad/trio-straight.jpg' width='600px' height='720px'/>
         </div>
        </div>
        <div className={cla.album}>
       <div className={cla.box} >
         <video width='580px' height='370px' controls>
         <source src='https://bijouxhair.com/tim/ad/Trio_phone.mp4' type="video/mp4" >
          </source>
          </video>
         </div>
         <div className={cla.videotitle}>Brazilian Trio Commercial Video</div>
        </div>
        <div className={cla.album}>
       <div className={cla.box} >
         <video width='580px' height='370px' controls>
         <source src='https://bijouxhair.com/tim/ad/Trio-unboxing.mp4' type="video/mp4" >
          </source>
          </video>
         </div>
          <div className={cla.videotitle}>Brazilian Trio Unboxing Video</div>
        </div>
        <div className={cla.album}>
       <div className={cla.box} >
         <video width='580px' height='370px' controls>
         <source src='https://bijouxhair.com/tim/ad/Trio-bleach.mp4' type="video/mp4" >
          </source>
          </video>
         </div>
         <div className={cla.videotitle}>Brazilian Trio Bleach Processing Video</div>
        </div>
        <div className={cla.album}>
       <div className={cla.box} >
         <video width='580px' height='370px' controls>
         <source src='https://bijouxhair.com/tim/ad/Trio-style.mp4' type="video/mp4" >
          </source>
          </video>
         </div>
         <div className={cla.videotitle}>Brazilian Trio Styling Video</div>
        </div>


       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><img alt=""  src="https://bijouxhair.com/tim/ad/footer.png" /></a>
      </div>
      </div>
       </div>
      </div> */}
  
  


