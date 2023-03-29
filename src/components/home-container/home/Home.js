import React from 'react'
import { Chip, Container } from '@mui/material'
import './Home.css'
import PetGallery from '../gallery/PetGallery'
import { StyledEngineProvider } from '@mui/material'

const Home = () => {

  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <div className="label-btns">
          <Chip
            size="medium"
            label="Today NFTS"
            color="primary"
            clickable
          />

          <Chip
            size="medium"
            label="Last Week"
            clickable
          />
        </div>
        <PetGallery />
      </Container>
    </StyledEngineProvider>
  )
}

export default Home
