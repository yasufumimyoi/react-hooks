import React, { useEffect, useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { format } from 'date-fns';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { firebase } from '../firebase/firebase.util';
import { VideoContext } from '../contexts/video-context';

export const EditDialog = ({ state, setContent, setCategory, memo }) => {
  const [open, setOpen] = React.useState(false);
  const now = format(new Date(), 'yyyy/MMM/do');
  const { currentUser } = useContext(VideoContext);
  const [editCategory, setEditCategory] = useState('');
  const [editContent, setEditContent] = useState('');

  //モーダルの開閉
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //モーダルが開いたら入力フォームに修正する値をセットする
  useEffect(() => {
    if (open === false) {
      setEditCategory('');
      setEditContent('');
    } else {
      setEditCategory(state.category);
      setEditContent(state.content);
    }
  }, [open]);

  //メモの更新
  const handleEdit = async () => {
    const newMemo = memo.filter((memo) => memo.id === state.id);
    const updatedContent = (newMemo[0].content = editContent);
    const updatedCategory = (newMemo[0].category = editCategory);
    const updatedTime = (newMemo[0].time = now);
    await setContent(updatedContent);
    await setCategory(updatedCategory);
    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .collection('memo')
      .doc(newMemo[0].id)
      .update({
        id: newMemo[0].id,
        category: updatedCategory,
        content: updatedContent,
        time: updatedTime,
      });
    setContent('');
    setCategory('');
    setEditCategory('');
    setEditContent('');
    handleClose();
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <EditIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>確認してください</DialogTitle>
        <DialogContent>
          <DialogContentText>メモの修正</DialogContentText>
          <Select
            value={editCategory}
            name="category"
            displayEmpty
            onChange={(event) => setEditCategory(event.target.value)}
          >
            <MenuItem value="">
              <em>選択してください</em>
            </MenuItem>
            <MenuItem value="AWS">AWS</MenuItem>
            <MenuItem value="Docker">Docker</MenuItem>
            <MenuItem value="Firebase">Firebase</MenuItem>
            <MenuItem value="Javascript">Javascript</MenuItem>
            <MenuItem value="Material-ui">Material-ui</MenuItem>
            <MenuItem value="Node.js">Node.js</MenuItem>
            <MenuItem value="React">React</MenuItem>
            <MenuItem value="React-Router">React Router</MenuItem>
            <MenuItem value="Typescript">Typescript</MenuItem>
          </Select>
          <TextField
            autoFocus
            margin="dense"
            name="content"
            label="メモ"
            type="text"
            fullWidth
            value={editContent}
            onChange={(event) => setEditContent(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button color="primary" type="submit" onClick={handleEdit}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// <div>
// <IconButton aria-label="delete" onClick={handleClickOpen}>
//   <EditIcon fontSize="small" />
// </IconButton>
// <Dialog open={open} onClose={handleClose}>
//   <DialogTitle>確認してください</DialogTitle>
//   <DialogContent>
//     <DialogContentText>メモの修正</DialogContentText>
//     <Select
//       value={category}
//       name="category"
//       displayEmpty
//       onChange={(event) => setCategory(event.target.value)}
//     >
//       <MenuItem value="">
//         <em>選択してください</em>
//       </MenuItem>
//       <MenuItem value="AWS">AWS</MenuItem>
//       <MenuItem value="Docker">Docker</MenuItem>
//       <MenuItem value="Firebase">Firebase</MenuItem>
//       <MenuItem value="Javascript">Javascript</MenuItem>
//       <MenuItem value="Material-ui">Material-ui</MenuItem>
//       <MenuItem value="Node.js">Node.js</MenuItem>
//       <MenuItem value="React">React</MenuItem>
//       <MenuItem value="React-Router">React Router</MenuItem>
//       <MenuItem value="Typescript">Typescript</MenuItem>
//     </Select>
//     <TextField
//       autoFocus
//       margin="dense"
//       name="content"
//       label="メモ"
//       type="text"
//       fullWidth
//       value={content}
//       onChange={(event) => setContent(event.target.value)}
//     />
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={handleClose} color="primary">
//       キャンセル
//     </Button>
//     <Button color="primary" type="submit" onClick={handleEdit}>
//       OK
//     </Button>
//   </DialogActions>
// </Dialog>
// </div>
