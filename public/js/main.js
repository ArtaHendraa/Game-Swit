function getComputerOption() {
  const computer = Math.random();
  if (computer < 0.34) return "gajah";
  if (computer >= 0.34 && computer < 0.67) return "orang";
  return "semut";
}

function getResult(computer, player) {
  if (player == computer) return "SERI!";
  if (player == "gajah") return computer == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return computer == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return computer == "orang" ? "KALAH!" : "MENANG!";
}

const gajah = document.getElementById("gajah");
const orang = document.getElementById("orang");
const semut = document.getElementById("semut");
const computerImage = document.getElementById("computer-image");
const info = document.getElementById("info");

function change() {
  const image = ["gajah", "orang", "semut"];
  let imageIndex = 0;
  const startTime = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }

    computerImage.setAttribute(
      "src",
      "../image/img/" + image[imageIndex++] + ".png"
    );
    if (imageIndex == image.length) {
      imageIndex = 0;
    }
  }, 100);
}

const userOption = document.querySelectorAll("li img");
userOption.forEach(function (option) {
  option.addEventListener("click", () => {
    const computerOption = getComputerOption();
    const playerOption = option.id;
    const result = getResult(computerOption, playerOption);

    change();

    setTimeout(() => {
      computerImage.setAttribute(
        "src",
        "../image/img/" + computerOption + ".png"
      );
      info.innerHTML = result;
    }, 1000);
  });
});

// gajah.addEventListener("click", () => {
//   const computerOption = getComputerOption();
//   const playerOption = gajah.id;
//   const result = getResult(computerOption, playerOption);

//   computerImage.setAttribute("src", "../image/img/" + computerOption + ".png");
//   info.innerHTML = result;
// });
