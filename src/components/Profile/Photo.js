import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { firebase } from '../../firebase/firebase.util';
import { VideoContext } from '../../contexts/video-context';

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
}));

//fix me
export const Photo = () => {
  const classes = useStyles();
  const { currentUser, userData, setUserData } = useContext(VideoContext);

  //画像の登録
  const handleSubmit = async (e) => {
    e.preventDefault();
    //storageにimageをセットする
    const imageData = e.target.files[0].name;
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(imageData);
    await fileRef.put(e.target.files[0]);
    const fileUrl = await fileRef.getDownloadURL();
    await firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .collection('profile')
      .doc('details')
      .update({
        image: fileUrl,
      });
    setUserData([
      {
        name: userData[0].name,
        gender: userData[0].gender,
        message: userData[0].message,
        image: fileUrl,
      },
    ]);
  };

  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={handleSubmit}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
};
