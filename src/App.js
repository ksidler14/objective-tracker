import React from 'react';
import ObjectiveDisplay from './components/ObjectiveDisplay';
import { withStyles } from '@material-ui/styles';

const style = (theme) => {

  return ({
      header: {
        backgroundColor: theme.palette.primary.main,
        margin: 'auto',
      },
      body: {
        backgroundColor: theme.palette.primary.light
      }
  });

}

function App(props) {

  const {classes} = props;

  return (
    <div>
      <header className={classes.header} style={{minHeight: '7vh'}} />
      <body className={classes.body} style={{minHeight: '91vh'}}>
        <ObjectiveDisplay />
      </body>
    </div>
  );
}

export default withStyles(style)(App);
