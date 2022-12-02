import React, { useEffect } from 'react'
import {MdStarRate} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { ADD ,DELETE, REMOVE_INT} from "../../../controller/action"


export const Details = () => {
    const [data, setData] = useState([])
    const getdata = useSelector((state)=>state.cartReducer.carts)
    const { id } = useParams()

    const compare = () =>{
        let compareData = getdata.filter((e) =>{
            return e.id == id
        })
        setData(compareData)
    }

 useEffect (()=>{
     compare()
 }, [id])

 const dispatch = useDispatch()
 const increment = (e) => {
     dispatch(ADD(e))
 }

 const decrement = (item) => {
  dispatch(REMOVE_INT(item))
}
    
const navigate = useNavigate()

const deletes = (id) =>{
    dispatch(DELETE(id))
    // history.push("/")
    navigate.push('/');
}

  return (
    <>
     <article>
         <section className="details">
           <h2 className='details_title'>Product details pages</h2>
           {data.map((item)=>(
              <div className="details_content">
                  <div className="details_content_img">
                      <img src={item.cover} alt="" />
                  </div>
                  <div className="details_content_detail">
                      <h1>{item.title}</h1>
                      <div className="rating">
                          <MdStarRate/>
                          <MdStarRate/>
                          <MdStarRate/>
                          <MdStarRate/>
                          <label htmlFor="">(2 Customer review)</label>
                      </div>

                      <h3>N{item.price * item.qty}</h3>
                      <p>{item.author}</p>
                      <div className="qty">
                          <div className="count">
                              <button onClick={() => increment(item)}>
                                  <AiOutlinePlus />
                              </button>
                                <span>{item.qty}</span>
                              <button onClick={item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)}>
                                  <AiOutlineMinus />
                              </button>
                          </div>
                         <button className='button'>Add to Cart</button>
                      </div>
                      <div className="desc">
                          <h4>PRODUCT DESCRIPTION</h4>
                          <p>This product is proof that Elon Must acquisition of twitter would be a gag on free speech. There has been a rise in the use of the slur NIGGA since the acquisition</p>
                          <h4>PRODUCT DETAILS</h4>
                          <ul>
                              <li><p>Material: Plastic, Wood</p></li>
                              <li><p>Legs: Laquered Oak and Black Painted Oak</p></li>
                              <li><p>Dimensions and Weight: Not Availabe</p></li>
                          </ul>
                      </div>
                  </div>
              </div>
           ))}
         </section>
     </article>
    </>
  )
}
