/*var bases = {};
$.ajax({
  type: "GET",
  url: "https://api.metricamovil.com/ApiMetricaMovil/UserCreator/Databases/mdelgado",
  success: function (result) {
    console.log("result: ", result);
    var listaDB = document.getElementById("basesdedatos");
    result.forEach(function (resultBD) {
      listaDB.add(crearItem(resultBD.Database));
      bases[resultBD.Database] = resultBD;
    });
  },
  error: function (error) {
    console.log(error);
  }
});
var crearItem = function (texto) {
  var option = document.createElement("option");
  option.text = texto;
  return option;
}


var fBasededatos = function () {

  var lstUsers = document.getElementById("user").value,
    lstPass = document.getElementById("pass").value,
    listaDB = document.getElementById("basesdedatos").value;

  api.call("Authenticate", {
    "userName": lstUsers,
    "database": listaDB,
    "password": lstPass
  }, function (result) {
    console.log(result.credentials);
  });
  api.getSession(function (session) {
    api.call("Get", {
      typeName: "User",
      search: {
        name: session.userName
      }
    }, function (result) {
      console.log(result)
    }, function (err) {
      console.log("error getting user", err)
    });
  });
}
var btnbases = document.getElementById("btnbd");
document.addEventListener("click", fBasededatos);



var api = GeotabApi(function (authenticationCallback) {
  document.getElementById("submit").addEventListener("click", function () {
    var lstUsers = document.getElementById("user").value,
      lstPass = document.getElementById("pass").value,
      listaDB = document.getElementById("basesdedatos").value;

    api.call("Authenticate", {
      "userName": listaDB,
      "database": lstUsers,
      "password": lstPass
    }, function (result) {
      console.log(result.credentials);
    })


    api.getSession(function (session) {
      api.call("Get", {
        "typeName": "User",
        search: {
          "name": session.userName
        }
      }, function (result) {
        console.log(result);
      }, function (err) {
        console.log("error getting user", err);
      });
    });
    //window.open("https://my.geotab.com/" + listaDB + ",userName:" + lstUsers + ",userName:" + lstPass);
    authenticationCallback(listaDB, lstUsers, lstPass, function (errorString) {
      console.log(errorString);
    });
  }, false);
});
*/
