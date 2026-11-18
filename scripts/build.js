const fs = require('node:fs');

const outputDirectory = 'dist';

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(`${outputDirectory}/src`, { recursive: true });

fs.copyFileSync('src/app.js', `${outputDirectory}/src/app.js`);
fs.copyFileSync('src/server.js', `${outputDirectory}/src/server.js`);
fs.copyFileSync('package.json', `${outputDirectory}/package.json`);

console.log('Build completed successfully. Generated files are in dist/.');
