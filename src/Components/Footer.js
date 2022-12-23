import { Avatar,Box,Grid, Stack} from "@mui/material";
export default function Footer(){
    const style1={display:'flex',flexDirection:"column",alignItems:"center"};
    return(
        <Stack direction="column" alignItems="center" spacing={2} sx={{marginTop:"4em"}}>
            <Box sx={{textAlign:"center",fontSize:"38px",fontWeight:"900"}} >Volunteer List</Box>
            <Grid container rowSpacing={3}>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:60,md:150},height:{xs:60,md:150}}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:60,md:150},height:{xs:60,md:150}}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:60,md:150},height:{xs:60,md:150}}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:60,md:150},height:{xs:60,md:150}}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:60,md:150},height:{xs:60,md:150}}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:60,md:150},height:{xs:60,md:150}}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Box>Name</Box>
            </Grid>
        </Grid>
        </Stack>
        
    )
}