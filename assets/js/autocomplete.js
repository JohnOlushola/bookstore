/**
 * Search autocomplete
 * @param {event} input 
 * @param {array} data 
 */

function autocomplete(input, data) {
  let currentFocus;

  // on input
  input.addEventListener("input", function (e) {
    let dropdown,
      result,
      i,
      value = this.value;

    closeAllLists();
    if (!value) {
      return false;
    }
    currentFocus = -1;

    // create dropdown and dropdown itemss
    dropdown = document.createElement("div");
    dropdown.setAttribute("id", this.id + "autocomplete-list");
    dropdown.setAttribute("class", "autocomplete-items");

    this.parentNode.appendChild(dropdown);

    for (i = 0; i < data.length; i++) {
      if (
        data[i].substr(0, value.length).toUpperCase() == value.toUpperCase()
      ) {
        result = document.createElement("div");

        result.innerHTML = `<span class="black">${data[i].substr(
          0,
          value.length
        )}</span>`;
        result.innerHTML += data[i].substr(value.length);

        result.innerHTML += "<input type='hidden' value='" + data[i] + "'>";

        result.addEventListener("click", function (e) {
          input.value = this.getElementsByTagName("input")[0].value;

          closeAllLists();
        });
        dropdown.appendChild(result);
      }
    }
  });

  // on keydown
  input.addEventListener("keydown", function (e) {
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;

      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;

      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  // highlight character
  function addActive(x) {
    if (!x) return false;

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;

    x[currentFocus].classList.add("autocomplete-active");
  }

  // remove highlight from character
  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  // close dropdown
  function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != input) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

// load autocomplete
window.onload = () => {
  autocomplete(document.getElementById("search-input"), books);
};

// search data
let books = [
  "The War Of Art - Steven Pressfield",
  "Elon Musk - Ashley Vance",
  "So Good They Cant Ignore You - Cal Newport",
  "The Laws Of Human Nature - Robert Greene",
  "Zero To One - Peter Thiel",
  "I'm Judging You - Luvvie Ajayi",
  "The 10X Rule - Grant Cardone",
];
