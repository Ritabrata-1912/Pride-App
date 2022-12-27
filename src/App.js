import Heading from "./Components/Heading";
import About from "./Components/About";
import { Container } from "@mui/material";
import Form from "./Components/Form";
import Agenda from "./Components/Agenda";
import ImageCol from "./Components/Image";
import RList from "./Components/RList";
import ImageSlider from "./Components/ImageSlider";
import Bank from "./Components/Bank";
import Social from "./Components/Social";
import Footer from "./Components/Footer";
import Teams from "./Components/Teams";
function App() {
  return (
    <>
       <Container maxWidth="xl" sx={{ fontFamily: `'Poppins', sans-serif`}}>
        <Heading/>
        <ImageSlider/>
        <About />
        <Social/>
        <Agenda />
        <Bank/>
        <Form />
        <RList/>
        <ImageCol/>
        <Teams/>
        <Footer />
      </Container>
    </>
    
  );
}

export default App;
