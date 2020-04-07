import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridAutoFlow: "row",
    gridRowGap: 20
  },
  itemWrapper: {
    border: "1px solid black",
    padding: 5
  },
  itemtitle: {
    fontSize: "2rem"
  },
  item: {
    display: "grid",
    gridTemplateColumns: "200px 200px"
  },
  subtitle: {
    fontWeight: "bold"
  }
}));

export default {
  title: 'Design System/Colors'
};

export const Colors = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.itemWrapper}>
        <div className={classes.itemtitle}>Material UI</div>
        <div className={classes.item}>
          <div className={classes.subtitle}> Primary Color </div>
          <div style={{backgroundColor: "#3f51b5"}}></div>
        </div>
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.itemtitle}>Material Table</div>
        <div className={classes.item}>
          <div className={classes.subtitle}> Selection Color </div>
          <div style={{backgroundColor: "rgb(253, 224, 234)"}}></div>
        </div>
      </div>
    </div>
  )
}
