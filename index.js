// // // // VARIABLES
// // // // let, var, const

// // // // console.log(name); // Print to the console

// // // const name = "pizza";
// // // const topping = "pineapple";

// // // //* adding two strings;
// // // //concatenation
// // // console.log(name, "pineapple"); // How you make a concatenation

// // // //Template literals // use back tick located under esc bar
// // // console.log(`${name} ${topping}`);

// // // // integer justa number

// // // // Booleans anything that has data in it
// // // // if it has value in it, it is true
// // // //if it has false, undefined, null or 0 then it is false
// // // let num = undefined;

// // // console.log(Boolean(num));

// // // // let promt1 = prompt("What is your name");
// // // // let whereDidHeGo = prompt("Where did he go");
// // // // console.log(`${promt1} went to the ${whereDidHeGo}`);

// // // // alert(`${promt1} went to the ${whereDidHeGo}`);

// // // let prompt1 = prompt("what is your name?");
// // // let prompt2 = prompt("What is your age?");
// // // let prompt3 = prompt("what is your hobby?");
// // // alert(
// // //   `Hi My Name is ${prompt1} I am ${prompt2}, My favorite Hobby Is ${prompt3}`
// // // );

// // // CONDITIONALS////////////////////////////////////////////////
// // //**This IS WHERE CONDITIONAL STARTS */

// // //Truthy Values

// // // FALSY VALES
// // //UNDEFINED, NULL, NAN, 0

// // //CONDITIONAL OPERATORS
// // // ===; 1 === 1 is true
// // // ==; loose equals;
// // // loose equals; checks if value is the same regardless of data type

// // // <, >, // !=(Not Equals)
// // // More than or equal to
// // // 1 <=1

// // // =; is to assign operator
// // // ==; loose equals
// // // ===; strict equals (has to be the same exactly)

// // //Logical Operator//
// // // || && ?? //
// // //|| or
// // // && AND
// // // ? NULLISH

// // // ELSE; if the statement is false

// // // let v = 10;
// // // let u = 8;

// // // if (v === 9) {
// // //   console.log("Hola Mundo");
// // // } else {
// // //   console.log("goodbye world");
// // // }

// // // if (login===true) [
// // // // redirect page
// // // // ] else

// // //     alert("user doesn't exist")

// // /* else if; will run if condition 
// // before it are false and specifies a 
// // new condition*/

// // // let q = 0
// // // if (q === 1){
// // // console.log("helo world")
// // // // }

// // // let userName = prompt("Enter your username");

// // // if (userName === "collin123") {
// // //   alert("logged in!");
// // // } else if (userName === "lucy321") {
// // //   alert("logged in!");
// // // } else {
// // //   alert("no account found");
// // // }

// // // let randomNumber = Math.floor(Math.random() * 4);
// // // console.log(randomNumber);

// // // let arr = ["liv", "kamar", "derrick", "jimmy"];

// // // console.log(arr[randomNumber]);

// // // if (arr[randomNumber] === "liv") {
// // //   console.log("Hello world");
// // // } else if (arr[randomNumber] === "kamar") {
// // //   console.log("whats poppin");
// // // } else {
// // //   console.log("tech your wrong");
// // // }

// // // let randomNumber = Math.floor(Math.random() * 11);
// // // console.log(randomNumber);
// // // let chosenNumber = prompt("Let's play a game.. Guess a numer 1-10");
// // // if (chosenNumber == randomNumber) {
// // //   alert(`congrats`);
// // // } else {
// // //   alert("you are incorrect");
// // // }





// // ////////////Loops 
// // let myName= "Lucycan"
// // console.log(myName); 
// // console.log(typeof myName);

// // //// conditionals
// // if(myName === "Lucycan"){
// // console.log('Hello ${myName}') }
// //  else {
// //    console.log(false)
// // }
// // /// for
// // for(let i = 0; i< 10; i++) {
//   //     console.log(i); 
//   // }
//   // //if you infinite loop your machine will crash// 

//   //ANCHOR - FOR LOOPS FROM COLLIN

//   // for (let i= 0; i < rfpTeam.length; i++) *getting the length of the array
//   // makes sure youre not hard coding
//   // FOR LOOP EXAMPLE
//   /* for (initializer; condition; iterator++) {
//   // code that activates each time i iterates
//   console.log('hello world) *will log 5 times because i is 0 and the condition is 5
//   console.log(rfpTeam[i]) // will log a different number as i; i = 0 then 1 then 2, etc..
//   } */
  
// // //arrays and methods
// // let team = ["Lucycan", "Collin", "Mark", "Cortez"];
// // console.log(team); 
// // console.log(team.length);

// // ///push
// // console.log(team.push("Derrick"));
// // console.log(team); 

// // ///pop 
// // console.log(team.pop);
// // console.log(team) 

// // //join 
// // console.log(team.join);

// ///split returns a new array 
// // let team1 = "john,mike,kiersten,lucy";
// // console.log(team1);
// // let teamSplit = team1.split(",");
// // console.log(teamSplit);

// // ///Slice returns a new array
// // console.log(team); 
// // console.log(team.slice(0, 3)); 

// // ///looping thru an array// 
// // console.log(team);
// // console.log(team[3]); 
// // for (let i= 0; i < team.length; i++) 
// //   console.log(team[3]);

// //   let roles = ["Teach Manager", 
// //   "TechFello", 
// //   "Placement Manager", 
// //   "Program Manager", 
// //   "Intern"
// // ]
// // ///Hi my name is Lucycan and I am the Tech Manager// 
// // for (let i = 0; i < team.length; i++) {
// // console.log(`Hello my name is ${team[i]} and I am a ${roles[i]}`);

// // }

// // ///Challenge// 
// // let Team13 = ("Codiv8rs") 
// // let roles2 = ["Project Manager",
// // "Technical Analyst",
// // "Quality Assurance",
// // ]

// let team13 = prompt("What is your team Name?"); 
// // let roles13 = prompt("Enter your team roles");
// console.log(team13);

// let rfpTeam = team13.split(",")
// // console.log (
// //   rfpTeam
// // )

// // let arr = [1,2,'habb',4,'mon']
// // // to index, say the array name first

// // for (let i= 0; i < rfpTeam.length; i++) {
// //   console.log(rfpTeam[i])
// // }

// let arr = ['love', 'hat', 'die', 'good']
// for (let initializer = 0; initializer < arr.length; ++initializer) {
//   console.log (arr[initializer]) 

// }

// const arr = [1,2,3]

// console.log(arr[2])
// for (let initializer = 0; initializer < arr.length; initializer++) {
//  console.log(`hello world`)
//  console.log(arr[initializer]) 
// }
//ANCHOR - JAVASCRIPT FUNCTIONS

// A reusable piece of code 

// function thisIsTheFunctionName(name) {
// return name 
// }

//TYPE THE FUNCTION NAME FOLLOWED BY PANRANTHESIS

// thisIsTheFunctionName(`collin`) // the argument goes inside paranthesis

// //RETURN STATEMENT 

// let Name = thisIsTheFunctionName(`vince`)
// let name2 = thisIsTheFunctionName( `collin`)

// name = `collin`

// let array2 = [1,2,3,4,5,6]
// let array3 = [1,2,3,4,5,6]
// let array4 = [1,2,3,4,5,6]
// let array5 = [1,2,3,4,5,6]
// let array6 = [1,2,3,4,5,6]
// let array7 = [1,2,3,4,5,6]

// function iterateThroughArray(arr) {
//   for (let initializer = 0; initializer < arr.length; initializer++) [
// console.log(arr[initializer])

// }

// iterateThroughArray(array3)

// function Sum(num1,num2) {
//   console.log(num1 + num2)
// }

// Sum(1,3)

// //Arrow Function
// const function2 = () => {

// }

// let array10 = [1,2,3,4,5]

// const function21 = function(arr) {
//   for (let initializer = function; initializer < arr.length; initializer++)
// console.log(arr[initializer])
// function21(array10)


// }

// loop()

 

// function blockScope(name){
  
//   let theKrew = ["Lucycan", "Collin", "Mark", "Cortez"];
//   theKrew.push(name); 
//   console.log(theKrew);
// }
// let blanca = "Blanca"; 
// blockScope(blanca);

//// GAME JAVASCRIPT///

// Background scrolling speed
let move_speed = 3;
    
// Gravity constant value
let gravity = 0.5;
    
// Getting reference to the bird element
let bird = document.querySelector('.bird');
    
// Getting bird element properties
let bird_props = bird.getBoundingClientRect();
let background =
    document.querySelector('.background')
            .getBoundingClientRect();
    
// Getting reference to the score element
let score_val =
    document.querySelector('.score_val');
let message =
    document.querySelector('.message');
let score_title =
    document.querySelector('.score_title');
    
// Setting initial game state to start
let game_state = 'Start';
    
// Add an eventlistener for key presses
document.addEventListener('keydown', (e) => {
    
  // Start the game if enter key is pressed
  if (e.key == 'Enter' &&
      game_state != 'Play') {
    document.querySelectorAll('.pipe_sprite')
              .forEach((e) => {
      e.remove();
    });
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score_title.innerHTML = 'Score : ';
    score_val.innerHTML = '0';
    play();
  }
});
function play() {
  function move() {
      
    // Detect if game has ended
    if (game_state != 'Play') return;
      
    // Getting reference to all the pipe elements
    let pipe_sprite = document.querySelectorAll('.pipe_sprite');
    pipe_sprite.forEach((element) => {
        
      let pipe_sprite_props = element.getBoundingClientRect();
      bird_props = bird.getBoundingClientRect();
        
      // Delete the pipes if they have moved out
      // of the screen hence saving memory
      if (pipe_sprite_props.right <= 0) {
        element.remove();
      } else {
        // Collision detection with bird and pipes
        if (
          bird_props.left < pipe_sprite_props.left +
          pipe_sprite_props.width &&
          bird_props.left +
          bird_props.width > pipe_sprite_props.left &&
          bird_props.top < pipe_sprite_props.top +
          pipe_sprite_props.height &&
          bird_props.top +
          bird_props.height > pipe_sprite_props.top
        ) {
            
          // Change game state and end the game
          // if collision occurs
          game_state = 'End';
          message.innerHTML = 'Press Enter To Restart';
          message.style.left = '28vw';
          return;
        } else {
          // Increase the score if player
          // has the successfully dodged the 
          if (
            pipe_sprite_props.right < bird_props.left &&
            pipe_sprite_props.right + 
            move_speed >= bird_props.left &&
            element.increase_score == '1'
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;
          }
          element.style.left = 
            pipe_sprite_props.left - move_speed + 'px';
        }
      }
    });
  
    requestAnimationFrame(move);
  }
  requestAnimationFrame(move);
  
  let bird_dy = 0;
  function apply_gravity() {
    if (game_state != 'Play') return;
    bird_dy = bird_dy + gravity;
    document.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        bird_dy = -7.6;
      }
    });
  
    // Collision detection with bird and
    // window top and bottom
  
    if (bird_props.top <= 0 ||
        bird_props.bottom >= background.bottom) {
      game_state = 'End';
      message.innerHTML = 'Press Enter To Restart';
      message.style.left = '28vw';
      return;
    }
    bird.style.top = bird_props.top + bird_dy + 'px';
    bird_props = bird.getBoundingClientRect();
    requestAnimationFrame(apply_gravity);
  }
  requestAnimationFrame(apply_gravity);
  
  let pipe_seperation = 0;
    
  // Constant value for the gap between two pipes
  let pipe_gap = 35;
  function create_pipe() {
    if (game_state != 'Play') return;
      
    // Create another set of pipes
    // if distance between two pipe has exceeded
    // a predefined value
    if (pipe_seperation > 115) {
      pipe_seperation = 0
        
      // Calculate random position of pipes on y axis
      let pipe_posi = Math.floor(Math.random() * 43) + 8;
      let pipe_sprite_inv = document.createElement('div');
      pipe_sprite_inv.className = 'pipe_sprite';
      pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
      pipe_sprite_inv.style.left = '100vw';
        
      // Append the created pipe element in DOM
      document.body.appendChild(pipe_sprite_inv);
      let pipe_sprite = document.createElement('div');
      pipe_sprite.className = 'pipe_sprite';
      pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
      pipe_sprite.style.left = '100vw';
      pipe_sprite.increase_score = '1';
        
      // Append the created pipe element in DOM
      document.body.appendChild(pipe_sprite);
    }
    pipe_seperation++;
    requestAnimationFrame(create_pipe);
  }
  requestAnimationFrame(create_pipe);