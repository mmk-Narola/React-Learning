import { useState, useEffect } from "react";

const CrudLocalstorage = () => {
  const [userDetails, setDetails] = useState({
    name: "",
    email: "",
  });
  const [listUser, setListUser] = useState([]);
  const [editId, setEditId] = useState("");
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const date = new Date();
    const uId = date.getTime() + Math.floor(Math.random() * 10) + 1;
    let objData = {
      id: uId,
      [name]: value,
    };
    setDetails({
      ...userDetails,
      ...objData,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage set and GetItem and Add List
    const getTodo = JSON.parse(localStorage.getItem("userList"));
    const list = getTodo !== null ? getTodo : [];
    list.push(userDetails);
    localStorage.setItem("userList", JSON.stringify(list));
    setListUser(list);
    setDetails({
      name: "",
      email: "",
    });
    setFlag(false);
  };

  const handleDelete = (id) => {
    console.log(id);
    const filterList = listUser.filter((list) => list.id !== id);
    console.log(filterList);
    localStorage.setItem("userList", JSON.stringify(filterList));
    setListUser(filterList);
  };

  const handleEdit = (id) => {
    console.log(id);
    const findUser = listUser.find((item) => item.id === id) || null;
    console.log(findUser);
    if (findUser) {
      setDetails((prev) => ({
        ...prev,
        ...findUser,
      }));
    }
    setEditId(id);
    setFlag(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log(editId);
    setListUser(
      listUser.map((editList) => {
        return editList.id === editId
          ? { ...editList, ...userDetails }
          : editList;
      })
    );

    // listUser.map((editList) => {
    //   return editList.id === editId ? userDetails : editList;
    // });
    // listUser.map((editList) => {
    //   if (editList.id === editId) {
    //     setListUser([...userDetails]);
    //   }
    // });

    setDetails({
      name: "",
      email: "",
    });
    setFlag(false);
  };
  console.log(userDetails);
  console.log(listUser);
  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("userList"));
    console.log(getTodo);
    setListUser(getTodo || []);
  }, []);

  return (
    <>
      <div className="profile">
        <h2>CRUD with LocalStorage</h2>
        <form onSubmit={handleSubmit}>
          {/* Add Operation */}
          <input
            type="text"
            value={userDetails.name}
            onChange={(e) => handleChange(e)}
            name="name"
            placeholder="Name..."
          />{" "}
          <input
            type="email"
            value={userDetails.email}
            onChange={(e) => handleChange(e)}
            name="email"
            placeholder="Email..."
          />
          {"  "}
          <button
            disabled={!userDetails.name || !userDetails.email}
            onClick={flag ? handleUpdate : handleSubmit}
          >
            {flag ? "Update" : "Add"}
          </button>
        </form>
        <hr />
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listUser.length > 0 ? (
                listUser.map((list) => {
                  return (
                    <tr key={list.id}>
                      <td>{list.name}</td>
                      <td>{list.email}</td>
                      <td>
                        <button onClick={() => handleEdit(list.id)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(list.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={3}>User List Not Available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CrudLocalstorage;
