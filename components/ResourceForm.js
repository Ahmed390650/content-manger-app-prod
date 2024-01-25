import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

const defaultValue = {
  title: "",
  link: "",
  description: "",
  timeToFinish: 60,
  priority: "2",
};
const ResoucesForm = ({ submitForm, initalData }) => {
  const [form, setForm] = useState(initalData || defaultValue);

  function handleInputs(e) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }
  function handleRest() {
    setForm(defaultValue);
  }

  const handleSubmit = () => {
    submitForm(form);
  };
  const objInputs = [];
  const labels = ["Title", "link", "Description", "Time to finish", "Priority"];

  const inputs = [
    <input
      key={0}
      onChange={handleInputs}
      type="text"
      name="title"
      className="input"
      placeholder="Learn Next JS and Sanity IO"
      value={form.title}
    />,
    <textarea
      key={1}
      value={form.link}
      onChange={handleInputs}
      name="link"
      className="textarea"
      placeholder="Learn these technologies because they are very popular and enable better SEO"></textarea>,
    <input
      key={2}
      className="input"
      type="text"
      onChange={handleInputs}
      value={form.description}
      name="description"
      placeholder="https://academy.eincode.com"
    />,
    <input
      key={3}
      className="input"
      type="number"
      onChange={handleInputs}
      value={form.timeToFinish}
      name="timeToFinish"
      placeholder="60 (time is in minutes)"
    />,
    <div key={4} className="select">
      <select value={form.priority} name="priority" onChange={handleInputs}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>,
  ];

  inputs.map((inp) => {
    objInputs.push({ type: inp });
  });
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <form>
              <h1 className="title">Add New Resource</h1>
              {inputs.map((input, index) => {
                return (
                  <div className="field" key={index}>
                    <label className="label">{labels[index]}</label>
                    <div className="control">{objInputs[index].type}</div>
                  </div>
                );
              })}
              <div className="field is-grouped">
                <div className="control">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="button is-link">
                    Submit
                  </button>
                </div>
                <div className="control">
                  <button
                    onClick={handleRest}
                    type="button"
                    className="button is-link is-light">
                    Rest
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResoucesForm;
