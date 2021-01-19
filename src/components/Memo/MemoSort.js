import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const MemoSort = ({
  memo,
  sortMemo,
  sortCategory,
  sortTime,
  setMemo,
  setSortMemo,
  setSortTime,
}) => {
  //メモを新しい順に並び替える

  const handleSortDesc = () => {
    if (!sortCategory) {
      const result = memo.sort((a, b) => {
        if (a.time > b.time) {
          return -1;
        } else {
          return 1;
        }
      });
      setMemo([...result]);
    } else {
      const result = sortMemo.sort((a, b) => {
        if (a.time > b.time) {
          return -1;
        } else {
          return 1;
        }
      });
      setSortMemo([...result]);
    }
  };

  //メモを古い順に並び替える
  const handleSortAsc = () => {
    if (!sortCategory) {
      const result = memo.sort((a, b) => {
        if (a.time < b.time) {
          return -1;
        } else {
          return 1;
        }
      });
      setMemo([...result]);
    } else {
      const result = sortMemo.sort((a, b) => {
        if (a.time < b.time) {
          return -1;
        } else {
          return 1;
        }
      });
      setSortMemo([...result]);
    }
  };

  //select値によってメモを並び替える
  useEffect(() => {
    if (sortTime === 'new') {
      handleSortDesc();
    } else if (sortTime === '') {
      handleSortAsc();
    }
    // eslint-disable-next-line
  }, [sortTime]);

  return (
    <div>
      <FormControl style={{ marginBottom: '10px' }}>
        <InputLabel shrink>日付順</InputLabel>
        <Select
          value={sortTime}
          name="time"
          onChange={(e) => setSortTime(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">
            <em>新しい順に並び替える</em>
          </MenuItem>
          <MenuItem value="new">古い順に並び替える</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

// <div>
// <FormControl style={{ marginBottom: '20px' }}>
//   <InputLabel shrink>カテゴリー別</InputLabel>
//   <Select
//     value={sortCategory}
//     name="category"
//     onChange={(e) => setSortCategory(e.target.value)}
//     displayEmpty
//   >
//     <MenuItem value="">
//       <em>全ての動画</em>
//     </MenuItem>
//     <MenuItem value="AWS">AWS</MenuItem>
//     <MenuItem value="Docker">Docker</MenuItem>
//     <MenuItem value="Firebase">Firebase</MenuItem>
//     <MenuItem value="Javascript">Javascript</MenuItem>
//     <MenuItem value="Material-ui">Material-ui</MenuItem>
//     <MenuItem value="Node.js">Node</MenuItem>
//     <MenuItem value="React">React</MenuItem>
//     <MenuItem value="React-Router">React Router</MenuItem>
//     <MenuItem value="Typescript">Typescript</MenuItem>
//   </Select>
// </FormControl>
// <FormControl style={{ marginBottom: '20px' }}>
//   <InputLabel shrink>日付順</InputLabel>
//   <Select
//     value={sortTime}
//     name="time"
//     onChange={(e) => setSortTime(e.target.value)}
//     displayEmpty
//   >
//     <MenuItem value="">
//       <em>古い順に並び替える</em>
//     </MenuItem>
//     <MenuItem value="new">新しい順に並び替える</MenuItem>
//   </Select>
// </FormControl>
// </div>
