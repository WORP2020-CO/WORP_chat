import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
// import { gravatarPath } from '../gravatar';

const useStyle = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const UserPhoto = ({}) => {
    const classes = useStyle();

  return (
    <div className={classes.root}>
      <Avatar className={classes.large} />
    </div>
  );
};

export default UserPhoto;
