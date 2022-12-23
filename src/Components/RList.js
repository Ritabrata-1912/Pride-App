import { Card, CardContent, Box,Grid} from "@mui/material";
import RCard from "./RCard";
export default function RList(){
  return(
    <Card sx={{backgroundColor:'#fffa7e',marginBottom:'10px',borderRadius:'30px',marginTop:"4em",paddingTop:"2em"}}>
        <Box sx={{textAlign:"center",fontSize:"38px",fontWeight:"900"}}>Exclusive Pride Offers !!!</Box>
        <CardContent>
        <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item xs={6} sm={3}>
            <RCard name='Name1' discount='10%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
        <Grid item xs={6} sm={3}>
            <RCard name='Name2' discount='20%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid >
        <Grid item xs={6} sm={3}>
            <RCard name='Name3' discount='10%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
        <Grid item xs={6} sm={3}>
            <RCard name='Name4' discount='15%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
        <Grid item xs={6} sm={3}>
            <RCard name='Name5' discount='20%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
        <Grid item xs={6} sm={3}>
            <RCard name='Name6' discount='20%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
    </Grid>
        </CardContent>
    </Card>
    
  )
}