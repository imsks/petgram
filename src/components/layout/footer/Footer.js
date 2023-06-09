import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import { StyledEngineProvider } from '@mui/material'
import './Footer.css'
import logo from '../../../images/logo.jpg'

function Footer() {
  return (
    <StyledEngineProvider injectFirst>
      <footer>
        <AppBar className="primary-color marginT-3 pad-2" position="static">
          <Grid component={Container} container>
            <Grid item xs={12} sm={3}>
              <img src={logo} alt="logo" className="footer-logo" />
            </Grid>

            <Grid item xs={12} sm={9} className="links">
              <Link className="link" component={RouterLink} to="/">
                Home
              </Link>
              <span>/</span>

              <Link className="link" component={RouterLink} to="/">
                About
              </Link>
              <span>/</span>

              <Link className="link" component={RouterLink} to="/">
                Create a Pet
              </Link>
              <span>/</span>

              <Link className="link" component={RouterLink} to="/">
                Get Started
              </Link>
              <span>/</span>

              <Link className="link" component={RouterLink} to="/">
                Terms
              </Link>
              <span>/</span>

              <Link className="link" component={RouterLink} to="/">
                Privacy
              </Link>
            </Grid>

            <Grid item xs={12} sm={3}></Grid>

            <Grid item xs={12} sm={9}>
              <Typography className="copyright">
                Copyright &copy; {new Date().getFullYear()} PetGram
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
      </footer>
    </StyledEngineProvider>
  )
}

export default Footer
