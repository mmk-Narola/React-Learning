import { useState } from "react";
import { Heading } from "./HeadingChildren";
import { MainHeading } from "./MainHeading";

const AdvanceProps = () => {
  const [fetch, setFetch] = useState(false);

  let status = "loading";
  if (fetch === false) {
    status = "loading";
  } else if (fetch === true) {
    status = "success";
  } else {
    status = "error";
  }

  return (
    <>
      {" "}
      <h2>This is Advance Props Type</h2>
      <button onClick={() => setFetch(!fetch)}>Fetch Data</button>
      {/* <Status status={status} /> */}
      <Status status={"success"} />
      <br />
      <h2>This is Children Props Type</h2>
      <Heading>Childern Heading Text</Heading>
      <br />
      <h2>This is Main Heading Children Props Type</h2>
      <MainHeading>
        <Heading>Main Heading Children props Text</Heading>
      </MainHeading>
    </>
  );
};

export default AdvanceProps;

type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading.......";
  } else if (props.status === "success") {
    message = "Data Fetched successfully.......";
  } else if (props.status === "error") {
    message = "Error Fetching Data";
  }

  return (
    <>
      <h2>Status : {message}</h2>
    </>
  );
};
