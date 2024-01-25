import ResoucesForm from "@/components/ResourceForm";
import axios from "axios";




const ResourceCreate = () => {

   const  createResouce=formData=> {
     axios
       .post("/api/resources", {
         ...formData,
       })
       .then((req) => alert(req.data))
       .catch((err) => alert(err?.response?.data));
       
   }
  return (
    <div>
      <ResoucesForm submitForm={createResouce}/>
    </div>
  );
};

export default ResourceCreate;
