import React,{useContext, useState, useRef} from 'react'
import '../css/common.scss';
import '../css/List.scss';
import Item from "../component/Item"
import Footer from '../component/Footer';
import {Myrecipe} from '../component/Myrecipe';

function List() {

  const [ulBox, setUlBox] = useState("고수"),
    hate = useRef();
  const {data} = useContext(Myrecipe),
    {serchTxt} = useContext(Myrecipe),
    {serch} = useContext(Myrecipe),
    {elInput} = useContext(Myrecipe),
    {num} = useContext(Myrecipe);

  const hates = (e) => {
    setUlBox(e.target.innerText);
    hate.current.classList.toggle('active');
  }

  return (
      

    <>
      <div className='header-empty-box'/>
      <div className='list'>
        <div onClick={()=>hate.current.classList.remove('active')} className='l-top'>
          <div className='l-t-wrap'>
            <form onSubmit={serch}>
              <input ref={elInput} type="text" name="w" placeholder='재료를 입력해주세요.'/>
              <input className='btn1' type="submit" value="serch"></input>
            </form>
          </div>
        </div>
        <div className='l-bottom'>
          <div className='l-b-serch'>
            {
            num.length === 0
            ? <h2>" {serchTxt} " 에 관련된 레시피가 없습니다.</h2>
            : <h2>" {serchTxt} " &nbsp;재료를 사용하여 만들 수 있는 레시피</h2>
            }
            <div className='filter-box'>
              <h4>{num.length} 개의 레시피</h4>
              <div className='minus'>
                <div ref={hate} onClick={(e)=>e.target.classList.toggle('active')} className='hate '>
                  {ulBox}
                  <img src='../img/Polygon.png'></img>
                  <ul>
                    <li onClick={(e)=>hates(e)}>복숭아</li>
                    <li onClick={(e)=>hates(e)}>갑각류</li>
                    <li onClick={(e)=>hates(e)}>엔진오일</li>
                    <li onClick={(e)=>hates(e)}>코뿔소</li>
                  </ul>
                </div>
                <p>를 제외한 요리보기</p>
              </div>
            </div>
          </div>
          <div onClick={()=>hate.current.classList.remove('active')} className='l-b-content'>
            <Item num={num} data={data} serchTxt={serchTxt}></Item>
          </div>
        </div>
      </div>
      
      {/* <Footer/> */}
    </>





  )
}

export default List