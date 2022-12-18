import Heading from "./Components/Heading";
import About from "./Components/About";
import { Container } from "@mui/material";
import Form from "./Components/Form";
import Agenda from "./Components/Agenda";
import ImageCol from "./Components/Image";
import RList from "./Components/RList";
import Carousel from "./Components/Carousel";
import Bank from "./Components/Bank";
import Footer from "./Components/Footer";
function App() {
  return (
    <Container>
    <Heading/>
    <Carousel/>
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
