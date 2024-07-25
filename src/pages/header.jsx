import React from 'react'
// import hero from '../images/hero-bg'
// import sliderImage from '../images/slider-img'
import { NavLink } from 'react-router-dom'
import About from './about'
import Service from './service'
import Client from './client'
import Footer from './footer'
import Team from './team'
import Info from './info'
import Why from './why'
import '../css/style.css'
import '../css/style.scss'
import '../css/responsive.css'

const Header = () => {
	return (
		<>
			<div className='hero_area'>
				<div className='hero_bg_box'>
					<div className='bg_img_box'>
						<img src='https://ucarecdn.com/50611f57-0477-42f8-9db1-bf97602a29ef/-/preview/1000x625/' alt='' />
					</div>
				</div>

				<header className='header_section'>
					<div className='container-fluid'>
						<nav className='navbar navbar-expand-lg custom_nav-container '>
							<NavLink className='navbar-brand' to='index.html'>
								<span>Finexo</span>
							</NavLink>

							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#navbarSupportedContent'
								aria-controls='navbarSupportedContent'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								<span className=''> </span>
							</button>

							<div
								className='collapse navbar-collapse'
								id='navbarSupportedContent'
							>
								<ul className='navbar-nav  '>
									<li className='nav-item active'>
										<NavLink className='nav-link' href='index.html'>
											Home <span className='sr-only'>(current)</span>
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink className='nav-link' to='sdf'>
											{' '}
											About
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink className='nav-link' to='service.html'>
											Services
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink className='nav-link' to='why.html'>
											Why Us
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink className='nav-link' to='team.html'>
											Team
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink className='nav-link' to='#'>
											{' '}
											<i className='fa fa-user' aria-hidden='true'></i> Login
										</NavLink>
									</li>
									<form className='form-inline'>
										<button
											className='btn  my-2 my-sm-0 nav_search-btn'
											type='submit'
										>
											<i className='fa fa-search' aria-hidden='true'></i>
										</button>
									</form>
								</ul>
							</div>
						</nav>
					</div>
				</header>
				<section className='slider_section '>
					<div
						id='customCarousel1'
						className='carousel slide'
						data-ride='carousel'
					>
						<div className='carousel-inner'>
							<div className='carousel-item active'>
								<div className='container '>
									<div className='row'>
										<div className='col-md-6 '>
											<div className='detail-box'>
												<h1>
													Crypto <br />
													Currency
												</h1>
												<p>
													Explicabo esse amet tempora quibusdam laudantium,
													laborum eaque magnam fugiat hic? Esse dicta aliquid
													error repudiandae earum suscipit fugiat molestias,
													veniam, vel architecto veritatis delectus repellat
													modi impedit sequi.
												</p>
												<div className='btn-box'>
													<a href='' className='btn1'>
														Read More
													</a>
												</div>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='img-box'>
												<img src='sdufnsd' alt='' />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='carousel-item '>
								<div className='container '>
									<div className='row'>
										<div className='col-md-6 '>
											<div className='detail-box'>
												<h1>
													Crypto <br />
													Currency
												</h1>
												<p>
													Explicabo esse amet tempora quibusdam laudantium,
													laborum eaque magnam fugiat hic? Esse dicta aliquid
													error repudiandae earum suscipit fugiat molestias,
													veniam, vel architecto veritatis delectus repellat
													modi impedit sequi.
												</p>
												<div className='btn-box'>
													<a href='' className='btn1'>
														Read More
													</a>
												</div>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='img-box'>
												<img src='images/slider-img.png' alt='' />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='carousel-item'>
								<div className='container '>
									<div className='row'>
										<div className='col-md-6 '>
											<div className='detail-box'>
												<h1>
													Crypto <br />
													Currency
												</h1>
												<p>
													Explicabo esse amet tempora quibusdam laudantium,
													laborum eaque magnam fugiat hic? Esse dicta aliquid
													error repudiandae earum suscipit fugiat molestias,
													veniam, vel architecto veritatis delectus repellat
													modi impedit sequi.
												</p>
												<div className='btn-box'>
													<a href='' className='btn1'>
														Read More
													</a>
												</div>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='img-box'>
												<img  src='https://ucarecdn.com/9b49e826-038d-49ae-a329-044db008d2f6/-/preview/1000x857/' alt='' />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<ol className='carousel-indicators'>
							<li
								data-target='#customCarousel1'
								data-slide-to='0'
								className='active'
							></li>
							<li data-target='#customCarousel1' data-slide-to='1'></li>
							<li data-target='#customCarousel1' data-slide-to='2'></li>
						</ol>
					</div>
				</section>
			</div>

			<Service />
			<About />
			<Why />
			<Team />
			<Client />
			<Info />
			<Footer />
		</>
	)
}

export default Header
