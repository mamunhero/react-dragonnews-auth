import { Link } from "react-router-dom";
import avatar2 from "../../../src/assets/Frame -1.svg"
import avatar3 from "../../../src/assets/Frame-2.svg"
import frame from "../../../src/assets/Frame-4.svg"
const NewsInfo = ({news}) => {
  // console.log(news)
  const {author, thumbnail_url, details, rating, title, total_view, image_url, _id} = news;
  return (
    <div>
      <div className="relative flex w-full  flex-col  bg-transparent">
  <div className="relative mt-5 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border  shadow-none bg-[#F3F3F3] border border-[#F3F3F3] px-5 py-5">
    <img
      src={author.img}
      alt="tania andrew"
      className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
    />
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between">
        <h5 className="block  text-xl font-semibold leading-snug tracking-normal text-[#403F3F] antialiased">
          {author.name}
        </h5>
        <div className="flex  gap-0">
          <img className="mr-5" src={avatar2} alt="" />
          <img className="mr-5" src={avatar3} alt="" />
        </div>
      </div>
      <p className="block  text-base font-light leading-relaxed text-[#706F6F] antialiased">
        {author.published_date}
      </p>
    </div>
  </div>


  <div className="px-5 py-5">
    <h2 className="text-2xl font-bold text-[#403F3F] mb-3">{title}</h2>
    <img className="w-full" src={image_url} alt="" />
      {details.length > 200 
        ? 
        <p className="text-lg font-normal text-[#706F6F] mt-3 mb-3 text-justify">{details.slice(0, 200)}
          <Link className="text-xl font-bold text-orange-500" 
          to={`/news/${_id}`}>  
          Read More...
          </Link>
        </p>
        : <p className="text-lg font-normal text-[#706F6F] mt-3 mb-3 text-justify">{details}
        </p>
      }
      <hr />
      <div className="flex justify-between items-center mt-5 mb-5 bg-[#F3F3F3] border border-black px-3 py-3">
        <div className="flex gap-5">
          <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          <div>
            <span className="text-[#706F6F] text-xl">{rating.number}</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={frame} alt="" />
          </div>
          <span className="text-[#706F6F]">{total_view}</span>
        </div>
      </div>
  </div>
</div>
    </div>
  );
};

export default NewsInfo;

