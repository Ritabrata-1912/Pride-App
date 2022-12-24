import { Box, Stack, Typography } from '@mui/material';
import Md from './ImageContain/Mandella.svg';
// import {Add} from '@mui/icons-material';
function Agenda() {
    return (
        <Box sx={{ paddingBottom: '20px'}}>
            <img src={Md} alt="error" style={{position:"absolute",top:"-50%",left:"-50%",width:"100px",height:"100px"}}/>
            <Typography sx={{ textAlign: 'center', fontSize: '38px', fontWeight: "900" }}>Agenda</Typography>
            <Stack direction="column" spacing={2} justifyContent="space-around" sx={{ fontSize: '1.2em' }}>
                <Box sx={{ textAlign: 'center' }}>
                    List Number 1
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    List Number 2
                    <span id="donate"></span>
                </Box>
            </Stack>
        </Box>
    )
}
export default Agenda;