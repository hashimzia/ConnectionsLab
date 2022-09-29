# HigherLower Pokemone
## Description:
The Higher Lower Pokémon is a game for the nerdiest Pokémon fans. Test out your head-to-head Pokémon battle knowledge by guessing which Pokémon has higher stats. The game uses native JavaScript combined with HTML and CSS to create a seamless experience. It incorporates Poke-API as the main data source for Pokémon names and stats. These are coupled with animated GIFs from another source to make an interactive web app. P5.js is also used to create some effects to improve the visualization of the game.

## Design/Wireframes:
### Start Page


 ![image](https://user-images.githubusercontent.com/108898519/193021070-7e69eb86-cb22-4156-9046-492dcfc86e6b.png)
 
 
A simple wireframe for the starting page of the game. It was realized into the following webpage:


 ![image](https://user-images.githubusercontent.com/108898519/193021103-b500dfc7-a301-4fb8-8290-4b2b12c06eb9.png)
 
 

The main game page:


 ![image](https://user-images.githubusercontent.com/108898519/193021119-1d7ed0ab-d11d-4efa-b4a0-df547b7268b7.png)
 
 

This was realized into the following webpage:


 ![image](https://user-images.githubusercontent.com/108898519/193021131-87825e0b-5035-41d9-9eac-0e45d12bff69.png)
 
 

Endpage:


 ![image](https://user-images.githubusercontent.com/108898519/193021148-76985bfe-6cd4-4deb-939a-b7ae22a8f5a2.png)
 
 
 


## Key Challenges:
### Layout
Creating a layout with 2 divs that span up each half of the screen while placing the P5Js animations was a challenging front-end task. 
The two divs are created in the html itself but are hidden from the user until the play button is pressed. This allows me to style them and place them perfectly using CSS and HTML and then use JavaScript to allow them to appear on button clicks. After creating the two divs, the biggest challenge was to place the score and the VS P5JS perfectly in the middle of the screen. My original intuition was to use “position: relative” and placing it perfectly. This was not feasible because then it would result in a non-responsive VS animation while the rest of the divs remain responsive (due to use of flexbox). Another problem was that since the VS animation is created by p5JS, it is added automatically by p5js into the html and hence I do not have full control over where to place it in the html and styling it through flexbox was a challenge.
This specific challenge was overcome by a neat JS trick. In hindsight there are better performing and more efficient ways of solving it but it worked works well as long as JavaScripts executes properly. This is done by removing the p5Canvas when it is inserted into the html through JavaScript and inserting it in the middle of the two divs afterwards when the “Play” button is clicked. This allows me to place it properly and style/position it using CSS properly.

### Animating the numbers synchronously
After a higher/lower button is pressed, I wanted to show the numbers rise up to the actual amount, this builds up a little suspicion and improves the game experience. This is done by running a for loop till the actual number and updating the html of the stat every time it is added. The problem was that the for loop runs instantly and there was no wait between the html updating. This also caused the rest of the code to run instantly, the animation should ideally pause the app until it is over.
This was overcome by creating a time delay using async and await functions in JavaScript.
First a function was created using Promise to create a synchronous delay function.


![image](https://user-images.githubusercontent.com/108898519/193021567-2d622a00-d2f8-44e7-ab19-b4b22e2d4526.png)


This waits the milliseconds passed to it before executing the next function.
A wait of 3 milliseconds for each iteration of the for loop works for a seamless experience.


![image](https://user-images.githubusercontent.com/108898519/193021610-71cf7cbb-e018-4724-9053-9b06bcaa2d11.png)

This allows for the application to wait till the animation is over and ensures the animation to appear on the website.


### Ensuring code runs in order/after things are loaded
A key problem while using multiple libraries and APIs is that many of these functions/operations take a certain random amount of time which can not be statically accounted for as a developer. To ensure everything runs in an order that allows things to function properly, the  body of the entire app.js file was wrapped in a “mainFunction()”. This only runs after a canvas has been created by the p5JS library. This allows me to position and run the animations properly after everything is loaded and does makes sure the order of operations is not messed up.


![image](https://user-images.githubusercontent.com/108898519/193021845-da1481f4-1095-45db-a676-eaeb43cf55f0.png)



This entire main function is called only when the canvas is created.

![image](https://user-images.githubusercontent.com/108898519/193021867-f9428690-dae8-4c6a-bf9c-b362b120c932.png)

 

## Next Steps:
Adding a play again button at the end
Currently, when a player guesses wrong and the game ends, the end screen only shows the final score of the player. In the future a play again button can be implemented so the game can be restarted without refreshing the webpage manually through the browser
Making it more mobile friendly
The website is currently functional in a mobile environment however most of the elements are not position properly and this hinders the playing experience. In the future a better layout for mobile can be designed to allow it to offer a better playing experience
## Credits:
(PokeAPI)[https://pokeapi.co/about] created by  Paul Hallet, Tim Malone and Alessandro Pezzé
(GIF animations)[https://www.pkparaiso.com/xy/sprites_pokemon.php]
(Unsplash Background image)[https://unsplash.com/photos/dip9IIwUK6w] by  (Thimo Pedersen)[https://unsplash.com/@thimo]
 (The Pokemon Company)[https://www.pokemon.com/us/]



