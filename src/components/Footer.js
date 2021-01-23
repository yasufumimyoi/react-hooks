import React from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const Footer = () => {
  const history = useHistory();
  const handlePrivacy = () => {
    history.push('/privacy');
  };

  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item>
        <p
          onClick={handlePrivacy}
          style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
        >
          ・Privacy Policy
        </p>
      </Grid>
      <Grid item>
        <p
          style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
        >
          ・Contact
        </p>
      </Grid>
    </Grid>
  );
};
