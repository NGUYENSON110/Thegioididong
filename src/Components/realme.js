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

function Realme () {

    const [todosState, setTodosState] =useState([]);


    
    useEffect(()=>{
        const getTodos = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:2453/api/product/all?_limit=10'
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
                 <div className="Header_top">
          <div class="container">
               <div class="row">
                    <div class="col-sm">
                    <img src={Img1} width="90" height="40" />
                    </div>
                    <div class="col-sm">
                             <div>
                                 Xem gi??, khuy???n m???i t???i
                             </div>
                    </div>
                    <div class="col-sm">
                            <input placeholder="B???n t??m g?? ... !" className="header_input"></input>
                    </div>
                    <div class="col-sm">
                            <div class="Header_cart">
                                <a>
                                    <a class="Header_cart_icon">
                                        <BsFillCartFill />
                                     </a>
                                Gi??? h??ng
                                </a>
                            </div>
                    </div>
                    <div class="col-sm">
                            <div className="Header_ls">
                            <a href="https://www.thegioididong.com/lich-su-mua-hang/dang-nhap" className="Header_item">L???ch s??? ????n h??ng</a>     
                            </div>
                            
                    </div>
                    <div class="col-sm">
                           <div>
                               <a href="https://www.thegioididong.com/sim-so-dep " className="Header_item1"> Mobifone tr??? sau ?????n h???n thanh to??n.
                                   Mua th??? n???p ngay
                               </a>
                           </div>
                    </div>
                    <div class="col-sm">
                            <div className="Header_item2">
                                <div>
                                    <a href="https://www.thegioididong.com/tin-tuc" className="Header_item3">24h C??ng ngh???</a>
                                </div>
                                <div>
                                    <a href="https://www.thegioididong.com/tin-tuc" className="Header_item3">H???i ????p</a>
                                </div>
                                <div>
                                    <a href="https://www.thegioididong.com/tin-tuc" className="Header_item3">Game App</a>
                                </div>

                            </div>
                    </div>
              </div>
            </div>
         </div>



{/* Heahder_ main */}


        <div className="Header_main">   
            <a className="Header_main_a">
                <BsPhone />
                <span className="Header_main_text">??i???n Tho???i</span>
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
                <span className="Header_main_text">Ph??? Ki???n</span>
            </a>

            <a className="Header_main_a">
                <BsWatch />
                <span className="Header_main_text">?????ng H??? Th???i Trang</span>
            </a>

            <a className="Header_main_a">
                <BsSmartwatch />
                <span className="Header_main_text">?????ng H??? Th??ng Minh</span>
            </a>

            <a className="Header_main_a">
                <BsTvFill />
                <span className="Header_main_text">PC , M??y In</span>
            </a>
            
            <a className="Header_main_a">
                <span className="Header_main_text">M??y c?? gi?? r???</span>
            </a>
            
            <a className="Header_main_a">
                
                <span className="Header_main_text">Sim, th??? c??o</span>
            </a>
            
            <a className="Header_main_a">
                
                <span className="Header_main_text">Tr??? G??p, ??i???n n?????c</span>
            </a>

        </div>

        {/* Banner h??nh ???nh */}

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
                    <li className="box-filter_li"> <span> <BsFillBrushFill/> B??? L???c</span></li>
                    <li className="box-filter_li"> <span>Apple, Iphone</span> </li>
                    <li className="box-filter_li"> <span>Gi?? </span></li>
                    <li className="box-filter_li"> <span>Lo???i ??i???n Tho???i</span></li>
                    <li className="box-filter_li"> <span>Hi???u N??ng, Pin</span></li>
                    <li className="box-filter_li"> <span>Ram</span></li>
                    <li className="box-filter_li"> <span>B??? nh??? trong</span></li>
                    <li className="box-filter_li"><span>Camera</span></li>
                    <li className="box-filter_li"><span>T??nh n??ng</span></li>
                    <li className="box-filter_li"><span>Thi???t k???</span></li>
                    <li className="box-filter_li"><span>M??n H??nh</span></li>
                    <li className="box-filter_li"><span>Iphone 13  </span></li>
                    <li className="box-filter_li"><span>Iphone 12  </span></li>
                    <li className="box-filter_li"><span>Iphone 11</span></li>
                    <li className="box-filter_li"><span>Iphone Xr</span></li>
                </ul>
            </div>
        </div>



        {/* UL LI LIST DANH S??CH H??NG ??I???N THO???I */}

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


        {/* Menu t??ch gi???m gi?? */}

        <div>
            <div className="clearfix">
                <ul className="clearfix-ul">
                    <li className="clearfix-li"><span className="clearfix-text-item" ><b>151 ??I???N THO???I</b></span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item">  <input type="checkbox" checked=""></input> Gi???m gi??</span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> G??p 0 %</span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> ?????c Quy???n</span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> M???i</span></li>
                    <li className="clearfix-li"><span className="clearfix-text">S???p x???p n???i b???t</span></li>
                </ul>
            </div>
        </div>

        {/* List s???n ph???m */}

        <div>

        {/* <div className="list">
            <div className="item">
                  <img src={Iphone} width="209" height="209" 
                     />
                <div className="item_name">
                    <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
                </div>
                <div className="item_price">
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
                    41.990.000 ??
                </div>
                <div className="item_gift">
                    Gi???m th??m <b>1.000.000</b>??
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
        </div>


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
            41.990.000 ??
        </div>
        <div className="item_gift">
            Gi???m th??m <b>1.000.000</b>??
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
            41.990.000 ??
        </div>
        <div className="item_gift">
            Gi???m th??m <b>1.000.000</b>??
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
            41.990.000 ??
        </div>
        <div className="item_gift">
            Gi???m th??m <b>1.000.000</b>??
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
            41.990.000 ??
        </div>
        <div className="item_gift">
            Gi???m th??m <b>1.000.000</b>??
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
            41.990.000 ??
        </div>
        <div className="item_gift">
            Gi???m th??m <b>1.000.000</b>??
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


{/*g???ch ch??o */}
                <div className="line">
                
                </div>

{/* End */}


<div className="clearfix-footer__top">
            
            <div className="footer_col">
                <ul className="footer_ul">
                    <li><a className="footer_a">L???ch s??? mua h??ng</a></li>
                    <li><a className="footer_a">C???ng t??c b??n h??ng c??ng TGDD</a></li>
                    <li><a className="footer_a">T??m hi???u v??? mua tr??? g??p</a></li>
                    <li><a className="footer_a">Ch??nh s??ch b???o h??nh</a></li>
                    <li><a className="footer_a">Xem th??m</a></li>
                </ul>
            </div>

            <div  className="footer_col">
              <ul className="footer_ul">
                    <li><a className="footer_a">Gi???i thi???u c??ng ty </a></li>
                    <li><a className="footer_a">Tuy???n D???ng</a></li>
                    <li><a className="footer_a">G???i G??p ?? , khi???u n???i</a></li>
                    <li><a className="footer_a">T??m si??u th??? (2.902 shop)</a></li>
                    <li><a className="footer_a">Xem b???n moblie</a></li>
                </ul>
            </div>
            
            <div  className="footer_col">
              <ul className="footer_ul">
                    <li><a className="footer_a">T???ng ????i h??? tr??? ( Mi???n Ph?? G???i)</a></li>
                    <li><a className="footer_a">G???i mua :1800.1060  (7:30-22:00) </a></li>
                    <li><a className="footer_a">K??? Thu???t :1800.1060  (7:30-22:00)</a></li>
                    <li><a className="footer_a">Khi???u N???i :1800.1060  (7:30-22:00)</a></li>
                    <li><a className="footer_a">B???o H??nh :1800.1060  (7:30-22:00)</a></li>
                </ul>
            </div>

            {/* <div  className="footer_col">
            <ul className="footer_ul">
                    <li><a className="footer_a">L???ch s??? mua h??ng</a></li>
                    <li><a>C???ng t??c b??n h??ng c??ng TGDD</a></li>
                    <li><a>T??m hi???u v??? mua tr??? g??p</a></li>
                    <li><a>Ch??nh s??ch b???o h??nh</a></li>
                </ul>    
            </div> */}
        </div>













        </div>
    );
};

export default Realme;