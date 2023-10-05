{news.length > 0 && (
  <div className="card  bg-base-100 shadow-xl">
    <figure><img src={news[0]?.image_url} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{news[0]?.title}</h2>
      <p>{news[0]?.details}</p>
      <div className="card-actions">
        <span></span>
        <Link to="/">
          <button className="bg-[#D72050] text-white text-lg font-normal block px-3 py-2 rounded text-center ">All news in this category</button>
        </Link>
      </div>
    </div>
  </div>
)}