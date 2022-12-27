import TeamCard from "./TeamCard";
import img1 from "./ImageContain/Image2019.jpg";
import img2 from "./ImageContain/Image2020.jpg";
import img3 from "./ImageContain/Image2021.JPG";
import { Card, CardContent, Box, Stack } from "@mui/material";
export default function Teams() {
    return (
        <Stack alignItems={"center"}>
            <Card sx={{ backgroundColor: '#ff8164', marginBottom: '10px', borderRadius: '30px', marginTop: "4em", paddingTop: "2em"}}>
                <Box sx={{ textAlign: "center", fontSize: "38px", fontWeight: "900" }}>Our Teams</Box>
                <CardContent>
                    <Stack alignItems="center" spacing={2}>
                        <TeamCard image={img1} year="2018" />
                        <TeamCard image={img1} year="2019" />
                        <TeamCard image={img2} year="2020" />
                        <TeamCard image={img3} year="2021" />
                    </Stack>
                </CardContent>
            </Card>
        </Stack>

    )
}