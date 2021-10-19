# Evaluate A News Article with Natural Language Processing


This project is part of an online course lead by udacity which aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

### Tools Used
- HTML
- CSS
- JavaScript
- Node
- Express
- Webpack
- meaningcloud API
- Jest
- Workbox

### Installation / setup

Make sure Node and npm are installed from the terminal.


- Open the project dir

- Install all npm dependencies
```
npm install
```

- Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

- Configure environment variables using dotenv package


	1- Create a new `.env` file in the root of your project
	2. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
- Start the project


`npm run build-prod` | Build project
`npm start` | Run project

- Open browser at http://localhost:8081/


### MIT Licence 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.