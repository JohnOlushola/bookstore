// Mobile Search
function toggleSearch() {
  // for mobile only
  if (window.innerWidth <= 1040) {
    const header = document.getElementsByClassName("header")[0];

    const searchBox = document.getElementById("search-input");
    const submitButton = document.getElementsByClassName("submit-button")[0];

    let hidden = header.getAttribute("class");

    if (hidden.includes("hide-buttons")) {
      // revert to default
      header.setAttribute("class", "header");

      // set placeholder
      searchBox.setAttribute(
        "placeholder",
        "Search books, genres, and authors"
      );

      // display menu button
      toggleMenuIcon("./assets/images/icons/hamburger.svg", "toggleNav()");

      // enable toggleSearch on submit button
      submitButton.setAttribute("onclick", "toggleSearch()");
    } else {
      // hide everything else
      header.setAttribute(
        "class",
        `${header.getAttribute("class")} hide-buttons`
      );

      // set placeholder to "Search"
      searchBox.setAttribute("placeholder", "Search");

      // display back button
      toggleMenuIcon("./assets/images/icons/back.svg", "toggleSearch()");

      // disable toggleSearch on submit button
      submitButton.removeAttribute("onclick");
    }
  }

  function toggleMenuIcon(icon, onclick) {
    const menuIcon = document.getElementsByClassName("nav-menu-icon")[0];
  
    menuIcon.setAttribute("src", icon);
    menuIcon.setAttribute("onclick", onclick);
  }
}

// Nav
function toggleNav() {
  if (window.innerWidth <= 1040) {
    const nav = document.getElementsByTagName("nav")[0];
    const overlay = document.getElementsByClassName("nav-mobile__overlay")[0];

    let navMobile = nav.getAttribute("class");

    if (navMobile.includes("nav-mobile__open")) {
      nav.classList.remove("nav-mobile__open");
      overlay.classList.remove("nav-mobile__overlay-active");
      document.body.classList.remove("nav-mobile__open-background");
    } else {
      nav.classList.add("nav-mobile__open");
      overlay.classList.add("nav-mobile__overlay-active");
      document.body.classList.add("nav-mobile__open-background");
    }
  }
}


