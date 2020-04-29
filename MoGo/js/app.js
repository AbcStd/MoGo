$(function() {
  var toggle = $("#toggle"),
      headerH = $("#header").innerHeight(),
      scrollOffset = $(window).scrollTop();


      /* Fixed Header */
      checkScroll(scrollOffset);

      $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
      });

      function checkScroll(scrollOffset) {
        if( scrollOffset >= headerH ) {
          toggle.addClass("fixed");
        } else {
          toggle.removeClass("fixed");
          $("#nav").removeClass("active");
          $("#toggle").removeClass("active");
        }
      }

      /* Smooth scroll */
      $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
          scrollTop: blockOffset
        }, 500);
      });

      
      /* Menu nav toggle */
      $("#toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
      });


});