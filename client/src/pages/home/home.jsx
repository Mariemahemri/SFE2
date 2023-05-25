import React from "react";
import Navbar from "../../Components/navbar/navbar.jsx"
import Header from "../../Components/Header/header.jsx";
import Featured from "../../Components/Featured/Featured.jsx";
import PropertyList from "../../Components/propretyList/propretyList.jsx";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties.jsx";
import MailList from "../../Components/mailList/maiList.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import "./home.css"


const Home = ()=>{
    return (
        <div className="home">
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />

            </div>

        </div>
    );
};
export default Home