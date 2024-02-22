import React from 'react'

function Main() {
    const a_style = {
        fontSize : '18px', textDecoration : 'none' , color : 'black' , fontWeight: 'bolder', marginLeft : '25px'
    }
    const btn_style = {
        borderRadius : '50px', marginLeft : '20px', marginTop : '38px', backgroundColor : 'lightgrey'
    }
    const image = {
        width : '80px', height : '50px', marginLeft : '15px', marginTop : '15px'
    }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <img src='https://nest.botble.com/storage/sliders/1-1.png' style={{height : '550px' , width : '1450px', borderRadius : '10px', position : 'relative'}} />
                <h1 style={{position : 'absolute', top : '45%' , left : '6%', fontSize : '75px'}}>Don't miss amazing <br/>grocery deals</h1>
                <p style={{position : 'absolute', top : '73%' , left : '6%', fontSize : '35px' , color : 'grey'}}>Sign up for the daily newsletter</p>

                <input type='email' placeholder='Your email address' style={{position : 'absolute', top : '90%' , left : '6%', padding : '12px 20px', width: '380px', height : '49px', borderRadius : '23px' , outline : 'none' , border : 'none'}}/>
                <button className='btn btn-success' style={{position : 'absolute', top : '90%' , left : '27%' , padding : '12px 25px' , borderRadius : '23px' ,width: '150px'}}>Subscribe</button>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-3' style={{marginTop : '25px', fontSize : '35px' , fontWeight : 'bold', marginLeft : '23px'}}>
                <p>Featured Categories</p>
            </div>
            <div className='col-md-5' style={{marginTop : '44px' }}>
                <a href='' style={a_style}>Cake & Milk</a>
                <a href='' style={a_style}>Coffees & Teas</a>
                <a href='' style={a_style}>Pet Foods</a>
                <a href='' style={a_style}>Vegetables</a>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-2' style={{marginLeft : '85px'}}>
                <button className='btn' style={btn_style}><i class="fa-solid fa-arrow-left"></i></button>
                <button className='btn' style={btn_style}><i class="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
        <div className='row'>
            <div className='col-md-12 d-flex' style={{marginTop : '25px'}}>
                <div style={{width : '120px' , height : '150px', marginLeft : '10px', backgroundColor : 'lightblue', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-5.png' style={image}/>
                    <p>&nbsp;&nbsp;Custard Apple<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'lightcoral', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-12.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fresh Kiwi<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'lightgreen', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-11.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Orange<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'lightgrey', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-4.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;Black Grapes<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'cadetblue', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-2.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Strawberry<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'lightpink', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-6.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Juicy Grapes<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'antiquewhite', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-11.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;Fresh Orange<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'beige', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-10.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;Dragon Fruit<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'cornflowerblue', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-12.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Fresh Kiwi<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 items</p>   
                </div>

                <div style={{width : '120px' , height : '150px', marginLeft : '30px', backgroundColor : 'darkseagreen', padding : '2px' , borderRadius : '8px'}}>
                    <img src='https://nest.botble.com/storage/product-categories/image-9.png' style={image}/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apple<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 items</p>   
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Main
