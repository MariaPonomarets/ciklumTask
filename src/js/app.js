window.onload = function () {

  $(document).click(function (event) {
    if (event.target.matches('.float-li') == false) {
      var dropdowns = $(".dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }

      }
      clearMenu();
    };
  });
  function clearMenu() {
    var parents = $('.float-li');
    var shildren = $('.dropdown-submenu');
    for (var i = 0; i < parents.length; i++) {
      if (parents[i].classList.contains('active')) {
        parents[i].classList.remove('active');
      }
    }
    for (var i = 0; i < shildren.length; i++) {
      if (shildren[i].classList.contains('show')) {
        shildren[i].classList.remove('show');
      }
    }
  }

  $('.float-li').click(function () {
    clearMenu();
    var drcontents = $('.dropdown-content');
    for (var i = 0; i < drcontents.length; i++) {
      if (drcontents[i].classList.contains('show')) {
        drcontents[i].classList.remove('show');
      }
    }
    if ($(this).children('.dropdown-content').length > 0) {
      $(this).children('.dropdown-content').addClass('show');
      $(this).addClass('active');
      $(this).children('.dropdown-content').position({top:48});
    }
  });

  $('.float-li .dropdown-content li').hover(function () {
    clearMenu();
    if ($(this).children('.dropdown-submenu').length > 0) {
      $(this).children('.dropdown-submenu').addClass('show');
      $(this).addClass('active');
    }

    
  });

  $('.dropdown-submenu li').hover(function () {
    $(this).siblings('li').css('background-color', '#e5e5e5');
    $(this).css('background-color', '#D9D9D9');
  });

  window.res

  //apple footter           transform: rotate(45deg) scale(1.08);

  $('.header').click(function () {
    if (window.innerWidth < 768) {
      if ($(this).children('.dropdown-apple').css('display') == 'none') {
        $(this).children('.dropdown-apple').css('display', 'inline');
        $(this).find('span').addClass(' rotate');
        
          } else {
        $(this).children('.dropdown-apple').css('display', 'none');
        var tmp = $(this).find('span').removeClass('rotate');
      }
    }
  });
  //////////////////////////

}