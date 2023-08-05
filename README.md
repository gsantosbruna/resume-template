# HackerRank resumé

HackerRank resumé is a resume/CV template for software developers based on the free resumé template made available by [HackerRank](https://www.hackerrank.com/resume/dashboard). This template includes a fast language switcher and an easy printable version.

## Features

- Built using React and TypeScript
- Quick and easy to change the template data
- Available in English, French, and Portuguese

## How to use it

1. Fork and then clone the forked repository
2. Install dependencies with `npm install`
3. Change the data in `src/data` to your own
4. Run `npm start` to start the development server
5. Install the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package

```shell
   $ npm install gh-pages --save-dev
```

6. Change the homepage property at package.json to your repository.

```json
    "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
```

7. Run `npm run deploy` to deploy the project to GitHub Pages
8. Configure your GitHub Pages to use the `gh-pages` branch
9. Share your resume with the world!

For more detail about how to deploy a React app at GitHub Pages, please consult [this tutorial](https://github.com/gitname/react-gh-pages).

## Resources

- HTML5 + CSS3
- React
- TypeScript
