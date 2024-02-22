import React from 'react'
import styled from 'styled-components'

function Header() {

    const link = {
        textDecoration: 'none', color: 'grey', fontSize: 17, marginLeft: 12
    }
    
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src='https://nest.botble.com/storage/general/logo.png' width={200} height={60} style={{ marginLeft: 15, marginTop: 20 }} />
                    </div>

                    <div className='col-md-5' style={{ border: '2px solid aquamarine', marginTop: 27, marginLeft: 65, width : '630px' }}>
                        <input type='text' value={'All Categories '} style={{ marginLeft: 40, marginTop: 10, border: 'none', outline: 'none' , width : '250' }} />
                        <input type='text' placeholder={'Search for items...'} style={{ marginTop: 10, border: 'none', outline: 'none', width : '250' }} />
                    </div>

                    <div className='col-md-4' style={{ marginTop: 40, marginLeft: '23px', overflowY : 'hidden'}}>
                        <i className="fa-solid fa-arrows-rotate" style={link}></i>
                        <a href='' style={link}>Compare</a>
                        <i className="fa-regular fa-heart" style={link}></i>
                        <a href='' style={link}>Wishlist</a>
                        <i className="fa-solid fa-cart-shopping" style={link}></i>
                        <a href='' style={link}>Cart</a>
                        <i className="fa-regular fa-user" style={link}></i>
                        <a href='' style={link}>Account</a>
                    </div>
                </div>
                <hr className='mt-5'/>
            </div>
        </>
    )
}

export default Header