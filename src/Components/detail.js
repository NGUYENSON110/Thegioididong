import React, {useState, useEffect} from "react";
import '../css/detail.css'
import { BsFillSkipEndFill,BsBookmark,BsFillBasket3Fil,BsFillBasket2Fill,BsFillBasketFill, BsFillBasket3Fill} from "react-icons/bs";
import Hinhanh1 from '../image/iphone.jpg'
import Hinhanh2 from '../image/iphone1.jpg'
import Hinhanh3 from '../image/iphone2.jpg'
import Hinhanh4 from '../image/iphone3.jpg'
import Hinhanh5 from '../image/iphone4.jpg'
import Hinhanh6 from '../image/samsung.png'
import chitietsanpham from '../image/detail.jpg'
import axios from "axios";
import catChuoi from "../Function/catChuoi";
import Promax from "../image/Promax.jpg"
function Detail () {

    const [todosState, setTodosState] =useState({});


    
    useEffect(()=>{
        const getTodos = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:2453/api/product/productbyid/10'
                )
                // console.log(res.data)
                setTodosState(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getTodos();
    },[])

            // console.log(todosState);
    return (
        
        <div>
              
                 {/* Div bao trùm all  */}
                       <div className="detail">

                        {/* thẻ điện thoại - Samsung - iphone - oppo */}
                            <div className="breadcrumb">
                                <ul className="breadcrumb-ul">
                             <li className="breadcrumb-li"><a>Điện Thoại</a></li>
                                <BsFillSkipEndFill className="BsFillSkipEndFill"/>
                            <li className="breadcrumb-lii"><a>Điện thoại Samsung</a></li>
                        </ul>
                    </div>


                    
                            {/* Hiển thị tên sản phẩm */}
                        
                              <div>
                               {/* <h1>{todosState.productname}</h1> */}
                               <h1>{todosState["productname"]}</h1>
                           
                              </div>
                        



                        <div className="Bordercol">
                        </div>
                {/* Chi tiết sản phẩm - hình ảnh - thông số */}
                    <div className="box-main">

                         {/* Box left  */}
                        <div className="Box-left">
                             {/* Img */}
                                 <div>
                                   <img src={todosState["imageurl"]} className="box-main-img" />
                                </div>
                                {/* Box Check - item */}
                                <div className="box-tab">

                                   <ul  className="box-tab-ul">
                                       <li className="box-tab-li"> <BsBookmark size={15}/></li>
                                       <li className="box-tab-li"><img src={Hinhanh1}  className="box-tab-img"/></li>
                                       <li className="box-tab-li"><img src={Hinhanh2}  className="box-tab-img" /></li>
                                       <li className="box-tab-li"><img src={Hinhanh3}  className="box-tab-img"/></li>
                                       <li className="box-tab-li"><img src={Hinhanh4}  className="box-tab-img"/></li>
                                       <li className="box-tab-li"><img src={Hinhanh5}  className="box-tab-img"/></li>
                                   </ul>
                                    
                                </div>

                                {/* policy */}
                                <div className="policy">
                                    <ul className="policy-ul">
                                        <li className="policy-li">  <p className="policy-text"><BsFillBasket3Fill size={20} className="policy-icon"/>Hư gì đổi máy 12 tháng tại 3002 siêu thị toàn quốc ( miễn phí tháng đầu )</p></li>
                                        <li className="policy-li"> <p className="policy-text"><BsFillBasket2Fill size={20} className="policy-icon"/> Bảo Hành chính hãng điện thoại 1 năm</p></li>
                                        <li className="policy-li"> <p className="policy-text"><BsFillBasketFill size={20} className="policy-icon"/>Bộ sản phẩm gồm : Hộp, Sách hướng dẫn, Cây lấy sim</p></li>
                                    </ul>
                                </div>

                                <div className="detail-img">
                                    <img src={Promax} />
                                </div>



                        </div>       

                           
                            


                        {/* Box right */}
                            <div className="box-right">
                             {/* Check box */}
                                  <div className="box-desk">
                                        <div className="box-desk-item" ><a>256GB</a></div>
                                        <div className="box-desk-item" ><a>512GB</a></div>
                                 </div>

                                 <div className="box-desk">
                                        <div className="box-desk-item" ><a>256GB</a></div>
                                        <div className="box-desk-item" ><a>512GB</a></div>
                                        <div className="box-desk-item" ><a>512GB</a></div>
                                 </div>

                                    <div className="box-price">
                                          <p className="box-price-item">Giá tại <span className="box-price-itemmm">Hà Nội</span></p>
                                        <div className="box-price-sale">{catChuoi(todosState["price"])} VNĐ</div>
                                    </div>
                           

                                    {/* Khuyến mại */}
                                 <div className="Khuyenmai">
                                     <div className="pr-top">
                                         <p className="pr-top-text">Khuyến Mại
                                                  <p className="pr-top-textt">Giá cả khuyến mãi dự kiến áp dụng đến 23:00</p>
                                         </p>
                                        
                                     </div>

                                     <div className="pr-item">

                                        <div className="pr-box"> 
                                            <div className="pr-number">
                                                1
                                            </div>
                                            <div className="pr-text">
                                                 Giá cả khuyến mãi dự kiến áp dụng đến 23:00
                                            </div>
                                        </div> 

                                        <div className="pr-box-1"> 
                                            <div className="pr-number-2">
                                                2
                                            </div>
                                            <div className="pr-text">
                                                  Giảm giá 600,000đ cho khách hàng đang sở hữu Galaxy J, A chính hãng (Áp dụng tùy model, không áp dụng kèm Giảm giá khác)
                                            </div>
                                        </div> 

                                      

                                        <div className="pr-box"> 
                                            <div className="pr-number">
                                               3
                                            </div>
                                            <div className="pr-text">
                                            Giảm thêm 3% khi mua cùng sản phẩm bất kỳ có giá cao hơn
                                            </div>
                                        </div> 

                                        <div className="pr-box"> 
                                            <div className="pr-number">
                                            4   
                                            </div>
                                            <div className="pr-text">
                                            Tặng gói ưu đãi quà tặng Galaxy trị giá đến 700,000đ
                                            </div>
                                        </div> 

                                        <div className="pr-box-1"> 
                                            <div className="pr-number-2">
                                               5
                                            </div>
                                            <div className="pr-text">
                                            Nhập mã TET2022 giảm 5% tối đa 500.000đ cho hóa đơn từ 500.000đ khi thanh toán qua Ví Moca trên ứng dụng Grab
                                            </div>
                                        </div> 

                                        

                                       

                                  

                                     



                                     </div>
                                </div>

                                {/* Mua Ngay */}
                                <div className="btn-buynow">
                                    <p>MUA NGAY</p>
                                </div>

                                <div className="btn-tragop">
                                    <div className="btn-tragop-taichinh"> MUA TRẢ GÓP 0%
                                            <p>Duyệt hồ sơ trong 5 phút</p>
                                    </div> 
                                    <div className="btn-tragop-taichinh-1"> TRẢ GÓP QUA THẺ
                                            <p> Visa, MasterCard, JCB , Amex</p>
                                    </div> 
                                </div>

                                {/* Cấu hình điện thoại */}
                                <div className="parameter">
                                    <div className="parameter-title"> 
                                        Cấu hình  {todosState["productname"]}
                                    </div>

                                    <div>
                                        <ul className="parameter-ul">
                                            <li className="parameter-lii"><span className="lileft">Màn Hình</span><span className="liright">OLED6.1"Super Retina XDR</span></li>
                                            <li className="parameter-li"><span  className="lileft">Hệ điều hành:</span><span className="liright">iOS 15</span></li>
                                            <li className="parameter-lii"><span  className="lileft">Camera sau:</span><span className="liright">3 camera 12 MP</span></li>
                                            <li className="parameter-li"><span  className="lileft">Camera trước:</span><span className="liright">12 MP</span></li>
                                            <li className="parameter-lii"><span  className="lileft">Chip:</span><span className="liright">Apple A15 Bionic</span></li>
                                            <li className="parameter-li"><span  className="lileft">RAM:</span><span className="liright">6 GB</span></li>
                                            <li className="parameter-lii"><span  className="lileft">Bộ nhớ trong:</span><span className="liright">128 GB</span></li>
                                            <li className="parameter-li"><span  className="lileft">SIM:</span><span className="liright">1 Nano SIM and 1 eSIMHỗ trợ 5G</span></li>
                                            <li className="parameter-lii"><span  className="lileft">Pin, Sạc: </span><span className="liright">3095 mAh20 W</span></li>
                                        </ul>
                                    </div>
                                </div>


                             </div>

                      
                          

                        
                    </div>
                    
























            </div>













        </div>
    );
};

export default Detail;