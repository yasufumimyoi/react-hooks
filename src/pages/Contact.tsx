import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography, Grid } from '@material-ui/core';
import { loginStyles } from '../style/style';
import emailjs from 'emailjs-com';

//フォームのバリデーション
const schema = yup.object().shape({
  name: yup.string().required('お名前は必須です'),
  email: yup
    .string()
    .email('メールアドレスの形式に誤りがあります')
    .required('メールアドレスは必須です'),
  question: yup.string().required('お問合せ内容は必須です'),
});

export const Contact = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push('/');
  };

  const classes = loginStyles();
  const [formState, setFormState] = useState({});
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      ...{ [event.target.name]: event.target.value },
    });
  };

  const sendEmail = () => {
    try {
      emailjs
        .sendForm(
          'gmail',
          'template_b7v42z5',
          '#contact-form',
          // eslint-disable-next-line no-undef
          process.env.REACT_APP_EMAILISUSERID
        )
        .then(() => {
          alert('お問い合わせメールを送信しました');
        })
        .then(() => {
          reset();
          history.push('/');
        });
    } catch (error) {
      alert('お問合せメールの送信に失敗しました。');
    }
  };

  return (
    <Grid container className={classes.container} spacing={4}>
      <Grid item sm={4} xs={10} style={{ marginTop: '90px' }}>
        <Typography variant="h5" style={{ marginBottom: 10 }}>
          Contact
        </Typography>
        <Typography style={{ marginBottom: 30 }}>
          当サイトについてのご質問がございましたら
          以下フォームから気軽にお問い合わせください。
        </Typography>
        <form
          id="contact-form"
          onSubmit={handleSubmit(sendEmail)}
          className={classes.root}
        >
          <div>
            <TextField
              label="お名前"
              type="text"
              name="name"
              fullWidth
              inputRef={register}
              onChange={onChange}
              style={{ marginBottom: '15px' }}
              variant="outlined"
            />
            {errors.name && (
              <div className={classes.validate}>{errors.name.message}</div>
            )}
            <TextField
              label="メールアドレス"
              type="text"
              name="email"
              fullWidth
              inputRef={register}
              onChange={onChange}
              variant="outlined"
              style={{ marginBottom: '15px' }}
            />
            {errors.email && (
              <div className={classes.validate}>{errors.email.message}</div>
            )}
            <TextField
              label="お問い合わせ"
              type="text"
              name="question"
              fullWidth
              inputRef={register}
              onChange={onChange}
              multiline
              rows={4}
              style={{
                marginBottom: 20,
              }}
              variant="outlined"
            />
            {errors.question && (
              <div className={classes.validate}>{errors.question.message}</div>
            )}
            <Button variant="contained" color="primary" type="submit" fullWidth>
              送信
            </Button>
          </div>
          <div style={{ marginTop: 50, cursor: 'pointer' }}>
            <p onClick={handleHome}>ホーム画面に戻る</p>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};
