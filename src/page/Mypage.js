import React, { useState, useEffect } from 'react';
import "../css/Mypage.css";
import "../css/common.scss"
import { dbService } from '../fbase';
import { addDoc, collection, getDocs, query} from "firebase/firestore";
import Footer from '../component/Footer';
import Top from '../component/Top';


const Mypage = () => {

  const [ingredients,setIngredients] = useState("");
  const [date,setDate] = useState("");
  const [ingredientsG,setIngredientsG] = useState([]);

  const getIngredients = async () => {
    const dbIngredients = query(collection(dbService, "ingredientsG"));
    const querySnapshot = await getDocs(dbIngredients);

    querySnapshot.forEach((doc) => {
      const ingredientsObj = {
        ...doc.data(),
        id: doc.id,
      } 
      console.log(doc.data())
      setIngredientsG((prev) => [ingredientsObj, ...prev]);
    }); 
  };
    
  useEffect(() => {
    getIngredients();
  }, []);
    
  console.log(ingredientsG);

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(dbService, "ingredientsG"), {
      ingredients : ingredients,
      date: date,
      createdAt: Date.now(),
    });
    console.log("Document written with ID: ",docRef.id);
    setIngredients("");
  };

  const onChange = (event) => {
    setIngredients(event.target.value)
  } 

  const onChangeD = (event) => {
    setDate(event.target.value)
  } 
  
  return (
    <>
    <div className='header-empty-box'/>
    <div className='my-wrap'>
        <h4>Mypage</h4>
        <div className='mypage-bar'></div>
          <p>❤️한 레시피가 없습니다</p>
        <div className='mypage-bar'></div>
          <form onSubmit={onSubmit}>
            <div>
              <p>재료</p>
              <input value={ingredients} onChange={onChange} type="text" placeholder="재료" maxLength={30}/>
            </div>
            <div>
              <p>유통기한</p>
              <input type="date" onChange={onChangeD}/>
            </div>
            <input type="submit" value="저장"/>
          </form>
        <div>
        {ingredientsG.map((ingredients) => (
          <div key={ingredients.id} className="ingredients">
            <p>{ingredients.ingredients}</p>
            <p>{ingredients.date}</p>
            <button>삭제</button>
          </div>
        ))}
      </div>
    {/* <Top/> */}
    </div>
    <Footer/>
    </>
  )
}

export default Mypage