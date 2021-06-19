// *************************
//
// Helper para passar de timestamp para data legível.
// Caso queira que apareça a hora:minuto:segundo, passar true no segundo parâmetro.
// Caso queira um separador diferenciado entre a data, como '/' ou '-', passar a string no terceiro parâmetro.
// Caso queira um fomato especifico de formatação entre a data, como somente a exibição do 'Dia' e do 'Ano'
// para exibir apenas o 'Mes' e o 'Ano' basta utilizar como quarto parâmetro a string 'monthYear'.
// para exibir apenas o 'Dia' e o 'Mes' basta passar como quarto parâmetro a string 'dayMonth'
//
//
// *************************

const timestampToDate = (timestamp, displayHour = false, separator = " ", format="") => {
  let timestampDate = new Date(timestamp);
  let months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  let year = timestampDate.getFullYear();
  let month = months[timestampDate.getMonth()];
  let day = timestampDate.getDate();

  let hour = timestampDate.getHours();
  let min = timestampDate.getMinutes();
  let sec = timestampDate.getSeconds();
  
  let fullDate = day + separator + month + separator + year;
  
  if(format !== ""){
    switch(format){
      case "monthYear" : 
        fullDate = month + separator + year;
      break;
      case  "dayMonth" :
        fullDate = day + separator + month;
      break;
      default :
        fullDate = day + separator + month + separator + year;
    }
  }

  if (displayHour) {
    fullDate += ' - ' + hour + ':' + min + ':' + sec;
  }

  return(fullDate);
}

export default timestampToDate;