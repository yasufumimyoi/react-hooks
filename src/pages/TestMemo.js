import React, { useState } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
//import { SelectSample } from '../pages/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';

export const TestMemo = () => {
  const [memo, setMemo] = useState([]);
  const [category, setCategory] = React.useState('');
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'title':
        setCategory(event.target.value);
        break;
      case 'content':
        setContent(event.target.value);
        break;
      default:
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMemo([...memo, { category: category, content: content, time: now }]);
    setCategory('');
    setContent('');
  };

  const handelRemove = (item) => {
    const newItem = memo.filter((memo, index) => index !== item);
    setMemo(newItem);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const now = moment().format('MMMM Do YYYY, h:mm: a');

  return (
    <Grid container>
      <Grid item sm={12}>
        <h4>Memo</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl style={{ marginBottom: '20px' }}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                カテゴリー
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={category}
                onChange={handleChangeCategory}
                displayEmpty
              >
                <MenuItem value="">
                  <em>選択してください</em>
                </MenuItem>
                <MenuItem value="AWS">AWS</MenuItem>
                <MenuItem value="Typescript">Docker</MenuItem>
                <MenuItem value="Firebase">Firebase</MenuItem>
                <MenuItem value="Javascript">Javascript</MenuItem>
                <MenuItem value="Material-ui">Material-ui</MenuItem>
                <MenuItem value="Node.js">Node.js</MenuItem>
                <MenuItem value="React">React</MenuItem>
                <MenuItem value="React Router">React Router</MenuItem>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginLeft: '20px' }}
                size="large"
              >
                Add
              </Button>
            </div>
          </div>
        </form>
        <hr />
        {memo.map((m, index) => (
          <div key={index}>
            <Typography>{m.content}</Typography>
            <Typography color="textSecondary">
              Category: {m.category}
            </Typography>
            <Typography color="textSecondary">Time: {m.time}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handelRemove(index)}
            >
              Remove
            </Button>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};
