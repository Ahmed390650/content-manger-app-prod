import NewsLetter from "@/components/NewsLetter";
import ResouceHightLight from "@/components/ResouceHightLight";
import ResouceList from "@/components/ResourceList";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";


function Home({ resources }) {
  return (
    <div>
      <Layout>
        <ResouceHightLight resources={resources.slice(0, 2)} />

        <NewsLetter />

        <ResouceList resources={resources.slice(2)} />

        <Footer />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {  
  const resData = await fetch("http://localhost:3001/api/resource");
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

export default Home;
