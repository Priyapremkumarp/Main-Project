import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);

      // Store user information in local storage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to the user's profile after successful login
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const styles = {
    loginContainer: {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginFormContainer: {
      width: '900px',
      height: '500px',
      display: 'flex',
      borderRadius: '10px',
      boxShadow:
        '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
    },
    left: {
      flex: '2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#330438',
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    greenBtnHover: {
      backgroundColor: '#8c2b08',
      border: '2px solid #000',
      boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)',
      color: 'white',
    },
    right: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      outline: 'none',
      border: 'none',
      width: '370px',
      padding: '15px',
      borderRadius: '10px',
      backgroundColor: '#edf5f3',
      margin: '5px 0',
      fontSize: '14px',
      boxShadow: '0px 0px 0px 2px transparent',
    },
    error: {
      width: '370px',
      padding: '15px',
      margin: '5px 0',
      fontSize: '14px',
      backgroundColor: '#f34646',
      color: 'white',
      borderRadius: '5px',
      textAlign: 'center',
    },
    greenBtn: {
      border: 'none',
      outline: 'none',
      padding: '12px 0',
      backgroundColor: 'white',
      borderRadius: '20px',
      width: '180px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      backgroundColor: '#340234',
      color: 'white',
      margin: '10px',
    },
    whiteBtn: {
      border: 'none',
      outline: 'none',
      padding: '12px 0',
      backgroundColor: 'white',
      borderRadius: '20px',
      width: '180px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginFormContainer}>
        <div style={styles.left}>
          <form style={styles.formContainer} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              style={styles.input}
            />
            {error && <div style={styles.error}>{error}</div>}
            <button type="submit" style={styles.greenBtn} className={styles.greenBtnHover}>
              Sign In
            </button>
          </form>
        </div>
        <div style={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" style={styles.whiteBtn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
