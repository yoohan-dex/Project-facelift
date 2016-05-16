(function(){
  $('#location-button').click(show_locationList);
  $('#loc-arrow').click(show_locationList);
  var loc = $('#location-list');
  function show_locationList(){
    
    loc.toggleClass('loc-hidden');
    
  }
  $('#moreButton').click(show_moreInput);

  var moreInput=$('#moreInput');
  var moreArrow =$('.moreArrow');
  var regRight = $('#reg-right')
  function show_moreInput(){
    moreArrow.toggleClass('upArrow');
    moreInput.toggleClass('moreInput');
    regRight.toggleClass('reg-right-up');
  }

  var dropDown = $('#myStatus .dropdown');
  dropDown.hover(openDropDown);
  function openDropDown(){
    dropDown.toggleClass('open');
  }
})();
//topbar^^






