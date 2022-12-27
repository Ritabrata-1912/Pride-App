import {Card, CardContent,CardMedia,Box,Stack} from '@mui/material';
// import {Discount} from '@mui/icons-material';
function TeamCard(props){
    return(
        <Card sx={{borderRadius:'15px',maxWidth:"900px"}}>
         <CardContent>
         <CardMedia
        component="img"
        image={props.image}
        alt="green iguana" sx={{borderRadius:"10px",marginBottom:"5px"}} />
            <Stack alignItems="center"><Box sx={{fontSize:{md:'30px'}}}>{props.year}</Box></Stack>
         </CardContent>
        </Card>
    )
}
export default TeamCard;