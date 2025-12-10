document.addEventListener("DOMContentLoaded", function () {

  const updateBtn = document.getElementById("update-card");
  const resetBtn = document.getElementById("reset-card");

  const displayName = document.getElementById("display-name");
  const displayAge = document.getElementById("display-age");
  const displayCountry = document.getElementById("display-country");
  const displayPlaystyle = document.getElementById("display-playstyle");
  const displayGear = document.getElementById("display-gear");
  const displayAwards = document.getElementById("display-awards");
  const displayFavShot = document.getElementById("display-favshot");

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const countryInput = document.getElementById("country");
  const playstyleInput = document.getElementById("playstyle");
  const gearInput = document.getElementById("gear");
  const awardsInput = document.getElementById("awards");
  const favShotInput = document.getElementById("favshot");

  updateBtn.addEventListener("click", function () {

    if (nameInput.value.trim() !== "") {
      displayName.append(nameInput.value + " ");
    }

    if (ageInput.value.trim() !== "") {
      displayAge.append(ageInput.value + " ");
    }

    if (countryInput.value.trim() !== "") {
      displayCountry.append(countryInput.value + " ");
    }

    if (playstyleInput.value.trim() !== "") {
      displayPlaystyle.append(playstyleInput.value + " ");
    }

    if (gearInput.value.trim() !== "") {
      displayGear.append(gearInput.value + " ");
    }

    if (awardsInput.value.trim() !== "") {
      displayAwards.append(awardsInput.value + " ");
    }

    if (favShotInput.value.trim() !== "") {
      displayFavShot.append(favShotInput.value + " ");
    }
  });

  resetBtn.addEventListener("click", function () {

    
    displayName.textContent = "";
    displayAge.textContent = "";
    displayCountry.textContent = "";
    displayPlaystyle.textContent = "";
    displayGear.textContent = "";
    displayAwards.textContent = "";
    displayFavShot.textContent = "";

    
    nameInput.value = "";
    ageInput.value = "";
    countryInput.value = "";
    playstyleInput.value = "";
    gearInput.value = "";
    awardsInput.value = "";
    favShotInput.value = "";
  });
});
