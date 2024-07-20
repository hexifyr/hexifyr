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
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Wallet Address Copied!";

    var styles = `  
  .tooltip .tooltiptext {
    visibility: visible;
    opacity: 1;
    
  }
    
  
  
  `
  

  
  var styles2 = `  
  .tooltip .tooltiptext {
    visibility: visible;
    opacity: 0;
    
  }
    
  
  
  `



  var stylesheet = document.createElement("style");
  stylesheet.textContent = styles;
  document.head.appendChild(stylesheet);

  setTimeout(() => {
    
  stylesheet.textContent = styles2;
  }, 500);

  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Kopieer Litecoin Adres";
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