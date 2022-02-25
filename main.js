window.addEventListener("DOMContentLoaded", () => {
   // Overlays i.e modal content
    const overlay1 = document.querySelector("#overlay1");
    const overlay2 = document.querySelector("#overlay2");
    const overlay3 = document.querySelector("#overlay3");
    const overlay4 = document.querySelector("#overlay4");
    const overlay5 = document.querySelector("#overlay5");
    const overlay6 = document.querySelector("#overlay6");
    // Buttons triggring modal
    const delBtn1 = document.querySelector("#delete-btn1");
    const delBtn2 = document.querySelector("#delete-btn2");
    const delBtn3 = document.querySelector("#delete-btn3");
    const delBtn4 = document.querySelector("#delete-btn4");
    const delBtn5 = document.querySelector("#delete-btn5");
    const delBtn6 = document.querySelector("#delete-btn6");
    // Close buttons
    const closeBtn1 = document.querySelector("#close-modal1");
    const closeBtn2 = document.querySelector("#close-modal2");
    const closeBtn3 = document.querySelector("#close-modal3");
    const closeBtn4 = document.querySelector("#close-modal4");
    const closeBtn5 = document.querySelector("#close-modal5");
    const closeBtn6 = document.querySelector("#close-modal6");
    const body = document.querySelector("body");
    // ToggleModal Functions
    const toggleModal1 = () => {
      overlay1.classList.toggle("hidden");
      overlay1.classList.toggle("flex");
      body.classList.toggle("body-overflow-y");
    };

    const toggleModal2 = () => {
      overlay1.classList.toggle("hidden");
      overlay1.classList.toggle("flex");
      body.classList.toggle("body-overflow-y");
    };
    
    const toggleModal3 = () => {
      overlay3.classList.toggle("hidden");
      overlay3.classList.toggle("flex");
      body.classList.toggle("body-overflow-y");
    };

    const toggleModal4 = () => {
      overlay4.classList.toggle("hidden");
      overlay4.classList.toggle("flex");
      body.classList.toggle("body-overflow-y");
    };

    const toggleModal5 = () => {
      overlay5.classList.toggle("hidden");
      overlay5.classList.toggle("flex");
      body.classList.toggle("body-overflow-y");
    };

    const toggleModal6 = () => {
      overlay6.classList.toggle("hidden");
      overlay6.classList.toggle("flex");
      body.classList.toggle("body-overflow-y");
    };

    delBtn1.addEventListener("click", toggleModal1);
    delBtn2.addEventListener("click", toggleModal2);
    delBtn3.addEventListener("click", toggleModal3);
    delBtn4.addEventListener("click", toggleModal4);
    delBtn5.addEventListener("click", toggleModal5);
    delBtn6.addEventListener("click", toggleModal6);

  closeBtn1.addEventListener("click", toggleModal1);
  closeBtn2.addEventListener("click", toggleModal2);
  closeBtn3.addEventListener("click", toggleModal3);
  closeBtn4.addEventListener("click", toggleModal4);
  closeBtn5.addEventListener("click", toggleModal5);
  closeBtn6.addEventListener("click", toggleModal6);

    
   
  });

  // Volunteer
  const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
