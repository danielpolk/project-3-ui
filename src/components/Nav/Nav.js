import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Menu from './Menu';
import navStyle from './Nav.css';

// import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#ffffff',
//       main: '#fafafa',
//       dark: '#c7c7c7',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


function Nav(props) {
  const { classes } = props;
  return (
    <div className={navStyle} >
      <AppBar position="static">
        <Toolbar >
          <IconButton className= "navNar" color="blue" aria-label="Menu">
            {/* <MenuIcon /> */}
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Minimalist
          </Typography>
          <Button color="inherit">
          {<i className="material-icons">account_circle</i>}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);