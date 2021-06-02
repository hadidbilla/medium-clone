import React from "react";
import LastSection from "../LastSection/LastSection";
import MidSection from "../MidSection/MidSection";
import NavBar from "../Navbar/Navbar";
import TopHeader from "../TopHeader/TopHeader";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="container mb-5 top-area">
        <NavBar />
        <TopHeader />
      </div>
      <section className="mid-section mb-5 pb-5">
        <MidSection />
      </section>
      <section className="last-section">
        <LastSection />
      </section>
    </div>
  );
};

export default Home;
