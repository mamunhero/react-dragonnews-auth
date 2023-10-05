import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import {  useEffect, useState } from "react";
import editorone from "../../../src/assets/editorsInsight1.png"
import editortwo from "../../../src/assets/editorsInsight2.png"
import editorthree from "../../../src/assets/editorsInsight3.png"
import frame from "../../../src/assets/Frame.svg"
import NewsCard from "./NewsCard";


const News = () => {

  /* destructing */
const {id} = useParams();

  /* declare usestate */
  const [news, setNews] = useState({});

  /* data fetch */
  useEffect(() => {
    fetch("/news.json")
      .then((response) => response.json())
      .then((data) => {
        const singalNews = data.find(n=> n._id ==id) || {}
        setNews(singalNews)
      })

  }, []);

  return (
    <div>
      <Header></Header>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-[#403F3F]">Dragon News</h2>
        {/* news sector */}
        {
          <NewsCard news={news}></NewsCard>
        }
        {/* editor sector */}
          <div className="mt-10 mb-5">
            <h2>Editors Insight</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="mt-5">
                <img src={editorone} alt="" />
                <h2>21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                <div className="flex">
                  <span className="mr-5"><img src={frame} alt="" /></span>
                  <span className="mr-5">Jan 4, 2022</span>
                </div>
              </div>
              <div className="mt-5">
                <img src={editortwo} alt="" />
                <h2>21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                <div className="flex">
                  <span className="mr-5"><img src={frame} alt="" /></span>
                  <span className="mr-5">Jan 4, 2022</span>
                </div>
              </div>
              <div className="mt-5">
                <img src={editorthree} alt="" />
                <h2>21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                <div className="flex">
                  <span className="mr-5"><img src={frame} alt="" /></span>
                  <span className="mr-5">Jan 4, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default News;

