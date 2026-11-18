const { test } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app');

test('GET / returns the welcome message', async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(`http://127.0.0.1:${server.address().port}/`);
        const body = await response.text();

        assert.equal(response.status, 200);
        assert.equal(body, 'Student REST API is running!');
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});

test('GET /api/students returns the student list', async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://127.0.0.1:${server.address().port}/api/students`
        );
        const body = await response.json();

        assert.equal(response.status, 200);
        assert.equal(body.length, 2);
        assert.equal(body[0].name, 'Rahul');
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});

test('GET /api/students/999 returns 404 for an unknown student', async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://127.0.0.1:${server.address().port}/api/students/999`
        );
        const body = await response.json();

        assert.equal(response.status, 404);
        assert.equal(body.message, 'Student not found');
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});
