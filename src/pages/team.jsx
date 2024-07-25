import React from 'react';
import { NavLink } from 'react-router-dom'


const Team = () => {
	return(
		<section className="team_section layout_padding">
			<div className="container-fluid">
				<div className="heading_container heading_center">
					<h2 className="">
						Our <span> Team</span>
					</h2>
				</div>
	
				<div className="team_container">
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<div className="box ">
								<div className="img-box">
									<img src="https://ucarecdn.com/c7777237-e636-4a41-a71e-451f2147cee0/-/preview/250x250/" className="img1" alt="" />
								</div>
								<div className="detail-box">
									<h5>
										Joseph Brown
									</h5>
									<p>
										Marketing Head
									</p>
								</div>
								<div className="social_box">
									<NavLink to="#">
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</NavLink>
									<NavLink to="#">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</NavLink>
									<NavLink to="#">
										<i className="fa fa-linkedin" aria-hidden="true"></i>
									</NavLink>
									<NavLink to="#">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</NavLink>
									<NavLink to="#">
										<i className="fa fa-youtube-play" aria-hidden="true"></i>
									</NavLink>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="box ">
								<div className="img-box">
									<img src="https://ucarecdn.com/f67f2941-6e6d-4844-831b-8055049df4ac/-/preview/250x250/" className="img1" alt="" />
								</div>
								<div className="detail-box">
									<h5>
										Nancy White
									</h5>
									<p>
										Marketing Head
									</p>
								</div>
								<div className="social_box">
									<NavLink to="#">
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</NavLink>
									<NavLink to="#">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</NavLink>
									<NavLink to="#">
										<i className="fa fa-linkedin" aria-hidden="true"></i>
									</NavLink>
									<NavLink to="#">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</NavLink>
									<NavLink to="#">
										<i className="fa fa-youtube-play" aria-hidden="true"></i>
									</NavLink>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="box ">
								<div className="img-box">
									<img src="https://ucarecdn.com/54c8a3e3-19db-4d9a-91d6-317c1d2df2b8/-/preview/250x250/" className="img1" alt="" />
								</div>
								<div className="detail-box">
									<h5>
										Earl Martinez
									</h5>
									<p>
										Marketing Head
									</p>
								</div>
								<div className="social_box">
									<a href="#">
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-linkedin" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-youtube-play" aria-hidden="true"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="box ">
								<div className="img-box">
									<img src="https://ucarecdn.com/6082d30d-cb58-4911-8be6-ae10a6fd19df/-/preview/250x250/" className="img1" alt="" />
								</div>
								<div className="detail-box">
									<h5>
										Josephine Allard
									</h5>
									<p>
										Marketing Head
									</p>
								</div>
								<div className="social_box">
									<a href="#">
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-linkedin" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-youtube-play" aria-hidden="true"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Team