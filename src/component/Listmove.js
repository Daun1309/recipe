import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Main.scss';

function Listmove() {
    return (
        <div id='end' className='list-link' style={{backgroundImage:'url(./img/list.png)'}}>
            <div className='link-wrap'>
                <h2>냉장고 관련 어플을 만들겁니다</h2>
                <Link className='list-btn' to="/list"><img src='../img/listmove.png'/></Link>
            </div>
        </div>
    )
}

export default Listmove