var form = document.getElementById("form-id");

document.getElementById("your-id").addEventListener("click",function (){
  form.submit();
});
const maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames =["Akosua", "Adwoa", "Abenaa", "Yaa", "Afua", "Ama"];

function giveAkanName (){
  var year =parseint(document.getElementById("year").value);
  var month =parseint(document.getElementById("month").value);
  var century =parseint(document.getElementById("century").value);
  var date =parseint(document.getElementById("date").value);
  var gender =(document.getElementById("Gender").text);
}
var day = ((("century" / 4 - 2 * "century" - 1) + ((5 * "year" / 4) + ((26 * ("month" + 1) / 10)) + "day")% 7;
