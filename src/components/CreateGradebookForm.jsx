import { useContext, useEffect, useState } from "react";
import { getUsers } from "../service/usersService";
import GradebooksContext from "../storage/GradebooksContext";

const CreateGradebookForm = () => {
  const { addGradebook, gradebooks } = useContext(GradebooksContext);

  const [gradebook, setGradebook] = useState({
    name: "",
    professor_id: "",
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        const userList = response.data.users;

        const professorsWithoutGradebook = userList.filter((user) => {
          return !gradebooks.some(
            (gradebook) => gradebook.professor_id === user.id
          );
        });

        setUsers(professorsWithoutGradebook);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [gradebooks]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGradebook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(gradebook);
    addGradebook(gradebook.name, gradebook.professor_id);
    setGradebook({
      name: "",
      professor_id: "",
    });
  };

  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div
            className="card w-75 container"
            style={{ opacity: "90%", marginTop: "100px", padding: "20px" }}
          >
            <h5 className="text-center mb-4">Add new gradebook</h5>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Name<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter gradebook name"
                    value={gradebook.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Professor<span className="text-danger"> *</span>
                  </label>
                  <select
                    className="form-control"
                    name="professor_id"
                    onChange={handleInputChange}
                    value={gradebook.professor_id}
                    required
                  >
                    <option value="">-- Select professor --</option>
                    {users.map((user, index) => (
                      <option key={index} value={user.id}>
                        {user.first_name} {user.last_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row justify-content-end mt-3">
                <div className="form-group col-sm-6">
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={!gradebook.name || !gradebook.professor_id}
                  >
                    Add Gradebook
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateGradebookForm;
