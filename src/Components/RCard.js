import {Card, CardContent,Typography,CardMedia} from '@mui/material';
function RCard(props){
    return(
        <Card width="70" sx={{backgroundColor:"green"}}>
         <CardContent>
         <Typography sx={{position:'relative',top:'20%',left:'80%',zIndex:1}}>{props.discount}</Typography>
         <CardMedia
        component="img"
        height="140"
        width="50"
        image={props.image}
        alt="green iguana"/>
            <Typography>{props.name}</Typography>
            
         </CardContent>
        </Card>
    )
}
export default RCard;