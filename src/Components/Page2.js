import React, { useState, useEffect } from "react";
import Img1 from "../image/didong.png";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "../css/Page2.css";
import {
  BsFillCartFill,
  BsPhone,
  BsLaptop,
  BsTablet,
  BsEarbuds,
  BsWatch,
  BsSmartwatch,
  BsTvFill,
  BsStar,
  BsStarFill,
  BsPlayFill,
  BsFillBrushFill,
} from "react-icons/bs";
import samsung from "../image/samsung.png";
import samsung1 from "../image/samsung2.png";
import banner from "../image/hinhanh2.png";
import logoiphone from "../image/logoiphone.png";
import logoisamsung from "../image/logosamsung.png";
import logooppo from "../image/logooppo.jpg";
import logoimodel from "../image/logomodel.jpg";
import logoinokia from "../image/logonokia.jpg";
import logoirealme from "../image/logorealme.png";
import logovivo from "../image/logovivo.jpg";
import logoxiaomi from "../image/logoxiaomi.png";
import logoitel from "../image/logoitel.jpg";
import logomasstel from "../image/logomasstel.png";
import logoenergizer from "../image/logoenergizer.jpg";
import Iphone from "../image/iphone.jpg";
import Iphone1 from "../image/iphone1.jpg";
import Iphone2 from "../image/iphone2.jpg";
import Iphone3 from "../image/iphone3.jpg";
import Iphone4 from "../image/iphone4.jpg";
import axios from "axios";
import Laptop from "./Laptop";
import Samsung from "./samsung";
import Vivo from "./vivo";
import Xiaomi from "./xiaomi";
import Oppo from "./oppo";
import Detail from "./detail";
import Giamgia from "./Giamgia";
import catChuoi from "../Function/catChuoi";
import {Pagination} from 'react-bootstrap';

function Page2() {
  const [page, setPage] = useState([]);

  useEffect(() => {
    const getPagination = async () => {
      try {
        const res = await axios.get(
          "http://localhost:2453/api/product/productPagination_category/4?page=2"
        );
        // console.log(res.data)
        setPage(res.data.tutorials);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPagination();
  }, []);

  return (
  
  <div>

      
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
                <Link to="/Samsung"><img src={logoisamsung} width="120" height="36" className="section_img3" className="filter-menu-item"/></Link>                    
                <Link to="/Oppo"><img src={logooppo} width="120" height="36" className="section_img3" className="filter-menu-item"/></Link>
                <Link to="/Vivo"><img src={logovivo} width="120" height="36" className="section_img3" className="filter-menu-item"/></Link>
                <Link to="Xiaomi" ><img src={logoxiaomi} width="120" height="36" className="section_img3" className="filter-menu-item"/></Link>
                <img src={logoirealme} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoinokia} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoimodel} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoitel} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logomasstel} width="120" height="36" className="section_img3" className="filter-menu-item"/>
                <img src={logoenergizer} width="120" height="36" className="section_img3" className="filter-menu-item"/>    
                 </div>   
        </div>

                <Pagination className="Pagination">
                        <Pagination.Item><Link to="/Page1">{1}</Link></Pagination.Item>
                        <Pagination.Item><Link to="/Page2">{2}</Link></Pagination.Item>
                        <Pagination.Item><Link to="/Page2">{3}</Link></Pagination.Item>
                        <Pagination.Item><Link to="/Page2">{4}</Link></Pagination.Item>
                        <Pagination.Item><Link to="/Page2">{5}</Link></Pagination.Item>
                </Pagination>

        {/* Menu t??ch gi???m gi?? */}

        <div>
            <div className="clearfix">
                <ul className="clearfix-ul">
                    <li className="clearfix-li"><span className="clearfix-text-item" ><b>151 ??I???N THO???I</b></span></li>
                    <Link to="/Giamgia"><li className="clearfix-li"><span className="clearfix-text-item">  <input type="checkbox" checked=""></input> Gi???m gi??</span></li></Link>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> G??p 0 %</span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> ?????c Quy???n</span></li>
                    <li className="clearfix-li"><span className="clearfix-text-item"> <input type="checkbox" checked=""></input> M???i</span></li>
                    <li className="clearfix-li"><span className="clearfix-text">S???p x???p n???i b???t</span></li>
                </ul>
            </div>
        </div>

         {/* List s???n ph???m */}
               
         <div className="list"> 
               {page.map(post => (
                     
                              <div className="item">
                                     <Link to="/Detail"><img src={post.imageurl} width="280" height="190" /></Link>
                                      

                                    <div className="item_name">
                                          <span>{post.productname}
                                          </span>
                                    </div>

                                        <div className="item_price">
                                           {catChuoi(post.price)}
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
               ))}

                {/* Pagination */}
                

            </div>

            <Outlet/>     

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

        </div>








  </div>
  )
}
export default Page2;
