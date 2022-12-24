import { Drawer,IconButton,List, ListItemButton, ListItemIcon,ListItemText} from "@mui/material"
import { useState } from "react"
import {Menu} from "@mui/icons-material";
export default function DrawerComp(){
    const [open,setOpen]=useState(false);
    return(
      <>
      <Drawer open={open} onClose={()=>{setOpen(false)}}>
       <List>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Home</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Offers</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Members</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Gallery</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Donate</ListItemText>
            </ListItemIcon>
        </ListItemButton>
       </List>
      </Drawer>
      <IconButton sx={{color:'white'}} onClick={()=>{setOpen(!open)}}>
         <Menu/>
      </IconButton>
      </>
    )
}