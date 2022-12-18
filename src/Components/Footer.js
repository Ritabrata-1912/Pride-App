import { Avatar,Box,Grid} from "@mui/material";
export default function Footer(){
    return(
        <Grid container spacing={4}>
            <Grid item>
                <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item>
                <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item>
                <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item>
                <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item>
                <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
        </Grid>
    )
}