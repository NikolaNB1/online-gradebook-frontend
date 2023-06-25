import { createContext } from "react";

const GradebooksContext = createContext({
  gradebooks: [],
  updateGradebook: () => {},
  addGradebook: () => {},
});

export default GradebooksContext;
