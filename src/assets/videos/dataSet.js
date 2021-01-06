// import { useEffect } from 'react';
// import { firebase } from '../../firebase/firebase.util';

// const batch = firebase.firestore().batch();

// useEffect(() => {
//   //Docker
//   const d1 = firebase.firestore().collection('videoData').doc('docker_1');
//   const d2 = firebase.firestore().collection('videoData').doc('docker_2');
//   const d3 = firebase.firestore().collection('videoData').doc('docker_3');
//   batch.set(d1, {
//     id: 'docker_1',
//     url: 'https://www.youtube.com/watch?v=gAkwW2tuIqE',
//     image: 'http://img.youtube.com/vi/gAkwW2tuIqE/mqdefault.jpg',
//     title: "Learn Docker in 7 Easy Steps - Full Beginner's Tutorial",
//     path: '/courses/docker/1',
//     completed: false,
//     category: 'docker',
//   });
//   batch.set(d2, {
//     id: 'docker_2',
//     url: 'https://www.youtube.com/watch?v=Gjnup-PuquQ',
//     image: 'http://img.youtube.com/vi/Gjnup-PuquQ/mqdefault.jpg',
//     title: 'Docker in 100 Seconds',
//     path: '/courses/docker/2',
//     completed: false,
//     category: 'docker',
//   });
//   batch.set(d3, {
//     id: 'docker_3',
//     url: 'https://www.youtube.com/watch?v=zJ6WbK9zFpI',
//     image: 'http://img.youtube.com/vi/zJ6WbK9zFpI/mqdefault.jpg',
//     title: 'Docker for Beginners: Full Free Course!',
//     path: '/courses/docker/3',
//     completed: false,
//     category: 'docker',
//   });
//   batch.commit();
// });

// useEffect(() => {
//   //firebase
//   const f1 = firebase.firestore().collection('videoData').doc('firebase_1');
//   const f2 = firebase.firestore().collection('videoData').doc('firebase_2');
//   const f3 = firebase.firestore().collection('videoData').doc('firebase_3');
//   const f4 = firebase.firestore().collection('videoData').doc('firebase_4');
//   const f5 = firebase.firestore().collection('videoData').doc('firebase_5');
//   const f6 = firebase.firestore().collection('videoData').doc('firebase_6');
//   const f7 = firebase.firestore().collection('videoData').doc('firebase_7');
//   batch.set(f1, {
//     id: 'firebase_1',
//     url: 'https://www.youtube.com/watch?v=meofoNuK3vo&t=133s',
//     image: 'http://img.youtube.com/vi/meofoNuK3vo/mqdefault.jpg',
//     title: 'Firebase Hosting をウェブで始めよう！ - Firecasts',
//     path: '/courses/firebase/1',
//     completed: false,
//     category: 'firebase',
//   });
//   batch.set(f2, {
//     id: 'firebase_2',
//     url: 'https://www.youtube.com/watch?v=unr4s3jd9qA&t=329s',
//     image: 'http://img.youtube.com/vi/unr4s3jd9qA/mqdefault.jpg',
//     title:
//       'Firebase React Authentication Tutorial For Beginners - Private Route With Hooks',
//     path: '/courses/firebase/2',
//     completed: false,
//     category: 'firebase',
//   });
//   batch.set(f3, {
//     id: 'firebase_3',
//     url: 'https://www.youtube.com/watch?v=zQyrwxMPm88',
//     image: 'http://img.youtube.com/vi/zQyrwxMPm88/mqdefault.jpg',
//     title: 'I built a chat app in 7 minutes with React & Firebase',
//     path: '/courses/firebase/3',
//     completed: false,
//     category: 'firebase',
//   });

//   batch.set(f4, {
//     id: 'firebase_4',
//     url: 'https://www.youtube.com/watch?v=mmmaeHBCTOw',
//     image: 'http://img.youtube.com/vi/mmmaeHBCTOw/mqdefault.jpg',
//     title: 'Firebase Hosting Tutorial #1 - Intro & Installation',
//     path: '/courses/firebase/4',
//     completed: false,
//     category: 'firebase',
//   });
//   batch.set(f5, {
//     id: 'firebase_5',
//     url: 'https://www.youtube.com/watch?v=ApG8L2RKrSI&t=350s',
//     image: 'http://img.youtube.com/vi/ApG8L2RKrSI/mqdefault.jpg',
//     title: 'Web の Firebase 匿名認証を開始するには- Firecasts',
//     path: '/courses/firebase/5',
//     completed: false,
//     category: 'firebase',
//   });
//   batch.set(f6, {
//     id: 'firebase_6',
//     url: 'https://www.youtube.com/watch?v=kX8by4eCyG4',
//     image: 'http://img.youtube.com/vi/kX8by4eCyG4/mqdefault.jpg',
//     title: 'Server-side Firebase Authentication Using Express JS',
//     path: '/courses/firebase/6',
//     completed: false,
//     category: 'firebase',
//   });
//   batch.set(f7, {
//     id: 'firebase_7',
//     url: 'https://www.youtube.com/watch?v=8cOlDAxFmxM&t=114s',
//     image: 'http://img.youtube.com/vi/8cOlDAxFmxM/mqdefault.jpg',
//     title: 'Firebase Authentication State Persistence',
//     path: '/courses/firebase/7',
//     completed: false,
//     category: 'firebase',
//   });
//   batch.commit();
// });

// useEffect(() => {
//   //javascript
//   const j1 = firebase.firestore().collection('videoData').doc('javascript_1');
//   const j2 = firebase.firestore().collection('videoData').doc('javascript_2');
//   const j3 = firebase.firestore().collection('videoData').doc('javascript_3');
//   const j4 = firebase.firestore().collection('videoData').doc('javascript_4');
//   const j5 = firebase.firestore().collection('videoData').doc('javascript_5');
//   const j6 = firebase.firestore().collection('videoData').doc('javascript_6');
//   batch.set(j1, {
//     id: 'javascript_1',
//     url: 'https://www.youtube.com/watch?v=_ApRMRGI-6g',
//     image: 'http://img.youtube.com/vi/_ApRMRGI-6g/mqdefault.jpg',
//     title: "Heres how JavaScript's Nested Object Destructuring works",
//     path: '/courses/javascript/1',
//     completed: false,
//     category: 'javascript',
//   });
//   batch.set(j2, {
//     id: 'javascript_2',
//     url: 'https://www.youtube.com/watch?v=NIq3qLaHCIs&t=374s',
//     image: 'http://img.youtube.com/vi/NIq3qLaHCIs/mqdefault.jpg',
//     title: 'Why Is Array/Object Destructuring So Useful And How To Use It',
//     path: '/courses/javascript/2',
//     completed: false,
//     category: 'javascript',
//   });
//   batch.set(j3, {
//     id: 'javascript_3',
//     url: 'https://www.youtube.com/watch?v=-vR3a11Wzt0',
//     image: 'http://img.youtube.com/vi/-vR3a11Wzt0/mqdefault.jpg',
//     title: 'Destructuring in ES6 - Beau teaches JavaScript',
//     path: '/courses/javascript/3',
//     completed: false,
//     category: 'javascript',
//   });

//   batch.set(j4, {
//     id: 'javascript_4',
//     url: 'https://www.youtube.com/watch?v=iLx4ma8ZqvQ&t=193s',
//     image: 'http://img.youtube.com/vi/iLx4ma8ZqvQ/mqdefault.jpg',
//     title: '...spread operator and rest operator - Beau teaches JavaScript',
//     path: '/courses/javascript/4',
//     completed: false,
//     category: 'javascript',
//   });
//   batch.set(j5, {
//     id: 'javascript_5',
//     url: 'https://www.youtube.com/watch?v=V_Kr9OSfDeU',
//     image: 'http://img.youtube.com/vi/V_Kr9OSfDeU/mqdefault.jpg',
//     title: 'JavaScript Async Await',
//     path: '/courses/javascript/5',
//     completed: false,
//     category: 'javascript',
//   });
//   batch.set(j6, {
//     id: 'javascript_6',
//     url: 'https://www.youtube.com/watch?v=Bv_5Zv5c-Ts',
//     image: 'http://img.youtube.com/vi/Bv_5Zv5c-Ts/mqdefault.jpg',
//     title: 'JavaScript: Understanding the Weird Parts - The First 3.5 Hours',
//     path: '/courses/javascript/6',
//     completed: false,
//     category: 'javascript',
//   });
//   batch.commit();
// });

// useEffect(() => {
//   //material
//   const m1 = firebase.firestore().collection('videoData').doc('material_1');
//   const m2 = firebase.firestore().collection('videoData').doc('material_2');
//   const m3 = firebase.firestore().collection('videoData').doc('material_3');
//   const m4 = firebase.firestore().collection('videoData').doc('material_4');
//   const m5 = firebase.firestore().collection('videoData').doc('material_5');
//   const m6 = firebase.firestore().collection('videoData').doc('material_6');
//   const m7 = firebase.firestore().collection('videoData').doc('material_7');
//   const m8 = firebase.firestore().collection('videoData').doc('material_8');
//   const m9 = firebase.firestore().collection('videoData').doc('material_9');
//   batch.set(m1, {
//     id: 'material_1',
//     url: 'https://www.youtube.com/watch?v=tKzSnjWPtEw',
//     image: 'http://img.youtube.com/vi/tKzSnjWPtEw/mqdefault.jpg',
//     title: 'React + Material UI #2: Actually coding a UX design',
//     path: '/courses/material/1',
//     completed: false,
//     category: 'material',
//   });
//   batch.set(m2, {
//     id: 'material_2',
//     url: 'https://www.youtube.com/watch?v=3HAARPCabUo',
//     image: 'http://img.youtube.com/vi/3HAARPCabUo/mqdefault.jpg',
//     title: 'React & Material UI #26: Header (Appbar + Toolbar) & React Router',
//     path: '/courses/material/2',
//     completed: false,
//     category: 'material',
//   });
//   batch.set(m3, {
//     id: 'material_3',
//     url: 'https://www.youtube.com/watch?v=zT62eVxShsY',
//     image: 'http://img.youtube.com/vi/zT62eVxShsY/mqdefault.jpg',
//     title: 'Multi Step Form With React & Material UI',
//     path: '/courses/material/3',
//     completed: false,
//     category: 'material',
//   });

//   batch.set(m4, {
//     id: 'material_4',
//     url: 'https://www.youtube.com/watch?v=rK0Lz8x7npA',
//     image: 'http://img.youtube.com/vi/rK0Lz8x7npA/mqdefault.jpg',
//     title: 'Build landing page with React and Material UI.',
//     path: '/courses/material/4',
//     completed: false,
//     category: 'material',
//   });
//   batch.set(m5, {
//     id: 'material_5',
//     url: 'https://www.youtube.com/watch?v=Jkj_XP80h1k',
//     image: 'http://img.youtube.com/vi/Jkj_XP80h1k/mqdefault.jpg',
//     title: 'Material-UI + React Router - #7 Navigation Menu',
//     path: '/courses/material/5',
//     completed: false,
//     category: 'material',
//   });
//   batch.set(m6, {
//     id: 'material_6',
//     url: 'https://www.youtube.com/watch?v=DJ1_CKs_LPI',
//     image: 'http://img.youtube.com/vi/DJ1_CKs_LPI/mqdefault.jpg',
//     title: 'Material UI React - Build a Blog page',
//     path: '/courses/material/6',
//     completed: false,
//     category: 'material',
//   });
//   batch.set(m7, {
//     id: 'material_7',
//     url: 'https://www.youtube.com/watch?v=vyJU9efvUtQ',
//     image: 'http://img.youtube.com/vi/vyJU9efvUtQ/mqdefault.jpg',
//     title: 'Material UI React Tutorial',
//     path: '/courses/material/7',
//     completed: false,
//     category: 'material',
//   });
//   batch.set(m8, {
//     id: 'material_8',
//     url: 'https://www.youtube.com/watch?v=-XKaSCU0ZLM',
//     image: 'http://img.youtube.com/vi/-XKaSCU0ZLM/mqdefault.jpg',
//     title: 'How to Design a Perfect React Material UI Form',
//     path: '/courses/material/8',
//     completed: false,
//     category: 'material',
//   });
//   batch.set(m9, {
//     id: 'material_9',
//     url: 'https://www.youtube.com/watch?v=jnQ1-XW7KNY',
//     image: 'http://img.youtube.com/vi/jnQ1-XW7KNY/mqdefault.jpg',
//     title: 'React Material UI Table with Paging Sorting and Filtering',
//     path: '/courses/material/9',
//     completed: false,
//     category: 'material',
//   });
//   batch.commit();
// });

// useEffect(() => {
//   //node
//   const n1 = firebase.firestore().collection('videoData').doc('node_1');
//   const n2 = firebase.firestore().collection('videoData').doc('node_2');
//   const n3 = firebase.firestore().collection('videoData').doc('node_3');
//   const n4 = firebase.firestore().collection('videoData').doc('node_4');
//   batch.set(n1, {
//     id: 'node_1',
//     url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
//     image: 'http://img.youtube.com/vi/L72fhGm1tfE/mqdefault.jpg',
//     title: 'Express JS Crash Course',
//     path: '/courses/node/1',
//     completed: false,
//     category: 'node',
//   });
//   batch.set(n2, {
//     id: 'node_2',
//     url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
//     image: 'http://img.youtube.com/vi/fBNz5xF-Kx4/mqdefault.jpg',
//     title: 'Node.js Crash Course',
//     path: '/courses/node/2',
//     completed: false,
//     category: 'node',
//   });
//   batch.set(n3, {
//     id: 'node_3',
//     url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48',
//     image: 'http://img.youtube.com/vi/pKd0Rpw7O48/mqdefault.jpg',
//     title: 'How to build a REST API with Node js & Express',
//     path: '/courses/node/3',
//     completed: false,
//     category: 'node',
//   });
//   batch.set(n4, {
//     id: 'node_4',
//     url: 'https://www.youtube.com/watch?v=lY6icfhap2o',
//     image: 'http://img.youtube.com/vi/lY6icfhap2o/mqdefault.jpg',
//     title: 'Learn Express Middleware In 14 Minutes',
//     path: '/courses/node/4',
//     completed: false,
//     category: 'node',
//   });
//   batch.commit();
// });

// useEffect(() => {
//   //router
//   const rr1 = firebase.firestore().collection('videoData').doc('router_1');
//   const rr2 = firebase.firestore().collection('videoData').doc('router_2');
//   const rr3 = firebase.firestore().collection('videoData').doc('router_3');
//   const rr4 = firebase.firestore().collection('videoData').doc('router_4');
//   const rr5 = firebase.firestore().collection('videoData').doc('router_5');
//   const rr6 = firebase.firestore().collection('videoData').doc('router_6');
//   const rr7 = firebase.firestore().collection('videoData').doc('router_7');
//   const rr8 = firebase.firestore().collection('videoData').doc('router_8');
//   const rr9 = firebase.firestore().collection('videoData').doc('router_9');
//   batch.set(rr1, {
//     id: 'router_1',
//     url: 'https://www.youtube.com/watch?v=Law7wfdg_ls&t=15s',
//     image: 'http://img.youtube.com/vi/Law7wfdg_ls/mqdefault.jpg',
//     title: 'React Router Tutorial | React For Beginners',
//     path: '/courses/router/1',
//     completed: false,
//     category: 'router',
//   });
//   batch.set(rr2, {
//     id: 'router_2',
//     url: 'https://www.youtube.com/watch?v=Myq2ssDQoDw',
//     image: 'http://img.youtube.com/vi/Myq2ssDQoDw/mqdefault.jpg',
//     title: 'Learn React Router in 10 Minutes! | React Tutorials',
//     path: '/courses/router/2',
//     completed: false,
//     category: 'router',
//   });
//   batch.set(rr3, {
//     id: 'router_3',
//     url: 'https://www.youtube.com/watch?v=CZeulkp1ClA',
//     image: 'http://img.youtube.com/vi/CZeulkp1ClA/mqdefault.jpg',
//     title: 'React router with hooks ( useHistory useParam useLocation )',
//     path: '/courses/router/3',
//     completed: false,
//     category: 'router',
//   });
//   batch.set(rr4, {
//     id: 'router_4',
//     url: 'https://www.youtube.com/watch?v=eofpZPRUnP8',
//     image: 'http://img.youtube.com/vi/eofpZPRUnP8/mqdefault.jpg',
//     title: 'ReactJS Basics - #15 React Router - Route Setup',
//     path: '/courses/router/4',
//     completed: false,
//     category: 'router',
//   });
//   batch.set(rr5, {
//     id: 'router_5',
//     url: 'https://www.youtube.com/watch?v=hjR-ZveXBpQ',
//     image: 'http://img.youtube.com/vi/hjR-ZveXBpQ/mqdefault.jpg',
//     title: 'ReactJS Basics - #16 React Router - Navigation & Parameters',
//     path: '/courses/router/5',
//     completed: false,
//     category: 'router',
//   });
//   batch.set(rr6, {
//     id: 'router_6',
//     url: 'https://www.youtube.com/watch?v=lCbcB9AU-98',
//     image: 'http://img.youtube.com/vi/lCbcB9AU-98/mqdefault.jpg',
//     title: 'Intro to React Router for Beginners (Multi-Page Apps)',
//     path: '/courses/router/6',
//     completed: false,
//     category: 'router',
//   });
//   batch.set(rr7, {
//     id: 'router_7',
//     url: 'https://www.youtube.com/watch?v=yQf1KbGiwiI',
//     image: 'http://img.youtube.com/vi/yQf1KbGiwiI/mqdefault.jpg',
//     title: 'React Router Tutorial - Setup in 5 Minutes',
//     path: '/courses/router/7',
//     completed: false,
//     category: 'router',
//   });
//   batch.set(rr8, {
//     id: 'router_8',
//     url: 'https://www.youtube.com/watch?v=110dW3l5GQY',
//     image: 'http://img.youtube.com/vi/110dW3l5GQY/mqdefault.jpg',
//     title: 'React Router Tutorial',
//     path: '/courses/router/8',
//     completed: false,
//     category: 'router',
//   });
//   batch.set(rr9, {
//     id: 'router_9',
//     url: 'https://www.youtube.com/watch?v=Y0-qdp-XBJg',
//     image: 'http://img.youtube.com/vi/Y0-qdp-XBJg/mqdefault.jpg',
//     title: 'Protected Routes in React using React Router',
//     path: '/courses/router/9',
//     completed: false,
//     category: 'router',
//   });
//   batch.commit();
// });

// useEffect(() => {
//   //react
//   const r1 = firebase.firestore().collection('videoData').doc('react_1');
//   const r2 = firebase.firestore().collection('videoData').doc('react_2');
//   const r3 = firebase.firestore().collection('videoData').doc('react_3');
//   const r4 = firebase.firestore().collection('videoData').doc('react_4');
//   const r5 = firebase.firestore().collection('videoData').doc('react_5');
//   const r6 = firebase.firestore().collection('videoData').doc('react_6');
//   const r7 = firebase.firestore().collection('videoData').doc('react_7');
//   const r8 = firebase.firestore().collection('videoData').doc('react_8');
//   const r9 = firebase.firestore().collection('videoData').doc('react_9');
//   batch.set(r1, {
//     id: 'react_1',
//     url: 'https://www.youtube.com/watch?v=ufodJVcpmps&t=2068s',
//     image: 'http://img.youtube.com/vi/ufodJVcpmps/mqdefault.jpg',
//     title: 'Build a Movie APP With React | React Tutorial for Beginners',
//     path: '/courses/react/1',
//     completed: false,
//     category: 'react',
//   });
//   batch.set(r2, {
//     id: 'react_2',
//     url: 'https://www.youtube.com/watch?v=GuA0_Z1llYU&t=1465s',
//     image: 'http://img.youtube.com/vi/GuA0_Z1llYU/mqdefault.jpg',
//     title: 'Build a Weather App in React JS | React JS beginner Tutorial',
//     path: '/courses/react/2',
//     completed: false,
//     category: 'react',
//   });
//   batch.set(r3, {
//     id: 'react_3',
//     url: 'https://www.youtube.com/watch?v=U9T6YkEDkMo',
//     image: 'http://img.youtube.com/vi/U9T6YkEDkMo/mqdefault.jpg',
//     title: 'Build a Recipe App With React | React Tutorial For Beginners',
//     path: '/courses/react/3',
//     completed: false,
//     category: 'react',
//   });
//   batch.set(r4, {
//     id: 'react_4',
//     url: 'https://www.youtube.com/watch?v=hQAHSlTtcmY',
//     image: 'http://img.youtube.com/vi/hQAHSlTtcmY/mqdefault.jpg',
//     title: 'Learn React In 30 Minutes',
//     path: '/courses/react/4',
//     completed: false,
//     category: 'react',
//   });
//   batch.set(r5, {
//     id: 'react_5',
//     url: 'https://www.youtube.com/watch?v=DLX62G4lc44',
//     image: 'http://img.youtube.com/vi/DLX62G4lc44/mqdefault.jpg',
//     title: 'Learn React JS - Full Course for Beginners - Tutorial 2019',
//     path: '/courses/react/5',
//     completed: false,
//     category: 'react',
//   });
//   batch.set(r6, {
//     id: 'react_6',
//     url: 'https://www.youtube.com/watch?v=khJlrj3Y6Ls&t=124s',
//     image: 'http://img.youtube.com/vi/khJlrj3Y6Ls/mqdefault.jpg',
//     title:
//       'Build a COVID-19 Tracker Application - React JS Project (Hooks, Material UI, Charts js)',
//     path: '/courses/react/6',
//     completed: false,
//     category: 'react',
//   });
//   batch.set(r7, {
//     id: 'react_7',
//     url: 'https://www.youtube.com/watch?v=VPVzx1ZOVuw&t=1711s',
//     image: 'http://img.youtube.com/vi/VPVzx1ZOVuw/mqdefault.jpg',
//     title: 'Build a YouTube Clone Application Using React',
//     path: '/courses/react/7',
//     completed: false,
//     category: 'react',
//   });
//   batch.set(r8, {
//     id: 'react_8',
//     url: 'https://www.youtube.com/watch?v=o5CdCETh8cQ&t=1555s',
//     image: 'http://img.youtube.com/vi/o5CdCETh8cQ/mqdefault.jpg',
//     title: 'React Fetch API Data | Build and Deploy a Real Advice App Project',
//     path: '/courses/react/8',
//     completed: false,
//     category: 'react',
//   });
//   batch.set(r9, {
//     id: 'react_9',
//     url: 'https://www.youtube.com/watch?v=YaioUnMw0mo',
//     image: 'http://img.youtube.com/vi/YaioUnMw0mo/mqdefault.jpg',
//     title: 'React App - Breaking Bad API',
//     path: '/courses/react/9',
//     completed: false,
//     category: 'react',
//   });
//   batch.commit();
// });

// useEffect(() => {
//   //typescript
//   const t1 = firebase.firestore().collection('videoData').doc('typescript_1');
//   const t2 = firebase.firestore().collection('videoData').doc('typescript_2');
//   const t3 = firebase.firestore().collection('videoData').doc('typescript_3');
//   const t4 = firebase.firestore().collection('videoData').doc('typescript_4');
//   const t5 = firebase.firestore().collection('videoData').doc('typescript_5');
//   const t6 = firebase.firestore().collection('videoData').doc('typescript_6');
//   batch.set(t1, {
//     id: 'typescript_1',
//     url: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA',
//     image: 'http://img.youtube.com/vi/zQnBQ4tB3ZA/mqdefault.jpg',
//     title: 'TypeScript in 100 Seconds',
//     path: '/courses/typescript/1',
//     completed: false,
//     category: 'typescript',
//   });
//   batch.set(t2, {
//     id: 'typescript_2',
//     url: 'https://www.youtube.com/watch?v=BwuLxPH8IDs&t=3341s',
//     image: 'http://img.youtube.com/vi/BwuLxPH8IDs/mqdefault.jpg',
//     title:
//       'TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!',
//     path: '/courses/typescript/2',
//     completed: false,
//     category: 'typescript',
//   });
//   batch.set(t3, {
//     id: 'typescript_3',
//     url: 'https://www.youtube.com/watch?v=WBPrJSw7yQA&t=1397s',
//     image: 'http://img.youtube.com/vi/WBPrJSw7yQA/mqdefault.jpg',
//     title: 'Learn TypeScript in 50 Minutes - Tutorial for Beginners',
//     path: '/courses/typescript/3',
//     completed: false,
//     category: 'typescript',
//   });
//   batch.set(t4, {
//     id: 'typescript_4',
//     url: 'https://www.youtube.com/watch?v=1UcLoOD1lRM&t=282s',
//     image: 'http://img.youtube.com/vi/1UcLoOD1lRM/mqdefault.jpg',
//     title: 'Using Typescript in Node.js',
//     path: '/courses/typescript/4',
//     completed: false,
//     category: 'typescript',
//   });
//   batch.set(t5, {
//     id: 'typescript_5',
//     url: 'https://www.youtube.com/watch?v=Z5iWr6Srsj8&t=1204s',
//     image: 'http://img.youtube.com/vi/Z5iWr6Srsj8/mqdefault.jpg',
//     title: 'React Typescript Tutorial',
//     path: '/courses/typescript/5',
//     completed: false,
//     category: 'typescript',
//   });
//   batch.set(t6, {
//     id: 'typescript_6',
//     url: 'https://www.youtube.com/watch?v=F2JCjVSZlG0&t=3204s',
//     image: 'http://img.youtube.com/vi/F2JCjVSZlG0/mqdefault.jpg',
//     title: 'React / Typescript Tutorial - Build a Quiz App',
//     path: '/courses/typescript/6',
//     completed: false,
//     category: 'typescript',
//   });
//   batch.commit();
// });
