import { Button, Card, CardActions, CardContent, Grid, TextField, Typography,Box,Dialog,DialogContent,DialogContentText,DialogTitle, DialogActions} from "@mui/material";
import { useState } from "react";
// import DialogueBox from "./DialogueBox";
function Form(){
    const [open,setOpen]=useState(false);
    const handleClose=()=>{setOpen(false);}
    const handleOpen=(setOpen(true))
    return(
        <Box>
        <Card>
            <Typography sx={{fontSize:'1.5em',padding:'2px 0 2px 0',textAlign:'center'}}>Get FREE Invitation</Typography>
            <CardContent>
                <Grid container spacing={3}>
                <Grid item >
                    <TextField label="Name" placeholder="Enter Your Name" variant="outlined"/>
                </Grid>
                <Grid item>
                    <TextField type="number" label="Phone Number" placeholder="Enter Phone Number" variant="outlined"/>
                </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{paddingLeft:'80px'}}>
                <Button variant="contained" size="small" onClick={handleOpen}>Submit</Button>
                <Button variant="contained" size="small">Share</Button>
            </CardActions>
        </Card>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>Close</Button>
          </DialogActions>
          </Dialog>
        </Box>
    )
}
export default Form;