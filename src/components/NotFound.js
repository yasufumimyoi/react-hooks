import React from "react";
import { Typography } from "@material-ui/core";
import NotFoundImage from "../images/NotFound.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Typography variant="body1" component="p">
        申し訳ございません。
      </Typography>
      <Typography variant="body1" component="p">
        指定したファイルまたはディレクトリは存在しておりません。
      </Typography>
      <div>
        <Link to="/">ホーム画面に戻る</Link>
      </div>
      <img src={NotFoundImage} width="85%" />
    </div>
  );
};

export { NotFound };
