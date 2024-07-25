import React from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



const Why = () => {
	return(

		<section className="why_section layout_padding">
			<div className="container">
				<div className="heading_container heading_center">
					<h2>
						Why Choose <span>Us</span>
					</h2>
				</div>
				<div className="why_container">
					<div className="box">
						<div className="img-box">
							<img src="https://ucarecdn.com/b92ca5df-1737-494a-b858-f3ca1bcf23e0/-/preview/512x512/" alt="" />
						</div>
						<div className="detail-box">
							<h5>
								Expert Management
							</h5>
							<p>
								Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
								Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
							</p>
						</div>
					</div>
					<div className="box">
						<div className="img-box">
							<img src="https://ucarecdn.com/933e6bc9-7641-4143-83ec-8722333285cb/-/preview/512x512/" alt="" />
						</div>
						<div className="detail-box">
							<h5>
								Secure Investment
							</h5>
							<p>
								Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
								Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
							</p>
						</div>
					</div>
					<div className="box">
						<div className="img-box">
							<img src="https://ucarecdn.com/d16e1b20-4883-4851-9103-7f2d0ab66129/-/preview/512x512/" alt="" />
						</div>
						<div className="detail-box">
							<h5>
								Instant Trading
							</h5>
							<p>
								Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
								Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
							</p>
						</div>
					</div>
					<div className="box">
						<div className="img-box">
							<img src="https://ucarecdn.com/989e00de-cdd2-4992-b63a-c041b1d978c1/-/preview/512x512/" alt="" />
						</div>
						<div className="detail-box">
							<h5>
								Happy Customers
							</h5>
							<p>
								Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
								Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
							</p>
						</div>
					</div>
				</div>
				<div className="btn-box">
					<NavLink to="redmore">
						Read More
					</NavLink>
				</div>
			</div>
		</section>
	
	)
}


export default Why