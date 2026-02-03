import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import MoodboardGenerator from "@/pages/projects/MoodboardGenerator/MoodboardGenerator";
import CoffeeExperience from "@/pages/projects/CoffeeExperience/CoffeeExperience";
import StyleGuide from "@/pages/StyleGuide/StyleGuide";

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home />} 
      />
      <Route
        path="/projects/moodboardgenerator"
        element={<MoodboardGenerator />}
      />
      <Route 
        path="/projects/coffeeexperience"
        element={<CoffeeExperience />}
      />      
      <Route
        path="/styleguide"
        element={<StyleGuide />}
      />
    </Routes>
  );
}

export default App;

