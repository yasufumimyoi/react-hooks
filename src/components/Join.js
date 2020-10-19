import React from "react";

const Join = () => {
  return (
    <div>
      <h2>Master JavaScript and React</h2>
      <p>More than 100 videos listed and you can check your progress</p>
      <form>
        <p>Username or Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />
        <button>Start Learning</button>
      </form>
    </div>
  );
};

export default Join;

// const { MVideo, setMVideo } = useContext(VideoContext);

// const handelToggle = (id) => {
//   const newItems = MVideo.map((item) => {
//     if (item.id === id) {
//       item.completed = !item.completed;
//     }
//     return item;
//   });
//   setMVideo(newItems);
// };

// console.log(MVideo);

// return (
//   <div>
//     {MVideo.map((item) => (
//       <div key={item.id}>
//         <p>{item.path}</p>
//         <button onClick={() => handelToggle(item.id)}>Toggle</button>
//       </div>
//     ))}
//   </div>
// );
