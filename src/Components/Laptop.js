import React, {useState, useEffect} from "react";
import '../css/Laptop.css'
import anhlaptop from '../image/laptop.jpg'
import anhlaptop1 from '../image/laptop1.png'
import anhlaptop2 from '../image/laptop2.png'
import anhlaptop3 from '../image/laptop3.png'
import anhlaptop4 from '../image/laptop4.png'
import anhlaptop5 from '../image/laptop5.png'
import anhlaptop6 from '../image/laptop6.png'
import anhlaptop7 from '../image/laptop7.png'
import anhlaptop8 from '../image/laptop8.png'
import anhlaptop9 from '../image/laptop9.png'
import anhlaptop10 from '../image/laptop10.png'
import anhlaptop11 from '../image/laptop11.png'
import anhlaptop12 from '../image/laptop12.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCartFill, BsPhone, BsLaptop, BsTablet, BsEarbuds, BsWatch, BsSmartwatch, BsTvFill, BsStar,BsStarFill, BsPlayFill, BsFillBagCheckFill } from 'react-icons/bs';
import anhlaptop13 from '../image/laptop13.png'
import anhlaptop14 from '../image/laptop14.png'
import anhlaptop15 from '../image/laptop15.jpg'
import anhlaptop16 from '../image/laptop16.jpg'
import axios from "axios";


function Laptop (){



    const [todosState, setTodosState] =useState([]);
    useEffect(()=>{
        const getTodos = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:2453/api/product/product_macbook'
                )
                // console.log(res.data)
                setTodosState(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getTodos();
    },[])



    return(
        <div>
            
            <div>
                <img src={anhlaptop} className="anhlaptop"/>
            </div>

            <div className="quick-link">
                <div className="quick-link-list">
                    <div className="quick-link-item"> 
                        <img src={anhlaptop1} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop2} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop3} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop4} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop5} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop6} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop7} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop8} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop9} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop10} className="anhlaptop1"/>
                    </div>

                    <div className="quick-link-item"> 
                        <img src={anhlaptop11} className="anhlaptop1"/>
                    </div>
                    
                    <div className="quick-link-item"> 
                        <img src={anhlaptop12} className="anhlaptop1"/>
                    </div>


                   

                </div>
            </div>

        
        <div className="Menu-top">

            <div className="nav-item">

                <div className="nav-item-icon">
                    <div className="nav-item-icon-list">
                    <BsFillBagCheckFill/>
                    </div>
                </div>

                <div className="nav-item-text">
                    Deal Sốc
                </div>
           
            </div>


            <div className="nav-item">

                <div className="nav-item-icon">
                    <div className="nav-item-icon-list">
                    <BsPhone/>
                    </div>
                </div>

                <div className="nav-item-text">
                    Gaming
                </div>
           
            </div>


            <div className="nav-item">

                <div className="nav-item-icon">
                    <div className="nav-item-icon-list">
                    <BsLaptop/>
                    </div>
                </div>

                <div className="nav-item-text">
                    Macbook
                </div>
           
            </div>


            <div className="nav-item">

                <div className="nav-item-icon">
                    <div className="nav-item-icon-list">
                    <BsTablet/>
                    </div>
                </div>

                <div className="nav-item-text">
                   Học Tập , Văn Phòng
                </div>
           
            </div>


            <div className="nav-item">

                <div className="nav-item-icon">
                    <div className="nav-item-icon-list">
                    <BsEarbuds/>
                    </div>
                </div>

                <div className="nav-item-text">
                    Đồ Họa , Kỹ Thuật
                </div>
           
            </div>

            <div className="nav-item">

                <div className="nav-item-icon">
                    <div className="nav-item-icon-list">
                    <BsWatch/>
                    </div>
                </div>

                <div className="nav-item-text">
                    Mỏng Nhẹ
                </div>
           
            </div>

            <div className="nav-item">

                <div className="nav-item-icon">
                    <div className="nav-item-icon-list">
                    <BsSmartwatch/>
                    </div>
                </div>

                <div className="nav-item-text">
                    Cao Cấp , Sang Trọng
                </div>
           
            </div>

            <div className="nav-item">

                <div className="nav-item-icon">
                    <div className="nav-item-icon-list">
                    <BsTvFill/>
                    </div>
                </div>

                <div className="nav-item-text">
                    Phần Mềm
                </div>
           
            </div>

        </div>

        {/* banner hinh anh */}
        
        {/* <div className="banner-img">
            <div >
                <img  src={anhlaptop13} className="banner-img-1"/>
            </div>

            <div>
                <img  src={anhlaptop14}  className="banner-img-2"/>
            </div>

        </div> */}

        {/* Sản phẩm lap-top Gaming */}
       
       
        
            <div className="Gaming-block">
            <div>
                <img src={anhlaptop15} className="Gaming-block-img"/>
            </div>


            <div className="abcd">

            {todosState.map(post => (

               <div className="Gaming-product-list">
                  <div className="Gaming-product-list-item">
                    <img src={post.imageurl} className="Gaming-product-list-item-img"/>
                             <div className="Gaming-product-list-item-name">
                                 <a className="Gaming-product-list-item-text">{post.productname}</a>
                            </div>

                            <div className="Gaming-product-list-item-compare">
                                 <div className="item-compare">Ram 8 GB</div>
                                 <div className="item-compare">SSD 512 GB</div>
                            </div>

                            <div className="Gaming-product-list-item-compare_price">
                                <div className="item-price-old">29.990.000 VND</div>
                                <div className="item-price-discount">-6%</div>
                            </div>

                            <div>
                                <div className="price">{post.price}</div>
                                <div className="price-gift">Quà 100.000đ</div>
                            </div>
                            <div className="icon">
                                      <BsStarFill/>
                                      <BsStarFill/>
                                      <BsStarFill/>
                                      <BsStar/>
                                      <BsStar/>
                                  </div>

                            <div className="item-details">
                                <div className="details">Màn hình : 15:6, Full HD, 144Hz</div>
                                <div className="details">CPU : i7, 11800H, 2.3 Ghz</div>
                                <div className="details">Card  : RTX 3050Ti 4 GB</div>
                                <div className="details">Pin: 4-cell, 57 Wh</div>
                            </div>
                     </div>
                 </div>
                 
           
                 ))}
                 </div>
            </div>

           
                
      
       
































        </div>
    );
};
export default Laptop;