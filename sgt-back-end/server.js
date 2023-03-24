import express from 'express';
import pg from 'pg';
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
      from "grades"
    `;
    const result = await db.query(sql);
    const gradesArr = result.rows;
    res.status(200).json(gradesArr);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'An unexpected error occurred!' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    if (!req.body.name || !req.body.course || !req.body.score) {
      res.status(400).json({ error: 'Please provide all three information to add: name, course, score!' });
    } else if (!Number.isInteger(Number(req.body.score)) || Number(req.body.score) < 0 || Number(req.body.score) > 100) {
      res.status(400).json({ error: 'Please enter a positive integer for score from 0-100' });
    } else {
      const sql = `
        insert into "grades" ("name", "course", "score")
          values($1, $2, $3)
        returning *
      `;
      const params = [req.body.name, req.body.course, req.body.score];
      const result = await db.query(sql, params);
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'An unexpected error occurred!' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: 'Please provide a positive integer ID!' });
      return;
    } else if (!req.body.name || !req.body.course || !req.body.score) {
      res.status(400).json({ error: 'Please provide all three information to update: name, course, score!' });
      return;
    } else if (!Number.isInteger(Number(req.body.score)) || Number(req.body.score) < 0 || Number(req.body.score) > 100) {
      res.status(400).json({ error: 'Please enter a positive integer for score from 0-100' });
      return;
    }
    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
      returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score, gradeId];
    const result = await db.query(sql, params);
    const updateGrade = result.rows[0];
    if (!updateGrade) {
      res.status(404).json({ error: `The ID:${gradeId} is not found in database. Please enter an ID that exists.` });
    } else {
      res.status(200).json(updateGrade);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'An unexpected error occurred!' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: 'Please provide a positive integer ID!' });
      return;
    }
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
      returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deleteGrade = result.rows[0];
    if (!deleteGrade) {
      res.status(404).json({ error: `The ID:${gradeId} is not found in database. Please enter an ID that exists.` });
    } else {
      delete result.rows[0];
      res.status(204).json();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'An unexpected error occurred!' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Path not found! Please try again!' });
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
