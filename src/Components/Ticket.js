import { Box, Stack } from "@mui/material"
import img from "./ImageContain/Ticket.png"
export default function Ticket(props){
    return(
        <Box sx={{backgroundImage:`url(${img})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",fontFamily: `'Kanit', sans-serif`,backgroundColor:"#f6f6e9",width:{xs:'250',md:'350'},height:{xs:"350",md:"550"}}}>
         <Stack alignItems={"center"} justifyContent="center" spacing={{xs:1.5,md:2}} sx={{padding:"80px 8px 7px 8px"}}>
            <Box sx={{fontSize:"10px"}}>Join Us On</Box>
            <Stack alignItems="center" spacing={1}><Stack sx={{fontSize:"30px",fontWeight:"700"}} alignItems="center"><Box>Pride</Box><Box>Walk</Box><Box>Siliguri</Box></Stack><Box sx={{fontSize:"10px"}}>SAVE THE DATE</Box></Stack>
            <Box sx={{fontSize:"30px"}}>30.12.2022</Box>
            <Stack sx={{fontSize:"20px"}} alignItems={"center"}><Box>Invitation for</Box><Box sx={{textAlign:"center",fontWeight:"700",textDecoration:"underline"}}>{props.name}</Box></Stack>
            <Stack sx={{fontSize:"12px"}} alignItems="center"><Box sx={{textAlign:"center"}}>Time : 10 am to 2 pm</Box><Box sx={{textAlign:"center"}}>Venue : Air View to Baghajatin Park</Box></Stack>
            <Box sx={{textAlign:"center",fontSize:"12px"}}>This Invitation can help to get exclusive offers</Box>
         </Stack>
        </Box>
    )
}