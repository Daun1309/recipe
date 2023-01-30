import './App.scss';
import './css/common.scss';
import {useState, useRef, useEffect} from 'react';
import {Link,BrowserRouter,Route, Routes} from 'react-router-dom';
import {authService} from "./fbase";
import Main from "./page/Main"
import List from "./page/List"
import Login from './page/Login';
import Signup from './page/Signup';
import Header from './component/Header';
import Footer from './component/Footer';
import Mypage from './page/Mypage';
import {Myrecipe} from './component/Myrecipe';

function App() {

  // api 파라미터 구조 정리
  // http://openapi.foodsafetykorea.go.kr/api/인증키/서비스명/요청파일타입/요청시작위치/요청종료위치


  
  // api키를 대입하여 받아올 링크
  // http://openapi.foodsafetykorea.go.kr/api/fb1bb5a1586a4caa8676/COOKRCP01/json/1/900


  /**api 링크*/
  const tahl = "http://openapi.foodsafetykorea.go.kr/api/fb1bb5a1586a4caa8676/COOKRCP01/json/1/999";
  


  /*
    [{
      id = 고유번호 
      name = 요리이름 
      cook = 요리방법(끓이기,찌기...) 
      mainImg = 메인 이미지 
      tan,dan,ji,na = 영양소
      yul = 열량(칼로리)
      item = 요리재료 
      v = 분류(반찬,후식...)
      make1~20 = 만드는 법(text)
      makeImg1~20 = 만드는 법(img)
    }]
  */

    
    const [data, setData] = useState([]),
    [serchTxt, serchChange] = useState([]),
    [num, setNum] = useState([]),
    elInput = useRef();
  const [init, setInit] = useState(false);  //초기화되지 않은 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false); //로그인x=null //로그인 여부 판단

  useEffect(()=>{ 
    //사용자의 로그인 상태변화를 감지하는 메소드 onAuthStateChanged()
    authService.onAuthStateChanged((user)=> {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[])


  useEffect(() => {
    fetch(tahl, {
        headers: {
          Accept: "application / json",
        },
        method: "GET",
      })
      .then((a) =>  a.json())
      .then((recipe) => {
        const reg = /([가-힣]{1,10}[ ][가-힣]{1,10}|[가-힣]{1,10})/g
        let rcp = recipe.COOKRCP01.row.map((obj,key)=>{
          return {
            id:key,
            hashtag:obj.RCP_PARTS_DTLS.replace(/인분|재료|갈은것|다진것|개|적당량|소스|소스소개/g, "").replace(/로즈마리/g, "셰프리").replace(/마리/g, "").replace(/셰프리/g, "로즈마리").match(reg),
            name:obj.RCP_NM, cook:obj.RCP_WAY2, mainImg:obj.ATT_FILE_NO_MAIN, tan:obj.INFO_CAR+"g", dan:obj.INFO_PRO+"g", ji:obj.INFO_FAT+"g", na:obj.INFO_NA+"mg",yul:obj.INFO_ENG, item:obj.RCP_PARTS_DTLS, v:obj.RCP_PAT2, make1:obj.MANUAL01, make2:obj.MANUAL02, make3:obj.MANUAL03, make4:obj.MANUAL04, make5:obj.MANUAL05, make6:obj.MANUAL06, make7:obj.MANUAL07, make8:obj.MANUAL08, 
            // make9:obj.MANUAL09, make10:obj.MANUAL10, make11:obj.MANUAL11, make12:obj.MANUAL12, make13:obj.MANUAL13, make14:obj.MANUAL14, make15:obj.MANUAL15, make16:obj.MANUAL16, make17:obj.MANUAL17, make18:obj.MANUAL18, make19:obj.MANUAL19, make20:obj.MANUAL20,
            makeImg1:obj.MANUAL_IMG01, makeImg2:obj.MANUAL_IMG02, makeImg3:obj.MANUAL_IMG03, makeImg4:obj.MANUAL_IMG04, makeImg5:obj.MANUAL_IMG05, makeImg6:obj.MANUAL_IMG06, makeImg7:obj.MANUAL_IMG07, makeImg8:obj.MANUAL_IMG08, 
            // makeImg9:obj.MANUAL_IMG09, makeImg10:obj.MANUAL_IMG10, makeImg11:obj.MANUAL_IMG11, makeImg12:obj.MANUAL_IMG12, makeImg13:obj.MANUAL_IMG13, makeImg14:obj.MANUAL_IMG14, makeImg15:obj.MANUAL_IMG15, makeImg16:obj.MANUAL_IMG16, makeImg17:obj.MANUAL_IMG17, makeImg18:obj.MANUAL_IMG18, makeImg19:obj.MANUAL_IMG19, makeImg20:obj.MANUAL_IMG20
          };
        })
        setData(rcp);

      });
  }, []);

  console.log(data);

  const serch = (e)=>{
    let arr = [];
    e.preventDefault();
    data.map((obj, key)=>{
      try{
        obj.hashtag.forEach((objs)=>{
          if(objs === elInput.current.value){
            arr.push(key);
          }
        })
      }catch{}
    })
    setNum(arr);
    serchChange(elInput.current.value);
    elInput.current.value = '';
    elInput.current.focus();
  };


  return (
    <div className="App">
      <BrowserRouter>
        {init ? <Header isLoggedIn={isLoggedIn}/> : "Initializing...."}
        <main>
        <Myrecipe.Provider value={{data:data, setData:setData,serchTxt:serchTxt, num:num, serch:serch, elInput:elInput}}>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route path="/page/list" element={<List/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/mypage" element={<Mypage/>} />
          </Routes>
            </Myrecipe.Provider>
        </main>
        <Routes>
          <Route path="/" element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
