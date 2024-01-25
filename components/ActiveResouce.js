import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActiveResource = () => {
  const [resouce, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchResource() {
      const axiosRes = await axios.get("/api/activeresource");
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        "seconds"
      );
      const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resource);
    }

    fetchResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const completeResource = () => {
    axios
      .patch("/api/resources", { ...resouce, status: "complete" })
      .then(() => location.reload())
      .catch(() => alert("Cannot complete the resource!"));
  };

  const hasResource = resouce && resouce.id;

  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resouce.title : "No Resource Active"}
      </h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">
          {hasResource &&
            (seconds > 0 ? (
              <h2 className="elapsed-time">{seconds}</h2>
            ) : (
              <h2 className="elapsed-time">
                <button
                  onClick={completeResource}
                  className="button is-success">
                  Click and Done!
                </button>
              </h2>
            ))}
        </h2>
      </div>
      {hasResource ? (
        <Link href={`/resources/${resouce.id}`} className="button">
          Go to resource
        </Link>
      ) : (
        <Link href="/" className="button">
          Go to resources
        </Link>
      )}
    </div>
  );
};

export default ActiveResource;
