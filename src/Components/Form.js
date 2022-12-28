import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Stack,
  Checkbox,
  Link,
  Alert,
  Snackbar,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import RainbowText from "rainbow-text-react";
import ShareWindow from "./Share";
import Ticket from "./Ticket";
import { Close } from "@mui/icons-material";
// import axios from "axios";
// import DialogueBox from "./DialogueBox";
export default function Form() {
  const [openTicket, setOpenTicket] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [check, setCheck] = useState(false);
  const [inputs, setInputs] = useState({ name: "", phn: "", email: "" });
  const inputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClose = () => {
    setOpenTicket(false);
    setInputs({ name: "", phn: "", email: "" });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    if (inputs.name === "" || inputs.phn === "" || !check) {
      setOpen1(true);
      return;
    }
    try {
      const saveData = await fetch(
        "https://sheet.best/api/sheets/1459d58d-3e43-4c44-acff-e15ae3173f18",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      console.log(saveData);
      if (saveData.status === 200) {
        // open ticket
        setOpenTicket(true);
        return;
      }
      throw saveData.status;
    } catch (error) {
      // console.log(error);
      window.alert(`Opps ${error}!  We cann't Send Your Data.`);
      return;
    }
  };
  const handleCheck = () => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Stack alignItems={"center"} sx={{ marginBottom: "10px" }}>
      {/* Form */}
      <Card sx={{ maxWidth: "700px", boxShadow: "0px 0px 4px gray" }}>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={1.5}
          justifyContent={"center"}
          sx={{
            fontSize: "38px",
            textAlign: "center",
            fontWeight: "900",
            margin: "4px 10px 2px 10px",
          }}
        >
          <RainbowText>FREE</RainbowText>
          <Box>Invitation</Box>
        </Stack>
        <CardContent>
          <form>
            <Grid
              container
              rowSpacing={3}
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  sx={{ width: { xs: "15em", sm: "30em" } }}
                  label="Name"
                  placeholder="Enter Your Name"
                  variant="outlined"
                  onChange={inputChange}
                  value={inputs.name}
                />
                <Snackbar
                  open={open1}
                  autoHideDuration={4000}
                  onClose={() => setOpen1(false)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                  <Alert
                    severity="warning"
                    variant="filled"
                    onClose={() => setOpen1(false)}
                  >
                    Fill the form properly
                  </Alert>
                </Snackbar>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="phn"
                  required
                  sx={{ width: { xs: "15em", sm: "30em" } }}
                  type="number"
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  variant="outlined"
                  onChange={inputChange}
                  value={inputs.phn}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  sx={{ width: { xs: "15em", sm: "30em" } }}
                  type="email"
                  label="Email"
                  placeholder="Enter E-mail id"
                  variant="outlined"
                  onChange={inputChange}
                  value={inputs.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Checkbox checked={check} onChange={handleCheck} />
                <span>
                  <span style={{ marginRight: "5px" }}>I accept the</span>
                  <Link href="https://www.termsandconditionsgenerator.com/live.php?token=xzLZgErNMGSZicUFYlvoLyzYkDKyZ6ez" underline="always">
                    terms and conditions
                  </Link>
                </span>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ width: "10em" }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    size="small"
                    onClick={handleClick}
                    disabled={inputs.name === "" || inputs.phn === "" || !check}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={toggleModal}
                  >
                    Share
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <span id="offers"></span>

      {/* Ticket */}
      <Dialog open={openTicket}>
        <DialogTitle sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button color="error" variant="contained" onClick={handleClose}>
            <Close />
          </Button>
        </DialogTitle>
        <DialogContent>
          <Ticket name={inputs.name} />
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              width: "350px",
              margin: "auto",
              marginBottom: "5px",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Please take a screenshot of this ticket.
          </Box>
        </DialogActions>
      </Dialog>
      <ShareWindow showModal={showModal} toggleModal={toggleModal} />
    </Stack>
  );
}
