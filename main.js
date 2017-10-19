var target = "https://api.openweathermap.org/data/2.5/weather?appid=00300c9d3295c71ac9fb042ba77d5529";
var selectedLang = 'en' ;
var selectedFormat = 'imperial' ;

function setFormat(format){
    selectedFormat=format;
}

function setLanguage(lang){
    selectedLang = lang;

}


function searchByCity(){
     var city = "&q=" + document.getElementById('city').value;
     $.get(target+city+"&lang="+selectedLang+"&units="+selectedFormat, function(result){
         if(selectedLang =='es'){
              alert('La temperatura es: '+result.main.temp);
         } else{
              alert('The temperature is: '+result.main.temp);
         }
     });
}

function searchByZipCode(){
    var zipCode = document.getElementById('zip').value;
 $.get(target+"&zip="+zipCode+"&lang="+selectedLang+"&units="+selectedFormat,function(result){
         if(selectedLang =='es'){
              alert('La temperature es: '+result.main.temp);
         }else{
              alert('The temperature is: '+result.main.temp);
         }

     });

}
