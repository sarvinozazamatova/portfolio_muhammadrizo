import React from 'react';

const Contact = () =>{
    return(
        <React.Fragment>
            <div>
           <img className='lllll' src="./front.png" alt=""/>
            <h1 className='lot'>Contact</h1>
            <input className='pul' placeholder='Email adres' ></input>
            <input className='push' placeholder='Youser name'></input>
            <input className='t' placeholder='Your massage'></input>
            <button className='send'>send</button>
            <div className='loop'></div>
            
           </div>
        </React.Fragment>
    )
}

export default Contact;

