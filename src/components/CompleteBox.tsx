import React, { useContext, FC } from 'react';
import { Checkbox } from '@material-ui/core';
import { VideoContext } from '../contexts/video-context';
import { firebase } from '../firebase/firebase.util';
import { CourseProps } from '../types/types';
import { VideoProps } from '../types/types';

//視聴済みかどうかのチェックボックス
export const CompleteBox: FC<CourseProps> = ({ title, path, completed }) => {
  const firestore = firebase.firestore();
  const {
    AWVideo,
    DVideo,
    FVideo,
    JVideo,
    MVideo,
    NVideo,
    RVideo,
    RRVideo,
    TVideo,
    currentUser,
    guestUser,
    setAWVideo,
    setDVideo,
    setFVideo,
    setJVideo,
    setMVideo,
    setNVideo,
    setRVideo,
    setRRVideo,
    setTVideo,
  } = useContext(VideoContext);

  //pathの文字列からコース名だけ抽出する Ex: "/courses/react/1" ==> react
  let removeCourse = path.replace('/courses/', '');
  let findEscape = removeCourse.indexOf('/');
  let editedPath = removeCourse.slice(0, findEscape);

  //抽出されたコース名によってセットするデータを決定する
  let newItems = null;
  let targetItem = null;

  const saveCompleteStatus = () => {
    let videoData = [];
    switch (editedPath) {
      case 'aws':
        videoData = AWVideo;
        break;
      case 'docker':
        videoData = DVideo;
        break;
      case 'firebase':
        videoData = FVideo;
        break;
      case 'javascript':
        videoData = JVideo;
        break;
      case 'node':
        videoData = NVideo;
        break;
      case 'react':
        videoData = RVideo;
        break;
      case 'router':
        videoData = RRVideo;
        break;
      case 'typescript':
        videoData = TVideo;
        break;
      case 'material':
        videoData = MVideo;
        break;
      default:
        break;
    }

    //クリックした動画Titleと格納しておいた動画データのタイトル名が一致したらcompletedのBoolean値をToggleさせる
    newItems = videoData.map((item: VideoProps) => {
      if (item.title === title) {
        item.completed = !item.completed;
      }
      return item;
    });

    //completedのBoolean値を更新する
    switch (editedPath) {
      case 'aws':
        setAWVideo(newItems);
        break;
      case 'docker':
        setDVideo(newItems);
        break;
      case 'firebase':
        setFVideo(newItems);
        break;
      case 'javascript':
        setJVideo(newItems);
        break;
      case 'node':
        setNVideo(newItems);
        break;
      case 'react':
        setRVideo(newItems);
        break;
      case 'router':
        setRRVideo(newItems);
        break;
      case 'typescript':
        setTVideo(newItems);
        break;
      case 'material':
        setMVideo(newItems);
        break;
      default:
        break;
    }

    //firesoreの更新するデータの抽出
    targetItem = videoData.filter((v: any) => v.title === title);
    targetItem[0].completed = !completed;

    //匿名ユーザーでなければ、firestoreのデータを更新する
    if (currentUser.isAnonymous === false || guestUser.isAnonymous === false) {
      firestore
        .collection('users')
        .doc(currentUser.uid)
        .collection('videos')
        .doc(targetItem[0].id)
        .update({ completed: targetItem[0].completed });
      //匿名ユーザーであれば、sessionStorageにデータを一時保存させる
    } else {
      sessionStorage.setItem(`${editedPath}`, JSON.stringify(newItems));
    }
  };

  return (
    <Checkbox
      checked={completed}
      inputProps={{ 'aria-label': 'primary checkbox' }}
      onChange={saveCompleteStatus}
    />
  );
};
