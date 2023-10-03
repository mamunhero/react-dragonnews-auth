import logo from "../../../../src/assets/logo.png"
import moment from 'moment';
const Header = () => {
  return (
    <div className="text-center mt-12">
      <img className="mx-auto" src={logo} alt="" />
      <p className="mt-5 text-[#706F6F] font-normal">Journalism Without Fear or Favour</p>
      <p className="text-xl mt-3 text-[#403F3F] font-medium">{moment().format("D MMMM, dddd YYYY")}</p>
    </div>
  );
};

export default Header;

