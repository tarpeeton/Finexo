import React from 'react';

import { NavLink } from 'react-router-dom'

const Service = () => {
	return(
		<section className="service_section layout_padding">
    <div className="service_container">
      <div className="container ">
        <div className="heading_container heading_center">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="box ">
              <div className="img-box">
                <img src='https://ucarecdn.com/67ba38d5-665d-49fd-bab3-46e0906b323f/-/preview/512x512/' alt="service image" />
              </div>
              <div className="detail-box">
                <h5>
                  Currency Wallet
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <NavLink to="redmre">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="box ">
              <div className="img-box">
                <img src='https://ucarecdn.com/801b86d7-f5ef-4333-903a-b5cd51c86479/-/preview/512x512/' alt="service image" />
              </div>
              <div className="detail-box">
                <h5>
                  Security Storage
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <NavLink to="redmore">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="box ">
              <div className="img-box">
                <img src='https://ucarecdn.com/87c5d75d-8436-4e50-9590-6453b86524aa/-/preview/512x512/' alt="service image" />
              </div>
              <div className="detail-box">
                <h5>
                  Expert Support
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <NavLink to="#">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <NavLink to="redmore">
            View All
          </NavLink>
        </div>
      </div>
    </div>
  </section>
	)
}




export default Service