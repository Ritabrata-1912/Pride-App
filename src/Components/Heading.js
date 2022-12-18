import {Box,Typography} from '@mui/material';
// import {useMediaQuery} from '@mui/material';
function Heading (){
    return(
        <Box sx={{textAlign:'center',paddingTop:'1em',paddingBottom:'2em'}}>
            <Typography sx={{fontSize:'1.8em',screen:{large:{fontSize:'3em'}}}}>SILIGURI PRIDE WALK 2022</Typography>
        </Box>
    )
}
export default Heading;