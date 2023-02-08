import React,{useEffect, useContext} from 'react'
import '../css/common.scss';
import '../css/Main.scss';
import { Link } from 'react-scroll';
import Listmove from '../component/Listmove';
import { useLocation } from "react-router-dom";
import {Myrecipe} from '../component/Myrecipe';


function Main() {
  
  const { pathname } = useLocation();
  const {setScroll} = useContext(Myrecipe);

  useEffect(() => {
    //main에서 list 이동 시 scrollTop 을 0으로 주어 검색에 용이 하게 셋팅
    setScroll(0);
    window.scrollTo(0, 0);

    //스크롤 채팅 이벤트
    const scrollElements = document.querySelectorAll(".scrolls");
    const elementInView = (el) => {   
      const elementTop = el.getBoundingClientRect().top+700;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / 1
      );
    };
    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top+850;
      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };
    const hideScrollElement = (select) => {
      select.classList.remove("scrolled");
    };
    const displayScrollElement = (select) => {
      select.classList.add("scrolled");
    };
    const handleScrollAnimation = () => {
      scrollElements.forEach((obj) => {
        if (elementInView(obj, 1.25)) {
          displayScrollElement(obj);
        } else if (elementOutofView(obj)) {
          hideScrollElement(obj)
        }
      })
    }
    window.addEventListener("scroll", () => { 
      handleScrollAnimation();
    });
  }, [pathname]);

  return (
    <>
      <div className='header-empty-box'/>
      <div className='m-wrap'>
        
        <div className='main-title' style={{backgroundImage: 'url(./img/main.png)'}}>
          <img src='./img/title.png'/>
        </div>

        <div className='main-app'>
          <div className='a-wrap'>
            <div className='a-img-wrap'>
              <div className='app-box'>
                <img src='./img/app3.png'/>
              </div>
              <div className='app-box'>
                <img src='./img/app2.png'/>
              </div>
              <div className='app-box'>
                <img src='./img/app1.png'/>
              </div>
            </div>
            <div className='a-text-box'>
              <h2>냉장고 관련<br/>어플을<br/>만들겁니다<span>셰프리</span></h2>
              <Link className='end-hight' to="end" spy={true} smooth={true}><img src='./img/movebtn.png'/></Link>
            </div>
          </div>
        </div>

        <div className='scroll-chat'>
          <div className='s-wrap'>
            <div className='s-text-box'>
              <h2>냉장고 관련<br/>어플을<br/>만들겁니다<span>셰프리</span></h2>
              <Link className='end-hight' to="end" spy={true} smooth={true}><img src='./img/movebtn.png'/></Link>
            </div>
            <div className='chat-box'>
              <div className='phone' style={{backgroundImage:'url(./img/phone.png)'}}>
              </div>
            </div>
          </div>
          <div className='s-wrap scrolls'>
            <div className='s-text-box'>
            </div>
            <div className='chat-box'>
              <div className='phone'>
                <img className='chat1' src='./img/chat1.png'/>
              </div>
            </div>
          </div>
          <div className='s-wrap scrolls'>
            <div className='s-text-box'>
            </div>
            <div className='chat-box'>
              <div className='phone'>
                <img className='imo' src='./img/imo.gif'/>
                <img className='chat2' src='./img/chat2.png'/>
              </div>
            </div>
          </div>
          <div className='s-wrap scrolls'>
            <div className='s-text-box'>
            </div>
            <div className='chat-box'>
              <div className='phone'>
                <img className='chat3' src='./img/chat3.png'/>
              </div>
            </div>
          </div>
          <div className='s-wrap'>
          </div>
          <div className='s-wrap'>
          </div>
        </div>
        { 
        //Link태그가 곂치기 때문에 컨포넌트로 분리
        }
        <Listmove/>

      </div>

    </>
  )
}

export default Main