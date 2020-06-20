import React from 'react';
import ObjectiveDisplay from './components/ObjectiveDisplay';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const style = (theme) => {

  return ({
      header: {
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center'
      },
      body: {
        backgroundColor: theme.palette.primary.main
      },
      text: {
        color: theme.palette.secondary.contrastText,
        margin: 'auto',
        
      }
  });

}

function App(props) {

  const {classes} = props;

  return (
    <div>
      <header className={classes.header} style={{minHeight: '7vh'}}>
        <Typography className={classes.text} variant="h4">
          Objective Tracker
        </Typography>
      </header>
      <body className={classes.body} style={{minHeight: '91vh'}}>
        <ObjectiveDisplay />
      </body>
    </div>
  );
}

export default withStyles(style)(App);
