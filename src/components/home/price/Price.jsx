import React from 'react'
import { price } from '../../assets/data/data'
import { Heading } from '../../common/Heading'

export const Price = () => {
  return (
    <>
    <section className="price">
        <Heading title='Choose the Plans' desc='Affordable Standalone pricing for the uninitiated'/>
        <div className="content">
            {price.map((item)=>(
                <div className="box">
                    <h3>{item.name}</h3>
                    <h1>
                        <span>N </span>
                        {item.price}
                        <label htmlFor="/user per month"></label>
                    </h1>
                    <p>{item.desc}</p>
                    <button className='button'>Get Started</button>
                    <ul>
                        {
                        item.list.map((lists) =>(
                            <li>
                                <i>{lists.icon}</i>
                                <span><i>{lists.para}</i></span>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            ))}
        </div>
        
    </section>
    </>
  )
}
