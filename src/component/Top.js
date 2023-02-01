import React from 'react'

const Top = () => {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        //behavior: 'smooth'
        behavior: 'auto'
    })}

  return (
    <>
     <button onClick={scrollToTop} className="topBtn">👆</button>
    </>
  )
}

export default Top