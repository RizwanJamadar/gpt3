import React from 'react';
import './header.css';
import People from '../../assets/people.png'
import AI from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3_header section_padding'>
      <div className="gpt3_header-content">
        <h1 className="gradient-text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>

        <p>Yet bed any for travelling assistance indulgence unpleasing. 
          Not thoughts all excersice blessings. Indulgence way everything joy alteration boisterous the attachment. 
          Party we years to order allow asked of.</p>

        <div className="gpt3_header-content_input">
          <input type="email" name="" id="" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3_header-content_people">
          <img src={People} alt="" />
          <p>1,600 People requested access a visit in last 24 hours.</p>
        </div>
      </div>
      <div className="gpt3_header-image">
          <img src={AI} alt="" />
      </div>
    </div>
  )
}

export default Header;