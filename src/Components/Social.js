import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Stack } from "@mui/material";
export default function Social() {
  const handle = (link) => {
    window.open(`${link}`, "_blank");
  };
  return (
    <Stack
      justifyContent="center"
      direction="row"
      spacing={2}
      sx={{ marginTop: "2em", marginBottom: "2em" }}
    >
      <Facebook
        onClick={() =>
          handle("https://www.facebook.com/pridewalksiliguri?mibextid=ZbWKwL")
        }
        fontSize="large"
      />
      <Instagram
        onClick={() =>
          handle(
            "https://instagram.com/siliguri.pride.walk?igshid=Yzg5MTU1MDY="
          )
        }
        fontSize="large"
      />
      <Twitter fontSize="large" />
    </Stack>
  );
}
