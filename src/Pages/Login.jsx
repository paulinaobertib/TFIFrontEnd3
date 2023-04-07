import { AuthContext } from '../Components/utils/AuthContext';
import { Box, Button, TextField } from '@mui/material';
import PasswordInput from "../Components/utils/PasswordInput";
import { Link, useNavigate } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'
import { waait } from '../Components/utils/helper';

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { handleLogin, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (values.email && values.password) {
      try {
        const { user, token } = handleLogin();
        console.log("Llega hasta aquí")
        if (user === values.email) {
          await waait();
          sessionStorage.setItem("token", JSON.stringify(token));
          setIsLogged(true);
          setLoading(false);
          navigate("/home");
        }
      } catch (error) {
        console.error("error", error);
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
          type="text"
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
              ) : "Submit"
            }
          </Button>
        </Box>
      </Box>
      <Link to="/auth/register">¿No tienes cuenta aún?</Link>
    </Fragment>
  )
}

export default Login