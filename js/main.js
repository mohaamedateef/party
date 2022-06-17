$(document).ready(function () {
  $(".loading-screen").fadeOut(500);
  console.log("hel");
});
/*toggle sidebar at click event */
$(".toggle-sidebar").click(function () {
  let left = $(".close").css("left");
  $(".close").hide();
  $($(".toggle-sidebar").children()[0]).toggleClass("fa-chevron-left");
  $($(".toggle-sidebar").children()[0]).toggleClass("fa-chevron-right");
  $(".sidebar").animate(
    { width: "toggle", padding: "toggle" },
    500,
    function () {
      let sideBarWidth = $(".sidebar").outerWidth();
      if (left == "5px") {
        $(".close")
          .css({ left: `${sideBarWidth + 5}px` })
          .show();
        $($(".toggle-sidebar").children()[1]).text("Close");
      } else {
        $(".close").css({ left: `5px` }, 100).show();
        $($(".toggle-sidebar").children()[1]).text("Open");
      }
    }
  );
});

/*add click event on h3 in accordion to show thier paragraphs */
$(".my-accordion h3").click(function () {
  $(this).next().slideToggle(1000);
  $(".my-accordion p").not($(this).next()).slideUp(1000);
});

/*count down function to a specific date */
setInterval(() => {
  let eventDate = new Date("12/31/2022");
  let todayDate = new Date();
  let reminder = eventDate.getTime() - todayDate.getTime(),
    seconds = (reminder / 1000) % 60,
    minutes = (reminder / (60 * 1000)) % 60,
    hours = (reminder / (60 * 60 * 1000)) % 24,
    days = reminder / (24 * 60 * 60 * 1000);
  let daysCountMessage =
      Math.floor(days) > 1
        ? `${Math.floor(days)} Days`
        : `${Math.floor(days)} Day`,
    hoursCountMessage =
      Math.floor(hours) > 1
        ? `${Math.floor(hours)} Hours`
        : `${Math.floor(hours)} Hour`,
    minutesCountMessage =
      Math.floor(minutes) > 1
        ? `${Math.floor(minutes)} Minutes`
        : `${Math.floor(minutes)} Minute`;
  $(".item:nth(0)").text(daysCountMessage);
  $(".item:nth(1)").text(hoursCountMessage);
  $(".item:nth(2)").text(minutesCountMessage);
  $(".item:nth(3)").text(`${Math.floor(seconds)} Seconds`);
}, 1000);

/*message counter*/
$(".contact-form textarea").keyup(function () {
  let messageLength = $(this).val().length,
    maxMessage = 100,
    reminder = maxMessage - messageLength;
  reminder > 0
    ? $(".contact-form p span:nth(0)").text(reminder) &&
      $(".contact-form p span:nth(1)").text("Characters Remaining")
    : $(".contact-form p span:nth(0)").text("No Characters Left") &&
      $(".contact-form p span:nth(1)").text(" ");
});
