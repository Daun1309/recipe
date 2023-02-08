import React,{useContext, useState, useRef, useEffect} from 'react'
import '../css/common.scss';
import '../css/List.scss';
import Item from "../component/Item"
import {Myrecipe} from '../component/Myrecipe';

import {useLocation} from 'react-router-dom';

function List() {

  const {data} = useContext(Myrecipe),
    {serchTxt} = useContext(Myrecipe),
    {serch} = useContext(Myrecipe),
    {elInput} = useContext(Myrecipe),
    {num} = useContext(Myrecipe),
    {ulBox} = useContext(Myrecipe),
    {hate} = useContext(Myrecipe),
    {hates} = useContext(Myrecipe),
    {remScroll} = useContext(Myrecipe);

    
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, remScroll);
  }, [pathname]);

    

  
  

  return (
      

    <>
      <div className='header-empty-box'/>
      <div className='list'>
        <div onClick={()=>hate.current.classList.remove('active')} className='l-top'>
          <img className='food-icon' src='https://ifh.cc/g/XJd2oj.png'/>
          <img className='food-icon' src='https://ifh.cc/g/O1k8pL.png'/>
          <img className='food-icon' src='https://ifh.cc/g/bJwKgH.png'/>
          <img className='food-icon' src='https://ifh.cc/g/xLqfZP.png'/>
          <img className='food-icon' src='https://ifh.cc/g/7NCy0s.png'/>
          <div className='l-t-wrap'>
            <form onSubmit={serch}>
              <input ref={elInput} type="text" name="w" placeholder='재료를 입력해주세요.'/>
              <input className='btn1' type="submit" value="search"></input>
            </form>
          </div>
        </div>
        <div className='l-bottom'>
          <div className='l-b-serch'>
            {
            num.length === 0
            ? <h2>" {serchTxt} " 에 관련된 레시피가 없습니다.</h2>
            : (num[0] === 1000 ? <h2>재료를 입력해 주세요.</h2> : <h2>" {serchTxt} " &nbsp;재료를 사용하여 만들 수 있는 레시피</h2>)
            }
            <div className='filter-box'>
            {num[0] === 1000
              ? <h4>0 개의 레시피</h4>
              : <h4>{num.length} 개의 레시피</h4>
              }
              <div className='minus'>
                <div ref={hate} onClick={(e)=>e.target.classList.toggle('active')} className='hate '>
                  {ulBox}
                  <img src='../img/Polygon.png'></img>
                  <ul>
                    <li onClick={(e)=>hates(e)}>복숭아</li>
                    <li onClick={(e)=>hates(e)}>청경채</li>
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