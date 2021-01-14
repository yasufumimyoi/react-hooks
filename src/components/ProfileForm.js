import React, { useState, useContext, useEffect } from 'react';
import { firebase } from '../firebase/firebase.util';
import { VideoContext } from '../contexts/video-context';
import { Grid, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ProfileUseStyles } from '../style/style';

export const ProfileForm = () => {
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const { currentUser, userData, setUserData } = useContext(VideoContext);
  const history = useHistory();
  const classes = ProfileUseStyles();

  //入力データをセット
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setUserName(e.target.value);
        break;
      case 'gender':
        setUserGender(e.target.value);
        break;
      case 'message':
        setUserMessage(e.target.value);
        break;
    }
  };

  //データをfirestoreとstorageに保存
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // //storageにimageデータをセット
      // const storageRef = firebase.storage().ref();
      // const fileRef = storageRef.child(imageAsFile.name);
      // await fileRef.put(imageAsFile);
      // const fileUrl = await fileRef.getDownloadURL();
      //firesoreにデータをセット
      await firebase
        .firestore()
        .collection('users')
        .doc(currentUser.uid)
        .collection('profile')
        .doc('details')
        .set({
          name: userName,
          gender: userGender,
          message: userMessage,
        });
      setUserData([
        {
          name: userName,
          gender: userGender,
          message: userMessage,
          image: userData[0].image,
        },
      ]);
      setUserName('');
      setUserGender('');
      setUserMessage('');
      history.push('/profile');
    } catch (error) {
      //handle exception..
    }
  };

  useEffect(() => {
    if (userData) {
      try {
        setUserName(userData[0].name);
        setUserGender(userData[0].gender);
        setUserMessage(userData[0].message);
      } catch (error) {
        //handle exception..
      }
    }
  }, []);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={1} />
      <Grid item sm={4} xs={10}>
        <h2 className={classes.title}>プロフィールの編集</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="お名前"
            type="text"
            name="name"
            fullWidth
            onChange={handleChange}
            value={userName}
          />
          <TextField
            label="性別"
            type="text"
            name="gender"
            fullWidth
            onChange={handleChange}
            value={userGender}
          />
          <TextField
            label="メッセージ"
            type="text"
            name="message"
            fullWidth
            onChange={handleChange}
            value={userMessage}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '30px' }}
          >
            送信
          </Button>
        </form>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
