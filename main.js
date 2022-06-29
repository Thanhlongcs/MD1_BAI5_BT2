function Convert(){

    let tien = +document.getElementById("number").value;
    let nhap = document.getElementById("currency").value;
    let xuat = document.getElementById("currency2").value;

    if(nhap===xuat){
        document.getElementById("change").innerHTML=tien;
    }
    else{
        if(nhap==="vietnam"){
            document.getElementById("change").innerHTML= tien/23000;
        }
        else {
            document.getElementById("change").innerHTML= tien*23000;
        }
    }


}
