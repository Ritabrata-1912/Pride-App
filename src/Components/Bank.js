import { Box,Container,Stack } from "@mui/material";
import {ContentCopy} from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import copy from "copy-to-clipboard";
import Qr from "./domoqr.png"
import { useState } from "react";
export default function Bank(){
    // const sliderStyles={height:'900px',width:'200px',position:'relative'}
    const slideStyles={width:'200px',height:'150px',backgroundRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'contain',
        backgroundRepeat:"no-repeat",
        backgroundImage:`url(${Qr})`}
    const [open,setOpen]=useState(false);
    const handleClose=()=>{setOpen(false)}
    const copyDetails=(str)=>{copy(str);setOpen(true);}
    return(
        <Container>
        <Stack alignItems='center' justifyContent='space-around' spacing={2} sx={{marginBottom:'4em',marginTop:"4em"}}>
            <Box sx={{fontSize:'38px',textAlign:"center",fontWeight:"900"}}>Donate for Good Cause</Box>
            <div style={slideStyles}></div>
           <Box sx={{fontSize:"17px"}}>
            Account No: <span style={{fontWeight:"700"}}>684202010006036</span><ContentCopy onClick={()=>{copyDetails("684202010006036")}} sx={{marginLeft:'10px'}} fontSize={"small"}/>
           </Box>
           <Box sx={{fontSize:"17px",}}>
            IFSC:<span style={{fontWeight:"700"}}>UBIN0573744</span><ContentCopy onClick={()=>{copyDetails("UBIN0573744")}} sx={{marginLeft:'10px'}} fontSize={"small"}/>
           </Box>
           <Box sx={{fontSize:"17px",}}>
            Account Holder: <span style={{fontWeight:"700"}}>SOURAV DAS</span><ContentCopy onClick={()=>{copyDetails("SOURAV DAS")}} sx={{marginLeft:'10px'}} fontSize={"small"}/>
           </Box>
           <span id="reg"></span>
           <Box sx={{fontSize:"17px"}}>
            UPI Id: <span style={{fontWeight:"700"}}>andy0910.sd@oksbi</span><ContentCopy onClick={()=>{copyDetails("andy0910.sd@oksbi")}} sx={{marginLeft:'10px'}} fontSize={"small"}/>
           </Box>
           <Box sx={{textAlign:'center',fontSize:"20px"}}>After Payment you can send screenshot at xyz@gmail.com</Box>
        </Stack>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical:"bottom",horizontal:"center"}}>
        <Alert severity="info" variant="filled" onClose={handleClose}>
          Your Text has been Copied
        </Alert>
        </Snackbar>
        </Container>
    )
}