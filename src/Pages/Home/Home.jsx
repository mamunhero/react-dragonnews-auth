import Header from "../Shared/Header/Header";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import Breanking from "./Breanking";
import avatar from "../../../src/assets/Frame-3.svg"
import avatar2 from "../../../src/assets/Frame -1.svg"
import avatar3 from "../../../src/assets/Frame-2.svg"
import newsimage from "../../assets/editorsInsight1.png"
import moment from 'moment';
const Home = () => {
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
          <div>
            <div className="flex justify-between bg-[#F3F3F3] border border-[#F3F3F3] rounded-r-lg rounded-l-lg">
              <div className="flex items-center">
                <div className="px-5 py-5">
                  <img src={avatar}alt="" />
                </div>
                <div>
                  <h2 className="text-lg text-[#403F3F] font-medium">Awlad Hossain</h2>
                  <span className="text-sm text-[#706F6F] font-normal">{moment().format("MMM D, YYYY")}</span>
                </div>
              </div>
              <div className="flex">
                  <img className="mr-5" src={avatar3} alt="" />
                  <img  className="mr-5" src={avatar2} alt="" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#403F3F] py-5 px-5">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
            </div>
            <div>
              <img className="px-5 py-5" src={newsimage} alt="" />
              <p className="text-xl px-5 py-5 text-gray-500 text-justify">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military......<button className="btn btn-link btn-sm text-orange-500 font-bold text-xl">Read More</button>
              </p>
              
            </div>
            <div>
              <span className="text-black">4.9</span>
            </div>
          </div>
        </div>
        <div className="border">
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;