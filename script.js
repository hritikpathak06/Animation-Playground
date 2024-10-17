document.getElementById("animateButton").addEventListener("click", () => {
  const animationBox = document.getElementById("animationBox");
  const animation = document.getElementById("animationSelect").value;
  const duration = document.getElementById("durationInput").value;
  const easing = document.getElementById("easingSelect").value;

  // Reset styles
  animationBox.style.transition = `all ${duration}s ${easing}`;
  animationBox.style.transform = "none";
  animationBox.style.opacity = "1";

  setTimeout(() => {
    switch (animation) {
      case "bounce":
        animationBox.style.transform = "translateY(-100px)";
        setTimeout(() => {
          animationBox.style.transform = "translateY(0)";
        }, duration * 500);
        break;

      case "fade":
        animationBox.style.opacity = "0";
        setTimeout(() => {
          animationBox.style.opacity = "1";
        }, duration * 500);
        break;

      case "slide":
        animationBox.style.transform = "translateX(200px)";
        setTimeout(() => {
          animationBox.style.transform = "translateX(0)";
        }, duration * 500);
        break;

      case "spin":
        animationBox.style.transform = "rotate(360deg)";
        setTimeout(() => {
          animationBox.style.transform = "translateY(0)";
        }, duration * 500);
        break;

      default:
        break;
    }
  }, 50);
});
