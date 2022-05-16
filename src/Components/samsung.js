import React, {useState, useEffect} from "react";
import Img1 from '../image/didong.png'
import '../css/iphone.css'
import { BsFillCartFill, BsPhone, BsLaptop, BsTablet, BsEarbuds, BsWatch, BsSmartwatch, BsTvFill, BsStar,BsStarFill, BsPlayFill, BsFillBrushFill } from 'react-icons/bs';
import samsung from '../image/samsung.png'
import samsung1 from '../image/samsung2.png'
import banner from '../image/hinhanh2.png'
import logoiphone from '../image/logoiphone.png'
import logoisamsung from '../image/logosamsung.png'
import logooppo from '../image/logooppo.jpg'
import logoimodel from '../image/logomodel.jpg'
import logoinokia from '../image/logonokia.jpg'
import logoirealme from '../image/logorealme.png'
import logovivo from '../image/logovivo.jpg'
import logoxiaomi from '../image/logoxiaomi.png'
import logoitel from '../image/logoitel.jpg'
import logomasstel from '../image/logomasstel.png'
import logoenergizer from '../image/logoenergizer.jpg'
import Iphone from '../image/iphone.jpg'
import Iphone1 from '../image/iphone1.jpg'
import Iphone2 from '../image/iphone2.jpg'
import Iphone3 from '../image/iphone3.jpg'
import Iphone4 from '../image/iphone4.jpg'
import axios from "axios";
import catChuoi from "../Function/catChuoi";
import { Outlet } from "react-router-dom";

function Samsung () {

    const [todosState, setTodosState] =useState([]);


    
    useEffect(()=>{
        const getTodos = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:2453/api/product/product_samsung'
                )
                // console.log(res.data)
                setTodosState(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getTodos();
    },[])

    return (
        <div>
                 {/* <div className="Header_top">
          <div class="container">
               <div class="row">
                    <div class="col-sm">
                    <img src={Img1} width="90" height="40" />
                    </div>
                    <div class="col-sm">
                             <div>
                                 Xem giá, khuyến mại tại
                             </div>
                    </div>
                    <div class="col-sm">
                            <input placeholder="Bạn tìm gì ... !" className="header_input"></input>
                    </div>
                    <div class="col-sm">
                            <div class="Header_cart">
                                <a>
                                    <a class="Header_cart_icon">
                                        <BsFillCartFill />
                                     </a>
                                Giỏ hàng
                                </a>
                            </div>
                    </div>
                    <div class="col-sm">
                            <div className="Header_ls">
                            <a href="https://www.thegioididong.com/lich-su-mua-hang/dang-nhap" className="Header_item">Lịch sử đơn hàng</a>     
                            </div>
                            
                    </div>
                    <div class="col-sm">
                           <div>
                               <a href="https://www.thegioididong.com/sim-so-dep " className="Header_item1"> Mobifone trả sau đến hạn thanh toán.
                                   Mua thẻ nạp ngay
                               </a>
                           </div>
                    </div>
                    <div class="col-sm">
                            <div className="Header_item2">
                                <div>
                                    <a href="https://www.thegioididong.com/tin-tuc" className="Header_item3">24h Công nghệ</a>
                                </div>
                                <div>
                                    <a href="https://www.thegioididong.com/tin-tuc" className="Header_item3">Hỏi Đáp</a>
                                </div>
                                <div>
                                    <a href="https://www.thegioididong.com/tin-tuc" className="Header_item3">Game App</a>
                                </div>

                            </div>
                    </div>
              </div>
            </div>
         </div> */}



{/* Heahder_ main */}


        {/* <div className="Header_main">   
            <a className="Header_main_a">
                <BsPhone />
                <span className="Header_main_text">Điện Thoại</span>
            </a>
            <a className="Header_main_a">
                <BsLaptop />
                <span className="Header_main_text">LapTop</span>
            </a>

            <a className="Header_main_a">
                <BsTablet />
                <span className="Header_main_text">Tablet</span>
            </a>

            <a className="Header_main_a">
                <BsEarbuds />
                <span className="Header_main_text">Phụ Kiện</span>
            </a>

            <a className="Header_main_a">
                <BsWatch />
                <span className="Header_main_text">Đồng Hồ Thời Trang</span>
            </a>

            <a className="Header_main_a">
                <BsSmartwatch />
                <span className="Header_main_text">Đồng Hồ Thông Minh</span>
            </a>

            <a className="Header_main_a">
                <BsTvFill />
                <span className="Header_main_text">PC , Máy In</span>
            </a>
            
            <a className="Header_main_a">
                <span className="Header_main_text">Máy cũ giá rẻ</span>
            </a>
            
            <a className="Header_main_a">
                
                <span className="Header_main_text">Sim, thẻ cào</span>
            </a>
            
            <a className="Header_main_a">
                
                <span className="Header_main_text">Trả Góp, Điện nước</span>
            </a>

        </div> */}

        {/* Banner hình ảnh */}

        <div className="section">
            <div className="section_img1">
                 <img src={banner} width="800" height="200" className="section_img5"/>
            </div>

            <div className="section_img2">
                 <img src={samsung} width="390" height="95" className="section_img3"/>
                <img src={samsung1} width="390" height="95" className="section_img4"/>       
            </div>

        </div>


        {/* /* UL LI LIST DANH SACH */ }

        <div className="box-filter">
            <div >
                <ul className="box-filter_ul">
                    <li className="box-filter_li"> <span> <BsFillBrushFill/> Bộ Lọc</span></li>
                    <li className="box-filter_li"> <span>Samsung</span> </li>
                    <li className="box-filter_li"> <span>Giá </span></li>
                    <li className="box-filter_li"> <span>Loại Điện Thoại</span></li>
                    <li className="box-filter_li"> <span>Hiệu Năng, Pin</span></li>
                    <li className="box-filter_li"> <span>Ram</span></li>
                    <li className="box-filter_li"> <span>Bộ nhớ trong</span></li>
                    <li className="box-filter_li"><span>Camera</span></li>
                    <li className="box-filter_li"><span>Tính năng</span></li>
                    <li className="box-filter_li"><span>Thiết kế</span></li>
                    <li className="box-filter_li"><span>Màn Hình</span></li>
                    <li className="box-filter_li"><span>Galaxy Z   </span></li>
                    <li className="box-filter_li"><span>Galaxy Note  </span></li>
                    <li className="box-filter_li"><span>Galaxy S</span></li>
                    <li className="box-filter_li"><span>Galaxy A</span></li>
                    <li className="box-filter_li"><span>Galaxy M</span></li>
                </ul>
            </div>
        </div>



        {/* UL LI LIST DANH SÁCH HÃNG ĐIỆN THOẠI */}

        <div className="filter-menu">
                <div className="filter-menu-list">
                <img src={logoiphone} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoisamsung} width="120" height="36" className="section_img3" className="filter-menu-item"/>                       
                <img src={logooppo} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logovivo} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoxiaomi} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoirealme} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoinokia} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoimodel} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoitel} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logomasstel} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoenergizer} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                 </div>   
        </div>


        {/* Menu tích giảm giá */}

        <div>
            <div className="clearfix">
                <ul className="clearfix-ul">
                    <li className="clearfix-li"><span className="clearfix-text-item" ><b>26 ĐIỆN THOẠI</b></span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item">  <input type="checkbox" checked=""></input> Giảm giá</span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> Góp 0 %</span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> Độc Quyền</span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> Mới</span></li>
                    <li className="clearfix-li"><span className="clearfix-text">Sắp xếp nổi bật</span></li>
                </ul>
            </div>
        </div>

        {/* List sản phẩm */}
        <div className="list"> 
               {todosState.map(post => (
                     
                              <div className="item">
                                     <img src={post.imageurl} width="280" height="190" 
                                         />

                                    <div className="item_name">
                                          <span>{post.productname}
                                          </span>
                                    </div>

                                        <div className="item_price">
                                            {catChuoi(post.price)}
                                        </div>
                              
                                <div className="item_gift">
                                         Giảm thêm <b>1.000.000</b>đ
                                        <div className="icon">
                                             <BsStarFill/>
                                             <BsStarFill/>
                                             <BsStarFill/>
                                             <BsStar/>
                                             <BsStar/>
                                         </div>    
                                </div>
                            </div>
                   

               ))}
            </div>
                
            <Outlet/>
        {/* <div className="list">
            <div className="item">
                  <img src={Iphone} width="209" height="209" 
                     />
                <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div>
            </div>
            <div className="item">
                  <img src={Iphone} width="209" height="209" 
                     />
                    <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div> 
            </div>
            <div className="item">
                  <img src={Iphone2} width="209" height="209" 
                     />
                     <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div>
            </div>
            <div className="item">
                  <img src={Iphone3} width="209" height="209" 
                     />
                     <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div>
            </div>
            <div className="item">
                  <img src={Iphone4} width="209" height="209" 
                     />
                     <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div>
            </div>
        </div>
        </div>
         <div>

        <div className="list">
            <div className="item">
                  <img src={Iphone} width="209" height="209" 
                     />
                <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div>
            </div>
            <div className="item">
                  <img src={Iphone} width="209" height="209" 
                     />
                    <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div> 
            </div>
            <div className="item">
                  <img src={Iphone2} width="209" height="209" 
                     />
                     <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div>
            </div>
            <div className="item">
                  <img src={Iphone3} width="209" height="209" 
                     />
                     <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div>
            </div>
            <div className="item">
                  <img src={Iphone4} width="209" height="209" 
                     />
                     <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 đ
                </div>
                <div className="item_gift">
                    Giảm thêm <b>1.000.000</b>đ
                    <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                </div>
            </div>
        </div> */}
      


        {/* List item 2 */}

        {/* <div>

<div className="list">
    <div className="item">
          <img src={Iphone} width="209" height="209" 
             />
        <div className="item_name">
            <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
        </div>
        <div className="item_price">
            41.990.000 đ
        </div>
        <div className="item_gift">
            Giảm thêm <b>1.000.000</b>đ
            <div className="icon">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStar/>
                        <BsStar/>
                    </div>
        </div>
    </div>
    <div className="item">
          <img src={Iphone} width="209" height="209" 
             />
            <div className="item_name">
            <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
        </div>
        <div className="item_price">
            41.990.000 đ
        </div>
        <div className="item_gift">
            Giảm thêm <b>1.000.000</b>đ
            <div className="icon">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStar/>
                        <BsStar/>
                    </div>
        </div> 
    </div>
    <div className="item">
          <img src={Iphone2} width="209" height="209" 
             />
             <div className="item_name">
            <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
        </div>
        <div className="item_price">
            41.990.000 đ
        </div>
        <div className="item_gift">
            Giảm thêm <b>1.000.000</b>đ
            <div className="icon">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStar/>
                        <BsStar/>
                    </div>
        </div>
    </div>
    <div className="item">
          <img src={Iphone3} width="209" height="209" 
             />
             <div className="item_name">
            <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
        </div>
        <div className="item_price">
            41.990.000 đ
        </div>
        <div className="item_gift">
            Giảm thêm <b>1.000.000</b>đ
            <div className="icon">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStar/>
                        <BsStar/>
                    </div>
        </div>
    </div>
    <div className="item">
          <img src={Iphone4} width="209" height="209" 
             />
             <div className="item_name">
            <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
        </div>
        <div className="item_price">
            41.990.000 đ
        </div>
        <div className="item_gift">
            Giảm thêm <b>1.000.000</b>đ
            <div className="icon">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStar/>
                        <BsStar/>
                    </div>
        </div>
    </div>
</div>
</div> */}


{/*gạch chéo */}
                <div className="line">
                
                </div>

{/* End */}


<div className="clearfix-footer__top">
            
            <div className="footer_col">
                <ul className="footer_ul">
                    <li><a className="footer_a">Lịch sử mua hàng</a></li>
                    <li><a className="footer_a">Cộng tác bán hàng cùng TGDD</a></li>
                    <li><a className="footer_a">Tìm hiểu về mua trả góp</a></li>
                    <li><a className="footer_a">Chính sách bảo hành</a></li>
                    <li><a className="footer_a">Xem thêm</a></li>
                </ul>
            </div>

            <div  className="footer_col">
              <ul className="footer_ul">
                    <li><a className="footer_a">Giới thiệu công ty </a></li>
                    <li><a className="footer_a">Tuyển Dụng</a></li>
                    <li><a className="footer_a">Gửi Góp ý , khiếu nại</a></li>
                    <li><a className="footer_a">Tìm siêu thị (2.902 shop)</a></li>
                    <li><a className="footer_a">Xem bản moblie</a></li>
                </ul>
            </div>
            
            <div  className="footer_col">
              <ul className="footer_ul">
                    <li><a className="footer_a">Tổng đài hỗ trợ ( Miễn Phí Gọi)</a></li>
                    <li><a className="footer_a">Gọi mua :1800.1060  (7:30-22:00) </a></li>
                    <li><a className="footer_a">Kỹ Thuật :1800.1060  (7:30-22:00)</a></li>
                    <li><a className="footer_a">Khiếu Nại :1800.1060  (7:30-22:00)</a></li>
                    <li><a className="footer_a">Bảo Hành :1800.1060  (7:30-22:00)</a></li>
                </ul>
            </div>

            {/* <div  className="footer_col">
            <ul className="footer_ul">
                    <li><a className="footer_a">Lịch sử mua hàng</a></li>
                    <li><a>Cộng tác bán hàng cùng TGDD</a></li>
                    <li><a>Tìm hiểu về mua trả góp</a></li>
                    <li><a>Chính sách bảo hành</a></li>
                </ul>    
            </div> */}
        </div>













        </div>
    );
};

export default Samsung;