import React from 'react';
import cla from './form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';

function Ghanabraid( ) {
   
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

        const response = await fetch('/api/poststape',
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
      <Image src='https://bijouxhair.com/tim/landing2/cliphairhead.jpg' alt='banner' width={1400} height={800} />
      </div>
  <div className='bg-slate-200'>
      <div className='flex justify-between p-10'>
          <Image src='https://bijouxhair.com/tim/landing2/clip-3.jpg' alt='banner' width={300} height={533} className="element"/>
          <Image src='https://bijouxhair.com/tim/landing2/clip-4.jpg' alt='banner' width={300} height={533} className="element1"/>
          <Image src='https://bijouxhair.com/tim/landing2/clip-2.jpg' alt='banner' width={300} height={533} className="element2"/>
          <Image src='https://bijouxhair.com/tim/landing2/3xghanaphoto5.jpg' alt='banner' width={300} height={533} className="element3"/>

      </div>
      {/*<div className='flex justify-between p-10'>
          <Image src='https://bijouxhair.com/tim/landing/greencelebrity28.jpg' alt='banner' width={300} height={533} className="element4"/>
          <Image src='https://bijouxhair.com/tim/landing/cardi.jpg' alt='banner' width={300} height={533} className="element5"/>
          <Image src='https://bijouxhair.com/tim/landing/lightbang.jpg' alt='banner' width={300} height={533} className="element1"/>
          <Image src='https://bijouxhair.com/tim/landing/sally18.jpg' alt='banner' width={300} height={533} className="element2"/>
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
  //   <div>  
  //     <center>  
  //     <Image src='https://bijouxhair.com/tim/landing2/cliphairhead.jpg' alt='banner' width='800px' height='500px' /> 
  //     {/* <div className={cla.ula2}>Fill out the Registration and Win !</div>
  //     <div className={cla.inputframe}>
  //     <form onSubmit={submitHandler}>
  //        <input type='text' id='name' ref={refName} placeholder='Name' className={cla.inputbox} required /><br/>
  //        <input type='text' id='tel' ref={refTel} placeholder='Tel' className={cla.inputbox} required /><br/>
  //        <input type='text' id='email' ref={refEmail} placeholder='Email' className={cla.inputbox} required /> 
  //        <button className={cla.btn}>Submit</button>
  //      </form>
  //      </div>
       
  //      <div className={cla.textbox}>
  //      <div className={cla.ula2}>To get the free giveaway Hair: </div>
  //      <ul className={cla.ula}>
  //        <li> - 3 winners will be selected every 2 weeks.</li>
  //        <li> - 1 Packs Clip Hair for each Winner.</li>
  //      </ul>
  //      </div> */}
  //     </center>
  //      <div className={cla.phototitle}>Soprano Hair Extesions</div>
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //          <Image src='https://bijouxhair.com/tim/landing2/clip-3.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
  //          <div className={cla.videotitle}>Soprano Virgin Remi Hair Clip</div>
  //    </div>
  //    </div>
  //   <div className={cla.album}>
  //   <div className={cla.box}>
  //          <Image src='https://bijouxhair.com/tim/landing2/clip-4.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
  //          <div className={cla.videotitle}>Soprano Virgin Remi Hair Clip</div>
  //  </div>
  //   </div>        
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //          <Image src='https://bijouxhair.com/tim/landing2/clip-2.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
  //          <div className={cla.videotitle}>Soprano Virgin Remi Hair Clip</div>
  //  </div>
  //  </div>       
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //          <iframe width="100%" height="300" src="https://www.youtube.com/embed/OkO3SsWTPe4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
  //          <div className={cla.videotitle}>Hair Clip Tutorial</div> 
  //  </div>
  //  </div>        
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //          <iframe width="100%" height="300" src="https://www.youtube.com/embed/HB5ZlJnlX2M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> 
  //          <div className={cla.videotitle}>Hair Clip Pesentation</div> 
  //  </div>
  //  </div>       
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //          <Image src='https://bijouxhair.com/tim/landing2/tape-1.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
  //          <div className={cla.videotitle}>Soprano Indian Remi Tape Hair </div>
  //  </div>
  //  </div>       
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //            <iframe width="100%" height="300" src="https://www.youtube.com/embed/G-ogPL1J-TI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
  //            <div className={cla.videotitle}>Soprano Tape Hair Tutorial</div>
  //  </div>
  //  </div>  
  //  <div className={cla.album}>
  //   <div className={cla.box} >
  //   <iframe width="100%" height="300" src="https://www.youtube.com/embed/5FZ5i9JMIDA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  //   <div className={cla.videotitle}>Soprano Tape Hair Tutorial</div>
  //   </div>
  //  </div>       
  //   <div className={cla.album}>
  //    <div className={cla.box} >
  //            <Image src='https://bijouxhair.com/tim/landing2/itip-1.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
  //            <div className={cla.videotitle}>Soprano Indian Remi I tip </div>
  //  </div>
  //  </div>         
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //            <Image src='https://bijouxhair.com/tim/landing2/itip-2.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
  //            <div className={cla.videotitle}>Soprano Magic Tip </div>
  //  </div>
  //  </div>          
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //            <Image src='https://bijouxhair.com/tim/landing2/itip-3.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
  //            <div className={cla.videotitle}>Soprano Highness Magic Extention </div>
  //  </div>
  //  </div>          
  //   <div className={cla.album}>
  //   <div className={cla.box} >
  //            <iframe width="100%" height="300" src="https://www.youtube.com/embed/HqH91Jn7UW0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
  //            <div className={cla.videotitle}>U-Tip Hair Presetation</div>
  //  </div>
  //  </div>       


        
      
       
     
      
       
  //      <div className={cla.footer}>
  //       <div className={cla.footimage}>
  //       <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
  //         ><Image alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" width='250px' height='100px' /></a>
  //     </div>
  //     </div>
  //   </div>
    

export default Ghanabraid