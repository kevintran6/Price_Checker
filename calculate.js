
function onClick() {
  showboxes();
  findValues();
}

function findValues() {
  const inputNumber = document.getElementById("text");
  const Button = document.getElementById("convertButton");
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const third = document.getElementById("third");
  const fourth = document.getElementById("fourth");
  const fifth = document.getElementById("fifth");

  let inputValue = inputNumber.value;

  let Stockx = Math.round(inputValue * 0.875 * 100) / 100;
  let FlightClub = Math.round(inputValue * 0.8 * 100) / 100;
  let Mercari = Math.round(inputValue * 0.871 * 100) / 100;
  let Grailed = Math.round(inputValue * 0.911 * 100) / 100;
  let Goat = Math.round(inputValue * 0.88 * 100) / 100;
  let Ebay = 0;

  if (isCheckboxChecked) {
    Ebay = Math.round(inputValue * 0.92 * 100) / 100;
  } else {
    Ebay = Math.round(inputValue * 0.873 * 100) / 100;
  }

  const arr = [Stockx, FlightClub, Mercari, Grailed, Goat, Ebay];

  findHighestFour(arr);
  console.log(arr);

  first.textContent = "After fees, you'd make: $" + arr[0];
  second.textContent = "After fees, you'd make: $" + arr[1];
  third.textContent = "After fees, you'd make: $" + arr[2];
  fourth.textContent = "After fees, you'd make: $" + arr[3];
  fifth.textContent = "After fees, you'd make: $" + arr[4];

  changeImage(
    getName(arr[0], Stockx, FlightClub, Mercari, Grailed, Goat, Ebay),
    "first_image"
  );
  changeImage(
    getName(arr[1], Stockx, FlightClub, Mercari, Grailed, Goat, Ebay),
    "second_image"
  );
  changeImage(
    getName(arr[2], Stockx, FlightClub, Mercari, Grailed, Goat, Ebay),
    "third_image"
  );
  changeImage(
    getName(arr[3], Stockx, FlightClub, Mercari, Grailed, Goat, Ebay),
    "fourth_image"
  );
  changeImage(
    getName(arr[4], Stockx, FlightClub, Mercari, Grailed, Goat, Ebay),
    "fifth_image"
  );
}

function getName(
  input,
  Stockx,
  FlightClub,
  Mercari,
  Grailed,
  Goat,
  Ebay
) {
  switch (input) {
    case Stockx:
      return "Stockx";
      break;
    case FlightClub:
      return "FlightClub";
      break;
    case Mercari:
      return "Mercari";
      break;
    case Grailed:
      return "Grailed";
      break;
    case Goat:
      return "Goat";
      break;
    case Ebay:
      return "Ebay";
      break;
  }
}

function changeImage(input, string) {
  const image = document.getElementById(string);

  switch (input) {
    case "Stockx":
      image.src = "images/Stockx_logo.png";
      break;
    case "FlightClub":
      image.src = "images/Flightclub.png";
      break;
    case "Mercari":
      image.src = "images/Mercari_logo.png";
      break;
    case "Grailed":
      image.src = "images/Grailed.png";
      break;
    case "Goat":
      image.src = "images/Goat.png";
      break;
    case "Ebay":
      image.src = "images/Ebay.png";
      break;
    default:
      console.log("Invalid input.");
  }
}

function showboxes() {
  const invisibleDiv = document.getElementById("featureCards");
  const toggleButton = document.getElementById("convertButton");

  if (invisibleDiv.style.display === "none") {
    invisibleDiv.style.display = "inline-block";
  }
}

function findHighestFour(arr) {
  if (arr.length < 4) {
    return "Array must contain at least 4 integers.";
  }
  arr.sort((a, b) => b - a);
}