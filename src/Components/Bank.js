import { Box, Button, Stack } from "@mui/material";
import copy from "copy-to-clipboard";
export default function Bank(){
    // const sliderStyles={height:'900px',width:'200px',position:'relative'}
    const slideStyles={width:'200px',height:'150px',backgroundRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:'url(https://images.unsplash.com/photo-1589118949245-7d38baf380d6)'}
    const copyBankDetails=()=>{copy('00000xxxx11');}
    const copyUpi=()=>{copy('xyx@upi');}
    return(
        <Stack alignItems='center' justifyContent='space-around' spacing={4}>
            <Box>Donate for Good Cause</Box>
            <div style={slideStyles}></div>
           <Box sx={{textAlign:'center'}}>After Payment you can send screenhot at xyz@gmail.com</Box>
           <Box>
            Bank Details:00000xxxx11<Button onClick={copyBankDetails} sx={{marginLeft:'10px'}} size="small" variant="contained">Copy</Button>
           </Box>
           <Box>
            UPI Id:xyz@upi<Button onClick={copyUpi} sx={{marginLeft:'10px'}} size="small" variant="contained">Copy</Button>
           </Box>
        </Stack>
    )
}