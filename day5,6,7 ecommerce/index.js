const wrapper = document.getElementsByClassName("wrapper")[0];
const navbar = document.getElementsByTagName("nav")[0];

let prevScroll = 0;

wrapper.addEventListener("scroll", (event) => {
  let currentScroll = event.target.scrollTop;

  console.log(event.target.scrollTop);

  if (currentScroll - prevScroll > 0) {
    navbar.style.top = "-75px";
    console.log("moving down");
  } else if (currentScroll < prevScroll) {
    navbar.style.top = "0px";
    console.log("moving up");
  }
  prevScroll = currentScroll;
});
