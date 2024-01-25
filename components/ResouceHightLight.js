import moment from "moment";
import Link from "next/link";

const ResouceHightLight = ({ resources ,children }) => {
  if (!resources) {
    return;
  }
  const resoucrsApi = () => {
    return resources.map((resource) => {
      return (
        <section key={resource.id} className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="content is-medium">
                <h2 className="subtitle is-4">
                  {moment(resource.createdAt).format('LLLL')}
                  <span className={`button  ml-4 resource-${resource.status}`}>
                    {resource.status}
                  </span>
                </h2>
                <h1 className="title ">{resource.title}</h1>
                <p className="mb-1">{resource.description}</p>
                {resources.length != 1 && (
                  <Link
                    href={`/resources/${resource.id}`}
                    className="button is-light">
                    Details
                  </Link>
                )}
                {children}
              </div>
            </div>
          </div>
          <div className="is-divider"></div>
        </section>
      );
    });
  };
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resoucrsApi()}
        </div>
      </div>
    </section>
  );
};

export default ResouceHightLight;
