import axios from "axios";
import Link from "next/link";
import Layout from "@/components/Layout";
import ResouceHightLight from "@/components/ResouceHightLight";

const resourceById = ({ resources }) => {
  const activeSource = () => {
    axios
      .patch("/api/resources", {
        ...resources[0],
        status: "active",
      })
      .then(() => location.reload())
      .catch(() => alert("cannot active the resource"));
  };

  return (
    <Layout>
      <ResouceHightLight resources={resources}>
        <p>Time to finish:{resources[0].timeToFinish} min</p>
        {resources[0].status !== "complete" ? (
          <div>
            <Link
              href={`/resources/${resources[0].id}/edit`}
              className="button is-warning">
              Update
            </Link>
            <button onClick={activeSource} className="button is-success ml-2">
              Active
            </button>
          </div>
        ) : (
          ""
        )}
      </ResouceHightLight>
    </Layout>
  );
};

export async function getStaticPaths() {
  const resData = await fetch(process.env.URL_API + "/resource");
  const data = await resData.json();
  const paths = data.map((resouce) => {
    return {
      params: { id: resouce.id },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const resData = await fetch(`${process.env.URL_API}/resource/${params.id}`);
  const data = await resData.json();

  return {
    props: {
      resources: [data],
    },
    revalidate: 2,
  };
}

// export async function getServerSideProps({ params }) {
// //   const resData = await fetch(`http://localhost:3001/api/resource/${params.id}`);
// //   const data = await resData.json();
// //   console.log(data);
// //   return {
// //     props: {
// //       resources: [data],
// //     },
// //   };
// }

export default resourceById;
