import React, { useContext, FC } from 'react';
import { Checkbox } from '@material-ui/core';
import { VideoContext } from '../../contexts/video-context';
import { firebase } from '../../firebase/firebase.util';
import { CourseProps } from '../../types/types';
import { VideoProps } from '../../types/types';

//視聴済みかどうかのチェックボックス
export const CompleteBox: FC<CourseProps> = ({ title, completed }) => {
  const firestore = firebase.firestore();
  const { allVideo, currentUser, setAllVideo } = useContext(VideoContext);

  //抽出されたコース名によってセットするデータを決定する
  let newItems = null;
  let targetItem = null;

  const saveCompleteStatus = () => {
    //クリックした動画Titleと動画データのタイトル名が一致したらcompletedのBoolean値をToggleさせる
    newItems = allVideo.map((item: VideoProps) => {
      if (item.title === title) {
        item.completed = !item.completed;
      }
      return item;
    });

    setAllVideo(newItems);

    //firesoreの更新するデータの抽出
    targetItem = allVideo.filter((v: any) => v.title === title);
    targetItem[0].completed = !completed;

    //firestoreの動画データを更新
    firestore
      .collection('users')
      .doc(currentUser.uid)
      .collection('videos')
      .doc(targetItem[0].id)
      .update({ completed: targetItem[0].completed });
  };

  return (
    <Checkbox
      checked={completed}
      inputProps={{ 'aria-label': 'primary checkbox' }}
      onChange={saveCompleteStatus}
    />
  );
};
