import { Grid } from "@mui/material";
import RCard from "./RCard";
export default function RList(){
  return(
    <Grid container spacing={1} my={2} columns={2}>
        <Grid item >
            <RCard name='Name1' discount='10%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
        <Grid item>
            <RCard name='Name2' discount='20%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid >
        <Grid item>
            <RCard name='Name3' discount='10%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
        <Grid item >
            <RCard name='Name4' discount='15%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
        <Grid item >
            <RCard name='Name5' discount='20%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
        <Grid item>
            <RCard name='Name6' discount='20%' image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Grid>
    </Grid>
  )
}