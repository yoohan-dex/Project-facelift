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

  var dropDown_topbar = $('#myStatus .dropdown');
  dropDown_topbar.hover(openDropDown_topbar);
  function openDropDown_topbar(){
    dropDown_topbar.toggleClass('open');
  }
  
  
  var dropDown_queryItem = $('#query-item .btn-group');
  dropDown_queryItem.hover(openDropDown_queryItem);
  function openDropDown_queryItem(){
    dropDown_queryItem.toggleClass('open');
  }
})();
//topbar^^
  






