<script type="text/javascript">
  function username_valid(username) {
  // Huruf dari a sampai z
  var lowerCase = /[a-z]/g;
  
  // check panjang string dan memastikan karater yang ditemukan sama dengan panjang string
  if(username.length == 8 && username.match(lowerCase).length == username.length) {
      return true;
    }
    return false;
}

function password_valid(password) {
  // huruf keci a sampai z
  var lowerCase = /[a-z]/g;
  
  // huruf besar A sampai Z
  var uppercase = /[A-Z]/g;

  // angka dari 0 sampai 9
  var number = /[0-9]/g;

  // karater unik _@#$ atau %
  var special = /[_@#$%]/g;

  if(password.length == 8
     && lowercase.test(password)
     && uppercase.test(password)
     && number.test(password)
     && special.test(password)) {
     return true;
  }

  return false;
}
</script>
