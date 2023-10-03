import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import photo1 from "../../../assets/1.png"
import photo2 from "../../../assets/2.png"
import photo3 from "../../../assets/3.png"
import frame from "../../../assets/Frame.svg"
import moment from 'moment';
const LeftSideNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetch("categories.json")
    .then(response=> response.json())
    .then(data=> setCategories(data))
  },[])
  // console.log(categories);
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-[#403F3F] mt-2">All Caterogy</h2>
      {
        categories.map(category=> 
        <NavLink 
          className="font-2xl font-semibold text-[#403F3F] block ml-5 bg-[#E7E7E7] border border-[#E7E7E7] rounded-md"  
          key={category.id}> 
          {category.name}
        </NavLink>)
      }
      <div>
        <div className="mt-5 mb-5">
          <img className="mt-5 mb-2 border rounded-md" src={photo1} alt="" />
          <p className="font-2xl font-semibold text-[#403F3F] leading-normal">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="flex py-3">
            <span className="mr-3 text-base font-medium text-[#403F3F]">Sports</span>
            <div className="flex">
              <img className="mr-3" src={frame} alt="" />
              <span className="text-base font-medium text-[#9F9F9F]">{moment().format("MMM D, YYYY")}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 mb-5">
            <img className="mt-5 mb-2 border rounded-md" src={photo2} alt="" />
            <p className="font-2xl font-semibold text-[#403F3F] leading-normal">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex py-3">
              <span className="mr-3 text-base font-medium text-[#403F3F]">Sports</span>
              <div className="flex">
                <img className="mr-3" src={frame} alt="" />
                <span className="text-base font-medium text-[#9F9F9F]">{moment().format("MMM D, YYYY")}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 mb-5">
            <img className="mt-5 mb-2 border rounded-md" src={photo3} alt="" />
            <p className="font-2xl font-semibold text-[#403F3F] leading-normal">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex py-3">
              <span className="mr-3 text-base font-medium text-[#403F3F]">Sports</span>
              <div className="flex">
                <img className="mr-3" src={frame} alt="" />
                <span className="text-base font-medium text-[#9F9F9F]">{moment().format("MMM D, YYYY")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNavbar;