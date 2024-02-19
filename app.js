window.onload = () => {
    console.log("on load");
  
    const buttonElement = document.getElementById("menu-btn");
    const navElement = document.getElementsByClassName("navbar")[0];
  
    buttonElement.onclick = () => {
      const buttonState = buttonElement.getAttribute("data-state");
  
      if (buttonState == "close") {
        buttonElement.setAttribute("data-state", "open");
        navElement.style.display = "block";
      } else {
        buttonElement.setAttribute("data-state", "close");
        navElement.style.display = "none";
      }
    };
  };
  