<h1 align='center'>Welcome to React.js<h1>
 <div align='center'>
<img src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt="react.js" width=250px hieght=250px>
  </div>

<h3 align='center'>Commands to create new React App</h3>
Go into the VS code terminal and execute the following commands:<br><br>
<strong>1. npx create-react-app <em>application_name</em>:</strong> Use to create an application folder in which all required files gets stored.
<br>
<strong>2. cd <em>application_name</em>:</strong> Get into the application which has been created.
<br>
<strong>3. npm run start:</strong> Start the application on browser locally.
<br>
<br>
<strong>NOTE:</strong>
<ul>
  <li><em>npm</em> command is use for downloading the packages permanently into the hard drive while <em>npx</em> command is use for utilizing the packages for the temporary use.</li>
  <li>The HTML which is written under <em>App.js</em> gets displayed onto the browser.</li>
  <li><em>App.js</em> contains a function which returns JSX component (JavaScript XML). Function only returns one JSX component in which we can write JavaScript alongwith HTML to make development easy.</li>
  <li>In JSX instead of writing <em>'class'</em> we use <em>'className'</em>. Tags which are not having closing tags gets closed in JSX by using '/' into the end of a tag.</li>
  <li><em>node_modules</em> folder contains all the dependencies of the react project. All the dependencies are written inside <em>package.json</em> and <em>package-lock.json</em> and can be re-install <em>node_modules</em> by using the command <em>'npm install'</em>.</li>
</ul>

 <h3 align='center'>Adding Bootstrap</h3>
 Go to your <em>index.html</em> file and add stylesheet as well as scripts of Bootstrap. And add HTML contents into <em>App.js</em> and modify it into JSX format.
 <br><br>

<h4>React components</h4>
<ul>
<li>Make a folder named <em>component</em> into a <em>src</em> folder.</li>
<li>Make different JS folders for different components and add JSX by making <em>React Function based component (rfc)</em>. Export this function and import within a <em>App.js</em> file. Then, add tag into the JSX.</li>
 <li><em>React Function based component (rfc)</em> takes <em>props</em> as an arguement.</li>
 <li><em>React Class based component</em> can be call by using <em>rcc</em>.</li>
</ul>
<br>
<h4>Props and State</h4>
<ul>
<li>Props are the properties of an element. (Eg. Heading of a component)</li>
<li>State is the value of an element. (Eg. text written inside a textfield, value choose in dropdown)</li>
</ul>
<br>
<h3 align="center">React Router DOM</h3>
<ul>
<li>React Router is a standard library for routing in React. It is used to overwrite some components of UI without reloading or altering the URL. It saves the bandwidth of the internet.</li>
<li><em>npm install react-router-dom</em> command is used to install React Router Dom.</li>
 <li>(a,href) change the path by reloading the side while (Link,to) doesn't reload the side.</li>
 <li>While using 'path' router does the partial matching and while using 'exact path' does the exact matching of paths.</li>
 <li><strong>Syntax for routing:</strong></li>
 <img src="https://user-images.githubusercontent.com/68052449/218477092-cc214334-8d35-47bb-a9d8-12f77627c899.png" align="center" height=50% width=50%>
 <li>Sometimes URL gets updated but not the contents of page. So in order to sort this issue we need to assign a <strong>key>/strong> in a tags.</li>
 <img src="https://user-images.githubusercontent.com/68052449/219729651-014c2a1b-feab-404c-ac37-b4e5b0350168.png" align="center">
</ul>
<br>
 <h4>Hosting React Application on Github Pages</h4>
 <ul>
  <li><em>npm run build</em>: It creates a build directory with a production build of your app.</li>
  <li>Go to https://create-react-app.dev/docs/deployment/ to follow further steps.</li>
  <li>While deploying the react application it is not preferable to leave the comments inside a code.</li>
 </ul>
<br>
<h3 align='center'>React Component Lifecycle</h3>
<ul>
<li>
There are the three life stages of React Component:
<ol>
<li><strong>Mounting:</strong> Birth of a React component.</li>
<li><strong>Update:</strong> Growth of React component.</li>
<li><strong>Unmount:</strong> Death of React component.</li>
</ol>
</li>
 <br>
<li>
Methods in React Component Lifecycle:
<ol>
<li><strong>render():</strong> It is used to render the HTML of components in react. It runs while mounting or updation of react compoent. We can't modify the state in render method.</li>
<li><strong>componentDidMount():</strong> It runs after the component gets mount and rendered.</li>
<li><strong>componentDidUpdate():</strong> Runs when props or state gets update.</li>
 <li><strong>componentWillUnmount():</strong> It calls before component gets unmount or destroyed to perform some cleanups.</li>
</ol>
</li>
 <br>
 <li>React Lifecycle Diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</li>
</ul>
