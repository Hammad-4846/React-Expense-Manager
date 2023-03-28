import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginUsers, setLoginUsers] = useState(
    JSON.parse(localStorage.getItem("react-expense-user")) || []
  );
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const handleSubmitLogin = () => {
    const loginDetail = {
      email,
      password: pass,
    };

    if (!loginUsers.length) {
      loginDetail.owner = true;
    } else {
      setUsers(JSON.parse(localStorage.getItem("react-expense-user")));
      users.forEach((item) => {
        if (!(item.email.localeCompare(email))) {
          if (item.owner) {
            loginDetail.owner = true;
          }
        }
      });
    }
    const newUsers = [...loginUsers, loginDetail];
    setLoginUsers(newUsers);
    localStorage.setItem("react-expense-user", JSON.stringify(newUsers));
    navigate("/dashboard", { state: { email, owner: loginDetail.owner } });
  };

  return (
    <div className="Login">
      <div className="Login__Card">
        <h2>Login</h2>
        <article className="input__field">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
          />
          <button onClick={handleSubmitLogin}>Login</button>
        </article>
      </div>
    </div>
  );
}

export default Login;
