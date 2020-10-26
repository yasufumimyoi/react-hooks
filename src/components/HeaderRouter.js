import React from "react";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  link: {
    marginRight: "8px",
    color: "white",
  },
}));

const HeaderRouter = () => {
  const classes = useStyles();
  const history = useHistory();

  const handelCourses = () => {
    history.push("/courses");
  };

  const handelLogin = () => {
    history.push("/login");
  };

  const handelJoin = () => {
    history.push("/join");
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.link}
        type="button"
        onClick={handelCourses}
      >
        コース
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.link}
        type="button"
        onClick={handelLogin}
      >
        ログイン
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.link}
        type="button"
        onClick={handelJoin}
      >
        新規登録
      </Button>
    </div>
  );
};

export default HeaderRouter;
