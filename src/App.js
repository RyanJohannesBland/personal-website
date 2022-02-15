import "./App.css";
import ExperienceCarousel from "./components/ExperienceCarousel";
import PreviousProjectsCarousel from "./components/PreviousProjectsCarousel";
import TechStackCard from "./components/TechStackCard";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Grid spacing="12">
        <ExperienceCarousel></ExperienceCarousel>
        <PreviousProjectsCarousel></PreviousProjectsCarousel>
        <TechStackCard></TechStackCard>
      </Grid>
    </div>
  );
}

export default App;
