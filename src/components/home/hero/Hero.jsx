import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { products } from '../../assets/data/data'
import { SearcgItems } from './SearcgItems'
   

export const Hero = () => {

const [value, setvalue] = useState("")
const onChanage = (e) => {
    setvalue (e.target.value)
}

const onSearch = (key) => {
    setvalue (key)
}    
  return (
   <>

<section className='hero'>
    <div className="container">
        <h1>
            <label>Over <span>9,499</span> Curated resources</label>{" "}
            <br />
            <label>3D VFX, <span>Graphic & Website</span> Stuff</label>
        </h1>
        <p>
            High-quality designs and models for personal or commercial use. Contains 9k+ items in 50 categories
        </p>
        <div className="search">
            <span>All Categories</span>
            <hr/>
            <input type="text" placeholder='Search Products...'  onChange={onChanage} value={value}/> 
            <button onClick={()=> onSearch(value)}>
                <BiSearch className="searchIcon heIcon" />
            </button>
        </div>
        <SearcgItems product={products} value={value} onSearch={onSearch}  />
        <p>Examples: Mockup, 3D Models, Theme Design, Code Bases, Image ....</p>
    </div>
</section>

   </>
  )
}
