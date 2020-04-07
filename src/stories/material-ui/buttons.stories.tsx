import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
  title: 'Design System/Material-Ui'
};

export const buttonGroup = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}

export const customButtonGroup = () => {
  const [currentButton, setCurrentButton] = React.useState<String>("one");

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  function onClick(type:String) {
    setCurrentButton(type);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="">
        {["one", "two", "three"].map(item => (
          <Button
            key={item}
            style={currentButton===item ? {backgroundColor: "#3f51b5", color: "#ffffff"} : {}} onClick={() => onClick(item)}>
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
}