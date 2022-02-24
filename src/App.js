import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MegaGrid from "./components/MegaGrid";
import Player from "./components/Player";

function App() {
  const dataItems = [
    { title: "University of Arizona" },
    { title: "PostGres" },
    { title: "VueJs" },
    { title: "React" },
    { title: "Django" },
    { title: "Git" },
    { title: "Docker" },
  ];

  const style = {
    backgroundColor: "blue",
  };

  return (
    <div className="App">
      <Box p={2} m={2} style={style}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            {/* <ExperienceCarousel></ExperienceCarousel>
            <TechStackCard></TechStackCard>
            <PreviousProjectsCarousel></PreviousProjectsCarousel> */}
            <MegaGrid items={dataItems}></MegaGrid>
            <Player></Player>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default App;
