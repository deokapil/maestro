import { Send } from "@mui/icons-material";
import {
  Grid,
  Box,
  TextField,
  Typography,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRef } from "react";
import { useValue } from "../../context/ContextProvider";
import PasswordField from "./PasswordField";
import { login } from "../../actions/users";
import NoAuth from "../layouts/NoAuth";

const Login = () => {
  const { dispatch } = useValue();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return login({ email, password }, dispatch);
  };
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        backgroundImage: `linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)), url(./assets/images/rm373batch5-18.jpg)`,
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundOrigin: "padding-box",
        backgroundClip: "border-box",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        spacing={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <NoAuth>
          <Grid item xs={3} mx={2}>
            <Paper elevation={3}>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  py: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ mt: 1 }}>
                    <TextField
                      autoFocus={true}
                      margin="normal"
                      variant="filled"
                      id="email"
                      label="Email"
                      type="email"
                      fullWidth
                      inputRef={emailRef}
                      required
                    />
                    <PasswordField {...{ passwordRef }} />
                  </Box>
                  <Button
                    sx={{ my: 4 }}
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </Paper>
          </Grid>
        </NoAuth>
      </Grid>
    </Grid>
  );
};

export default Login;
