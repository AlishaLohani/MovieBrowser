import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            A movie browser is a user-friendly application or web platform designed to facilitate the exploration and discovery of movies.
            Typically offering search functionality, users can delve into extensive databases, accessing detailed information about each film,
            including title, release date, cast, crew, and synopsis. With features like user ratings and reviews,individuals can make informed
            decisions about their viewing choices. Movie browsers often incorporate personalized watchlists, recommendations based on viewing
            history, and easy access to trailers or video clips. The application's responsive design ensures accessibility across various devices, 
            and integration with movie databases or APIs,such as The Movie Database (TMDb), allows real-time updates and a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;