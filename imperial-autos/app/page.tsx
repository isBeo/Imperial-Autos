import React from 'react'
import p from '../public/hero.png'
import p1 from './logo.jpeg'
import p2 from './logo.jpeg'
// import p3 from './logo.jpeg'
// import p4 from './logo.jpeg'
import Image from 'next/image'
import type { StaticImageData } from 'next/image';


interface Product {
  name: string;
  price:string;
  src:StaticImageData;
}

const page = () => {



// the below code is of array of objects

const Card: Product[] = [
  {
    name: "Camry 2009",
    src:p,
    price:'6m',

  },
  {
    name: "Mercede Benz",
    src: p1,
    price:'6m',

  },
  {
    name: "Benz CLA 250",
    src: p2,
    price:'6m',


  },
  // ... more products
];


const s : React.CSSProperties={
  width:'100%',
  // height:'200px'
  aspectRatio:2,
  height:'230px'

}
// {console.log(cardname)}
  return (
    <div className='w-full outline'>
      <section className="
        hero relative
      ">
        <h2 
          className='
             cta
          text-3xl text-black font-bold
          italic font-sans p-2 rounded 
          absolute bottom-1 right-2
           bg-slate-200
          flex flex-col
          '>
            <span> Explore </span>
           <span className='
            text-center ' >click</span>
          </h2>
      </section>
      {
        Card.map((a)=>{
          return (
            <div key={a.name} className='
               ' >
              <div className="card
                
              ">
                <div className="img
                  
                ">
                  <Image style={s} src={a.src} width={100} height={100} alt='product_image'  />

                </div>
                <div className="card__details">
                  <h3>{a.name}</h3>
                  <ul>
                    <li className='
                      shadow-sm 
                      shadow-green-400'>Price: {a.price}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      }
      
    </div>
  )
}

export default page