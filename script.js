const container = document.querySelector("#container"),
  tile = document.querySelector(".tile");

for (let i = 0; i < 6299; i++) {
  container.appendChild(tile.cloneNode());
}


// document.querySelectorAll('.buttons a').forEach((element, index, elements) => {
//     element.addEventListener('mouseover', (event) => {
//         // Reset all elements first
//         elements.forEach((el, i) => {
//             // el.style.width = '40px';
//             element.style.transform = 'translateY(0px)';
//         });

//         // Adjust hovered element
//         // element.style.width = '50px';

//         // Adjust the next sibling
//         if (elements[index + 1]) {
//             // elements[index + 1].style.width = '45px';
//         }

//         if (elements[index + 2]) {
//             // elements[index + 2].style.width = '42.5px';
//         }

//         if (elements[index - 1]) {
//             // elements[index - 1].style.width = '45px';
//         }

//         if (elements[index - 2]) {
//             // elements[index - 2].style.width = '42.5px';
//         }
//         element.style.transform = 'translateY(-5px)';


//     });

//     element.addEventListener('mouseout', () => {
//         // Reset all elements when mouse leaves
//         elements.forEach((el) => {
//             // el.style.width = '40px';
//             element.style.transform = 'translateY(0px)';
//         });
//     });
// });


var button2 = document.getElementById("viewmore");

let magofniet = true;
// Function to remove the background
function removeBackground() {
  setTimeout(() => {
       // Calculate the current scroll position (vertical scroll + viewport height)
       let scrollPosition = Math.round(document.body.scrollTop + window.innerHeight);

       // Get the total height of the document
       let documentHeight = Math.round(document.body.scrollHeight);
   
       console.log(`Scroll Position: ${scrollPosition}`);
       console.log(`Document Height: ${documentHeight}`);
   
       // Check if the scroll position is less than the document height
       if (scrollPosition < documentHeight) {
        button2.style.backgroundColor = "#0e100f";
        document.querySelector('.circle').style.display = 'block';
        document.getElementById('viewmore').style.opacity = '1';
        document.getElementById('viewmore').style.zIndex = '9999';
        button2.style.cursor = "pointer";
  
        magofniet = true;
        console.log('onzichtbaarniet')
       }else{
        
      button2.style.backgroundColor = "transparent";
      document.querySelector('.circle').style.display = 'none';
      document.getElementById('viewmore').style.opacity = '0.25';
      document.getElementById('viewmore').style.zIndex = '0';
      button2.style.cursor = "default";

      magofniet = false;
       }

    // // Check if the scroll position is less than the document height
    // if (scrollPosition > documentHeight) {

    //   button2.style.backgroundColor = "transparent";
    //   document.querySelector('.circle').style.display = 'none';
    //   document.getElementById('viewmore').style.opacity = '0.25';
    //   document.getElementById('viewmore').style.zIndex = '0';
    //   button2.style.cursor = "default";

    //   magofniet = false;
    // } else {
    //   button2.style.backgroundColor = "#0e100f";
    //   document.querySelector('.circle').style.display = 'block';
    //   document.getElementById('viewmore').style.opacity = '1';
    //   document.getElementById('viewmore').style.zIndex = '9999';
    //   button2.style.cursor = "pointer";

    //   magofniet = true;
    // }
  }, 550);

};

// Event listeners for click and wheel events
window.addEventListener("wheel", removeBackground);


let imageToSpin = document.getElementById('avatar');

function spinImage(imageToSpin) {
  imageToSpin.style.animationName = 'spin';
  imageToSpin.style.animationDuration = '1s';
  setTimeout(() => {

    imageToSpin.style.animationDuration = '3s';
    imageToSpin.style.animationName = 'floating2';
  }, 1000);
}


imageToSpin.addEventListener("click", function () {
  spinImage(imageToSpin);
})


const button = document.getElementById('viewmore');
const initialButtonX = window.innerWidth / 2 - button.offsetWidth / 2;
const initialButtonY = window.innerHeight / 1.15;
const moveLimit = 0.1; // 10% limit

// Set initial position
button.style.left = `${initialButtonX}px`;
button.style.top = `${initialButtonY}px`;

let isMouseOver = false; // Flag to track if the mouse is over the button

function moveButtonWithinLimit(event) {
  if (isMouseOver) {
    if (magofniet === true){
    const mouseX = event.clientX;
    const mouseY = event.clientY + document.body.scrollTop;

    // Calculate allowed movement boundaries
    const limitX = initialButtonX * moveLimit;
    const limitY = initialButtonY * moveLimit;

    // Calculate new position within boundaries
    let newX = initialButtonX + (mouseX - initialButtonX) * moveLimit;
    let newY = initialButtonY + (mouseY - initialButtonY) * moveLimit;

    // Ensure the new position is within the limit
    newX = Math.max(initialButtonX - limitX, Math.min(newX, initialButtonX + limitX)) - 8;
    newY = Math.max(initialButtonY - limitY, Math.min(newY, initialButtonY + limitY));

    // Apply the new position
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }
}
}

document.addEventListener('mousemove', moveButtonWithinLimit);

function onMouseEnter() {
  isMouseOver = true; // Set flag to true when mouse is over
}

function onMouseLeave() {
  isMouseOver = false; // Set flag to false when mouse leaves
  const initialButtonX = window.innerWidth / 2 - button.offsetWidth / 2;
  const initialButtonY = window.innerHeight / 1.15;

  // Set initial position
  button.style.left = `${initialButtonX}px`;
  button.style.top = `${initialButtonY}px`;

}

document.addEventListener('DOMContentLoaded', () => {
  // const button = document.getElementById('viewmore');
  // const initialButtonX = window.innerWidth / 2;
  // const initialButtonY = window.innerHeight / 1.25;

  // // Set initial position
  // button.style.left = `${initialButtonX}px`;
  // button.style.top = `${initialButtonY}px`;
  button.addEventListener('mouseenter', onMouseEnter);
  button.addEventListener('mouseleave', onMouseLeave);
});
// document.addEventListener('mousemove', moveButtonWithinLimit);


document.getElementById("cards").onmousemove = e => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}


function updateTime() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const now = new Date();
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  const formattedTime = `${day}, ${month} ${date} ${formattedHours}:${formattedMinutes} ${ampm}`;
  document.getElementById('time').textContent = formattedTime;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);


document.addEventListener("DOMContentLoaded", function () {
  const helloText = document.getElementById("helloText");
  const overlay = document.getElementById("overlay");
  const greetings = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "مرحبا", "Guten tag", "Hallo", "नमस्ते"];
  let index = 0;

  function changeText() {
    helloText.innerHTML = "<li>" + greetings[index] + "</li>";
    index = (index + 1) % greetings.length;
  }

  function startAnimation() {
    overlay.classList.add("move-up");
  }

  // Change text every 500ms
  const textInterval = setInterval(changeText, 250);

  // Start moving up animation after 3 seconds
  setTimeout(() => {
    clearInterval(textInterval);
    startAnimation();
  }, 2500);
});

 console.log(" _____                                   \r\n|_   _|                                  \r\n  | |                                    \r\n  | |                                    \r\n _| |_                                   \r\n \\___/                                   \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n ___  ___  ___                           \r\n/ __|/ _ \\/ _ \\                          \r\n\\__ \\  __/  __/                          \r\n|___/\\___|\\___|                          \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n _   _  ___  _   _                       \r\n| | | |/ _ \\| | | |                      \r\n| |_| | (_) | |_| |                      \r\n \\__, |\\___/ \\__,_|                      \r\n  __/ |                                  \r\n |___/                                   \r\n                      _    _             \r\n                     | |  (_)            \r\n ___ _ __   ___  __ _| | ___ _ __   __ _ \r\n/ __| '_ \\ / _ \\/ _` | |/ / | '_ \\ / _` |\r\n\\__ \\ | | |  __/ (_| |   <| | | | | (_| |\r\n|___/_| |_|\\___|\\__,_|_|\\_\\_|_| |_|\\__, |\r\n                                    __/ |\r\n                                   |___/ \r\n _                                       \r\n(_)                                      \r\n _ _ __                                  \r\n| | '_ \\                                 \r\n| | | | |                                \r\n|_|_| |_|                                \r\n                                         \r\n                                         \r\n _   _                                   \r\n| | | |                                  \r\n| |_| |__   ___                          \r\n| __| '_ \\ / _ \\                         \r\n| |_| | | |  __/                         \r\n \\__|_| |_|\\___|                         \r\n                                         \r\n                                         \r\n                           _             \r\n                          | |            \r\n  ___ ___  _ __  ___  ___ | | ___        \r\n / __/ _ \\| '_ \\/ __|/ _ \\| |/ _ \\       \r\n| (_| (_) | | | \\__ \\ (_) | |  __/       \r\n \\___\\___/|_| |_|___/\\___/|_|\\___|       \r\n                                         \r\n                                         \r\n  ______                                 \r\n _|  _  \\                                \r\n(_) | | |                                \r\n  | | | |                                \r\n _| |/ /                                 \r\n(_)___/                                  \r\n                                         \r\n                                         ");


 const fadeUpElements = document.querySelectorAll('.card');

 const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry, index) => {
     if (entry.isIntersecting) {
       setTimeout(() => {
         entry.target.classList.add('visible');
         observer.unobserve(entry.target); // Stop observing once it's visible
       }, index * 200); // Stagger the delay based on the index
     }
   });
 }, {
   threshold: 0.5 // Trigger when 10% of the element is visible
 });
 
 fadeUpElements.forEach(element => {
   observer.observe(element);
 });
 
