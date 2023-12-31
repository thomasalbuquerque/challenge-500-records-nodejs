import fs from 'fs'
import axios from 'axios'
import { AxiosResponse } from 'axios'

interface Post {
  postId: string,
  id: string,
  name: string,
  email: string,
  body: string,
}

async function fetchData() {
  const result: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/comments')
  const posts: Post[] = result.data
  const formattedPosts = posts.map(post => (`From: ${post.email}
${post.name} say ${post.body}`)
  )
  return formattedPosts
}

function writeFile(posts: string[]) {
  if (fs.existsSync('outputs/output.txt')) {
    fs.unlink('outputs/output.txt', function (error) {
      if (error) throw error;
      console.log('Old file deleted.')
    });
  }

  let i = 50
  const iterations = setInterval(() => {
    console.log(i)
    const piece = posts.slice(i - 50, i);
    const output = piece.join('\n\n')
    fs.appendFile('outputs/output.txt', output, 'utf8', (error) => {
      if (error) {
        console.error('File writing failed.', error)
        return
      }
      console.log('File writing succeeded.')
    })
    i = i + 50
    if (i > posts.length) {
      clearInterval(iterations)
    }
  }, 1000)
}

async function run() {
  const posts = await fetchData()
  writeFile(posts)
}

await run()