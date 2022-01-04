function search3(){
    var arr = document.getElementsByTagName('input');
    var Otp = arr[2].value;
    var brr = document.getElementsByTagName('select');
    var Datacollection = brr[0].value;
    console.log(brr)
    
    
    
    
    if(Otp == "" ){
        $(".Notify").show();
        $(".Danger4").show();
        document.getElementById('Otp').style.borderColor = "red"
        
    }

    
    
    if(Datacollection == "0"){
        $(".Notify2").show();
        $(".Danger3").show();
        document.getElementById('Datacollection').style.borderColor = "red"
        
    }
}  

