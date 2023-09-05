# Getting Started with Create React App

This project is a small React app where you can validate your inputs.
The validation of the entered text occurs using special RegEx.
You can set the maxLength that will be pasted in the regular expression.abs

Let's talk more about which criteria are based on this RegEx:

1) ^ and $: These signify the start and end of the string, respectively.

2) (?=.*[A-Z]): This is a positive lookahead assertion that checks for the presence of at least one uppercase letter.

      ?=: denotes a lookahead assertion, which means "succeed only if the contained pattern could match next".
      .*: zero or more of any character (except a newline).
      [A-Z]: an uppercase letter.

3) (?=.*[a-z]): This is another positive lookahead assertion that checks for at least one lowercase letter.

      [a-z]: a lowercase letter.

4) (?=.*\d): This is a positive lookahead assertion to check for at least one digit.

      \d: any digit from 0 to 9.

5) (?=.*[!"#$%&'()*+,-./:;<=>?@\[\]^_{|}~])`: This is a positive lookahead assertion that checks for the presence of at least one special character from the predefined list.

      [!"#$%&'()*+,-./:;<=>?@\\[\\]^_\{|}~]`: one of the special characters.

6) \S{1,${maxLength}}: This part checks for a string length of between 1 and maxLength, and that the string contains no whitespace characters.

      \S: matches a single character that is not a white-space character.
      {1,${maxLength}}: signifies that between 1 and maxLength of the preceding token (in this case \S) are allowed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
