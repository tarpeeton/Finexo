import React from 'react';
import { Link } from 'react-router-dom'



const Footer = () => {


	return(
		<section className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <Link to="tel:+998917888041">Rustam Rinatovich</Link>
      </p>
    </div>
  </section>
	)
}



export default Footer