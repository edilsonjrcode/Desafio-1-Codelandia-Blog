{
    let icon_heart_active = "src/assets/icon-heart-active.svg"
    let icon_heart = "src/assets/icon-heart.svg"

    function changeIcon(){

      document.getElementById("icon-heart").src = icon_heart_active
      let aux = icon_heart_active;
      icon_heart_active = icon_heart;
      icon_heart = aux;
    }
}
