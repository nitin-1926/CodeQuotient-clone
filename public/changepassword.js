
  var old_password = document.getElementById("old-password")
  var new_password = document.getElementById("new-password")
  var button = document.getElementById("submit-button")
  button.onclick= ()=>
  {
    var obj = Object();
    obj.old_password = old_password.value
    obj.new_password = new_password.value
    var request = new XMLHttpRequest();
    request.open('POST','/changepassword');
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj));
    request.onload = function ()
    {
      if(request.responseText=="0")
      {
        if(document.getElementById("right"))
        {
          document.getElementById("right").style.display = "none";
        }
        document.getElementById("wrong").style.display = "block";
        old_password.value = ""
        new_password.value = ""
      }
      else
        {
          if(document.getElementById("wrong"))
          {
            document.getElementById("wrong").style.display = "none";
          }
          document.getElementById("right").style.display = "block";
          old_password.value = ""
          new_password.value = ""
        }
    }
  }
