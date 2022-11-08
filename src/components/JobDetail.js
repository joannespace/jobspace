import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { companies, jobs } from "../db";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaidIcon from "@mui/icons-material/Paid";
import styled from "@emotion/styled";

const NewTypo = styled("span")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "body1",
  marginBottom: 3,
}));

function JobDetail() {
  const params = useParams();
  const jobId = params.jobId;
  const job = jobs.find((job) => job.id.toString() === jobId);

  const companyName = companies.find(
    (company) => company.id === job.companyId
  ).name;

  const navigate = useNavigate();

  function onDismiss() {
    navigate(-1);
  }

  if (jobId === job.id.toString()) {
    return (
      <Dialog open={true} onClose={onDismiss}>
        <Stack p={4}>
          <DialogTitle sx={{ m: "auto", fontWeight: "bold" }}>
            {job.title}
          </DialogTitle>

          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
            }}
          >
            <NewTypo>
              <LocationOnIcon sx={{ mr: 1 }} /> {job.city}
            </NewTypo>

            <NewTypo>
              <BusinessIcon sx={{ mr: 1 }} /> {companyName}
            </NewTypo>

            <NewTypo>
              <PaidIcon sx={{ mr: 1 }} />
              <Typography>
                {job.salaryLow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                -{" "}
                {job.salaryHigh
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                (USD/ year)
              </Typography>
            </NewTypo>

            <Typography sx={{ mt: 1, mb: 1, fontWeight: "bold" }}>
              Years of experience:
              <Typography>
                {job.yrsXPExpected} {job.yrsXPExpected > 1 ? "years" : "year"}
              </Typography>
            </Typography>

            <Typography sx={{ mt: 1, mb: 1, fontWeight: "bold" }}>
              Job description:
              <Typography>{job.description}</Typography>
            </Typography>

            <Typography sx={{ mt: 1, mb: 1, fontWeight: "bold" }}>
              Skills required:
              <ul>
                {job.skills.map((skill) => (
                  <li>
                    <Typography> {skill}</Typography>
                  </li>
                ))}
              </ul>
            </Typography>
          </DialogContent>
        </Stack>
      </Dialog>
    );
  } else {
    return (
      <Dialog open={true} onClose={onDismiss}>
        <Typography>No job information found</Typography>
      </Dialog>
    );
  }
}

export default JobDetail;
