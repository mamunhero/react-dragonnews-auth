import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breanking = () => {
  return (
    <div className="flex bg-red-500 opacity-60 mt-3 mb-3">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="text-white font-semibold mr-12 text-lg"> Match Highlights: Germany vs Spain — as it happened   !  Match Highlights: Germany vs Spain as... </Link>
        <Link className="text-white font-semibold mr-12 text-lg"> I can be a React component, multiple React components, or just some text. </Link>
      </Marquee>
    </div>
  );
};

export default Breanking;