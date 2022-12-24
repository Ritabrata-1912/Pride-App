import { Box, Button, Stack } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import Bg from "./ImageContain/Image4.jpeg";
function About() {
  return (
    <Box sx={{ paddingBottom: '20px', marginTop: "70px" }}>
      <Box sx={{ textAlign: 'center', fontSize: "38px", fontWeight: "900" }}>Welcome to Siliguri Pride Walk 2022</Box>
      <Box sx={{ padding: '5px 5px 20px 5px', fontSize: '1.2em', textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sequi illo nobis, officiis nostrum aliquid soluta at est
        voluptatum hic voluptates enim ducimus quaerat pariatur sit dolorem dolore sunt? Doloribus?</Box>
      <Stack direction="column" alignItems="center" spacing={2} sx={{ fontSize: '1.2em' }}>
        <Box>Date:dd/mm/yyyy</Box>
        <Box>Time:hh:mm</Box>
        <Box >Venue:Siliguri</Box>
      </Stack>
      <Stack alignItems="center" sx={{ marginTop: "20px" }}><Button sx={{ width: { xs: "250px", md: "400px" }, height: "70px", borderRadius: "50px", padding: "10px", boxShadow: "0 0 3px black" }}><AppRegistrationIcon sx={{ marginRight: "10px" }} /> Register Now</Button></Stack>
    </Box>
  )
}
export default About;