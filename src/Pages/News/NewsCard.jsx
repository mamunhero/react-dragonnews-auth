import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
  const {author, thumbnail_url, details, rating, title, total_view, image_url, _id} = news;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
          <figure><img src={image_url} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{details}</p>
            <div className="card-actions">
              <Link to="/">
                <button className="btn btn-primary">All news in this category</button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NewsCard;

