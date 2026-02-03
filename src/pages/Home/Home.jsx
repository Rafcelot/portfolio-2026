import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="grid">
      <div className="page__content">
        <h1>Home works</h1>

        <Link to="/projects/moodboardgenerator">
          Go to Moodboard Generator
        </Link>

        <Link to="/projects/coffeeexperience">
          Go to Coffee Shop 
        </Link>      

        <Link to="/styleguide">
          Go to Styles Guide
        </Link>
      </div>
 


    </main>
  );
}

export default Home;
