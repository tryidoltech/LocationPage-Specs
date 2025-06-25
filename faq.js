// const faqItems = document.querySelectorAll(".faq-item");

//   faqItems.forEach((item) => {
//     const button = item.querySelector(".faq-question");
//     const answer = item.querySelector(".faq-answer");
//     const icon = item.querySelector(".faq-icon");

//     button.addEventListener("click", () => {
//       const isOpen = item.classList.contains("open");

//       // Close all items
//       faqItems.forEach((el) => {
//         el.classList.remove("open");
//         el.querySelector(".faq-answer").style.maxHeight = null;
//         el.querySelector(".faq-icon").textContent = "+";
//       });

//       // Toggle current
//       if (!isOpen) {
//         item.classList.add("open");
//         answer.style.maxHeight = answer.scrollHeight + "px";
//         icon.textContent = "−";
//       }
//     });
//   });



  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all items
      faqItems.forEach((el) => {
        el.classList.remove("open");
        el.querySelector(".faq-answer").style.maxHeight = null;
        el.querySelector(".faq-icon").textContent = "+";
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.textContent = "−";
      }
    });
  });