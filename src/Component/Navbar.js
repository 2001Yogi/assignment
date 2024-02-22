import React from 'react'

function Navbar() {
    const btn_style = {
        fontSize : '18px', padding : '8px 14px'
    }
    const link_style = {
        fontSize : '18px', color : 'black', textDecoration : 'none', marginLeft: '25px', fontWeight: 'bolder'
    }
    const link_style_1 = {
        fontSize : '18px', color : 'green', textDecoration : 'none', marginLeft: '25px' , fontWeight: 'bolder'
    }
    const icon = {
        fontSize : '18px', color : 'green',marginLeft: '-20px'
    }
    const with_out_margin ={
        marginLeft: '-30px' , marginTop : '8px'
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3' style={{marginLeft : '15px'}}>
                    <button style={btn_style}
                    className='btn btn-success'><i className="fa-solid fa-table-cells-large"></i>&nbsp;&nbsp;Browse All Categories &nbsp;&nbsp;<i class="fa-solid fa-chevron-down "></i></button>
                </div>
                <div className='col-md-7' style={{marginTop : '8px'}}>
                    <i className="fa-solid fa-fire" style={icon}></i>
                    <a href='' style={link_style}>Hot Deals</a>
                    <a href='' style={link_style_1}>Home</a>
                    <a href='' style={link_style}>About</a>
                    <a href='' style={link_style}>Shop</a>
                    <a href='' style={link_style}>Vendors</a>
                    <a href='' style={link_style}>Mega menu</a>
                    <a href='' style={link_style}>Blog</a>
                    <a href='' style={link_style}>Pages</a>
                    <a href='' style={link_style}>Contact</a>    
                </div>
                <div className='col-md-2 d-flex' style={with_out_margin}>
                    <i className="fa-solid fa-headphones" style={{fontSize : '30px', fontWeight : 'bolder'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{fontSize : '22px', color: 'green' , fontWeight : 'bolder'}}>1900-888</p>
                </div>
                <hr  className='mt-2'/>
            </div>
        </div>
    )
}

export default Navbar
