// JS for Index
$("#img-col").click(function() {
    $(this).find('img').toggle();
});

// JS for Portfolio
$(".accordion").click(function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    $(this).toggleClass("active");
    $(this).next().toggleClass("panelDisplay");
    /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
  });
