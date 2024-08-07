const container = document.querySelector("#container"),  
    tile = document.querySelector(".tile");

for(let i = 0; i < 6299; i++) {
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





let imageToSpin = document.getElementById('avatar');

function spinImage(imageToSpin) {
 imageToSpin.style.animationName = 'spin';
 imageToSpin.style.animationDuration = '1s';
 setTimeout(() => {
    
 imageToSpin.style.animationDuration = '3s';
 imageToSpin.style.animationName = 'floating2';
 }, 1000);
}


imageToSpin.addEventListener("click", function() {
    spinImage(imageToSpin);
})


const button = document.getElementById('button-container');
const initialButtonX = window.innerWidth / 2 - button.offsetWidth /2;
console.log(button.style.width);
const initialButtonY = window.innerHeight / 1.15;
const moveLimit = 0.1; // 5% limit

// Set initial position
button.style.left = `${initialButtonX}px`;
button.style.top = `${initialButtonY}px`;
let isMouseOver = false; // Flag to track if the mouse is over the button


function moveButtonWithinLimit(event) {
    if (isMouseOver) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate allowed movement boundaries
    const limitX = initialButtonX * moveLimit;
    const limitY = initialButtonY * moveLimit;

    // Calculate new position within boundaries
    let newX = initialButtonX + (mouseX - initialButtonX) * moveLimit;
    let newY = initialButtonY + (mouseY - initialButtonY) * moveLimit;

    // Ensure the new position is within the limit
    newX = Math.max(initialButtonX - limitX, Math.min(newX, initialButtonX + limitX));
    newY = Math.max(initialButtonY - limitY, Math.min(newY, initialButtonY + limitY));

    // Apply the new position
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    }
}

document.addEventListener('mousemove', moveButtonWithinLimit);

function onMouseEnter() {
    isMouseOver = true; // Set flag to true when mouse is over
  }

  function onMouseLeave() {
    isMouseOver = false; // Set flag to false when mouse leaves
    const initialButtonX = window.innerWidth / 2 - button.offsetWidth /2;
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
    for(const card of document.getElementsByClassName("card")) {
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


document.addEventListener("DOMContentLoaded", function() {
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