import React, { useState, Fragment, useContext } from 'react'
import { AuthContext } from '../../Components/utils/AuthContext/AuthContext';
import { Box, Button, TextField } from '@mui/material';
import PasswordInput from "../../Components/utils/Inputs/PasswordInput";
import { Link, useNavigate } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'
import { waait } from '../../Components/utils/helper';

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (values.email && values.password) {
        const { user, password, token } = handleLogin();
        if (user === values.email && password === values.password) {
          console.log("hola")
          await waait();
          setLoading(false);
          navigate("/home");
          sessionStorage.setItem("toke", JSON.stringify(token));
        } else {
        <Alert variant="filled" severity="error">
          No estas registrado
        </Alert>
        navigate("/auth/register");
        }
    } else {
      alert("Te faltan los valores");
      setLoading(false);
    }

  };

  return (
    <Fragment>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          name="email"
          size="small"
          type="email"
          label="Email *"
          placeholder="Ingrese su correo"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <PasswordInput values={values} setValues={setValues} />
        <Box sx={{ textAlign: "right" }}>
          <Button disabled={loading} type="submit" size="small" variant="contained">
            {
              loading ? (
                <Orbit
                  size={25}
                  speed={1.5}
                  color="white"
                />
              ) : "🦷"
            }
          </Button>
        </Box>
      </Box>
      <Link to="/auth/register">¿No tienes cuenta aún?</Link>
    </Fragment>
  )
}

export default Login