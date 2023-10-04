import Header from "../Shared/Header/Header";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";

const News = ({news}) => {
  console.log(news)
  return (
    <div>
      <Header></Header>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-[#403F3F]">Dragon News</h2>
          
        </div>
        <div>
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default News;