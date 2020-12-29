import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectSample = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const [order, setOrder] = React.useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          カテゴリー
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={category}
          onChange={handleChangeCategory}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>選択してください</em>
          </MenuItem>
          <MenuItem value="react">React</MenuItem>
          <MenuItem value="typescript">Typescript</MenuItem>
          <MenuItem value="firebase">Firebase</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          並び替え
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={order}
          onChange={handleChangeOrder}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>選択してください</em>
          </MenuItem>
          <MenuItem value="des">新しい順に並び替える</MenuItem>
          <MenuItem value="asc">古い順に並び替える</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
