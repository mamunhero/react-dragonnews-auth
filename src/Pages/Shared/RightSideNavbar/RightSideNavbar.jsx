import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone1 from "../../../assets/qZone1.png"
import Qzone2 from "../../../assets/qZone2.png"
import Qzone3 from "../../../assets/qZone3.png"
import bgimage from "../../../assets/bg.png"
const RightSideNavbar = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-bold mb-5">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle> Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub> Login With Github 
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-3xl font-bold mb-5">Find Us On</h2>
        <a className="p-4 flex text-lg border items-center rounded-t-lg" href="">
          <FaFacebook className="mr-3"></FaFacebook>
          <span className="text-[#706F6F] text-base font-medium">Facebook</span>
        </a>
        <a className="p-4 flex text-lg border-x items-center" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          <span className="text-[#706F6F] text-base font-medium">Twitter</span>
        </a>
        <a className="p-4 flex text-lg border items-center rounded-b-lg" href="">
          <FaInstagram className="mr-3"></FaInstagram>
          <span className="text-[#706F6F] text-base font-medium">Instagram</span>
        </a>
      </div>
      {/* q-zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-bold mb-5">Q-Zone</h2>
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
      {/* background image */}
      <div className="flex flex-col items-center mb-10" style={{backgroundImage: 'url(https://i.ibb.co/tpFw1vF/bg.png)'}}>
        <h2 className="text-3xl text-center font-bold text-white mt-16">Create an Amazing Newspaper</h2>
        <p className="text-base text-center py-5 text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className="btn btn-secondary mb-5">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNavbar;