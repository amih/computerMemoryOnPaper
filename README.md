Ami Heines, simple project to explain and teach by showing how memory works on a computer.
1. Starting with ASCII table and some text in memory.
2. Moving to simgle byte arrays of numbers.
3. Array of fixed size strings (wastefull)
4. Next are simple objects of numbers and strings
Null terminated strings
modern strings as objects with length and data (not null terminated)
Next are pointers to strings or other simple objects
Next are linked lists
Next are trees
next are tries
what else?...
===================================================================================
Tumainios logo, using FreeCAD

view -> workbench -> part


App.newDocument("Unnamed")
App.setActiveDocument("Unnamed")
App.ActiveDocument=App.getDocument("Unnamed")
import Part
cube0 = Part.makeBox(1,1,1)
Part.show(cube0)
Gui.SendMsgToActiveView("ViewFit")
Gui.activeDocument().activeView().viewAxonometric()
cube1 = Part.makeBox(1,1,1, FreeCAD.Vector(1,0,0))
Part.show(cube1)
cube2 = Part.makeBox(1,1,1, FreeCAD.Vector(0,0,1))
Part.show(cube2)
cube3 = Part.makeBox(1,1,1, FreeCAD.Vector(0,0,2))
Part.show(cube3)
cube4 = Part.makeBox(1,1,1, FreeCAD.Vector(0,0,3))
Part.show(cube4)
cube5 = Part.makeBox(1,1,1, FreeCAD.Vector(0,0,4))
Part.show(cube5)
cube6 = Part.makeBox(1,1,1, FreeCAD.Vector(0,1,3))
Part.show(cube6)
cube7 = Part.makeBox(1,1,1, FreeCAD.Vector(0,-1,3))
Part.show(cube7)
Gui.SendMsgToActiveView("ViewFit")

===================================================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
