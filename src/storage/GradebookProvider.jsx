import { useEffect, useState } from "react";
import { getGradebooks, postGradebook } from "../service/gradebookService";
import GradebooksContext from "./GradebooksContext";

const GradebookProvider = ({ children }) => {
  const [gradebookState, setGradebookState] = useState([]);

  useEffect(() => {
    getGradebooks().then(({ data }) => setGradebookState(data));
  }, []);

  const postNewGradebook = (name, professor_id) => {
    const existingGradebook = gradebookState.find((c) => c.name === name);
    if (existingGradebook) {
      alert("Gradebook with the same name already exists.");
      return;
    }
    postGradebook(name, professor_id)
      .then(({ data }) => {
        setGradebookState((prevState) => [...prevState, data]);
      })
      .catch((error) => {
        console.error("Error occurred while adding gradebook:", error);
      });
  };

  const GradebookContext = {
    gradebooks: gradebookState,
    updateGradebook: setGradebookState,
    addGradebook: postNewGradebook,
  };

  return (
    <GradebooksContext.Provider value={GradebookContext}>
      {children}
    </GradebooksContext.Provider>
  );
};

export default GradebookProvider;
