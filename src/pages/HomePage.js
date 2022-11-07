import { Grid, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import JobCard from "../components/JobCard";
import { jobs } from "../db";

function HomePage() {
  const [currentPage, setCurrentPage] = useState({
    from: 0,
    to: 5,
  });

  const { from, to } = currentPage;

  const handleChangePage = (e, page) => {
    setCurrentPage({ from: page * 5 - 5, to: page * 5 });
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {jobs.slice(from, to).map((job) => (
          <Grid item key={job.id} xs={12} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(jobs.length / 5)}
        defaultPage={1}
        sx={{ display: "flex", justifyContent: "center", mt: 4 }}
        onChange={handleChangePage}
      />
    </Container>
  );
}

export default HomePage;
