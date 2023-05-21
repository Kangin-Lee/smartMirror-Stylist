import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fade, Rotate, Bounce, Zoom, Flip } from "react-reveal";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Stylist
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = ({ setAuthenticate }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(/images/login-1.png)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "600px",
              backgroundPosition: "center",
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Fade>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h1
                    style={{
                      fontFamily: "Caveat, cursive",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    Stylist
                  </h1>
                </Link>
              </Fade>
              <Typography component="h1" variant="h5">
                로그인
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="아이디"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="로그인 상태 유지"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  로그인
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/findinfo" variant="body2">
                      <div>아이디/비밀번호 찾기</div>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" variant="body2">
                      <div>{"회원가입"}</div>
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />{" "}
                <div className="login-page-text">
                  <Zoom top delay={700}>
                    <p>"Smart Mirror"</p>
                  </Zoom>
                  <Bounce right delay={1400}>
                    <p>"Color Match"</p>
                  </Bounce>
                  <Flip left delay={2100}>
                    <p>"My Closet"</p>
                  </Flip>
                  <Rotate bottom left delay={2800}>
                    <p>"Today's Outfit"</p>
                  </Rotate>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Login;
