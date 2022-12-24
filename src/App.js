import Heading from "./Components/Heading";
import About from "./Components/About";
import { Container } from "@mui/material";
import Form from "./Components/Form";
import Agenda from "./Components/Agenda";
import ImageCol from "./Components/Image";
import RList from "./Components/RList";
// import ImageSlider from "./Components/ImageSlider";
import Bank from "./Components/Bank";
import Vlist from "./Components/Vlist";
import Social from "./Components/Social";
import Footer from "./Components/Footer";
// import Bg from "./Components/ImageContain/Background1.jpg";

// import {Box} from "@mui/material"
function App() {
  return (
    <>
       <Container maxWidth="xl" sx={{ fontFamily: `'Neue Haas Grotesk Display Pro', sans-serif`}}>
        <Heading/>
        <About />
        <Social/>
        <Agenda />
        <Bank id="donate"/>
        <Form />
        <RList id="offers"/>
        <ImageCol id="gallery"/>
        <Vlist id="members"/>
        <Footer />
      </Container>
    </>
    
  );
}

export default App;
