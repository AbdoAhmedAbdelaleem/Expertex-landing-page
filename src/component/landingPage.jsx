import React from 'react'
import "./LandingPage.css"
import logo from "./images/Expertex.svg"
import logo2 from "./images/15 Artificial Intelligence copy 1.svg"
import JoinModal from './modal'
function LandingPage() {
  return (
    <div className='landingPage mt-4'>
        <div className='logo pb-2'>
              <div>
                  <img src={logo} alt="" />
              </div>
              <div>
                  <img src={ logo2} alt="" />
              </div>
          </div>
          <div className='join-us'>
            <JoinModal/>
          </div>

    </div>
  )
}

export default LandingPage
