import { Box, CardMedia } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContainer, Glass } from '../../../styles/StyledMUI'

const AuthLayout = () => {
  return (
    <AuthContainer>
      <Glass>
        <Box sx={{ margin: "0 auto", mb: 5 }} component="div">
          <CardMedia
            component="img"
            image="https://i.pinimg.com/originals/b0/3d/e3/b03de32b8d8f53b4d84cba81c7c2b972.png"
            sx={{ width: "100px", borderRadius: "8px" }}
          />
        </Box>
        <Outlet />
      </Glass>
    </AuthContainer>
  )
}

export default AuthLayout