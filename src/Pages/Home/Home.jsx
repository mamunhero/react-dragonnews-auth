import Header from "../Shared/Header/Header";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import Breanking from "./Breanking";
import avatar from "../../../src/assets/Frame-3.svg"

import newsimage from "../../assets/editorsInsight1.png"
import moment from 'moment';
import { useLoaderData } from "react-router-dom";
import { key } from "localforage";
import NewsInfo from "./NewsInfo";
const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <Breanking></Breanking>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNavbar></LeftSideNavbar>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-2xl font-semibold text-[#403F3F]">Dragon News Home</h2>
          {
            news && news.map((anews)=> <NewsInfo key={anews._id} news={anews}></NewsInfo>)
          }
        </div>
        <div className="border">
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;

