import React, { useState, useContext, useEffect } from 'react';
import { firebase } from '../../firebase/firebase.util';
import { VideoContext } from '../../contexts/video-context';
import { Grid, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ProfileUseStyles } from '../../style/style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('ニックネームを入力してください'),
  gender: yup.string().required('性別を入力してください'),
  message: yup.string().required('自己紹介を入力してください'),
});

export const ProfileForm = () => {
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const { currentUser, userData, setUserData } = useContext(VideoContext);
  const history = useHistory();
  const classes = ProfileUseStyles();

  //入力データをセット
  const [formState, setFormState] = useState({});
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      name: userName,
      gender: userGender,
      message: userMessage,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onChange = (event) => {
    setFormState({
      ...formState,
      ...{ [event.target.name]: event.target.value },
    });
  };

  //データをfirestoreとstorageに保存
  const saveProfile = async () => {
    try {
      //firesoreにデータをセット
      await firebase
        .firestore()
        .collection('users')
        .doc(currentUser.uid)
        .collection('profile')
        .doc('details')
        .update({
          name: formState.name,
          gender: formState.gender,
          message: formState.message,
        });
      setUserData([
        {
          name: formState.name,
          gender: formState.gender,
          message: formState.message,
          image: userData[0].image,
        },
      ]);
      setUserName('');
      setUserGender('');
      setUserMessage('');
      reset();
      setFormState('');
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
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={1} />
      <Grid item sm={4} xs={10}>
        <h2 className={classes.title}>プロフィールの編集</h2>
        <form onSubmit={handleSubmit(saveProfile)}>
          <TextField
            label="コードネーム"
            type="text"
            name="name"
            fullWidth
            inputRef={register}
            onChange={onChange}
          />
          {errors.name && (
            <div className={classes.validate}>{errors.name.message}</div>
          )}
          <TextField
            label="性別"
            type="text"
            name="gender"
            fullWidth
            inputRef={register}
            onChange={onChange}
          />
          {errors.gender && (
            <div className={classes.validate}>{errors.gender.message}</div>
          )}
          <TextField
            label="自己紹介"
            type="text"
            name="message"
            fullWidth
            inputRef={register}
            onChange={onChange}
          />
          {errors.message && (
            <div className={classes.validate}>{errors.message.message}</div>
          )}
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

// import React, { useState, useContext, useEffect } from 'react';
// import { firebase } from '../../firebase/firebase.util';
// import { VideoContext } from '../../contexts/video-context';
// import { Grid, TextField, Button } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
// import { ProfileUseStyles } from '../../style/style';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required('ニックネームを入力してください'),
//   gender: yup.string().required('性別を入力してください'),
//   message: yup.string().required('自己紹介を入力してください'),
// });

// export const ProfileForm = () => {
//   const [userName, setUserName] = useState('');
//   const [userGender, setUserGender] = useState('');
//   const [userMessage, setUserMessage] = useState('');
//   const { currentUser, userData, setUserData } = useContext(VideoContext);
//   const history = useHistory();
//   const classes = ProfileUseStyles();

//   //入力データをセット
//   const handleChange = (e) => {
//     switch (e.target.name) {
//       case 'name':
//         setUserName(e.target.value);
//         break;
//       case 'gender':
//         setUserGender(e.target.value);
//         break;
//       case 'message':
//         setUserMessage(e.target.value);
//         break;
//       default:
//         break;
//     }
//   };

//   //データをfirestoreとstorageに保存
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       //firesoreにデータをセット
//       await firebase
//         .firestore()
//         .collection('users')
//         .doc(currentUser.uid)
//         .collection('profile')
//         .doc('details')
//         .set({
//           name: userName,
//           gender: userGender,
//           message: userMessage,
//         });
//       setUserData([
//         {
//           name: userName,
//           gender: userGender,
//           message: userMessage,
//           image: userData[0].image,
//         },
//       ]);
//       setUserName('');
//       setUserGender('');
//       setUserMessage('');
//       history.push('/profile');
//     } catch (error) {
//       //handle exception..
//     }
//   };

//   useEffect(() => {
//     if (userData) {
//       try {
//         setUserName(userData[0].name);
//         setUserGender(userData[0].gender);
//         setUserMessage(userData[0].message);
//       } catch (error) {
//         //handle exception..
//       }
//     }
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <Grid container className={classes.container}>
//       <Grid item xs={1} />
//       <Grid item sm={4} xs={10}>
//         <h2 className={classes.title}>プロフィールの編集</h2>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="お名前"
//             type="text"
//             name="name"
//             fullWidth
//             onChange={handleChange}
//             value={userName}
//           />
//           <TextField
//             label="性別"
//             type="text"
//             name="gender"
//             fullWidth
//             onChange={handleChange}
//             value={userGender}
//           />
//           <TextField
//             label="メッセージ"
//             type="text"
//             name="message"
//             fullWidth
//             onChange={handleChange}
//             value={userMessage}
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             type="submit"
//             style={{ marginTop: '30px' }}
//           >
//             送信
//           </Button>
//         </form>
//       </Grid>
//       <Grid item xs={1} />
//     </Grid>
//   );
// };
