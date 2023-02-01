import React from 'react';
import Footer from '../component/Footer';
// import {useParams} from 'react-router-dom';
import '../css/common.scss';
//import '../css/Detail.scss';

function Detail({data}) {

  // let {recipe} = useParams();

  return (
    <>
      <div className='header-empty-box'/>

      <div className='detail'>
        <h1>
            {data.name}
          </h1>
      </div>
      <Footer/>
    </>
  )
}

export default Detail