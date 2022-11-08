import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <Grid container flexDirection="column" minHeight="100vh" spacing={2}>
      <Grid item xs={12}>
        <MainHeader />
      </Grid>

      <Grid item xs={12} md={12}>
        <Container>
          <Outlet />
        </Container>
      </Grid>

      <Grid item xs={12}>
        <MainFooter />
      </Grid>
    </Grid>
  );
}

export default MainLayout;
