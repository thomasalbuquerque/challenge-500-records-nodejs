## General Information

This is a program created as a challenge for a company vacancy.

The program fetches data from an endpoint (https://jsonplaceholder.typicode.com/comments), which returns a JSON with 500 records. Each record is a post, containing a postId, id, name, email, and body.

The program then emits the posts to a file called output.txt, formatted as follows:

```bash
From: ${post.email}
${post.name} says ${post.body}
```

![image](https://github.com/thomasalbuquerque/challenge-500-records-nodejs/assets/7840248/c317b677-58ee-452c-8fe3-a05ad58df959)

The emission process occurs by sending sets of 50 posts every 1 second until all posts are emitted. Each new set of 50 posts emitted in each iteration is appended at the end of the file.

If a file named output.txt already exists, the program will delete it and create a new one to emit the new data.

## Stack

- Node.js
- Typescript
- Axios

## Installation and running

To begin, make sure you have Node.js 14.x.x or newer with npm installed on your system. If you don't have them, please refer to the official documentation for instructions on how to install them.

Then follow the steps below:

1. Clone the repository by running:

```bash
    git clone https://github.com/thomasalbuquerque/challenge-500-records-nodejs
```

2. Open the newly created folder **challenge-500-records-nodejs** using Visual Studio Code (or any preferred code editor).

3. Run the command below to install all the necessary dependencies.

```bash
    npm install
```

4. Run the following to build and start the program:

```bash
    npm run build
    npm run start
```

5. Check the output.txt file to see the emitted posts.
