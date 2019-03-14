import React from "react";
// import Grid from '@material-ui/core/Grid';
import "./Wrapper.css";

const Wrapper = props => 
  <div className="wrapper">
    {props.children}
  </div>;

export default Wrapper;

// function Wrapper(props) {
//   const { spacing } = props;
//   let number = parseInt(spacing, 10);
//   return (
//     <div>
//       <Grid className="wrapper" container spacing={number}>
//           {props.children}
//       </Grid>
//     </div>
//   );
// }

// export default Wrapper;