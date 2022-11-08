import { useParams } from "react-router-dom";
import JobDetail from "../components/JobDetail";

function JobDetails() {
  const params = useParams();
  console.log(params);
  return <JobDetail />;
}

export default JobDetails;
