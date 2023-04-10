import React, { useState, Fragment } from 'react'
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Pinwheel } from '@uiball/loaders';
import { waait } from '../Components/utils/helper';

const Register = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ name:"" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (values.name) {
            await waait();
            alert(`Gracias por ingresar ${values.name}! El usuario asignado es marianapaulina@dh.com y la contraseña es holamundo`)
            navigate(-1)
            setLoading(false);
        } else {
            alert("Te faltan los valores");
            setLoading(false);
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
            <Button disabled={loading} type="submit" size="small" variant="contained">
            {
              loading ? (
                <Pinwheel 
                size={35}
                lineWeight={3.5}
                speed={1} 
                color="black" 
                />
              ) : "🦷"
            }
          </Button>
            </Box>
        </Box>
        </Fragment>
    )
}

export default Register