import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../image/didong.png";
import Banner from "../image/banner2.png";
import Banner2 from "../image/banner3.png";
import Iphone from "../image/iphone.jpg";
import Iphone1 from "../image/iphone1.jpg";
import Iphone2 from "../image/iphone2.jpg";
import Iphone3 from "../image/iphone3.jpg";
import Iphone4 from "../image/iphone4.jpg";
import hinhanh1 from "../image/hinhanh1.png";
import hinhanh2 from "../image/hinhanh2.png";
import hinhanh3 from "../image/hinhanh3.png";
import hinhanh4 from "../image/hinhanh4.jpg";
import hinhanh5 from "../image/hinhanh5.jpg";
import hinhanh6 from "../image/hinhanh6.jpg";
import anh1 from "../image/anh1.jpg";
import anh2 from "../image/anh2.jpg";
import anh3 from "../image/anh3.jpg";
import anh4 from "../image/anh4.png";
import anh5 from "../image/24h.jpeg";
import anh6 from "../image/anh6.jpg";
import anh7 from "../image/anh7.jpg";
import anh8 from "../image/anh8.jpg";
import anh9 from "../image/anh9.jpg";
import anh10 from "../image/anh10.png";
import zingmp3 from "../image/zingmp3.jpg";
import mp3 from "../image/mp3.jpg";
import "../css/home.css";
import DTIphone from "./iphone";
import Laptop from "./Laptop";
import Samsung from "./samsung";
import Vivo from "./vivo";
import Xiaomi from "./xiaomi";
import Oppo from "./oppo";
import axios from "axios";
import Detail from "./detail";
import catChuoi from "../Function/catChuoi";
import Giamgia from "./Giamgia";

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
  BsZoomIn,
} from "react-icons/bs";
import {} from 'react-bootstrap';
import Page2 from "./Page2";

function Home() {



  // const [searchData, setsearchData] = useState({});

  // const handleSearch = () => {
  //   var formData = {
  //     productname: document.querySelector('input[name="searchName"]').value,
  //   };
  //   axios({
  //     method: "post",
  //     url: "http://localhost:2453/api/product/seach",
  //     data: formData,
  //   }).then((res) => setsearchData(res.data.rows));
  // };



  
  const [danhMuc, setdanhMuc] = useState([])
  const [DTNB, setDTNB] = useState([]);
  const [LaptopNB, setLaptopNB] = useState([]);
  const [PKNB, setPKNB] = useState([]);
  // const API = process.env.REACT_APP_API_URL;


  useEffect(() => {
    const getDM = async () => {
      try {
        const res = await axios.get(
          "http://localhost:2453/api/category/all"
         
        );
        // console.log(res.data)
        setdanhMuc(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDM();
  }, []);

    
  useEffect(() => {
    const getDTNB = async () => {
      try {
        const res = await axios.get(
          "http://localhost:2453/api/product/product_dt"
          // '${process.env.REACT_APP_API_URL}/api/product/product_phonehigh'
        );
        // console.log(res.data)
        setDTNB(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDTNB();
  }, []);

  useEffect(() => {
    const getLaptop = async () => {
      try {
        const res = await axios.get(
          "http://localhost:2453/api/product/product_lt"
          // '$API/api/product/product_laptophigh'
        );
        // console.log(res.data)
        setLaptopNB(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getLaptop();
  }, []);

  useEffect(() => {
    const getPKNB = async () => {
      try {
        const res = await axios.get(
          "http://localhost:2453/api/product/product_dhthoitrang"
        );
        // console.log(res.data)
        setPKNB(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPKNB();
  }, []);

  return (
    <div>
      {/* Header */}
      
      <div className="Header_top">
        <div className="Header_top_all">
          <div className="Header_top_imgg">
            <Link to="/" className="Header_top-img">
              {" "}
              <BsPhone size={18} />{" "}
            </Link>
          </div>

          <div className="Header_top_bordercol"></div>

          <div className="Header_top_address">
            <a className="Header_top_address_item">
              Xem Giá Khuyến Mại Tại
              <span className="Header_top_address_itemm">Hồ Chí Minh</span>
            </a>
          </div>

          <div className="Header_top_bordercol"></div>

          <div className="Header_top_search">

            <input
              placeholder="Search by username"
              enterButton
              className="Header_top_input"
              name="searchName"
            />
          </div>

          <div className="Header_top_cart">
            <a href="/" className="Header_top_carttt">
              {" "}
              <BsFillCartFill size={18} />
            </a>
            <span className="Header_top_cart_item">Giỏ Hàng</span>
          </div>

          <div className="Header_top_history">
            <a className="Header_top_history_item" href="//">
              Lịch sử đơn hàng
            </a>
          </div>

          <div className="Header_top_bordercol"></div>

          <div className="Header_top_clear"></div>

          <div className="Header_top_bordercol"></div>

          <div className="Header_top_dangnhap">
            <a className="Header_top_dangnhap_item">Đăng Nhập</a>
          </div>

          <div className="Header_top_bordercol"></div>

          <div className="Header_top_dangnhap">
            <a className="Header_top_dangnhap_item">Đăng Ký</a>
          </div>

          <div className="Header_top_bordercol"></div>

          <div className="Header_top_dangnhap">
            <a className="Header_top_dangnhap_item">Game App</a>
          </div>
        </div>
      </div>

      {/* Heahder_ main */}

  
      <div className="Header_main">
      {danhMuc.map((post) => (
      
        <Link className="Header_main_a" to="iphone">
          <BsPhone />
          <span className="Header_main_text">{post.categoryname}</span>
        </Link>
        ))}
      
        {/* <Link className="Header_main_a" to="Laptop">
          <BsLaptop />
          <span className="Header_main_text">LapTop</span>
        </Link>

        <Link className="Header_main_a" to="">
          <BsTablet />
          <span className="Header_main_text">Tablet</span>
        </Link>

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
        </a> */}
      </div>
    

      <Routes>
        <Route>
          <Route path="iphone" element={<DTIphone />} />
          <Route path="Laptop" element={<Laptop />} />
          <Route path="Samsung" element={<Samsung />} />
          <Route path="Vivo" element={<Vivo />} />
          <Route path="Oppo" element={<Oppo />} />
          <Route path="Detail" element={<Detail />} />
          <Route path="Xiaomi" element={<Xiaomi />} />
          <Route path="Giamgia" element={<Giamgia />} />
          
          
        </Route>
      </Routes>

      <Outlet />
      {/* Homebanner */}
      <div>
        <div>
          <div className="homebanner">
            <div class="homebanner_slider">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={hinhanh3}
                      alt="First slide"
                      width="828"
                      height="300"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="d-block w-100"
                      src={hinhanh4}
                      alt="Second slide"
                      width="828"
                      height="300"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={hinhanh5}
                      alt="Third slide"
                      width="828"
                      height="300"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only"></span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only"></span>
                </a>
              </div>
            </div>

            <div className="preorder">
              <div>
                <img
                  src={anh1}
                  width="170"
                  height="170"
                  className="preorder_img"
                />
              </div>
              <div>
                <img
                  src={anh2}
                  width="170"
                  height="170"
                  className="preorder_img1"
                />
              </div>
              <div>
                <img
                  src={anh3}
                  width="170"
                  height="170"
                  className="preorder_img2"
                />
              </div>
              <div>
                <img
                  src={anh4}
                  width="170"
                  height="170"
                  className="preorder_img3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner hình ảnh */}
      <div className="banner">
        <img src={Banner} width="1222" height="44" className="banner_img" />
      </div>

      {/* Banner sale 12/12 */}
      <div>
        <div className="banner">
          <img src={Banner2} width="1222" height="70" className="banner_img" />
        </div>
      </div>

      {/* Điện thoại nổi bật nhất */}
      <div>
        <div className="box-commom_top">
          <div className="box-commom_tittle">
            <h3>ĐIỆN THOẠI NỔI BẬT</h3>
          </div>

          <div className="box-commom_link">
            <a className="box-commom_item">iPhone 13 Series</a>
            <a className="box-commom_item">Samsung Galaxy A52s</a>
            <a className="box-commom_item">Oppo Reno6 Z</a>
            <a className="box-commom_item">
              Xem tất cả <b>170</b> điện thoại
            </a>
          </div>
        </div>

        {/* item */}

        <div className="list">
          {DTNB.map((post) => (
            <div className="item">
              <img src={post.imageurl} width="280" height="190" />

              <div className="item_name">
                <span>{post.productname}</span>
              </div>

              <div className="item_price">{catChuoi(post.price)}</div>

              <div className="item_gift">
                Giảm thêm <b>1.000.000</b>đ
                <div className="icon">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                  <BsStar />
                </div>
              </div>
            </div>
          ))}
        </div>

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
                            </div>
                            <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                            </div> 
                            <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                            </div>
                            <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                            </div>
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

        {/*  */}

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
                            </div>
                            <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                            </div> 
                            <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                            </div>
                            <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                            </div>
                            <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                        </div>
                    </div> */}
      </div>

      {/*Laptop nổi bật nhất */}
      <div class="Laptop">
        <div className="box-commom_top">
          <div className="box-commom_tittle">
            <h3>LAP TOP NỔI BẬT NHẤT</h3>
          </div>

          <div className="box-commom_link">
            <a className="box-commom_item">Laptop Asus</a>
            <a className="box-commom_item">LapTop Hp</a>
            <a className="box-commom_item">Ipad Air 4 wifi 64 GB</a>
            <a className="box-commom_item">
              Xem tất cả <b>170</b> điện thoại
            </a>
          </div>
        </div>

        {/* item */}

        <div>
          <div className="list">
            {PKNB.map((post) => (
              <div className="item">
                <img src={post.imageurl} width="280" height="190" />

                <div className="item_name">
                  <span>{post.productname}</span>
                </div>

                <div className="item_price">{catChuoi(post.price)}</div>

                <div className="item_gift">
                  Giảm thêm <b>2.000.000</b>đ
                  <div className="icon">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                </div>
                <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                </div> 
                <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                </div>
                <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
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
                </div>
                <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
            </div>
        </div> */}
        </div>

        {/*  */}

        <div className="list">
          <div className="item">
            <img src={Iphone} width="209" height="209" />
            <div className="item_name">
              <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
            </div>
            <div className="item_price">41.990.000 đ</div>
            <div className="item_gift">
              Giảm thêm <b>1.000.000</b>đ
            </div>
            <div className="icon">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
          </div>
          <div className="item">
            <img src={Iphone} width="209" height="209" />
            <div className="item_name">
              <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
            </div>
            <div className="item_price">41.990.000 đ</div>
            <div className="item_gift">
              Giảm thêm <b>1.000.000</b>đ
            </div>
            <div className="icon">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
          </div>
          <div className="item">
            <img src={Iphone2} width="209" height="209" />
            <div className="item_name">
              <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
            </div>
            <div className="item_price">41.990.000 đ</div>
            <div className="item_gift">
              Giảm thêm <b>1.000.000</b>đ
            </div>
            <div className="icon">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
          </div>
          <div className="item">
            <img src={Iphone3} width="209" height="209" />
            <div className="item_name">
              <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
            </div>
            <div className="item_price">41.990.000 đ</div>
            <div className="item_gift">
              Giảm thêm <b>1.000.000</b>đ
            </div>
            <div className="icon">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
          </div>
          <div className="item">
            <img src={Iphone4} width="209" height="209" />
            <div className="item_name">
              <span>Samsung Galaxy Z Fold 3 5G 256GB</span>
            </div>
            <div className="item_price">41.990.000 đ</div>
            <div className="item_gift">
              Giảm thêm <b>1.000.000</b>đ
            </div>
            <div className="icon">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
          </div>
        </div>
      </div>

      {/*Phụ kiện nổi bật nhất */}
      <div class="Laptop">
        <div className="box-commom_top">
          <div className="box-commom_tittle">
            <h3>Phụ Kiện NỔI BẬT NHẤT</h3>
          </div>

          <div className="box-commom_link">
            <a className="box-commom_item">Laptop Asus</a>
            <a className="box-commom_item">LapTop Hp</a>
            <a className="box-commom_item">Ipad Air 4 wifi 64 GB</a>
            <a className="box-commom_item">
              Xem tất cả <b>170</b> điện thoại
            </a>
          </div>
        </div>

        {/* item */}

        <div className="list">
          {LaptopNB.map((post) => (
            <div className="item">
              <img src={post.imageurl} width="280" height="190" />

              <div className="item_name">
                <span>{post.productname}</span>
              </div>

              <div className="item_price">{catChuoi(post.price)}</div>

              <div className="item_gift">
                Giảm thêm <b>2.000.000</b>đ
                <div className="icon">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                  <BsStar />
                </div>
              </div>
            </div>
          ))}
        </div>
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

        {/*  */}

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
                </div>
                <div className="icon">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar/>
                                <BsStar/>
                            </div>
            </div>
        </div> */}
      </div>

      {/* Chuyên Trang Thương Hiệu */}

      <div>
        <div className="title_layout">
          <span>
            <h3>CHUYÊN TRANG THƯƠNG HIỆU</h3>
          </span>
        </div>

        <div className="trademark">
          <div>
            <img
              src={hinhanh1}
              width="400"
              height="214"
              className="trademark_img"
            />
          </div>

          <div>
            <img
              src={hinhanh2}
              width="400"
              height="214"
              className="trademark_img"
            />
          </div>

          <div>
            <img
              src={hinhanh3}
              width="400"
              height="214"
              className="trademark_img"
            />
          </div>
        </div>
      </div>

      {/* Sản phẩm mới */}

      <div>
        <div className="title_layout">
          <span>
            <h3>SẢN PHẨM MỚI</h3>
          </span>
        </div>

        <div className="trademark">
          <div>
            <img
              src={hinhanh4}
              width="400"
              height="214"
              className="trademark_img"
            />
          </div>

          <div>
            <img
              src={hinhanh5}
              width="400"
              height="214"
              className="trademark_img"
            />
          </div>

          <div>
            <img
              src={hinhanh6}
              width="400"
              height="214"
              className="trademark_img"
            />
          </div>
        </div>
      </div>

      {/* 24h Công Nghệ */}
      <div className="CN">
        <div className="col1">
          <div className="ttl_main">
            <h3>24H CÔNG NGHỆ</h3>
            <div className="ttl_main_a">
              <a href="thegioididong.com">
                {" "}
                Xem Thêm <BsPlayFill />
              </a>
            </div>
          </div>

          <div className="col1_big">
            <div>
              <img src={anh5} width="481" height="270" className="col_img" />
              <div className="col1_title">
                <a>
                  Có nên mua đồng hồ theo dõi sức khỏe không ? Những lý do sau
                  đây sẽ khiến bạn phải chốt ngay một em đồng hồ đấy !
                </a>
              </div>
            </div>

            <div className="coi1_simple">
              <div className="coi1_simple_list">
                <img
                  src={anh6}
                  width="120"
                  height="70"
                  className="coi1_simple_img"
                />
                <div className="spl-item-title">
                  <span>
                    <a>
                      {" "}
                      Tưng bừng tháng 12: Flapship SamSung giảm cực mạnh...
                    </a>{" "}
                  </span>
                </div>
              </div>

              <div className="coi1_simple_list_item">
                <img
                  src={anh7}
                  width="120"
                  height="70"
                  className="coi1_simple_img"
                />
                <div className="spl-item-title">
                  <span>
                    <a> Tổng hợp deal giảm sốc nhất..</a>{" "}
                  </span>
                </div>
              </div>

              <div className="coi1_simple_list_item">
                <img
                  src={anh8}
                  width="120"
                  height="70"
                  className="coi1_simple_img"
                />
                <div className="spl-item-title">
                  <span>
                    <a>
                      {" "}
                      GenZ mua điện thoại gì chụp ảnh ? Xem ngay Sài Gòn của
                      những ngày bình thường ...{" "}
                    </a>
                  </span>
                </div>
              </div>

              <div className="coi1_simple_list_item">
                <img
                  src={anh9}
                  width="120"
                  height="70"
                  className="coi1_simple_img"
                />
                <div className="spl-item-title">
                  <span>
                    <a>
                      {" "}
                      Ngày đẹp tháng đẹp đồng giảm giá mê ly cho 2 mẫu điện
                      thoại ViVo, ...
                    </a>{" "}
                  </span>
                </div>
              </div>

              <div className="coi1_simple_list_item">
                <img
                  src={anh10}
                  width="120"
                  height="70"
                  className="coi1_simple_img"
                />
                <div className="spl-item-title">
                  <span>
                    <a> Apple Airpod 3 chính thức </a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* zingmp3 */}
        <div className="col2">
          <div className="title_layout">
            <h3>GAME ỨNG DỤNG</h3>
            <div className="ttl_main_a">
              <a href="thegioididong.com">
                {" "}
                Xem Thêm <BsPlayFill />
              </a>
            </div>
          </div>

          <div>
            <img
              src={zingmp3}
              width="396"
              height="238"
              className="col2_image"
            />
          </div>

          <div className="col2_text">
            <img src={mp3} width="60" height="60" className="col2_image_box" />

            <div className="col2_box-main">
              <div className="col2_game_tittle">
                <p>Zing Mp3-Ứng Dụng nghe nhạc trực tuyến</p>

                <div className="col2_game_item">
                  <span className="col2_game_item_free">Miễn Phí</span>
                  <div className="col2_game_item_video">
                    <p>Video và nhạc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col2_game-box-list">
            <div className="col2_game-box-list-item">
              <a>Cách tải, cài đặt Zing Mp3 cho máy tính đơn giản nhất</a>
            </div>
            <div className="col2_game-box-list-item">
              <a>Top 10 trang web nghe nhạc quốc tế hay nhất 2021</a>
            </div>
          </div>
        </div>
      </div>

      {/*gạch chéo */}
      <div className="line"></div>

      {/* End */}

      <div className="clearfix-footer__top">
        <div className="footer_col">
          <ul className="footer_ul">
            <li>
              <a className="footer_a">Lịch sử mua hàng</a>
            </li>
            <li>
              <a className="footer_a">Cộng tác bán hàng cùng TGDD</a>
            </li>
            <li>
              <a className="footer_a">Tìm hiểu về mua trả góp</a>
            </li>
            <li>
              <a className="footer_a">Chính sách bảo hành</a>
            </li>
            <li>
              <a className="footer_a">Xem thêm</a>
            </li>
          </ul>
        </div>

        <div className="footer_col">
          <ul className="footer_ul">
            <li>
              <a className="footer_a">Giới thiệu công ty </a>
            </li>
            <li>
              <a className="footer_a">Tuyển Dụng</a>
            </li>
            <li>
              <a className="footer_a">Gửi Góp ý , khiếu nại</a>
            </li>
            <li>
              <a className="footer_a">Tìm siêu thị (2.902 shop)</a>
            </li>
            <li>
              <a className="footer_a">Xem bản moblie</a>
            </li>
          </ul>
        </div>

        <div className="footer_col">
          <ul className="footer_ul">
            <li>
              <a className="footer_a">Tổng đài hỗ trợ ( Miễn Phí Gọi)</a>
            </li>
            <li>
              <a className="footer_a">Gọi mua :1800.1060 (7:30-22:00) </a>
            </li>
            <li>
              <a className="footer_a">Kỹ Thuật :1800.1060 (7:30-22:00)</a>
            </li>
            <li>
              <a className="footer_a">Khiếu Nại :1800.1060 (7:30-22:00)</a>
            </li>
            <li>
              <a className="footer_a">Bảo Hành :1800.1060 (7:30-22:00)</a>
            </li>
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
}
export default Home;
