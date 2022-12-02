import React from 'react'

import {FiSearch, FiShoppingBag} from "react-icons/fi"
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import  {useState} from 'react'
import {ADD} from "../../../controller/action"
import { useDispatch } from 'react-redux';


    export const ProductItem = ({data}) => {
    ///creating the state for popping up selected image
    const [openImage, setOpenImage] = useState(false)
    const [img, setImg] = useState("")

    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }
//////end

///
const dispatch = useDispatch()

const addToCart = (e) => {
    dispatch(ADD(e))
}


  return (
    <>
    <div className="product_items">{data.map((items) => (
        <div className="box" key={items.id}>
            <div className="img">
                <img src={items.cover} alt="" />
                <div className="overlay">
                    <button className="button">
                         <FiShoppingBag onClick = {() => addToCart(items)}/>
                    </button>
                    <button className="button">
                      <AiOutlineHeart />
                    </button>
                    <button className="button" onClick={()=>onOpenImage(items.cover)}>
                      <FiSearch />
                    </button>
                </div>
            </div>
            <div className="details">
                <h3>{items.title}</h3>
                <p><i>{items.author}</i></p>
                <h4>N{items.price}</h4>
            </div>
        </div>
    ))}
    </div>

{/* <div className="product_items">
        <div className="box">
            <div className="img">
                <img src={portfolio} alt="" />
                <div className="overlay">
                    <button className="button">
                         <FiShoppingBag />
                    </button>
                    <button className="button">
                      <AiOutlineHeart />
                    </button>
                    <button className="button" onClick={()=>onOpenImage(portfolio)}>
                      <FiSearch />
                    </button>
                </div>
            </div>
            <div className="details">
                <h3>Wordpress theme</h3>
                <p><i>By SmartAerolis in Web Themes</i></p>
                <h4>N25,000</h4>
            </div>
        </div>
       
       
   </div> */}
   {/* on click of search icon throw this Modal */}
    <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
            <img src={img} alt="" />
            <button className="button" onClick={() => setOpenImage(false) }>
                <AiOutlineClose />
            </button>
        </div>
    </div>
    </>
  )
}
