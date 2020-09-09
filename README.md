Created By Vandana Mall
Day 1-Started the application worked on the UI selected the datetime picker textfeild and other required components added to the react app and started to work on backend.First I worked on the date which i took from keyboard datetime picker of material ui gave the nescessary condition like disablePast as per the requirement and then send the data selected to onEndDateChange function in which it checked whether the time selected is of future or not if not then an error messege was displayed.Then after setting datetime picker functions according to the requirement i started working on Input textfield.I took the data and on clicking the tweet button send the data and date to addItem.

Day 2-At add item again i checked the date and if timeremaining was>0 then i send the data to todoitems using newitem .I send the inputed text  and endDate.getTime where endDate is the date selected and timeremaing was calculated from current date time which is startDate and endDate.After sending the data to todoitems there i got the data through createTasks and pass the data i.e, text and date to class countdown using props.In countdown i converted the date time to day hours minutes and seconds and then mounted to the ui of coundown timer and also the text to the card i.e the display of text.The whole data was inserted in the form of list to a tablecontainer.the data gets deleted when the timer remaining time is not greater than 0. which is on loop continous checked in countdown class.

Day 3-Then I worked on storing the data to local storage so that the data doesnot reset on refresh.For that I save the value of our newItem input to localStorage and then using update state it keeps updateing the state using localStorage.setItem() and as we cant store the data in normal way I used JSON parse and stringify that and then store the data in localstorage.Then I started working on ui set the height width and other stylings of the commponents and completed the task but I found one bug when an item gets deleted a space is formed between the list of inputs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
