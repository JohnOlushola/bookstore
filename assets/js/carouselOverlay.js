// Carousel
if (window.innerWidth <= 1040) {
  function carouselCellOverlay(id) {
    let selectedCell = document.getElementById(`#${id}`);

    // if active
    if (
      selectedCell
        .getAttribute("class")
        .includes("carousel-cell__overlay-active")
    ) {
      // closeOverlays();
      displayOverlay(selectedCell, false);
    } else {
      closeOverlays();
      displayOverlay(selectedCell, true);
    }
  }

  // close overlays
  function closeOverlays() {
    let carouselCells = document.getElementsByClassName("carousel-cell");
    for (let i = 0; i < carouselCells.length; i++) {
      if (
        carouselCells[i]
          .getAttribute("class")
          .includes("carousel-cell__overlay-active")
      ) {
        displayOverlay(carouselCells[i], false);
      }
    }
  }

  // display overlay
  function displayOverlay(cell, display) {
    let buttonIcon = cell.querySelector(".details-button");
    if (display === true) {
      cell.classList.add("carousel-cell__overlay-active");
      buttonIcon.style.opacity = "0";
    } else {
      cell.classList.remove("carousel-cell__overlay-active");
      buttonIcon.style.opacity = "1";
    }
  }
}
