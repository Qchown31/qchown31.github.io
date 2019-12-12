$(document).ready(function() {
  // Fixed sticky nav appear
  $('#About').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '75px;'
    }
  );

  // Page scrolls

  //   $(".about-scroll").click(function() {
  //     $("html, body").animate(
  //       { scrollTop: $("#About-anchor").offset().top },
  //       1000
  //     );
  //   });
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // animations on scroll *****************
  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#Qchown, #about-qchown')
          .addClass('animated bounceInLeft')
          .removeClass('hide');
      }, 0);
    },

    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill17')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 0);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill16')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 100);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill15')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 200);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill14')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 300);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill13')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 400);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill12')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 500);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill11')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 600);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill10')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 700);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill09')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 800);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill08')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 900);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill08')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 1000);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill07')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 1100);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill06')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 1200);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill05')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 1300);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill04')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 1400);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill03')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 1500);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill02')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 1600);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('#skill01')
          .addClass('animated bounceInDown')
          .removeClass('hide');
      }, 1700);
    },
    {
      offset: '50%'
    }
  );

  $('#skill01').waypoint(
    function() {
      setTimeout(() => {
        $('.skills, .skill-text')
          .addClass('animated fadeIn')
          .removeClass('hide');
      }, 800);
    },
    {
      offset: '30%'
    }
  );
});
