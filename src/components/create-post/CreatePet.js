import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import './CreatePet.css'
import {
  TextField,
  Container,
  Typography,
  Button,
  IconButton,
  MenuItem,
} from '@mui/material'
import StylesProvider from '@emotion/styled'

function CreatePet() {
  // Add variables

  const handleImage = (event) => { }

  const handleSubmit = async (e) => { }

  return (
    <StylesProvider injectFirst>
      <Container
        className="root-create-pet"
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        <div>
          <Typography className="title" color="textPrimary" gutterBottom>
            Add a photo of your pet
          </Typography>

          {/* Add Form */}


        </div>
      </Container>
    </StylesProvider>
  )
}

export default CreatePet
