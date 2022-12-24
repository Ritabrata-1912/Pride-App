import { Drawer,IconButton,List, ListItemButton, ListItemIcon,ListItemText} from "@mui/material"
import { useState } from "react"
import {Menu,Close} from "@mui/icons-material";
import { Link } from "react-scroll";
export default function DrawerComp(){
    const [open,setOpen]=useState(false);
    return(
      <>
      <Drawer open={open} onClose={()=>{setOpen(false)}}>
       <List>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText ><Link onClick={()=>{setOpen(false)}} to="head" spy={true} smooth={true} offset={50} duration={500}>Home</Link></ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText><Link onClick={()=>{setOpen(false)}} to="offers" spy={true} smooth={true} duration={500}>Offers</Link></ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText><Link onClick={()=>{setOpen(false)}} to="members" spy={true} smooth={true} duration={500}>Members</Link></ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText><Link onClick={()=>{setOpen(false)}} to="gallery" spy={true} smooth={true} duration={500}>Gallery</Link></ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText><Link onClick={()=>{setOpen(false)}} to="donate" spy={true} smooth={true} offset={50} duration={500}>Donate</Link></ListItemText>
            </ListItemIcon>
        </ListItemButton>
       </List>
      </Drawer>
      <IconButton sx={{color:'white'}} onClick={()=>{setOpen(!open)}}>
         {(!open)?(<Menu/>):<Close/>}
      </IconButton>
      </>
    )
}