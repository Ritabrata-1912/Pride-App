import { Avatar, Stack, Box } from "@mui/material"
import TTM from "./ImageContain/TTMLogo.svg"
export default function Footer() {
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={{ xs: 1, md: 2 }} sx={{ fontSize: { xs: "10px", sm: "16px" }, marginTop: { xs: "20px", sm: "30px" } }}>
            <Avatar src={TTM} size="medium" />
            <Stack direction={{ xs: "column", md: 'row' }} alignItems="center" spacing={{ md: 1.5 }}> <Box sx={{ xs: "10px", sm: "16px" }}>This website is sponsored</Box><Box sx={{ fontSize: { xs: "9px", sm: "16px" }, fontWeight: "700" }}>by TRYCO Services Pvt. Ltd. </Box></Stack>
            <span>|</span>
            <span sx={{ fontWeight: "900" }}>© Copyright 2022 reserved.</span>
        </Stack>
    )
}