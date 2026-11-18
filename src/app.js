const express = require('express');

const app = express();

app.use(express.json());

const students = [
    { id: 1, name: 'Rahul', course: 'Computer Engineering' },
    { id: 2, name: 'Amit', course: 'IT Engineering' }
];

// Welcome API
app.get('/', (req, res) => {
    res.send('Student REST API is running!');
});

// Get all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Get a student by ID
app.get('/api/students/:id', (req, res) => {
    const student = students.find(
        (item) => item.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    res.json(student);
});

module.exports = app;
