import {Facebook,Instagram,Twitter} from '@mui/icons-material';
import { Stack } from '@mui/material';
export default function Social(){
    return(
         <Stack justifyContent="center" direction="row" spacing={2} sx={{marginTop:"2em",marginBottom:"2em"}}>
            <Facebook fontSize="large"/>
            <Instagram fontSize="large" />
            <Twitter fontSize="large"/>
         </Stack>
    )
}