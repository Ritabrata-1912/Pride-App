import { Box, Button, Stack,Collapse } from '@mui/material'
import { Accessibility } from '@mui/icons-material';
import {Link} from "react-scroll";
import { useState } from 'react';
import RainbowText from 'rainbow-text-react';
// import Bg from "./ImageContain/Image4.jpeg";
function About() {
  const [check,setCheck]=useState(false);
  const [text,setText]=useState("Read More");
  const handleCheck=()=>
  {if(check)
    {setText("Read More");
    setCheck(false);
  }
  else{
    setText("Read less");
    setCheck(true);
  }
}
  return (
    <Box sx={{ paddingBottom: '20px', marginTop: "20px" }}>
      <Stack alignItems="center" sx={{ marginTop: "20px" }}><Button sx={{ width: { xs: "150px", md: "300px" }, height: "50px", borderRadius: "50px", padding: "10px", boxShadow: "0 0 3px black"}} variant="contained"><Accessibility sx={{ marginRight: "10px" }} /> <Link to="reg" spy={true} smooth={true} offset={50} duration={500}>Join Us</Link></Button></Stack>
      <Box sx={{ textAlign: 'center', fontSize: "38px", fontWeight: "900",marginTop:"20px", }}>
        <RainbowText>About Us</RainbowText></Box>
      <Box sx={{ padding: '5px 5px 20px 5px', fontSize:{xs:"18px",md:'1.2em'}, textAlign: "center" }}>What started as a celebration of the landmark judgement in the year 2018, 
      led to the creation of this little family known as the Team SPW. It initially started as a group of students who volunteered to organise the first ever Pride Parade of Siliguri.
       With a group of 35+ volunteers of various age groups, Team SPW has organised 3 Pride Parades,
       Siliguri's first Queer Carnival and a District Meeting on Trans Rights and LGBTQIA+ Issues.</Box>
       <Box sx={{ padding: '5px 5px 20px 5px', fontSize:{xs:"18px",md:"1.2em"}, textAlign: "center" }}>
        <p style={{fontWeight:"900"}}>What We Do</p>
       We are a Queer Collective known by the name of Siliguri Pride Walk, consisting of queer individuals as well as allies in and around Siliguri. 
   <Collapse in={check}> <p>In 2018, we hosted Siliguri's very first pride parade. A pride parade is an outdoor event celebrating LGBTQIA+ social and self acceptance, achievements, legal rights, and pride. The events also at times serve as demonstrations for legal rights such as queer marriage rights, horizontal reservation and inclusive education. 
    It was an event that made history and started a tradition of annual pride events in Siliguri. Since 2018, we have hosted 3 Pride parades, a Queer Carnival which supported small businesses, was a completely eco-friendly event and had crossed a guest count of 500+, and a District Meeting On Transgender Rights and LGBTQIA+ issues with LGBTQIA+ Activists, Speakers and Human Rights Advocates.</p>
<p>These events are hosted with the help of the funds collected from generous donations from citizens, activists,
   organisations and businesses. Any extra amount left from the budget is donated to the  Underprivileged Transgender
   community of Siliguri. We aim to create a safe space for the LGBTQIA+ identifying citizens of Siliguri.We are a Queer 
   Collective known by the name of Siliguri Pride Walk, consisting of queer individuals as well as allies in and around 
   Siliguri.</p></Collapse>
       <Button size={"small"} sx={{marginTop:"10px"}} onClick={handleCheck} variant="outlined">{text}</Button>
       </Box>
      <Stack direction="column" alignItems="center" spacing={2} sx={{ fontSize: '1.2em' }}>
        <Box>Date : 30.12.2022</Box>
        <Box>Time : 10 am to 2 pm</Box>
        <Box >Venue : Air View to Baghajatin Park</Box>
      </Stack>
      
    </Box>
  )
}
export default About;
// const arr1=[]