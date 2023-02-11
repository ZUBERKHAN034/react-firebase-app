import { useEffect, useState } from "react";
import { auth } from "../firebase";

export default function Form() {
  //states
  const [credentials, setCredentials] = useState({
    password: "",
    email: "",
  });
  const [user, setUser] = useState(null);
  const [isLoginForm, setIsLoginForm] = useState(true);

  //useEffect
  useEffect(() => {
    const clearUser = auth.onAuthStateChanged((usr) => setUser(usr));
    return () => clearUser();
  }, []);

  //methods
  const register = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    //firebase.auth.register
    await auth.createUserWithEmailAndPassword(email, password);
  };

  const handleCredentials = (e) => {
    const { name, value } = e.target;
    const newCredentials = { ...credentials, [name]: value };
    setCredentials(newCredentials);
  };

  const login = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    await auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => await auth.signOut();

  //component
  return (
    <div className="container">
      {user ? (
        <div>
          <h1>Hello {user.email}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setIsLoginForm(!isLoginForm)}
          >
            {isLoginForm ? "Go to Register" : "Back to Login"}
          </button>
          <p>Click above button to switch form!</p>
          <form onSubmit={isLoginForm ? login : register}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleCredentials}
              required="required"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleCredentials}
              required="required"
            />
            <button type="submit">{isLoginForm ? "Login" : "Register"}</button>
          </form>
        </div>
      )}
    </div>
  );
}
