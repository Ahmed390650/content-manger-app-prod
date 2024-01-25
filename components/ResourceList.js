import moment from "moment";
import Link from "next/link";

const ResouceList = ({ resources }) => {
  const renderResources = () =>
    resources.map((resource) => (
      <div key={resource.id} className="column is-5 is-offset-1 ">
        <div className="content is-medium">
          <h2 className="subtitle is-5 has-text-grey">
                  {moment(resource.createdAt).format('LLLL')}
              <span className={`button ml-4 resource-${resource.status}`}>{resource.status}</span>
          </h2>
          <h1 className="title has-text-black is-3">{resource.title}</h1>
          <p className="has-text-dark mb-2">{resource.description}</p>
          <Link href={`/resources/${resource.id}`} className="button is-light">
            Details
          </Link>
        </div>
      </div>
    ));

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline is-variable is-8">
            {renderResources()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResouceList;
