import { Avatar,Stack,Box} from "@mui/material"
import TTM from "./ImageContain/TTMLogo.svg"
export default function Footer() {
    return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={{xs:1,md:2}} sx={{fontSize: { xs: "10px", sm: "16px" },marginTop:{xs:"10px",md:"20px"}}}>
                <Avatar src={TTM} size="medium" />
                <Box> This website is sponsored<Box sx={{fontSize:"9px"}}>by TRYCO Services Pvt. Ltd. </Box></Box>
                <span>|</span>
                <span sx={{fontWeight:"900"}}>© Copyright 2022 reserved.</span>
            </Stack>
    )
}