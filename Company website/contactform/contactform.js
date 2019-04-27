jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

    if (ferror) return false;
    else var str = $(this).serialize();
	var name =  document.getElementById("name").value;
	var email =  document.getElementById("email").value;
	var mobile =  document.getElementById("Mobile").value;
	var message =  document.getElementById("message").value;
	var subject =  document.getElementById("subject").value;	
  //  str=str.deSerialize();
   // var formdata = "name="+name+"email="+email+"mobile="+mobile+"message"+message+"subject="+subject;
	var formdata = {"name":name,"email":email,"mobile":mobile,"message":message,"subject":subject};
	console.log("formdata==",formdata); 
    var action = $(this).attr('action');
    if( ! action ) {
      action = 'URL';
    }
    $.ajax({
      type: "POST",
      url: "/vogelbyte/send_mail.php",
      //contentType: "application/json",
      //dataType:"json",
      data: formdata,
      beforeSend:function(){
    	  $("#loader").show();
      },
      complete:function(){
    	  $("#loader").hide();
      },
      success: function(msg) {
    	  console.log("CallBack Comes",msg);
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input:text,textarea").val("");
          setTimeout(function(){
         	 $("#sendmessage").removeClass("show");
           },3000);
      },
      error: function() {
          // alert(msg);
      	  console.log("Error Comes");
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
       //   $('#errormessage').html(msg);
          setTimeout(function(){
          	 $("#errormessage").removeClass("show");
            },3000);
      }
    });
    return false;
  });

});
