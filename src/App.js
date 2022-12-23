import Heading from "./Components/Heading";
import About from "./Components/About";
import { Container } from "@mui/material";
import Form from "./Components/Form";
import Agenda from "./Components/Agenda";
import ImageCol from "./Components/Image";
import RList from "./Components/RList";
import ImageSlider from "./Components/ImageSlider";
import Bank from "./Components/Bank";
import Footer from "./Components/Footer";
import Social from "./Components/Social";
// import {Box} from "@mui/material"
function App() {
  return (
    <Container maxWidth="xl" sx={{fontFamily:`'Neue Haas Grotesk Display Pro', sans-serif`,backgroundColor:"#eedd82"}}>
    <Heading/>
    <ImageSlider/>
    <Social/>
    <About/>
    <Agenda/>
    <ImageCol/>
    <Bank/>
    <Form/>
    <RList/>
    <Footer/>
    </Container>
    
  );
}

export default App;
