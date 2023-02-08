import React, { useState, useContext } from 'react'
import { dbService } from '../fbase';
import { doc,deleteDoc, updateDoc} from "firebase/firestore"
import { Link } from 'react-router-dom';
import {Myrecipe} from './Myrecipe';
import "../css/Mypage.scss"

const Ingredients = ({ ingredientsObj, isOwner }) => {

  const [editing, setEditing] = useState(false);
  const [newIngredients,setIngredients] = useState(ingredientsObj.ingredients)
  const [newDate,setNewDate] = useState(ingredientsObj.date);
  const IngredientsTextRef = doc(dbService, "ingredientsG", `${ingredientsObj.id}`)

  // console.log(
  //   data.map((obj)=>{
  //     return obj.hashtag
  //   })
  //   //data.hashtag
  // );

  const onChange = (e) => {
    setIngredients(e.target.value)
  }

  const onChangeD = (e) => {
    setNewDate(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
      await updateDoc(IngredientsTextRef,{
      ingredients: newIngredients,
      date: newDate
    })
    setEditing(false);
  }

  const onDeleteClick = async () => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if(ok){
      await deleteDoc(IngredientsTextRef);
    }
    console.log(IngredientsTextRef)
  }  

  const toggleEditing = () => setEditing((prev)=>!prev);

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="U-input">
            <input type="text" value={newIngredients} onChange={onChange} required />
            <input type="date" onChange={onChangeD}/>
            <input type="submit" value="저장"/>
            <button onClick={toggleEditing}>cancle</button>
          </form>
        </>
        ) : (
         <>
            {isOwner && (
              <div className='ingredients-list'>
                <p className='ingredients-name'>{ingredientsObj.ingredients}</p>
                <p className='ingredients-date'>{ingredientsObj.date}</p>
                <div className='ingredients-btn'>
                  <button onClick={onDeleteClick}>삭제</button>
                  <button onClick={toggleEditing}>수정</button>
                </div>
              </div>
            )}
        
         </>
        )}
    </div>
  )
}

export default Ingredients