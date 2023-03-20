import express from 'express';

const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const newArr = [];
  for (const key in grades) {
    newArr.push(grades[key]);
  }
  res.json(newArr);
});

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080!');
});
