import React from 'react';
import { NavLink } from 'react-router-dom'


const About = () => {
	return(
		<section className="about_section layout_padding">
			<div className="container  ">
				<div className="heading_container heading_center">
					<h2>
						About <span>Us</span>
					</h2>
					<p>
						Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
					</p>
				</div>
				<div className="row">
					<div className="col-md-6 ">
						<div className="img-box">
							<img src="https://ucarecdn.com/abd3ecc4-7f6d-4921-986e-057904bce28c/-/preview/1000x790/" alt=""/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="detail-box">
							<h3>
								We Are Finexo
							</h3>
							<p>
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
								in some form, by injected humour, or randomised words which don`t look even slightly believable. If you
								are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in
								the middle of text. All
							</p>
							<p>
								Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
							</p>
							<NavLink to="#">
								Read More
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	
	)
}


export default About