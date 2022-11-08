import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Divider, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function JobCard({ job }) {
  const location = useLocation();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 1,
        minHeight: "10rem",
        textAlign: "center",
        "&:hover": {
          boxShadow: "0 1px 5px 0px grey",
        },
      }}
      style={{ border: "1px solid lightgrey" }}
    >
      <CardContent sx={{ flexGrow: 1, p: 1 }}>
        <Typography
          variant="h10"
          component="div"
          fontWeight="bold"
          fontSize="13px"
          sx={{ minHeight: "2.5rem", mt: 1 }}
        >
          {job.title}
        </Typography>
        <Divider variant="middle" />

        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          flexGrow={2}
          sx={{ minHeight: "3.5rem", mt: 1 }}
          color="text.secondary"
        >
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              variant="outlined"
              label={skill}
              color="primary"
              clickable
              size="small"
              sx={{
                fontSize: "7px",
                m: 0.2,
                p: "0px",
                borderRadius: "5px",
              }}
              key={skill + job.id}
            />
          ))}
        </Stack>

        <Typography fontSize="12px" sx={{ minHeight: "3.5rem", mt: 0.5 }}>
          {job.description.split(" ").slice(0, 10).join(" ")}...
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          to={`/${job.id}`}
          state={{ backgroundLocation: location }}
          style={{
            color: "black",
            fontSize: "12px",
            border: "1px solid #0A7029",
            textDecoration: "none",
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "#FEDE00",
            boxShadow: "0 0.5px 1px 0px green",
          }}
        >
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}
