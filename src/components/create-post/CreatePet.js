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
import { NFTStorage, File } from 'nft.storage'
import { createRef } from 'react'
import { apiKey } from '../../APIKEYS'
import { useNavigate } from 'react-router-dom'

const CreatePet = () => {
  // Add variables
  const navigate = useNavigate()
  const [image, setImage] = useState('')
  const petTypeRef = createRef()
  const [petName, setPetName] = useState('')
  const [loading, setLoading] = useState(false)
  const [ownerName, setOwnerName] = useState('')
  const [imageName, setImageName] = useState('')
  const [imageType, setImageType] = useState('')
  const [petType, setPetType] = useState('')

  const handleImage = (event) => {
    setImage(event.target.files[0])
    setImageName(event.target.files[0].name)
    setImageType(event.target.files[0].type)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const client = new NFTStorage({ token: apiKey })
      const metadata = await client.store({
        name: petName,
        description: `${ownerName}, ${petType}`,
        image: new File([image], imageName, { type: imageType }),
      })
      console.log(metadata)
      if (metadata) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <Container
      className="root-create-pet"
      style={{ minHeight: '70vh', paddingBottom: '3rem' }}
    >
      <div>
        <Typography className="title" color="textPrimary" gutterBottom>
          Add a photo of your pet
        </Typography>

        {/* Add Form */}
        {
          image ? (
            <img src={URL.createObjectURL(image)} alt="pet" className="img-preview" />
          ) : (
            ''
          )
        }
        <div className="form-container">
          <form className="form" noValidate autoComplete="off">
            <input
              accept="image/*"
              className="input"
              id="icon-button-photo"
              defaultValue={image}
              onChange={handleImage}
              type="file"
            />
            <label htmlFor="icon-button-photo">
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Pet's name"
              variant="outlined"
              className="text-field"
              defaultValue={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Owner's name"
              variant="outlined"
              className="text-field"
              defaultValue={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
            <TextField
              fullWidth
              name="petType"
              select
              label="Choose one option"
              variant="outlined"
              className="text-field"
              onChange={(e) => setPetType(e.target.value)}
              defaultValue=""
              ref={petTypeRef}
            >
              <MenuItem value="Cat">Cat</MenuItem>
              <MenuItem value="Dog">Dog</MenuItem>
              <MenuItem value="Bird">Bird</MenuItem>
              <MenuItem value="Fish">Fish</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </div>

      </div>
    </Container>
  )
}

export default CreatePet
