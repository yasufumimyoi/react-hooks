import React, { useState, useEffect, useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MemoUseStyles } from '../style/style';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { AlertDialog } from '../components/AlertDialog';
import { format } from 'date-fns';
import { Memo } from './Memo';
import { MemoSort } from './MemoSort';
import { EditDialog } from '../components/EditDialog';
import { firebase } from '../firebase/firebase.util';
import { VideoContext } from '../contexts/video-context';

export const ListOfMemo = () => {
  const [memo, setMemo] = useState([]);
  const [category, setCategory] = React.useState('');
  const [content, setContent] = useState('');
  const [sortMemo, setSortMemo] = useState([]);
  const now = format(new Date(), 'yyyy/MMM/do/h:m:s');
  const [sortCategory, setSortCategory] = useState('');
  const [sortTime, setSortTime] = useState('');
  const { currentUser } = useContext(VideoContext);

  //カテゴリーとメモの入力値をセットする
  const handleChange = (event) => {
    switch (event.target.name) {
      case 'category':
        setCategory(event.target.value);
        break;
      case 'content':
        setContent(event.target.value);
        break;
      default:
    }
  };

  //メモの作成
  const handleSubmit = (event) => {
    event.preventDefault();

    //firestoreにデータを格納
    const docId = firebase.firestore().collection('memo').doc().id;
    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .collection('memo')
      .doc(docId)
      .set({
        id: docId,
        category: category,
        content: content,
        time: now,
      });

    //memoに新規データを追加
    setMemo([
      ...memo,
      { id: docId, category: category, content: content, time: now },
    ]);
    setCategory('');
    setContent('');

    //ソート表示用のmemoに新規データを追加
    if (sortCategory) {
      setSortMemo([
        ...memo,
        { id: docId, category: category, content: content, time: now },
      ]);
      setSortCategory('');
      setSortTime('');
    }
  };

  //メモの削除
  const handelRemove = (id) => {
    const newItem = memo.filter((memo) => memo.id !== id);
    const docId = memo.filter((memo) => memo.id === id);
    setMemo(newItem);
    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .collection('memo')
      .doc(docId[0].id)
      .delete();
  };

  //メモをfirestoreから取得し、memoにデータをセットする
  useEffect(() => {
    let items = [];
    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .collection('memo')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setMemo(items);
      });
  }, []);

  const classes = MemoUseStyles();
  return (
    <Grid container>
      <Grid item sm={12}>
        <h4>Memo</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl style={{ marginBottom: '20px' }}>
              <InputLabel shrink>カテゴリー</InputLabel>
              <Select
                value={category}
                name="category"
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>選択してください</em>
                </MenuItem>
                <MenuItem value="AWS">AWS</MenuItem>
                <MenuItem value="Docker">Docker</MenuItem>
                <MenuItem value="Firebase">Firebase</MenuItem>
                <MenuItem value="Javascript">Javascript</MenuItem>
                <MenuItem value="Material-ui">Material-ui</MenuItem>
                <MenuItem value="Node.js">Node</MenuItem>
                <MenuItem value="React">React</MenuItem>
                <MenuItem value="React-Router">React Router</MenuItem>
                <MenuItem value="Typescript">Typescript</MenuItem>
              </Select>
            </FormControl>
            <div>
              <TextField
                label="入力してください"
                variant="outlined"
                name="content"
                value={content}
                onChange={handleChange}
                style={{ width: '300px', marginBottom: '20px' }}
                multiline
                rows={2}
              />
              <Fab color="primary" type="submit" style={{ marginLeft: '20px' }}>
                <AddIcon />
              </Fab>
            </div>
          </div>
        </form>
        <hr />
        {/*メモがあればソート機能を表示させる*/}
        {memo.length > 0 && (
          <div>
            <MemoSort
              memo={memo}
              sortMemo={sortMemo}
              sortCategory={sortCategory}
              sortTime={sortTime}
              setMemo={setMemo}
              setSortMemo={setSortMemo}
              setSortCategory={setSortCategory}
              setSortTime={setSortTime}
            />
          </div>
        )}
        {/*メモが存在し、全てのメモを表示を変更する or ソート値によってメモの表示を変更する*/}
        {memo.length > 0 ? (
          !sortCategory ? (
            memo.map((m, index) => (
              <Grid container key={index} className={classes.container}>
                <Grid item>
                  <Memo
                    content={m.content}
                    category={m.category}
                    time={m.time}
                  />
                </Grid>
                <Grid item className={classes.extra} />
                <Grid item>
                  <EditDialog
                    state={m}
                    category={category}
                    content={content}
                    memo={memo}
                    setContent={setContent}
                    setCategory={setCategory}
                    setMemo={setMemo}
                  />
                </Grid>
                <Grid item>
                  <AlertDialog handelRemove={() => handelRemove(m.id)} />
                </Grid>
              </Grid>
            ))
          ) : (
            sortMemo.map((m, index) => (
              <Grid container key={index} className={classes.container}>
                <Grid item>
                  <Memo
                    content={m.content}
                    category={m.category}
                    time={m.time}
                  />
                </Grid>
                <Grid item className={classes.extra} />
                <Grid item>
                  <EditDialog
                    state={m}
                    category={category}
                    content={content}
                    memo={memo}
                    setContent={setContent}
                    setCategory={setCategory}
                    setMemo={setMemo}
                  />
                </Grid>
                <Grid item>
                  <AlertDialog handelRemove={() => handelRemove(m.id)} />
                </Grid>
              </Grid>
            ))
          )
        ) : (
          <Typography>
            カテゴリー選択を行い、「 + 」をクリックしメモを作成しましょう。
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

// let dataRef = firebase
//   .firestore()
//   .collection('videoData')
//   .doc('videos')
//   .get()
//   .then((info) => {
//     console.log(info.data());
//   });

// let temp = firebase
//   .firestore()
//   .collection('test')
//   .where('category', '==', 'aws')
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   });

// {memo.length > 0 ? (
//   memo.map((m, index) => {
//     return (
//       <div key={index} className={classes.container}>
//         <Memo content={m.content} category={m.category} time={m.time} />
//         <AlertDialog handelRemove={() => handelRemove(m.id)} />
//         <EditDialog
//           state={m}
//           category={category}
//           content={content}
//           memo={memo}
//           setContent={setContent}
//           setCategory={setCategory}
//           setMemo={setMemo}
//         />
//       </div>
//     );
//   })
// ) : (
//   <Typography>
//     カテゴリー選択を行い、「 + 」をクリックしメモを作成しましょう。
//   </Typography>
// )}
