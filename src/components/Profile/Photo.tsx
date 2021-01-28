import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { firebase } from '../../firebase/firebase.util';
import { VideoContext } from '../../contexts/video-context';

export const Photo = () => {
  const { currentUser, userData, setUserData } = useContext(VideoContext);

  //画像の登録
  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //storageにimageをセットする
    const target = e.target;
    if (!target.files?.length) return;
    const imageData = target.files[0].name;
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(imageData);
    await fileRef.put(target.files[0]);
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
        style={{ display: 'none' }}
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
