function search2(){
    
    var brr = document.getElementsByTagName('select');
    var Datacollection = brr[0].value;
    var filereconciliation = brr[1].value;
    console.log(brr)
    
    
    
    
    

    
    
    if(Datacollection == "0"){
        $(".Notify").show();
        $(".Danger").show();
        document.getElementById('Datacollection').style.borderColor = "red"
        
    }
    if(filereconciliation== "0" ){
        $(".Notify2").show();
        $(".Danger2").show();
        document.getElementById('filereconciliation').style.borderColor = "red"
        
    }
}  

