import React from 'react'
import { hero } from "../../assets/data/data"
import  bossbaby from "../../assets/images/hero/bossbaby.jpg"
import  logore from "../../assets/images/hero/logore.jpg"
import  service from "../../assets/images/hero/service2.jpg"
import  uidesign from "../../assets/images/hero/dashboard-05.png"
import  mock from "../../assets/images/hero/watch_1.webp"

export const Card = () => {
  return (
    <>
      {/* <section className="cards">
          {hero.map((item) => (
              <div className="card" key= {item.id}>
                  <div className="left">
                      <img src={item.cover} alt="" />
                  </div>
                  <div className="right">
                      <h4>{item.name}</h4>
                      <p>{item.items} items</p>
                  </div>
              </div>
          ))}
      </section> */}
       <section className="cards">
       
              <div className="card" >
                  <div className="left">
                      <img src={logore} alt="" />
                  </div>
                  <div className="right">
                      <h4>Web themes</h4>
                      <p>545 items</p>
                  </div>
                  </div>

                <div className="card" >
                  <div className="left">
                      <img src={uidesign} alt="" />
                  </div>
                  <div className="right">
                      <h4>UI Design</h4>
                      <p>115 items</p>
                  </div>
                </div>

             <div className="card" >
                  <div className="left">
                      <img src={bossbaby} alt="" />
                  </div>
                  <div className="right">
                      <h4>3D Models</h4>
                      <p>500 items</p>
                  </div>
              </div>

              <div className="card" >
                  <div className="left">
                      <img src={service} alt="" />
                  </div>
                  <div className="right">
                      <h4>Image Stock</h4>
                      <p>2500 items</p>
                  </div>
              </div>

              <div className="card" >
                  <div className="left">
                      <img src={mock} alt="" />
                  </div>
                  <div className="right">
                      <h4>Mockup</h4>
                      <p>1500 items</p>
                  </div>
              </div>
       
      </section>
    </>
  )
}
