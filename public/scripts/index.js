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

(function(){
  var $inputUsername = $('#inputUsername'),
      $inputEmail = $('#inputEmail'),
      $inputPhone = $('#inputPhone'),
      $passwordInput = $('#inputPassword'),
      $passwordInput2 = $('#inputPassword2'),
      $btnSubmit = $('#btn-submit-registration');
      $btnSubmit2 = $('#btn-submit-login')
      $passwdError = $('#passwdError'),
      $passwdError2 = $('#passwdError2');
      
  var reg =/\w{8,}$/;
  

  var cannotsubmit = false;
  $passwordInput.blur(function(){
    if($passwordInput.val()!==$passwordInput2.val()&&$passwordInput2.val()!=''){
      $passwdError.removeClass('hidden');
      cannotsubmit = false;
    }else{
      $passwdError.addClass('hidden');
      cannotsubmit = true;
    }
    if(!reg.test($passwordInput.val())){
      $passwdError2.removeClass('hidden')
      cannotsubmit = false;
    }else{
      $passwdError2.addClass('hidden')
      cannotsubmit = true;
    } 
  })
  $passwordInput2.blur(function(){
    if($passwordInput.val()!==$passwordInput2.val()&&$passwordInput2.val()!=''){
      $passwdError.removeClass('hidden');
      cannotsubmit = false;
    }else{
      $passwdError.addClass('hidden');
      cannotsubmit = true;
    }

  })
   $btnSubmit.click(function(event){
     if($inputUsername.val().trim()==''||$inputEmail.val().trim()==''||$inputPhone.val().trim()==''||$passwordInput.val().trim()==''||$passwordInput2.val().trim()==''){
      event.preventDefault();
      alert('请完成注册表单');
     }
   })
   $btnSubmit2.click(function(event){
     if($inputUsername.val().trim()==''||$passwordInput.val().trim()==''){
      event.preventDefault();
      alert('请完成登录表单');
     }
   })
    
})();

    

  






