import { Button, TextField, Typography, Grid, Switch } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import { useState } from "react";

const label = { inputProps: { "aria-label": "switches" } };
const requestOptions = {
  method: "POST"
};

const YellowSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: yellow[600],
    "&:hover": {
      backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: yellow[600],
  },
}));

export default function Profile() {
  const [green, handleGreen] = useState(false);
  const toggleGreen = () => {
    handleGreen(!green);
  };
  const [yellow, handleYellow] = useState(false);
  const toggleYellow = () => {
    handleYellow(!yellow);
  };
  const [red, handleRed] = useState(false);
  const toggleRed = () => {
    handleRed(!red);
  };
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState("")

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography paragraph>
          hey dum, i miss you a lot so i made this really lame website lol. and
          ngl i just wanted another way to be on your wall ❤️
        </Typography>
      </Grid>

      <Grid item>
        <TextField
          id="standard-basic"
          label="message"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMsg(event.target.value);
          }}
        />
        <Switch {...label} color="success" onChange={toggleGreen} />
        <YellowSwitch {...label} onChange={toggleYellow} />
        <Switch {...label} color="error" onChange={toggleRed} />
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          onClick={() => {
            fetch(`https://ritikbatra.com/api/binds?msg=${msg}`, requestOptions)
              .then(() => setDone("Woot sent!!"))
              .catch((error) => console.log(error));
          }}
        >
          send!!
        </Button>
      </Grid>
      <Grid item xs={12}>
      <Typography paragraph>
          {done}
        </Typography>
      </Grid>
    </Grid>
  );
}
