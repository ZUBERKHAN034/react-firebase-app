import { useState } from "react";
import { getUUID } from "../lib/appfunction";
import { database } from "../lib/firebase";

export default function Crud() {
  //states
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
  });

  const [select, setSelect] = useState({
    create: true,
    read: false,
    update: false,
    delete: false,
  });

  const [isUser, setIsUser] = useState(false);

  //methods
  const handleUser = (e) => {
    const { name, value } = e.target;
    const newUser = { ...user, [name]: value };
    setUser(newUser);
  };

  const createUser = async (e) => {
    e.preventDefault();

    // TODO: handle user creation without uuid generation
    // await database.users.add(user);

    // user creation with uuid generation
    const uuid = getUUID();
    user.id = uuid;
    await database.users.doc(uuid).set(user);
    console.log("user created successfully");
  };

  const getUser = async (e) => {
    e.preventDefault();

    // TODO: get all users
    // const usrs = await database.users.get();
    // usrs.forEach(usr => console.log(usr.data()));

    // get single user from firestore by uuid
    const responce = await database.users.doc(user.id).get();
    const usr = responce.data();
    if (usr !== undefined) {
      setUser(usr);
      setIsUser(true);
      console.log("user getted successfully", usr);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    await database.users
      .doc(user.id)
      .update({ name: user.name, age: user.age });
    console.log("user updated successfully");
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    await database.users.doc(user.id).delete();
    console.log("user deleted successfully");
  };

  return (
    <div className="container">
      <button
        className="select-button"
        onClick={() => {
          setSelect({
            create: true,
            read: false,
            update: false,
            delete: false,
          });
          setUser({
            id: "",
            name: "",
            age: "",
          });
          setIsUser(false);
        }}
      >
        create
      </button>
      <button
        className="select-button"
        onClick={() => {
          setSelect({
            create: false,
            read: true,
            update: false,
            delete: false,
          });
          setUser({
            id: "",
            name: "",
            age: "",
          });
        }}
      >
        read
      </button>
      <button
        className="select-button"
        onClick={() => {
          setSelect({
            create: false,
            read: false,
            update: true,
            delete: false,
          });
          setUser({
            id: "",
            name: "",
            age: "",
          });
          setIsUser(false);
        }}
      >
        update
      </button>
      <button
        className="select-button"
        onClick={() => {
          setSelect({
            create: false,
            read: false,
            update: false,
            delete: true,
          });
          setUser({
            id: "",
            name: "",
            age: "",
          });
          setIsUser(false);
        }}
      >
        delete
      </button>
      <div>
        {select.create && (
          <form onSubmit={createUser}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleUser}
              required="required"
            />
            <input
              type="number"
              name="age"
              min="0"
              placeholder="Age"
              value={user.age}
              onChange={handleUser}
              required="required"
            />
            <button type="submit">Create User</button>
          </form>
        )}
      </div>
      <div>
        <div>
          {isUser && (
            <h1>
              Hello {user.name}, your Age is {user.age}.
            </h1>
          )}
        </div>
        {select.read && (
          <form onSubmit={getUser}>
            <input
              type="text"
              name="id"
              placeholder="Id"
              value={user.id}
              onChange={handleUser}
              required="required"
            />
            <button type="submit">Get User</button>
          </form>
        )}
      </div>
      <div>
        {select.update && (
          <form onSubmit={updateUser}>
            <input
              type="text"
              name="id"
              placeholder="Id"
              value={user.id}
              onChange={handleUser}
              required="required"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleUser}
              required="required"
            />
            <input
              type="number"
              name="age"
              min="0"
              placeholder="Age"
              value={user.age}
              onChange={handleUser}
              required="required"
            />
            <button type="submit">Update User</button>
          </form>
        )}
      </div>
      <div>
        {" "}
        {select.delete && (
          <form onSubmit={deleteUser}>
            <input
              type="text"
              name="id"
              placeholder="Id"
              value={user.id}
              onChange={handleUser}
              required="required"
            />
            <button type="submit">Delete User</button>
          </form>
        )}
      </div>
    </div>
  );
}
