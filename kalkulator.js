function toggleDivs1() {
    const kalkulatorjednowalutowy = document.getElementById("kalkulatorjednowalutowy");
    const kalkulatorwielowalutowy = document.getElementById("kalkulatorwielowalutowy");
 
    if (kalkulatorjednowalutowy.style.display === "block") {
        kalkulatorjednowalutowy.style.display = "none";
        kalkulatorwielowalutowy.style.display = "block";
    } else {
        kalkulatorjednowalutowy.style.display = "block";
        kalkulatorwielowalutowy.style.display = "none";
    }
}

function toggleDivs2() {
    const kalkulatorwielowalutowy = document.getElementById("kalkulatorwielowalutowy");
    const kalkulatorjednowalutowy = document.getElementById("kalkulatorjednowalutowy");
 
    if (kalkulatorwielowalutowy.style.display === "block") {
        kalkulatorwielowalutowy.style.display = "none";
        kalkulatorjednowalutowy.style.display = "block";
    } else {
        kalkulatorwielowalutowy.style.display = "block";
        kalkulatorjednowalutowy.style.display = "none";
    }
}

function usunKwoty() {
    document.getElementById("inputkwota1").value = "";
    document.getElementById("inputwynik1").value = "";
    document.getElementById("inputkwota3").value = "";
    document.getElementById("inputwynik4").value = "";
    document.getElementById("inputwynik5").value = "";
    document.getElementById("inputwynik6").value = "";
    document.getElementById("inputwynik7").value = "";
    document.getElementById("inputwynik8").value = "";
}

const waluty = {
    PLN: {PLN: 1.00 , EUR: 0.24 , KRW: 377.67 , GBP: 0.20 , CNY: 1.94 , USD: 0.26},
    EUR: {PLN: 4.19 , EUR: 1.00 , KRW: 1581.65 , GBP: 0.83 , CNY: 8.12 , USD: 1.08},
    KRW: {PLN: 0.26 , EUR: 0.63 , KRW: 1.00 , GBP: 0.53 , CNY: 0.50 , USD: 0.68},
    GBP: {PLN: 5.02 , EUR: 1.20 , KRW: 1897.89 , GBP: 1.00 , CNY: 9.41 , USD: 1.29},
    CNY: {PLN: 0.54 , EUR: 0.12 , KRW: 201.73 , GBP: 0.11 , CNY: 1.00 , USD: 0.14},
    USD: {PLN: 3.88 , EUR: 0.93 , KRW: 1465.12  , GBP: 0.77 , CNY: 7.51 , USD: 1.00}
};

function obliczonaKwota(){
    let kwota = document.getElementById("inputkwota1").value;
    let waluta1 = document.getElementById("waluta1").value;
    let waluta2 = document.getElementById("waluta2").value;
    
    document.getElementById('inputwynik1').value = kwota * (waluty[waluta1][waluta2]).toFixed(2);
}

function obliczoneWszystkieKwoty(){
    let kwota = document.getElementById("inputkwota3").value;
    let waluta3 = document.getElementById("waluta3").value;

    if(waluta3 == "PLN"){
        document.getElementById('inputwynik4').value = (kwota * waluty[waluta3]["EUR"]).toFixed(2) + " EUR";
        document.getElementById('inputwynik5').value = (kwota * waluty[waluta3]["KRW"]).toFixed(2) + " KRW";
        document.getElementById('inputwynik6').value = (kwota * waluty[waluta3]["GBP"]).toFixed(2) + " GBP";
        document.getElementById('inputwynik7').value = (kwota * waluty[waluta3]["CNY"]).toFixed(2) + " CNY";
        document.getElementById('inputwynik8').value = (kwota * waluty[waluta3]["USD"]).toFixed(2) + " USD";
    }else if(waluta3 == "EUR"){
        document.getElementById('inputwynik4').value = (kwota * waluty[waluta3]["PLN"]).toFixed(2) + " PLN";
        document.getElementById('inputwynik5').value = (kwota * waluty[waluta3]["KRW"]).toFixed(2) + " KRW";
        document.getElementById('inputwynik6').value = (kwota * waluty[waluta3]["GBP"]).toFixed(2) + " GBP";
        document.getElementById('inputwynik7').value = (kwota * waluty[waluta3]["CNY"]).toFixed(2) + " CNY";
        document.getElementById('inputwynik8').value = (kwota * waluty[waluta3]["USD"]).toFixed(2) + " USD";
    }else if(waluta3 == "KRW"){
        document.getElementById('inputwynik4').value = (kwota * waluty[waluta3]["EUR"]).toFixed(2) + " EUR";
        document.getElementById('inputwynik5').value = (kwota * waluty[waluta3]["PLN"]).toFixed(2) + " PLN";
        document.getElementById('inputwynik6').value = (kwota * waluty[waluta3]["GBP"]).toFixed(2) + " GBP";
        document.getElementById('inputwynik7').value = (kwota * waluty[waluta3]["CNY"]).toFixed(2) + " CNY";
        document.getElementById('inputwynik8').value = (kwota * waluty[waluta3]["USD"]).toFixed(2) + " USD";
    }else if(waluta3 == "GBP"){
        document.getElementById('inputwynik4').value = (kwota * waluty[waluta3]["EUR"]).toFixed(2) + " EUR";
        document.getElementById('inputwynik5').value = (kwota * waluty[waluta3]["KRW"]).toFixed(2) + " KRW";
        document.getElementById('inputwynik6').value = (kwota * waluty[waluta3]["PLN"]).toFixed(2) + " PLN";
        document.getElementById('inputwynik7').value = (kwota * waluty[waluta3]["CNY"]).toFixed(2) + " CNY";
        document.getElementById('inputwynik8').value = (kwota * waluty[waluta3]["USD"]).toFixed(2) + " USD";
    }else if(waluta3 == "CNY"){
        document.getElementById('inputwynik4').value = (kwota * waluty[waluta3]["EUR"]).toFixed(2) + " EUR";
        document.getElementById('inputwynik5').value = (kwota * waluty[waluta3]["KRW"]).toFixed(2) + " KRW";
        document.getElementById('inputwynik6').value = (kwota * waluty[waluta3]["GBP"]).toFixed(2) + " GBP";
        document.getElementById('inputwynik7').value = (kwota * waluty[waluta3]["PLN"]).toFixed(2) + " PLN";
        document.getElementById('inputwynik8').value = (kwota * waluty[waluta3]["USD"]).toFixed(2) + " USD";
    }else if(waluta3 == "USD"){
        document.getElementById('inputwynik4').value = (kwota * waluty[waluta3]["EUR"]).toFixed(2) + " EUR";
        document.getElementById('inputwynik5').value = (kwota * waluty[waluta3]["KRW"]).toFixed(2) + " KRW";
        document.getElementById('inputwynik6').value = (kwota * waluty[waluta3]["GBP"]).toFixed(2) + " GBP";
        document.getElementById('inputwynik7').value = (kwota * waluty[waluta3]["CNY"]).toFixed(2) + " CNY";
        document.getElementById('inputwynik8').value = (kwota * waluty[waluta3]["PLN"]).toFixed(2) + " PLN";
    }
        
    }



