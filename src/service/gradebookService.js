import { API } from "../shared/api";

export const getGradebooks = () => {
  return API.get(`/gradebooks`);
};
export const postGradebook = (name, professor_id) => {
  return API.post("/gradebooks", {
    name,
    professor_id,
  });
};
