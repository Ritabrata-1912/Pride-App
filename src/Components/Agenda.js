import { Box, Stack, Typography } from '@mui/material';
import Md from './ImageContain/Mandella.svg';
// import {Add} from '@mui/icons-material';
function Agenda() {
    return (
        <Box sx={{ paddingBottom: '20px'}}>
            <img src={Md} alt="error" style={{position:"absolute",top:"-50%",left:"-50%",width:"100px",height:"100px"}}/>
            <Typography sx={{ textAlign: 'center', fontSize: '38px', fontWeight: "900" }}>Agenda</Typography>
            <Stack direction="column" spacing={2} alignItems="center" sx={{ fontSize: '1.2em' }}>
                <ul style={{listStyleType:"disc"}}>
                  <li>Adoption Rights</li>
                  <li>LGBTQIA+ Marriage Rights</li>
                  <li>Gender Neutral Washroom and Sanitary Facilities</li>
                  <li>Demanding changes in the Transgender Persons Act,2019</li>
                  <li>To eradicate violence against the LGBTQIA+ community</li>
                  <li>Sensitization in workplace</li>
                  <li>LGBTQIA+ Inclusive Education</li>
                  <li>Horizontal Reservation <span id="donate"></span></li>
                  <li>Police Sensitization for LGBTQ+ cases</li>
                  <li>Family Awareness for Queer Children</li>
                </ul>
            </Stack>
        </Box>
    )
}
export default Agenda;