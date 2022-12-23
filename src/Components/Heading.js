import { Box } from '@mui/material';
// import Flag from "./ImageContain/sixband-rainbow-flag-representing-lgbt-260nw-13983340.webp";
import {useMediaQuery} from '@mui/material';
// import {AppBar} from '@mui/material';
function Heading() {
    const textCol = [{ text: "P", color: "red" },
    { text: "R", color: "blue" },
    { text: "I", color: "green" },
    { text: "D", color: "yellow" },
    { text: "E", color: "orange" }]
    const match=useMediaQuery("(min-width:400px)");
    return (
            <Box sx={{ fontSize: { xs: "2em", md: "4em" }, position:"sticky",top:"0em",opacity:"0.9",backgroundColor:"#d3d3d3",zIndex:20,fontFamily: `'Rubik Spray Paint', cursive`,textAlign:"center"}}>SILIGURI
                <div style={{ marginLeft: "9px", marginRight: "9px",display:match?"inline":"block"}}>{
                    textCol.map((x) => <span key={x.text} style={{ color: `${x.color}` }}>{x.text}</span>)
                }</div>WALK</Box>
    )
}
export default Heading;