import React from 'react'
import screen from "./images/regular_chat_after_workspace.svg"
import "./LandingPage.css"
function FirstScreenSh() {
  return (
    <div className=' d-flex align-items-center flex-column m-5'>
          <div className='screen-text d-flex align-items-center flex-column p-5'>
                <h1 className='py-4 text-light' style={{fontSize:"55px"}}>Expertex Playground</h1>
              <p className='text-light fs-4'>
                  Expertex supports our Playground with over 30 LLM versions to finds the best module for your commands, utilize the
                  appropriate AI engine(s) for optimal results, and compare up to three of them simultaneously with a single prompt.
              </p>
          </div>
          <div>
              <img className='screen-shoot' src={screen} alt="" />
          </div>
    </div>
  )
}

export default FirstScreenSh
