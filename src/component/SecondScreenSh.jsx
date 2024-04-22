import React from 'react'
import screen from "./images/workspace home.svg"
import "./LandingPage.css"
function SecondScreenSh() {
  return (
    <div className='d-flex align-items-center flex-column m-5 pt-5'>
          <div className='screen-text d-flex align-items-center flex-column p-5'>
                <h1 className='py-4 text-light' style={{fontSize:"55px"}}>Expertex Workspace</h1>
              <p className='text-light fs-4'>
              Expertex Workspace offers AI-powered business building, enabling individuals of
              any background and experience to launch their standalone AI solution in just 6 minutes.
              </p>
          </div>
          <div>
              <img className='screen-shoot' src={screen} alt="" />
          </div>
    </div>
  )
}

export default SecondScreenSh
