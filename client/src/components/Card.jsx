const Card = ({ singleLink }) => {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <div className="w-full bg-white">
      <a href={singleLink.url ? singleLink.url : ""} target="_blank">
        <div className="border h-full border-gray-200 rounded-sm overflow-hidden shadow-md">
          <img
            className="max-h-40 object-cover w-full rounded-t-sm"
            src={
              singleLink.image
                ? singleLink.image
                : "https://sitechecker.pro/wp-content/uploads/2017/12/404.png"
            }
            alt={singleLink.title ? singleLink.title : "Not Found"}
          />
          <div className="p-4">
            <h1>{singleLink.title ? singleLink.title : ""}</h1>
            <p>
              {truncateString(
                singleLink.description
                  ? singleLink.description
                  : "Description not found",
                200
              )}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Card;
