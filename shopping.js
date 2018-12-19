function prixs(i) {
    var Quentite= document.getElementById("quentite"+i).value;
    var Prix = document.getElementById("prix"+i).textContent;
     
    var  prixArticle= Prix * Quentite +"DT"
    document.getElementById("total"+i).innerHTML = prixArticle ;
    
}
function totalPrice(){
var total =0
    
  let   val1=Number(document.getElementById("total1").textContent.replace('DT',""))

  let  val2=Number(document.getElementById("total2").textContent.replace('DT',""))

  let   val3=Number(document.getElementById("total3").textContent.replace('DT',""))

  let  val4=Number(document.getElementById("total4").textContent.replace('DT',""))

  let val5=Number(document.getElementById("total5").textContent.replace('DT',""))

  let   val6=Number(document.getElementById("total6").textContent.replace('DT',""))

total=val1+val2+val3+val4+val5+val6
     
document.getElementById("panier").innerHTML=total +"DT";

}
