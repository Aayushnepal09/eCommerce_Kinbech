import React from "react";
import { useSelector } from "react-redux";
import "./CommingSoon.css";
import BottomTab from "./BottomTab";
import Loading from "./Loader";
import MetaData from "./MetaData";

const CommingSoon = () => {
  const { loading } = useSelector((state) => state.cart);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Working on" />
          <div>
            <div className="bg">
              <span dataText="Working on" className="first">
                Working on <span dataText="it....">it</span>
              </span>
              <div className="one">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <BottomTab />
        </>
      )}
    </>
  );
};

export default CommingSoon;
