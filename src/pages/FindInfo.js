import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { Fade } from "react-reveal";

function TabPanel({ value, index, children }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const theme = createTheme();

const FindInfo = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              backgroundImage: "url(/images/login-2.png)",
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
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Fade>
                <Link href="/" style={{ textDecoration: "none" }}>
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
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="아이디 찾기" {...a11yProps(0)} />
                <Tab label="비밀번호 찾기" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="성"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="이름"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} style={{ paddingTop: "0" }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    아이디 찾기
                  </Button>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      href="/login"
                      variant="body2"
                      justifyContent="flex-end"
                    >
                      <div>로그인하러 가기</div>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="성"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="이름"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="id"
                    label="아이디"
                    name="id"
                    autoComplete="id"
                  />
                </Grid>

                <Grid item xs={12} style={{ paddingTop: "0" }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    비밀번호 찾기
                  </Button>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      href="/login"
                      variant="body2"
                      justifyContent="flex-end"
                    >
                      <div>로그인하러 가기</div>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default FindInfo;
