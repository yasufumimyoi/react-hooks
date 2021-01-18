import React from 'react';
import { Grid } from '@material-ui/core';

export const Footer = () => {
  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
          ・Privacy Policy
        </a>
      </Grid>
      <Grid item>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
          ・Contact
        </a>
      </Grid>
    </Grid>
  );
};
