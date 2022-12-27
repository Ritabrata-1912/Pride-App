// import { useState } from 'react';
import { FacebookShareButton,LinkedinShareButton,TwitterShareButton,FacebookIcon,TwitterIcon,LinkedinIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';
// import "./Share.css"
import copy from "copy-to-clipboard";
import { ContentCopy } from '@mui/icons-material';
import { useState } from 'react';
import {Dialog, DialogContent,DialogTitle,DialogActions,Button, Stack,Snackbar,Alert} from "@mui/material";
const ShareWindow = (props) => {
  const [open, setOpen] = useState(false);
  const copyDetails=(str)=>{copy(str);setOpen(true);}
  const handleClose=()=>{setOpen(false)}
  return (
          <Dialog open={props.showModal}>
          <DialogTitle sx={{textAlign:"center"}}>Share</DialogTitle>
          <DialogContent>
            <Stack direction="row" spacing={2} justifyContent="center">
            <FacebookShareButton children="facebook" url={window.location.href}>
            <FacebookIcon round/>
           </FacebookShareButton>
           <TwitterShareButton>
            <TwitterIcon round/>
           </TwitterShareButton>
           <LinkedinShareButton>
           <LinkedinIcon round/>
           </LinkedinShareButton>
           <WhatsappShareButton children="whatsapp" url={window.location.href}>
            <WhatsappIcon round/>
           </WhatsappShareButton>
            </Stack>
            <Stack alignItems={"center"} sx={{marginTop:'20px'}}><ContentCopy size="large" onClick={()=>{copyDetails(window.location.href)}} />Click here to copy the link</Stack>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical:"bottom",horizontal:"center"}}>
        <Alert severity="info" variant="filled" onClose={handleClose}>
          Your Link has been Copied
        </Alert>
        </Snackbar>
          </DialogContent>
          <DialogActions>
                    <Button variant="outlined" onClick={props.toggleModal}>Close</Button>
                </DialogActions>
          </Dialog>
  );
}
export default ShareWindow;
