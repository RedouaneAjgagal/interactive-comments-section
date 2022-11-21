# interactive-comments-section

Interactive Comments Section is a CRUD comments app

## Table of contents

- [Overview](#overview)
  - [The Project](#the-project)
  - [Screenshots](#screenshots)
    -[Large screen](#large-screen)
    -[Small Screen](#small-screen)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  -[Challenges](#challenges)
- [Author](#author)

## Overview

### The Project

Interactive comments section is a challenge on [Frontendmentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9)

Users should be able to:

- View the optimal layout for the section depending on their device's screen size
- Add a comment
- Update their comment
- Delete their comment
- Reply to other user's comment
- Up vote & Down vote a comment

### Screenshots

#### Large Screen

![interactive-comments-section-desktop](https://user-images.githubusercontent.com/98456832/203164792-5e29f0ae-22b7-46bc-b31a-780ea6e2b994.png)

#### Small Screen

![interactive-comments-section-mobile](https://user-images.githubusercontent.com/98456832/203165027-79f441d4-ceab-4238-b4ee-e55d76f73c13.png)

### Links

- Source: [GitHub Repository](https://github.com/RedouaneAjgagal/interactive-comments-section)
- Live: [Live Site](https://redouaneajgagal.github.io/interactive-comments-section)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media Queries
- JS
- LocalStorage
- JSON file

### Challenges

`CRUD:` This was my first Time working on a crud project and i had no idea how its done, i redone my code from scratch multiple times. At first i was just adding elements without using any array or object, then i realized this kind of projects need arrays & objects, i did my research and i used for loop to make my data display, but with this method i had to give each btn and id (i) and using onClick, well i had alot of problems with this method when i wanted to make reply function, instead i used forEach and inside each one i called these buttons and give them addEventListener of click this way was very easy to handle reply function.

`LocalStorage:` This was my first time using LocalStorage as well, i learned how to set an item and stringify and parse, this wasnt much hard the only hard part was saving the upVote/downVote active, so i added a property of scoreMode inside of it there is up and down and whenever one is click i give it true parameter. this way i will save the data in LocalStorage.

`JSON file:` This was my first time working on a JSON file it was really interesting to get all data from there and display it on the screen.

## Author

- GitHub - [@RedouaneAjgagal](https://github.com/RedouaneAjgagal)
- Frontend Mentor - [@RedouaneAjgagal](https://www.frontendmentor.io/profile/RedouaneAjgagal)
