import { Card, CardContent, CardMedia, Box, Stack } from "@mui/material";
import { Discount } from "@mui/icons-material";
function RCard(props) {
  const handleClick = (link) => {
    window.open(`${link}`, "_blank");
  };
  return (
    <Card
      width="70"
      sx={{ borderRadius: "15px" }}
      onClick={() => {
        handleClick(props.link);
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height={{ xs: "80", sm: "80" }}
          width="60"
          image={props.image}
          alt="green iguana"
          sx={{ borderRadius: "10px", marginBottom: "10px"}}
          loading="lazy"
        />
        <Stack direction="column" justifyContent="space-between" spacing={1.5}>
          <Box sx={{ fontWeight: "700", fontSize: "20px", cursor: "pointer" }}>
            {props.name}
          </Box>
          <Stack direction="row" alignItems="center" spacing={1}>
            <span>{props.discount} discount</span>
            <Discount size="small" sx={{ color: "#c52d2d" }} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default RCard;
