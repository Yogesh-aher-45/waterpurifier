import React from 'react'
import './Waterpurifier.css'
import data from './Product.jsx'
const Waterpurifier = () => {

    return (
        <>
            <div className="container-fluid waterpurifier">
                <div className="row">

                    {data.map((item) => {
                        return (
                            <>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card waterprifier-card" >
                                        <img class="card-img-top" src={item.product_img} alt="Card image cap" />
                                        <div class="card-body card-container ">
                                            <h5 class="card-title">
                                                {item.product_tittle}</h5>
                                            <p class="card-text ">
                                                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-1024.png" alt="" />  {item.product_dis}
                                                <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="" /> 
                                                {item.product_price}
                                            </p>
                                            <button>Learn More <i class="ri-arrow-right-wide-line"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default Waterpurifier