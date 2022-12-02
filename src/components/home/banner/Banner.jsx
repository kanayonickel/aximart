import React from 'react'
import { banner } from '../../assets/data/data';
// import ban from '../../assets/images/banner/6.jpg';

export const Banner = () => {
  return (
  <>
<section className="banner">
 <div className="posts">
     {banner.map((items) => (
        <div className="post" key={items.id}>
              <div className="content">
                  <div className="img">
                      <img src={items.cover} alt="" />
                  </div>
                  <div className="text">
                      {/* <h2>{items.title1}</h2>
                      <h2>{items.title2}</h2>
                      <h2>{items.desc}</h2> */}
                      <p><br/><br/><br/><br/></p>
                      <button className="button">SHOP NOW</button>
                  </div>
              </div>
        </div>
     ))}
 </div>
</section>
  </>
  )
}
