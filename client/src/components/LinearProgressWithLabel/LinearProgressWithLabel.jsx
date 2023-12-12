import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { linearProgressClasses } from "@mui/material/LinearProgress";
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <p className="TradeGodthicCn tracking-wider text-lg">{`${Math.round(
          props.value
        )}%`}</p>
        {/* <Typography variant="body2" color="text.secondary"></Typography> */}
      </Box>
    </Box>
  );
}
export default LinearProgressWithLabel;
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      //
      "#ffddc3",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "var(--primaryColor)",
  },
}));
