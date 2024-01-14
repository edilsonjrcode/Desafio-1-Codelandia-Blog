"use strict";

{
  // let icon_heart = document.querySelector("#icon-heart")
  // let icon_heart2 = document.querySelector("#icon-heart2")
  // let icon_heart3 = document.querySelector("#icon-heart3")
  // let icon_heart4 = document.querySelector("#icon-heart4")
  var changeIcon = function changeIcon() {
    //icon_heart.setAttribute('src', "src/assets/icon-heart-active.svg")
    // icon_heart2.setAttribute('src', "src/assets/icon-heart-active.svg")
    // icon_heart3.setAttribute('src', "src/assets/icon-heart-active.svg")
    // icon_heart4.setAttribute('src', "src/assets/icon-heart-active.svg")

    document.getElementById("icon-heart").src = icon_heart_active;
    var aux = icon_heart_active;
    icon_heart_active = icon_heart;
    icon_heart = aux;
  };
  var icon_heart_active = "src/assets/icon-heart-active.svg";
  var icon_heart = "src/assets/icon-heart.svg";
}