import React from 'react';
import "../css/Mypage.css";

const Mypage = () => {
  return (
    <div>
        <h4>Mypage</h4>
        <div className='mypage-bar'></div>
        <div className='mypage-bar'></div>
        <form>
          <div>
            <p>재료</p>
            <input type="text"/>
          </div>
          <div>
            <p>유통기한</p>
            <input type="date"/>
          </div>
          <input type="submit" value="저장"/>
        </form>
    </div>
  )
}

export default Mypage