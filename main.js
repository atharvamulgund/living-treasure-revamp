window.addEventListener("DOMContentLoaded", () => {
    const overlay1 = document.querySelector("#overlay1");
    const overlay2 = document.querySelector("#overlay2");
    const overlay3 = document.querySelector("#overlay3");
    const overlay4 = document.querySelector("#overlay4");
    const overlay5 = document.querySelector("#overlay5");
    const overlay6 = document.querySelector("#overlay6");
    const delBtn1 = document.querySelector("#delete-btn1");
    const delBtn2 = document.querySelector("#delete-btn2");
    const delBtn3 = document.querySelector("#delete-btn3");
    const delBtn4 = document.querySelector("#delete-btn4");
    const delBtn5 = document.querySelector("#delete-btn5");
    const delBtn6 = document.querySelector("#delete-btn6");
    const closeBtn1 = document.querySelector("#close-modal1");
    const closeBtn2 = document.querySelector("#close-modal2");
    const closeBtn3 = document.querySelector("#close-modal3");
    const closeBtn4 = document.querySelector("#close-modal4");
    const closeBtn5 = document.querySelector("#close-modal5");
    const closeBtn6 = document.querySelector("#close-modal6");
    const body = document.querySelector("body");
    const toggleModal = () => {
      overlay1.classList.toggle("hidden");
      overlay1.classList.toggle("flex");
      overlay2.classList.toggle("hidden");
      overlay2.classList.toggle("flex");
      overlay3.classList.toggle("hidden");
      overlay3.classList.toggle("flex");
      overlay4.classList.toggle("hidden");
      overlay4.classList.toggle("flex");
      overlay5.classList.toggle("hidden");
      overlay5.classList.toggle("flex");
      overlay6.classList.toggle("hidden");
      overlay6.classList.toggle("flex");
      body.classList.toggle("body-overflow-y");
    };
 

    delBtn1.addEventListener("click", toggleModal);
    delBtn2.addEventListener("click", toggleModal);
    delBtn3.addEventListener("click", toggleModal);
    delBtn4.addEventListener("click", toggleModal);
    delBtn5.addEventListener("click", toggleModal);
    delBtn6.addEventListener("click", toggleModal);

  closeBtn1.addEventListener("click", toggleModal);
  closeBtn2.addEventListener("click", toggleModal);
  closeBtn3.addEventListener("click", toggleModal);
  closeBtn4.addEventListener("click", toggleModal);
  closeBtn5.addEventListener("click", toggleModal);
  closeBtn6.addEventListener("click", toggleModal);

    
   
  });
  