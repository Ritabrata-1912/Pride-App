import { Avatar,Box,Grid, Stack} from "@mui/material";
export default function Core(){
    const style1={display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"center"};
    return(
        <Stack direction="column" alignItems="center" spacing={2} sx={{marginTop:"4em"}}>
            <Box sx={{textAlign:"center",fontSize:"38px",fontWeight:"900"}} >Core Members</Box>
            <Grid container rowSpacing={3}>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:100,md:200},height:{xs:100,md:200},marginBottom:"7px"}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Stack direction="column" alignItems="center" justifyContent={"center"}><Box sx={{textAlign:"center"}}>Bodhisatya Ghosh</Box></Stack>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:100,md:200},height:{xs:100,md:200},marginBottom:"7px"}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Stack direction="column" alignItems="center" justifyContent={"center"}><Box sx={{textAlign:"center"}}>Surabhi Sengupta</Box></Stack>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:100,md:200},height:{xs:100,md:200},marginBottom:"7px"}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Stack direction="column" alignItems="center" justifyContent={"center"}><Box sx={{textAlign:"center"}}>Saloni Kundu</Box></Stack>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:100,md:200},height:{xs:100,md:200},marginBottom:"7px"}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Stack direction="column" alignItems="center" justifyContent={"center"}><Box sx={{textAlign:"center"}}>Prakriti Chanda</Box></Stack>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:100,md:200},height:{xs:100,md:200},marginBottom:"7px"}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Stack direction="column" alignItems="center" justifyContent={"center"}><Box sx={{textAlign:"center"}}>Sourav Das</Box></Stack>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:100,md:200},height:{xs:100,md:200},marginBottom:"7px"}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Stack direction="column" alignItems="center" justifyContent={"center"}><Box sx={{textAlign:"center"}}>Dhiya Sengupta</Box></Stack>
            </Grid>
            <Grid item xs={4} sx={style1}>
                <Avatar sx={{width:{xs:100,md:200},height:{xs:100,md:200},marginBottom:"7px"}} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"/>
                <Stack direction="column" alignItems="center" justifyContent={"center"}><Box sx={{textAlign:"center"}}>Tanvi S</Box></Stack>
            </Grid>
        </Grid>
        </Stack>
        
    )
}