document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll(".skillItem");
    let index = 0;
  
    function showNextSkill() {
      skillItems.forEach(item => {
        item.classList.remove("active");
      });
      skillItems[index].classList.add("active");
      index = (index + 1) % skillItems.length;
    }
  
    // Show next skill every 5 seconds
    setInterval(showNextSkill, 5000);
  });