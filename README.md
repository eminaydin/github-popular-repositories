## The Project

A website bootstrapped by React, where you can check the popular repositories of the week and able to star them. Along with React I have used several technologies such as `Redux` to get advantage of the global store,`react-router-dom` for the page navigations, `react-semantic-ui` for the pre-defined styles, `moment-js` to parse the date to formatted version and `react-spinners` to display loader spinners.

The main idea was to display popular repositories and let the user to star them. Then starred repositories should be visible in another page. I have played with Github API several times before, so from the beginning I knew which API endpoint I had to make request to. As I wanted to display starred repositories in another section, it was also clear that I had to use `react-router-dom` to have smooth navigations with access to url parameters. After having a picture I have estimated of 6 hours of time to complete the core of the application which was succeeded. But I also wanted to play with the styles and have the best possible folder structure while providing reusable code. To do all of this, I have set 24 hours as a goal to myself, at the end I have finished the project within 18 hours.

Basically, on the landing page user will be greeted with the popular repositories that has been fetched from Github API. Each of the repositories has a card form with adequate amount of information while having two buttons for each. Buttons represent official website and Github repositories. User can select to navigate among each of the links. Each card has a star for itself and if user is to click the star, the repository will be stored both in store and the localstorage while being available in the result page.

## Challenges

At the beginning setup of Redux was a little bit complicated. Before starting I already had brief idea of where to dispatch the actions and get the state to props. But the connection of the pages took me a while. I could achieve exact same thing with the React state itself but considering what I would like to achieve, it might be even more complicated than Redux. Along the way I've got impressed once again with the logic behind the Redux as it already covers most of the edge cases and enables you to reach the state regardless of your components position.

Another challenge was the file structure. On the way I have changed it several times because at the beginning I was more focused on getting the thing done, instead of functionality. Once I have the core of the application I was more focused on the reusability, which I think at the end has a great result. With the structure right now, the logic of the application has been separated to small reusable piece of codes.

Live version of the project can be seen here: https://github-popular-repositories.netlify.app/

## Github Popular Repositories

<a href="https://github-popular-repositories.netlify.app/" target="_blank"><h3 align="left">Click here for demo</h3></a>

## Table of Contents

- [General info](#general-info)
- [Preview](#preview)
- [Technologies](#technologies)
- [Contact](#contact)

## General Info

Website to display and star popular repositories of the week. In this project I have decided to play with Github API and take it to another level. Main story is, user can scroll through popular repositories and filter them by specific programming language from the select field in navigation bar. If user wants to star the repository, the star button on top of each repository card will take the action and send the respective repository to local storage. All of the starred repositories will be available in another tab even after user leaves the website and comes back since data is stored in the local storage.

I am particularly happy with this project from the design and functionality wise. It took me not longer than couple of hours to finish
the sceleton of the website, where for the rest of the time I was playing with design and additional features. Feel free to check out the demo!

## Preview

![Github Popular Repositories](src/assets/github.gif)

## Technologies

- HTML
- CSS
- SASS
- Javascript
- React
- React-router
- Semantic-Ui

## Contact

Created by [eminaydin](https://github.com/eminaydin) - feel free to contact me for any inquiries!
