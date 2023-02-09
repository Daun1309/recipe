import React from 'react'

const Top = () => {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        //behavior: 'auto'
    })}

  return (
    <>
     <button onClick={scrollToTop} className="topBtn">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#fff"  >
        <path d="M22.5 40V13.7L10.1 26.1 8 24 24 8l16 16-2.1 2.1-12.4-12.4V40Z" />
      </svg>
     </button>
    </>
  )
}

export default Top