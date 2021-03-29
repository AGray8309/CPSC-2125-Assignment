function validateForm() {
  var x = document.forms["myForm"]["pwdUser"].value;
  if (x == "") {
    alert("Password must be at least 8 characters");
    return false;
  }
}