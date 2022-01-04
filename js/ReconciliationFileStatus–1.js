function search(){
    
    var arr = document.getElementsByTagName('select');
    var Datacollection = arr[0].value;
    console.log(arr)
    
    
    
    
   

    
    
    if(Datacollection == "1"){
        $(".Notify").show();
        $(".Danger").show();
        document.getElementById('Datacollection').style.borderColor = "red"

        
    }
}  

