// Define DOM elements
const heroImage = document.querySelector("#hero__animation__img");
const heroSection = document.querySelector("#hero__animation"); // The container section for the animation

const heroBubble = document.querySelector("#hero__bubble");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define corner that is open
let activeCorner = "";

let isCornerActive = false;

// Add an event listener to the window object to listen for resize events
window.addEventListener("resize", handleWindowResize);

// Function that hanldes the styling when resizing window
function handleWindowResize() {
  switch (activeCorner) {
    case "top-left":
      if (window.innerWidth <= 1100) {
        tlActive = "translateX(0) translateY(0)";
        tlContent.style.transform = "translateX(0vw) translateY(0)";
        tlContent.style.width = "100vw";
        tlContent.style.height = "100vh";
        tlContent.style.top = "0";
        tlContent.style.display = "flex";
        tlContent.style.alignItems = "center";
        tlContent.style.justifyContent = "center";
        tlContent.style.background = "var(--bg-transparent)";
        tlContent.style.zIndex = "200";
        tlBtn.style.zIndex = "300";
        trBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "100";
      } else {
        tlActive = "translateX(5vw) translateY(0)";
        tlContent.style.transform = "translateX(5vw) translateY(0)";
        tlContent.style.width = "30vw";
        tlContent.style.height = "0";
        tlContent.style.top = "10vh";
        tlContent.style.display = "block";
      }
      break;

    case "top-right":
      if (window.innerWidth <= 1100) {
        trActive = "translateX(0) translateY(0)";
        trContent.style.transform = "translateX(0vw) translateY(0)";
        trContent.style.width = "100vw";
        trContent.style.height = "100vh";
        trContent.style.top = "0";
        trContent.style.display = "flex";
        trContent.style.alignItems = "center";
        trContent.style.justifyContent = "center";
        trContent.style.background = "var(--bg-transparent)";
        trContent.style.zIndex = "200";
        trBtn.style.zIndex = "300";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "100";
      } else {
        trActive = "translateX(-5vw) translateY(0)";
        trContent.style.transform = "translateX(-5vw) translateY(0)";
        trContent.style.width = "30vw";
        trContent.style.height = "0";
        trContent.style.top = "10vh";
        trContent.style.display = "block";
      }
      break;

    case "bottom-left":
      if (window.innerWidth <= 600) {
        blActive = "translateX(0) translateY(0)";
        blContent.style.transform = "translateX(0vw) translateY(0)";
        blContent.style.width = "100vw";
        blContent.style.height = "100vh";
        blContent.style.top = "0";
        blContent.style.display = "flex";
        blContent.style.alignItems = "center";
        blContent.style.justifyContent = "center";
        blContent.style.background = "var(--bg-transparent)";
        blContent.style.zIndex = "200";
        trBtn.style.zIndex = "100";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "300";
        brBtn.style.zIndex = "100";
        projectOne.style.width = "70%";
        projectOne.style.margin = "auto auto 0.5rem";
        projectTwo.style.width = "70%";
        projectTwo.style.margin = "auto auto 0.5rem";
        projectThree.style.width = "70%";
        projectThree.style.margin = "auto auto 0.5rem";
      } else if (window.innerWidth <= 1100) {
        blActive = "translateX(0) translateY(0)";
        blContent.style.transform = "translateX(0vw) translateY(0)";
        blContent.style.width = "100vw";
        blContent.style.height = "100vh";
        blContent.style.top = "0";
        blContent.style.display = "flex";
        blContent.style.alignItems = "center";
        blContent.style.justifyContent = "center";
        blContent.style.background = "var(--bg-transparent)";
        blContent.style.zIndex = "200";
        trBtn.style.zIndex = "100";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "300";
        brBtn.style.zIndex = "100";
        projectOne.style.width = "40%";
        projectOne.style.margin = "auto auto 0.5rem";
        projectTwo.style.width = "40%";
        projectTwo.style.margin = "auto auto 0.5rem";
        projectThree.style.width = "40%";
        projectThree.style.margin = "auto auto 0.5rem";
      } else {
        blActive = "translateX(10vw) translateY(7vh)";
        blContent.style.transform = "translateX(10vw) translateY(7vh)";
        blContent.style.width = "15rem";
        blContent.style.height = "0";
        blContent.style.top = "40vh";
        blContent.style.display = "block";
        projectOne.style.width = "100%";
        projectTwo.style.width = "100%";
        projectThree.style.width = "100%";
      }
      break;

    case "bottom-right":
      if (window.innerWidth <= 1100) {
        brActive = "translateX(0) translateY(0)";
        brContent.style.transform = "translateX(0vw) translateY(0)";
        brContent.style.width = "100vw";
        brContent.style.height = "100vh";
        brContent.style.bottom = "0";
        brContent.style.display = "flex";
        brContent.style.flexDirection = "column";
        brContent.style.alignItems = "center";
        brContent.style.justifyContent = "center";
        brContent.style.background = "var(--bg-transparent)";
        brContent.style.zIndex = "200";
        trBtn.style.zIndex = "100";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "300";
      } else {
        brActive = "translateX(-5vw) translateY(0)";
        brContent.style.transform = "translateX(-5vw) translateY(0)";
        brContent.style.width = "30vw";
        brContent.style.height = "0";
        brContent.style.bottom = "30vh";
        brContent.style.display = "block";
      }
      break;

    default:
  }
}

// Store last reverse animation, ready to be played
let lastReverseAnimation = "";

// Play animation function
function playAnimation(animation, reverseAnimation) {
  // Remove all the animation classes from heroImage
  heroImage.className = "";

  if (lastReverseAnimation !== "") {
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(function () {
      heroImage.classList.remove(lastReverseAnimation);
      heroImage.classList.add(animation);
      lastReverseAnimation = reverseAnimation;
    }, 200);
  } else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

function playClosingAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Experience";
  blBtn.innerHTML = "Projects";
  brBtn.innerHTML = "Contact";

  switch (activeCorner) {
    case "top-left":
      tlBtn.style.background = bgColor;
      tlBtn.style.color = textColor;
      tlContent.style.transform = tlHidden;
      break;
    case "top-right":
      trBtn.style.background = bgColor;
      trBtn.style.color = textColor;
      trContent.style.transform = trHidden;
      break;
    case "bottom-left":
      blBtn.style.background = bgColor;
      blBtn.style.color = textColor;
      blContent.style.transform = blHidden;
      break;
    case "bottom-right":
      brBtn.style.background = bgColor;
      brBtn.style.color = textColor;
      brContent.style.transform = brHidden;
      break;

    default:
  }

  heroImage.className = "";
  lastReverseAnimation = "";
  activeCorner = "";
  heroImage.classList.add(reverseAnimation);
  setTimeout(function () {
    heroImage.classList.remove(reverseAnimation);
  }, 200);
}

// Onclick corner button functions
tlBtn.onclick = function () {
  if (activeCorner === "top-left" && isCornerActive === true) {
    playClosingAnimation("reverse-animate-top-left");
    isCornerActive = false;
  } else {
    //if another corner is active instead, close that corner and open this one
    if (isCornerActive === true) {
      //close the active corner and open this one
      playClosingAnimation(`reverse-animate-${activeCorner.replace("-", "_")}`);
      playAnimation("animate-top-left", "reverse-animate-top-left");
    }

    isCornerActive = true;

    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    // Setting activeCorner
    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr;<br/>About";

    handleWindowResize();
    // playAnimation("animate-top-left", "reverse-animate-top-left");

    // Change background colors
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColorAlt;

    // Change text colors
    trBtn.style.color = textColor;
    brBtn.style.color = textColor;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColorAlt;

    // Change positions of the corner content
    trContent.style.transform = trHidden;
    brContent.style.transform = brHidden;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlActive;
  }
};

trBtn.onclick = function () {
  if (activeCorner === "top-right" && isCornerActive === true) {
    playClosingAnimation("reverse-animate-top-right");
    isCornerActive = false;
  } else {
    //if another corner is active instead, close that corner and open this one
    if (isCornerActive === true) {
      //close the active corner and open this one
      playClosingAnimation(`reverse-animate-${activeCorner.replace("-", "_")}`);
      playAnimation("animate-top-right", "reverse-animate-top-right");
    }
    isCornerActive = true;
    tlBtn.innerHTML = "About";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    // Setting activeCorner
    activeCorner = "top-right";
    trBtn.innerHTML = "&uarr;<br/>Experience";

    handleWindowResize();
    // playAnimation("animate-top-right", "reverse-animate-top-right");

    // Change background colors
    trBtn.style.background = bgColorAlt;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;

    // Change text colors
    trBtn.style.color = textColorAlt;
    brBtn.style.color = textColor;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColor;

    // Change positions of the corner content
    trContent.style.transform = trActive;
    brContent.style.transform = brHidden;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
  }
};

blBtn.onclick = function () {
  if (activeCorner === "bottom-left" && isCornerActive === true) {
    playClosingAnimation("reverse-animate-bottom-left");
    isCornerActive = false;
  } else {
    //if another corner is active instead, close that corner and open this one
    if (isCornerActive === true) {
      //close the active corner and open this one
      playClosingAnimation(`reverse-animate-${activeCorner.replace("-", "_")}`);
      playAnimation("animate-bottom-left", "reverse-animate-bottom-left");
    }
    isCornerActive = true;
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    brBtn.innerHTML = "Contact";

    // Setting activeCorner
    activeCorner = "bottom-left";
    blBtn.innerHTML = "Projects<br/>&darr;";

    handleWindowResize();
    // playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

    // Change background colors
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColorAlt;
    tlBtn.style.background = bgColor;

    // Change text colors
    trBtn.style.color = textColor;
    brBtn.style.color = textColor;
    blBtn.style.color = textColorAlt;
    tlBtn.style.color = textColor;

    // Change positions of the corner content
    trContent.style.transform = trHidden;
    brContent.style.transform = brHidden;
    blContent.style.transform = blActive;
    tlContent.style.transform = tlHidden;
  }
};

brBtn.onclick = function () {
  if (activeCorner === "bottom-right" && isCornerActive === true) {
    playClosingAnimation("reverse-animate-bottom-right");
    isCornerActive = false;
  } else {
    //if another corner is active instead, close that corner and open this one
    if (isCornerActive === true) {
      //close the active corner and open this one
      playClosingAnimation(`reverse-animate-${activeCorner.replace("-", "_")}`);
      playAnimation("animate-bottom-right", "reverse-animate-bottom-right");
    }
    isCornerActive = true;
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";

    // Setting activeCorner
    activeCorner = "bottom-right";
    brBtn.innerHTML = "Contact<br/>&darr;";

    handleWindowResize();
    // playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

    // Change background colors
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColorAlt;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;

    // Change text colors
    trBtn.style.color = textColor;
    brBtn.style.color = textColorAlt;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColor;

    // Change positions of the corner content
    trContent.style.transform = trHidden;
    brContent.style.transform = brActive;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
  }
};
// Define the regions for the corners
const corners = {
  "top-left": document.querySelector("#grid__tl"),
  "top-right": document.querySelector("#grid__tr"),
  "bottom-left": document.querySelector("#grid__bl"),
  "bottom-right": document.querySelector("#grid__br"),
};

// Define the functions for corner animations
function triggerCornerAnimation(corner, animation, reverseAnimation) {
  if (activeCorner !== corner) {
    // Trigger animation for the specified corner
    activeCorner = corner;
    playAnimation(animation, reverseAnimation);
  }
}

// Add mousemove listeners for the corners
Object.entries(corners).forEach(([corner, element]) => {
  element.addEventListener("mousemove", () => {
    if (isCornerActive === true) {
      return;
    }
    switch (corner) {
      case "top-left":
        triggerCornerAnimation(
          corner,
          "animate-top-left",
          "reverse-animate-top-left"
        );
        break;
      case "top-right":
        triggerCornerAnimation(
          corner,
          "animate-top-right",
          "reverse-animate-top-right"
        );
        break;
      case "bottom-left":
        triggerCornerAnimation(
          corner,
          "animate-bottom-left",
          "reverse-animate-bottom-left"
        );
        break;
      case "bottom-right":
        triggerCornerAnimation(
          corner,
          "animate-bottom-right",
          "reverse-animate-bottom-right"
        );
        break;
    }
  });

  // Reset animation when the mouse leaves the region
  element.addEventListener("mouseleave", () => {
    if (isCornerActive === true) {
      return;
    }
    if (activeCorner === corner) {
      playClosingAnimation(`reverse-animate-${corner.replace("-", "_")}`);
    }
  });
});

// Define the bubble element
const bubble = document.querySelector("#Bubble");

// Define the safe zone as the center of the screen
const safeZoneRadius = 200; // Adjust radius as needed (in pixels)

// Function to check if the mouse is in the safe zone
function isInSafeZone(mouseX, mouseY) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const distance = Math.sqrt(
    Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
  );

  return distance <= safeZoneRadius;
}

const messages = [
  // "What are you waiting for? Contact me now!",
  "Don't be shy, say hi!",
  // "The next big idea starts here. Let’s connect!",
  // "Your project’s soulmate is just a click away!",
  "Hovering is fun, but chatting is better!",
  "Click Contact me, I promise it wont bite!",
];

// Add a global mousemove event listener
window.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;

  // If a corner is active, exit event
  if (isCornerActive === true) {
    return;
  }

  if (isInSafeZone(clientX, clientY)) {
    // Reverse the animation if there's an active corner
    if (activeCorner) {
      const reverseAnimation = `reverse-animate-${activeCorner.replace(
        "-",
        "_"
      )}`;
      playClosingAnimation(reverseAnimation);
      activeCorner = ""; // Reset active corner
    }
    // Display the bubble with a random message
    if (!bubble.classList.contains("show")) {
      // Reset animation if the mouse is in the safe zone
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];
      bubble.textContent = randomMessage;
      bubble.classList.add("show");
    }
  } else {
    // Hide the bubble when leaving the safe zone
    if (bubble.classList.contains("show")) {
      bubble.classList.remove("show");
    }
  }
});

//if mouse stays  still for 2 seconds, show bubble and reverse animation to idle
let timeout;
window.addEventListener("mousemove", function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    if (isCornerActive === true) {
      return;
    }
    if (activeCorner) {
      const reverseAnimation = `reverse-animate-${activeCorner.replace(
        "-",
        "_"
      )}`;
      playClosingAnimation(reverseAnimation);
      activeCorner = ""; // Reset active corner
    }
    if (!bubble.classList.contains("show")) {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];
      bubble.textContent = randomMessage;
      bubble.classList.add("show");
    }
  }, 2000);
});

//if mouse moves, hide bubble
window.addEventListener("mousemove", function () {
  //if inside safe zone, do not hide bubble
  if (isInSafeZone(event.clientX, event.clientY)) {
    return;
  }
  if (bubble.classList.contains("show")) {
    bubble.classList.remove("show");
  }
});

//any click closes current corner (if  click not on button)
window.addEventListener("click", function (event) {
  if (isCornerActive === true) {
    // Prevent closing the corner if clicking inside #grid__bl
    if (event.target.closest("#grid__bl")) {
      return;
    }

    if (
      event.target !== tlBtn &&
      event.target !== trBtn &&
      event.target !== blBtn &&
      event.target !== brBtn
    ) {
      playClosingAnimation(`reverse-animate-${activeCorner.replace("-", "_")}`);
      activeCorner = ""; // Reset active corner
      isCornerActive = false;
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector("#typing-text");

  // List of titles from your CV
  const jobTitles = [
    "Full-Stack Developer",
    "Computer Engineer",
    "Flutter Developer",
    "Software Engineer",
    "Tech Enthusiast",
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 50; // Typing speed in ms
  const deletingSpeed = 25; // Deleting speed in ms
  const pauseTime = 609; // Pause before deleting and switching words

  function typeEffect() {
    const currentTitle = jobTitles[titleIndex];
    let displayedText = currentTitle.substring(0, charIndex);

    // Prevent collapsing by ensuring there's always at least one space
    typingElement.innerHTML = displayedText || "&nbsp;";

    if (!isDeleting && charIndex < currentTitle.length) {
      charIndex++;
      setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, deletingSpeed);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, pauseTime);
    } else {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % jobTitles.length; // Cycle through titles
      setTimeout(typeEffect, typingSpeed);
    }
  }

  // Start the typing effect
  typeEffect();
});
