import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider, Stack } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const location = useLocation();
  let state = location.state;

  const handleClick = () => {
    state = { backgroundLocation: location };
    navigate(`/${job.id}`, state);
    // location.state: { backgroundLocation: location } }

    console.log("State from JobCard", state);
  };

  console.log("Location from JobCard", location);

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
          boxShadow: "0 1px 1px 0px #03a9f4",
        },
      }}
      style={{ border: "1px solid lightgrey" }}
      onClick={handleClick}
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

        <Typography fontSize="12px" sx={{ maxHeight: "4rem", mt: 0.5 }}>
          {job.description.split(" ").slice(0, 10).join(" ")}...
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" size="small" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
