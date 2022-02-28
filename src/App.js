import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MegaGrid from "./components/MegaGrid";
import Player from "./components/Player";

function App() {
  const dataItems = [
    {
      title: "University of Arizona",
      subtitle: "Jan 2020 - Current",
      icon: require("./assets/uaIcon.png"),
      dropdownItems: [
        "Led small team of developers building web applications in Django, VueJS, and PostgreSQL applications.",
        "Implemented and improved CI/CD pipelines using tools such as Github Actions and Docker.",
        "Managed project timelines, led stakeholder meetings, and implemented hybrid SCRUM/Kanban workflow.",
        "Built out complex workflows to handle processing and analysis of all COVID-19 PCR and antibody tests for the University. Utilized Django, VueJS, and Clarity.",
        "Built applications and automations within both the clinical research and financial sectors.",
        "Utilized AWS tools and techniques to create both server-less and traditional web applications. Helped design security infrastructure such as IAM policy and security group design.",
      ],
    },
    {
      title: "University of Arizona",
      subtitle: "B.S. Computer Science, 2021",
      icon: require("./assets/uaIcon.png"),
      dropdownItems: [
        "Graduated with 3.5 GPA.",
        "Worked as Teaching Assistant for intro CS courses.",
      ],
    },
    // { title: "PostGres" },
    // { title: "VueJs" },
    // { title: "React" },
    // { title: "Django" },
    // { title: "Git" },
    // { title: "Docker" },
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
