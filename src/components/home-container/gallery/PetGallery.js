import React, { useEffect, useState } from 'react'
import CircularStatic from '../../commons/CircularProgressWithLabel'
import ImageListItem from '@mui/material/ImageListItem'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { Grid } from '@mui/material'
import './PetGallery.css'


function PetGallery() {
  const [petsData, setPetsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  }, [])

  return (
    <div style={{ minHeight: '70vh', paddingBottom: '3rem' }}>
      {/* Add pet's Data */}


    </div>
  )
}

export default PetGallery
