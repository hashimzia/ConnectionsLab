# Project 1 Prototype

### Files in this directory are a work in progress for project 1 of Connections Lab

## Idea
This project aims to recreate the higherlower game but with pokemons instead. The task is to select which pokemon is more popular than the other.

## Learning/problems solved
While creating the prototype I ran into multiple problems,these are the ones I have dealt with in the creation of the prototype

### Layout
The first problem was to recreate the wireframes into a minimal yet clean design. To accomplish this, I had to use flexbox properly to position the first starting page in the center. The major problem to be dealt with after this was changing the start page into the game page after the click of a button. This was done by creating a layout before the button is clicked but keeping it hidden until the button is clicked. When the button is clicked, the divs for the game are made visible and the start page div is removed through JavaScript. 

### Overlay
To create a more pleasing look to the website I realized that creating an overlay over my background image can help. However to do this most options did not work as they would also create an overlay over other objects of the document. This was successfuly done by setting the backgorund property to the image and then also an overlay. Then using the background-blend-mode property to overlay it on top of the image.

### Fetching random pokemon names
The objective is to provide random pokemons to be compared. To do this their name and other data must be used in order create the document. This was done by generating a random number and sending that as a parameter to PokeAPI and using the response to display the name.

## Problems to be dealt with:
1. Search Volume data (might change this into a different property like which pokemon is stronger)
2. Animations for pokemons(using p5?)
3. Making the pages look better with the divs animating seamlessly into others.
