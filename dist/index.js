import fs from 'fs';
import axios from 'axios';
async function fetchData() {
    const result = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const posts = result.data;
    const formattedPosts = posts.map(post => (`From: ${post.email}
${post.name} say ${post.body}`));
    return formattedPosts;
}
function writeFile(posts) {
    if (fs.existsSync('outputs/output.txt')) {
        fs.unlink('outputs/output.txt', function (error) {
            if (error)
                throw error;
            console.log('Old file deleted.');
        });
    }
    let i = 50;
    const iterations = setInterval(() => {
        console.log(i);
        const piece = JSON.stringify(posts.slice(i - 50, i), null, 2);
        const output = piece.slice(1, piece.length - 2) + ',';
        fs.appendFile('outputs/output.txt', output, 'utf8', (error) => {
            if (error) {
                console.error('File writing failed.', error);
                return;
            }
            console.log('File writing succeeded.');
        });
        i = i + 50;
        if (i > posts.length) {
            clearInterval(iterations);
        }
    }, 1000);
}
async function run() {
    const posts = await fetchData();
    writeFile(posts);
}
await run();
