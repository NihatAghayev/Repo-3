// Kullanicinin  Girdigi Rakami Algilayalim 
     
     
      const rastgeleSayi = Math.floor(Math.random() * 100)+ 1 ;
    
    
function tikla(){
    const girilenRakam = document.getElementById('sayiInput');
    const rakamAtama = parseFloat( girilenRakam.value);

    if(isNaN(rakamAtama)){
        alert("Lutfen  Gecerli  Bir Sayi Giriniz ...");
    }
     else if(rakamAtama < 0 || rakamAtama > 100 ){
        alert("Lutfen 1'le 100 arasinda sayi giriniz ... ")
     }
      else{
        if(rakamAtama ===rastgeleSayi ){
            alert("Tebrikler Dogru Sayiyi buldunuz ...");
        }
        else if(rakamAtama<rastgeleSayi){
            alert("Lutfen Daha Yuksek Sayi giriniz... ");
        }
        else {
            alert("lutfen daha az sayi giriniz...")
        }
      }
      }


    