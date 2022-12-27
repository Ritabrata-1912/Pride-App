import { Button, Card, CardContent, Grid, TextField,Dialog, DialogContent,DialogActions, Box,Stack, Checkbox, Link, Alert, Snackbar, DialogTitle } from "@mui/material";
import { useState } from "react";
import RainbowText from 'rainbow-text-react';
import ShareWindow from "./Share";
import Ticket from "./Ticket";
import { Close } from "@mui/icons-material";
// import DialogueBox from "./DialogueBox";
function Form() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [check, setCheck] = useState(false)
    const [inputs, setInputs] = useState({ name: "", phn: "", email: "" })
    const inputChange = (e) => { setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value })) }
    const handleClose = () => { setOpen(false); setInputs({ name: "", phn: "", email: "" }) }
    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputs);
        if (inputs.name === "") {
            setOpen1(true);
        }
        else if (inputs.phn === "") { setOpen2(true) }
        else if (check)
            setOpen(true);
    }
    const handleCheck = () => { if (check) { setCheck(false); } else { setCheck(true); } }
    const [showModal, setShowModal] = useState(false);

  const toggleModal= () => {
    setShowModal(!showModal);
  }
    return (
        <Stack alignItems={"center"} sx={{ marginBottom: '10px' }}>
            <Card sx={{maxWidth:"700px",boxShadow:"0px 0px 4px gray"}}>
                <Stack direction={"row"} alignItems="center" spacing={1.5} justifyContent={"center"} sx={{ fontSize: '38px', textAlign: 'center', fontWeight: "900",margin:"4px 10px 2px 10px" }}><RainbowText>FREE</RainbowText><Box>Invitation</Box></Stack>
                <CardContent>
                    <form>
                        <Grid container rowSpacing={3} direction="column" justifyContent="space-evenly" alignItems="center">
                            <Grid item xs={12}>
                                <TextField name="name" required sx={{ width:{xs:"15em",sm:"30em"}}} label="Name" placeholder="Enter Your Name" variant="outlined" onChange={inputChange} value={inputs.name} />
                                <Snackbar open={open1} autoHideDuration={4000} onClose={() => setOpen1(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                                    <Alert severity="warning" variant="filled" onClose={() => setOpen1(false)}>
                                        Name can't be empty
                                    </Alert>
                                </Snackbar>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="phn" required sx={{width:{xs:"15em",sm:"30em"}}} type="number" label="Phone Number" placeholder="Enter Phone Number" variant="outlined" onChange={inputChange} value={inputs.phn} />
                            </Grid>
                            <Snackbar open={open2} autoHideDuration={4000} onClose={() => setOpen2(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                                <Alert severity="warning" variant="filled" onClose={() => setOpen2(false)}>
                                    Phone Number can't be empty
                                </Alert>
                            </Snackbar>
                            <Grid item xs={12}>
                                <TextField name="email" sx={{ width:{xs:"15em",sm:"30em"}}} type="email" label="Email" placeholder="Enter E-mail id" variant="outlined" onChange={inputChange} value={inputs.email} />
                            </Grid>
                            <Grid item xs={12}>
                                <Checkbox checked={check} onChange={handleCheck} />
                                <span><span style={{ marginRight: "5px" }}>I accept the</span><Link href="https://www.trythemenu.com/" underline="always">terms and conditions</Link></span>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" justifyContent="space-between" sx={{ width: "10em" }}>
                                    <Button type="submit" variant="contained" size="small" onClick={handleClick}>Submit</Button>
                                    <Button variant="contained" size="small" onClick={toggleModal}>Share</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
            <span id="offers"></span>
            <Dialog open={open}>
                <DialogTitle sx={{display:"flex",justifyContent:"flex-end"}}><Button color="error" variant="contained" onClick={handleClose}><Close/></Button></DialogTitle>
                <DialogContent>
                    <Ticket name={inputs.name}/>
                </DialogContent>
                <DialogActions>
                    <Box sx={{width:'350px',margin:'auto',marginBottom:"5px",textAlign:'center',fontWeight:"600",fontSize:'15px'}}>Please take a screenshot of this ticket. It will also be sent to you via mail.</Box>
                </DialogActions>
            </Dialog>
            <ShareWindow showModal={showModal} toggleModal={toggleModal}/>
        </Stack>
    )
}
export default Form;