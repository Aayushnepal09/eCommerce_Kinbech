import React from "react";
import { useSelector } from "react-redux";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/MetaData";
import "./About.css";
import Footer from "../../more/Footer";


const About = () => {
  const { loading } = useSelector((state) => state.profile);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "0px auto",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st part */}
                <div className="row flex">
                  <div className="col__2">
                    <img src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/332782624_4760599927398363_6804823377109427455_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=9QICFTk2sDgAX_S7UVb&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfDLxt7Sjf9NjFeQvGLzXaKXL88bzcOfr11xKqCY0LAvow&oe=6409D8D6" />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to KinBech
                      </span>
                      <p>
                        KinKinBech is an online marketplace where individuals
                        can purchase and sell a broad range of things, from new
                        to used. Kinbech has everything. KinBech has no
                        restrictions on the precise things or categories that
                        users may purchase or sell, which explains why
                        everything clients require spans from home futures to
                        kitchen items to smart gadgets. Kinbech has everything.
                      </p>
                      <p>
                        KinBech was founded with the idea that individuals
                        should not have to travel to real stores to buy the item
                        that they desire; instead, they may scroll through
                        Kinbech and contact the vendor without leaving their
                        room. KinBech provides a stress-free buying experience
                        in which a single user may be both a buyer and a vendor.
                        KinBech always encourages individuals to sell their
                        things on this fantastic platform since the client may
                        choose their price and change their mind at any moment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>Benefit of using KinBech</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div>
                        <span>Get everything at one place</span>
                        <p>
                          KinBech offers wide range of new as well as used prod
                          so getting any item would be a lot more useful and
                          time saving
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div>
                        <span>Trusted place to sell</span>
                        <p>
                          KinBech offers a smooth transastion between customer
                          and the seller which means it
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div>
                        <span>Secure gatway</span>
                        <p>
                          KinBech is the faster and secure option to choose
                          while buying and selling item
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default About;
