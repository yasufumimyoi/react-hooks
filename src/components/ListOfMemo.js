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
import { format } from 'date-fns';
import { Memo } from './Memo';
import { MemoSort } from './MemoSort';
import { firebase } from '../firebase/firebase.util';
import { VideoContext } from '../contexts/video-context';

export const ListOfMemo = () => {
  const [memo, setMemo] = useState([]);
  const [category, setCategory] = React.useState('');
  const [content, setContent] = useState('');
  const [sortMemo, setSortMemo] = useState([]);
  const now = format(new Date(), 'yyyy/MMM/do');
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
        <Typography variant="subtitle1">メモの作成</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container className={classes.subcontainer}>
            <Grid
              item
              style={{
                marginRight: '20px',
                marginBottom: '15px',
                marginTop: '25px',
              }}
            >
              <FormControl style={{ width: '130px' }}>
                <InputLabel shrink>カテゴリー</InputLabel>
                <Select
                  value={category}
                  name="category"
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>選択</em>
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
            </Grid>
            <Grid item>
              <TextField
                label="メモ"
                variant="outlined"
                name="content"
                value={content}
                onChange={handleChange}
                style={{ width: '300px', marginBottom: '20px' }}
                multiline
                rows={2}
              />
              <Fab
                color="primary"
                type="submit"
                size="small"
                style={{ marginLeft: '10px', marginTop: '15px' }}
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </form>
        <hr />
        {/*メモがあればソート機能を表示させる*/}
        {memo.length > 0 && (
          <div>
            <div className={classes.container}>
              <Typography variant="subtitle1">メモ一覧</Typography>
            </div>
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
                <Grid item className={classes.extra}>
                  <Memo
                    memoContent={m.content}
                    memoCategory={m.category}
                    time={m.time}
                    state={m}
                    category={category}
                    content={content}
                    memo={memo}
                    setContent={setContent}
                    setCategory={setCategory}
                    setMemo={setMemo}
                    handelRemove={() => handelRemove(m.id)}
                  />
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
              </Grid>
            ))
          )
        ) : (
          <div className={classes.note}>
            <Typography variant="body2">
              カテゴリー選択を行い、「 + 」をクリックしメモを作成しましょう。
            </Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

// <Grid container>
// <Grid item sm={12}>
//   <Typography>Memo</Typography>
//   <form onSubmit={handleSubmit}>
//     <div>
//       <FormControl style={{ marginBottom: '20px' }}>
//         <InputLabel shrink>カテゴリー</InputLabel>
//         <Select
//           value={category}
//           name="category"
//           onChange={handleChange}
//           displayEmpty
//         >
//           <MenuItem value="">
//             <em>選択してください</em>
//           </MenuItem>
//           <MenuItem value="AWS">AWS</MenuItem>
//           <MenuItem value="Docker">Docker</MenuItem>
//           <MenuItem value="Firebase">Firebase</MenuItem>
//           <MenuItem value="Javascript">Javascript</MenuItem>
//           <MenuItem value="Material-ui">Material-ui</MenuItem>
//           <MenuItem value="Node.js">Node</MenuItem>
//           <MenuItem value="React">React</MenuItem>
//           <MenuItem value="React-Router">React Router</MenuItem>
//           <MenuItem value="Typescript">Typescript</MenuItem>
//         </Select>
//       </FormControl>
//       <div>
//         <TextField
//           label="入力してください"
//           variant="outlined"
//           name="content"
//           value={content}
//           onChange={handleChange}
//           style={{ width: '300px', marginBottom: '20px' }}
//           multiline
//           rows={2}
//         />
//         <Fab color="primary" type="submit" style={{ marginLeft: '20px' }}>
//           <AddIcon />
//         </Fab>
//       </div>
//     </div>
//   </form>
//   <hr />
//   {/*メモがあればソート機能を表示させる*/}
//   {memo.length > 0 && (
//     <div>
//       <MemoSort
//         memo={memo}
//         sortMemo={sortMemo}
//         sortCategory={sortCategory}
//         sortTime={sortTime}
//         setMemo={setMemo}
//         setSortMemo={setSortMemo}
//         setSortCategory={setSortCategory}
//         setSortTime={setSortTime}
//       />
//     </div>
//   )}
//   {/*メモが存在し、全てのメモを表示を変更する or ソート値によってメモの表示を変更する*/}
//   {memo.length > 0 ? (
//     !sortCategory ? (
//       memo.map((m, index) => (
//         <Grid container key={index} className={classes.container}>
//           <Grid item>
//             <Memo
//               content={m.content}
//               category={m.category}
//               time={m.time}
//             />
//           </Grid>
//           <Grid item className={classes.extra} />
//           <Grid item>
//             <EditDialog
//               state={m}
//               category={category}
//               content={content}
//               memo={memo}
//               setContent={setContent}
//               setCategory={setCategory}
//               setMemo={setMemo}
//             />
//           </Grid>
//           <Grid item>
//             <AlertDialog handelRemove={() => handelRemove(m.id)} />
//           </Grid>
//         </Grid>
//       ))
//     ) : (
//       sortMemo.map((m, index) => (
//         <Grid container key={index} className={classes.container}>
//           <Grid item>
//             <Memo
//               content={m.content}
//               category={m.category}
//               time={m.time}
//             />
//           </Grid>
//           <Grid item className={classes.extra} />
//           <Grid item>
//             <EditDialog
//               state={m}
//               category={category}
//               content={content}
//               memo={memo}
//               setContent={setContent}
//               setCategory={setCategory}
//               setMemo={setMemo}
//             />
//           </Grid>
//           <Grid item>
//             <AlertDialog handelRemove={() => handelRemove(m.id)} />
//           </Grid>
//         </Grid>
//       ))
//     )
//   ) : (
//     <Typography>
//       カテゴリー選択を行い、「 + 」をクリックしメモを作成しましょう。
//     </Typography>
//   )}
// </Grid>
// </Grid>

// <Grid container>
//       <Grid item sm={12}>
//         <Typography variant="subtitle1">メモの作成</Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container className={classes.subcontainer}>
//             <Grid
//               item
//               style={{
//                 marginRight: '20px',
//                 marginBottom: '15px',
//                 marginTop: '25px',
//               }}
//             >
//               <FormControl style={{ width: '130px' }}>
//                 <InputLabel shrink>カテゴリー</InputLabel>
//                 <Select
//                   value={category}
//                   name="category"
//                   onChange={handleChange}
//                   displayEmpty
//                 >
//                   <MenuItem value="">
//                     <em>選択</em>
//                   </MenuItem>
//                   <MenuItem value="AWS">AWS</MenuItem>
//                   <MenuItem value="Docker">Docker</MenuItem>
//                   <MenuItem value="Firebase">Firebase</MenuItem>
//                   <MenuItem value="Javascript">Javascript</MenuItem>
//                   <MenuItem value="Material-ui">Material-ui</MenuItem>
//                   <MenuItem value="Node.js">Node</MenuItem>
//                   <MenuItem value="React">React</MenuItem>
//                   <MenuItem value="React-Router">React Router</MenuItem>
//                   <MenuItem value="Typescript">Typescript</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item>
//               <TextField
//                 label="メモ"
//                 variant="outlined"
//                 name="content"
//                 value={content}
//                 onChange={handleChange}
//                 style={{ width: '300px', marginBottom: '20px' }}
//                 multiline
//                 rows={2}
//               />
//               <Fab
//                 color="primary"
//                 type="submit"
//                 size="small"
//                 style={{ marginLeft: '10px', marginTop: '15px' }}
//               >
//                 <AddIcon />
//               </Fab>
//             </Grid>
//           </Grid>
//         </form>
//         <hr />
//         {/*メモがあればソート機能を表示させる*/}
//         {memo.length > 0 && (
//           <div>
//             <div className={classes.container}>
//               <Typography variant="subtitle1">メモ一覧</Typography>
//             </div>
//             <MemoSort
//               memo={memo}
//               sortMemo={sortMemo}
//               sortCategory={sortCategory}
//               sortTime={sortTime}
//               setMemo={setMemo}
//               setSortMemo={setSortMemo}
//               setSortCategory={setSortCategory}
//               setSortTime={setSortTime}
//             />
//           </div>
//         )}
//         {/*メモが存在し、全てのメモを表示を変更する or ソート値によってメモの表示を変更する*/}
//         {memo.length > 0 ? (
//           !sortCategory ? (
//             memo.map((m, index) => (
//               <Grid container key={index} className={classes.container}>
//                 <Grid item className={classes.extra}>
//                   <Memo
//                     memoContent={m.content}
//                     memoCategory={m.category}
//                     time={m.time}
//                     state={m}
//                     category={category}
//                     content={content}
//                     memo={memo}
//                     setContent={setContent}
//                     setCategory={setCategory}
//                     setMemo={setMemo}
//                     handelRemove={() => handelRemove(m.id)}
//                   />
//                 </Grid>
//               </Grid>
//             ))
//           ) : (
//             sortMemo.map((m, index) => (
//               <Grid container key={index} className={classes.container}>
//                 <Grid item>
//                   <Memo
//                     content={m.content}
//                     category={m.category}
//                     time={m.time}
//                   />
//                 </Grid>
//               </Grid>
//             ))
//           )
//         ) : (
//           <div className={classes.note}>
//             <Typography variant="body2">
//               カテゴリー選択を行い、「 + 」をクリックしメモを作成しましょう。
//             </Typography>
//           </div>
//         )}
//       </Grid>
//     </Grid>
