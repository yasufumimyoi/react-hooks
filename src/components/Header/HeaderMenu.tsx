import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { firebase } from '../../firebase/firebase.util';
import { VideoContext } from '../../contexts/video-context';
import { Box } from '@material-ui/core';
import { headerStyles } from '../../style/style';
import Avatar from '@material-ui/core/Avatar';

export const HeaderMenu = ({ image }: any) => {
  const history = useHistory();
  const classes = headerStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setCurrentUser, guestUser, setGuestUser } = useContext(VideoContext);

  //Fix me
  //Menuのオープン
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  //Menuのクローズ
  const handleClose = () => {
    setAnchorEl(null);
  };

  //コース一覧ページに移動する
  const handelCoursesRoute = () => {
    history.push('/courses');
    setAnchorEl(null);
  };

  //新規登録ページに移動する
  const handelSignUpRoute = () => {
    history.push('/sign');
    setAnchorEl(null);
  };

  //ログインページに移動する
  const handelAllVideoRoute = () => {
    history.push('/all');
    setAnchorEl(null);
  };

  //プロフィールページに移動する
  const handleProfile = () => {
    history.push('/profile');
    setAnchorEl(null);
  };

  //ログアウト機能
  //セッションストレージもクリアする
  const handleLogout = () => {
    try {
      firebase
        .auth()
        .signOut()
        .then(() => {
          setCurrentUser(null);
          setGuestUser(null);
          sessionStorage.clear();
          history.push('/');
        });
      setAnchorEl(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handelDelete = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      user
        .delete()
        .then(() => {
          setCurrentUser(null);
          setGuestUser(null);
          history.push('/');
          console.log('deleted');
        })
        .catch(() => {
          // handle exception..
        });
    }
  };

  //匿名ユーザーのみ新規登録を表示する
  return (
    <div>
      {guestUser ? (
        <Box className={classes.item}>
          <Avatar
            alt="profileImage"
            src={image}
            className={classes.profile}
            onClick={handleProfile}
            style={{ height: '35px', width: '35px' }}
          />
          <MenuIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.menu}
          ></MenuIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handelCoursesRoute}>トップ</MenuItem>
            <MenuItem onClick={handelAllVideoRoute}>動画一覧</MenuItem>
            <MenuItem onClick={handelSignUpRoute}>新規登録</MenuItem>
            <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
          </Menu>
        </Box>
      ) : (
        <Box className={classes.item}>
          <Avatar
            alt="profileImage"
            src={image}
            className={classes.profile}
            onClick={handleProfile}
          />
          <MenuIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.menu}
          ></MenuIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handelCoursesRoute}>トップ</MenuItem>
            <MenuItem onClick={handelAllVideoRoute}>動画一覧</MenuItem>
            <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
            <MenuItem onClick={handelDelete}>アカウントの削除</MenuItem>
          </Menu>
        </Box>
      )}
    </div>
  );
};
