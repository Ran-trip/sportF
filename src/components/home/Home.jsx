import React from 'react';
import foot from '../../assets/foot.png';
import tennis from '../../assets/tennis.png';
import basket from '../../assets/basket.jpg';

import './home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hometext">
        <h1>Welcome to SportAkaiky !</h1>
      </div>
      <div className="secondtitle">
        <h3>
        chose your path young padawan
        </h3>
      </div>
       <div className="sport-type">
         <div className="foothome">
          <img className="footstyle" src={foot} alt="foot" />
         </div>
         <div className="tennishome">
           <img className="tennisstyle" src={tennis} alt="tennis" />
         </div>
         <div className="baskethome">
           <img className="basketstyle" src={basket} alt="basket" />
        </div>
      </div>
    </div>

);
};



export default Home;
