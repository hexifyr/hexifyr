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


function openDiscordApp() {
    var userId = "1236035473625841735"; // Your Discord User ID Here

    // check that the user has installed discord
    if (window.navigator && window.navigator.msLaunchUri) {
      // for Webbrowser
      window.navigator.msLaunchUri("discord://user?id=" + userId);
    } else if (window.navigator && window.navigator.userAgent.match(/(android|iphone|ipad)/i)) {
      // for andorid and ios devices
      window.location.href = "discord://user?id=" + userId;
    } else {
      // for other devices or webbrowsers
      window.open("https://discord.com/users/" + userId);
    }
  }

  function myFunction() {
    var copyText = "LUejdqgSQZEdhgFonr5SMfwJfThPmTLyDU";
    navigator.clipboard.writeText(copyText);
    
   alert("Wallet Address Copied!");
  }