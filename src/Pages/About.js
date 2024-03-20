import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function About() {
  return (
    <div>
      <Header />
      <div className="page-heading about-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>about us</h4>
                <h2>our company</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
