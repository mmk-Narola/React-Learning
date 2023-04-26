import axios from "axios";
import { useState, useEffect, useRef } from "react";

const AxiosCrud = () => {
  const [userDetails, setDetails] = useState({
    name: "",
    email: "",
  });
  const [listUser, setListUser] = useState([]);
  const [editId, setEditId] = useState("");
  const [flag, setFlag] = useState(false);
  //   const [call, setCall] = useState(true);
  const call = useRef(true);

  const retriveDetails = async () => {
    const response = await axios.get("http://localhost:3000/CRUD");
    return response.data;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let objData = {
      [name]: value,
    };
    setDetails({
      ...userDetails,
      ...objData,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // localStorage set and GetItem and Add List
    // const getTodo = JSON.parse(localStorage.getItem("userList"));
    // const list = getTodo !== null ? getTodo : [];
    // list.push(userDetails);
    // localStorage.setItem("userList", JSON.stringify(list));

    const request = {
      ...userDetails,
    };
    const response = await axios.post("http://localhost:3000/CRUD", request);

    setListUser([...listUser, response.data]);
    setDetails({
      name: "",
      email: "",
    });
    setFlag(false);
    // setCall(false);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/CRUD/${id}`);
    const filterList = listUser.filter((list) => list.id !== id);
    setListUser(filterList);
  };

  const handleEdit = (id) => {
    const findUser = listUser.find((item) => item.id === id) || null;
    if (findUser) {
      setDetails((prev) => ({
        ...prev,
        ...findUser,
      }));
    }
    setEditId(id);
    setFlag(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("userList"));
    setListUser(
      listUser.map((editList) => {
        return editList.id === editId
          ? { ...editList, ...userDetails }
          : editList;
      })
    );

    const updateValue = listUser.map((newValue) => {
      if (newValue.id === editId) {
        return {
          ...newValue,
          name: userDetails.name,
          email: userDetails.email,
        };
      }
      return newValue;
    });
    const updateList = await axios.put(
      `http://localhost:3000/CRUD/${editId}`,
      updateValue
    );

    // localStorage.setItem("userList", JSON.stringify(updateValue));
    // console.log(userDetails);

    // localStorage.setItem("userList", JSON.stringify(filterList));

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

  useEffect(() => {
    const getContact = async () => {
      const allContact = await retriveDetails();
      if (allContact) {
        setListUser(allContact);
      }
    };
    if (call.current) {
      getContact();
      call.current = false;
    }
    return () => {};
  }, []);
  console.log(call.current);
  return (
    <>
      <div className="profile">
        <h2>CRUD with Axios Api</h2>
        <form>
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
        </form>{" "}
        <hr />
        <div>
          <table>
            <thead>
              <tr>
                <th>Sr No</th>
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
                      <td>{list.id}</td>
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
                  <td colSpan={3}>Data Not available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AxiosCrud;
