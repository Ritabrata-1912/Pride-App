import { Box, Button, Stack } from '@mui/material'
import { Accessibility } from '@mui/icons-material';
import {Link} from "react-scroll";
// import Bg from "./ImageContain/Image4.jpeg";
function About() {
  return (
    <Box sx={{ paddingBottom: '20px', marginTop: "20px" }}>
      <Stack alignItems="center" sx={{ marginTop: "20px" }}><Button sx={{ width: { xs: "150px", md: "300px" }, height: "50px", borderRadius: "50px", padding: "10px", boxShadow: "0 0 3px black"}} variant="contained"><Accessibility sx={{ marginRight: "10px" }} /> <Link to="reg" spy={true} smooth={true} offset={50} duration={500}>Join Us</Link></Button></Stack>
      <Box sx={{ textAlign: 'center', fontSize: "38px", fontWeight: "900",marginTop:"20px" }}>About Us</Box>
      <Box sx={{ padding: '5px 5px 20px 5px', fontSize: '1.2em', textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sequi illo nobis, officiis nostrum aliquid soluta at est
        voluptatum hic voluptates enim ducimus quaerat pariatur sit dolorem dolore sunt? Doloribus?</Box>
      <Stack direction="column" alignItems="center" spacing={2} sx={{ fontSize: '1.2em' }}>
        <Box>Date:dd/mm/yyyy</Box>
        <Box>Time:hh:mm</Box>
        <Box >Venue:Siliguri</Box>
      </Stack>
      
    </Box>
  )
}
export default About;