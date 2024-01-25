import axios from "axios";

const { default: ResoucesForm } = require("@/components/ResourceForm");

const ResouceEdit = ({ resources }) => {



  const editResouce = formData => {
    axios
    .patch("/api/resources", {
      ...formData,
    })
    .then((res) => alert("data was edit success"))
    .catch((err) =>  alert(err.response.data));
  };
  return <ResoucesForm initalData={resources} submitForm={editResouce} />;
};

export async function getServerSideProps({ params }) {
  const resData = await fetch(
    `http://localhost:3001/api/resource/${params.id}`
  );
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}
export default ResouceEdit;
