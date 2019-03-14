import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   // paper: {
//   //   padding: theme.spacing.unit * 2,
//   //   textAlign: 'center',
//   //   color: theme.palette.text.secondary,
//   // },
// });

// const Item = props => {
//   const size = props.size.split(" ").map(size => "item" + size).join(" ");
//   return (
//     <div className={size}>
//       {props.children}
//     </div>
//   );
// };

function Item(props) {
  const { width } = props;
  let number = parseInt(width, 10);
  return (
      <Grid item xs={number}>
          {props.children}
      </Grid>
  );
}

// Item.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Item);

export default Item;