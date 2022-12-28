import {
  Box,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import { AppBar } from "@mui/material";
// import { useState } from 'react';
import { Link } from "react-scroll";
import DrawerComp from "./DrawerComp";
import Plogo from "./ImageContain/PLogo.png";
function Heading() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#063970" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "70px", paddingLeft: "20px", paddingRight: "20px" }}
        >
          {match ? (
            <>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar src={Plogo} />
                <Typography sx={{ fontWeight: "900" }}>
                  Siliguri Pride Walk
                </Typography>
              </Stack>
              <DrawerComp />
            </>
          ) : (
            <>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar src={Plogo} />
                <Typography sx={{ fontWeight: "900" }}>
                  Siliguri Pride Walk
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Button sx={{ color: "white" }}>
                  <Link
                    to="head"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Home
                  </Link>
                </Button>
                <Button sx={{ color: "white" }}>
                  <Link
                    to="offers"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Offers
                  </Link>
                </Button>
                <Button sx={{ color: "white" }}>
                  <Link
                    to="members"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Teams
                  </Link>
                </Button>
                <Button sx={{ color: "white" }}>
                  <Link
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Gallery
                  </Link>
                </Button>
                <Button sx={{ color: "white" }}>
                  <Link
                    to="donate"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Donate
                  </Link>
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      </AppBar>

      {/* <Typography>Hello World</Typography> */}
    </Box>
  );
}
export default Heading;
