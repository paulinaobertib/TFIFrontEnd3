import React, { useState, Fragment } from 'react'
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({ name:"" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.name) {
            alert(`Gracias por ingresar ${values.name}! El usuario asignado es marianapaulina@dh.com y la contraseña es holamundo`)
            navigate(-1)
        } else {
            alert("Te faltan los valores");
        }
    }

    return (
        <Fragment>
        <Box
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
            component="form"
            onSubmit={handleSubmit}
        >
            <TextField
            fullWidth
            name="name"
            size="small"
            type="text"
            label="Nombre"
            placeholder="Ingrese su nombre"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <Box sx={{ textAlign: "right" }}>
            <Button  type="submit" size="small" variant="contained">🦷</Button>
            </Box>
        </Box>
        </Fragment>
    )
}

export default Register