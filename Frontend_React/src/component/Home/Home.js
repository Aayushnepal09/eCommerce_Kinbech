import React, {useEffect} from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import MetaData from "../../more/MetaData";
import Footer from "../../more/Footer";
import BottomTab from "../../more/BottomTab";
import { ToastContainer } from "react-toastify";


const Home = () => {
  const dispatch = useDispatch();
  const { products,loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    dispatch(getProduct());
 
  }, [dispatch]);
  
  return (
    <>
      {loading ? (
        <loading />
      ) : (
        <>
          <MetaData title="KinBech" />
          <Header />

          {/* Carousel */}
          <div className="banner">
            <Carousel className="new">
              <img src="http://focushr.biz/wp-content/uploads/2020/09/welcome-sign-2284312_640-1.jpg"className="bgImg" alt="" />
             
            </Carousel>

          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;
