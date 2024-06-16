import data from "../assets/movies.json";
const Main = () => {
  return (
    <main>
      {data.map((movie, index) => {
        const images = movie.images;

        return (
          <div key={index} className="div-category">
            <h2>{movie.category}</h2>
            <div className="div-images">
              {images.map((photo) => {
                return <img src={photo} alt="" />;
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default Main;
