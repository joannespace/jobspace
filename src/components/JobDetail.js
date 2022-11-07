import { Dialog, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { companies, jobs } from "../db";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function JobDetail() {
  const params = useParams();
  const jobId = params.jobId;
  const job = jobs.find((job) => job.id == jobId);

  const companyName = companies.find(
    (company) => company.id === job.companyId
  ).name;

  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location from JobDetail", location);

  function onDismiss() {
    navigate(-1);
  }

  if (jobId == job.id) {
    return (
      <Dialog open={true} onClose={onDismiss}>
        <Stack>
          <Typography>{job.title}</Typography>

          <Typography>
            <LocationOnIcon /> {job.city}
          </Typography>

          <Typography>
            <BusinessIcon /> {companyName}
          </Typography>

          <Typography>
            Salary: {job.salaryLow} - {job.salaryHigh}
          </Typography>

          <Typography>Job description: {job.description}</Typography>

          <Typography>Skills required: {job.skills.join(", ")}</Typography>

          <Typography>
            Years of experience: {job.yrsXPExpected}{" "}
            {job.yrsXPExpected > 1 ? "years" : "year"}
          </Typography>
        </Stack>
      </Dialog>
    );
  } else {
    return (
      <Dialog open="true">
        <Typography>No job information found</Typography>
      </Dialog>
    );
  }
}

export default JobDetail;
