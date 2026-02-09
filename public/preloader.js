(function () {
  const preloader = document.getElementById("preloader");
  const hideLoader = () => {
    setTimeout(() => {
      if (preloader) {
        preloader.classList.add("preloader-hidden");
        setTimeout(() => {
          preloader.remove();
        }, 800);
      }
    }, 2300);
  };

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader);
  }
})();