function calcPay(){

    let keren = document.getElementById('keren').value;
    let ribit = document.getElementById('ribit').value;
    let month = document.getElementById('month').value;
    let refund= document.getElementById('refund').value;
    
    
    
    var result = (keren * (ribit * 1)) / month;
    //document.getElementById('result').innerHTML = result.toFixed(2);
    
    document.getElementById('result').innerHTML = "החזר חודשי = ₪" + result.toFixed(2);
    
    
    
    if (refund < result)
    {
        document.getElementById('result1').innerHTML = "ההחזר גבוהה ממה שביקשת";
    }
        else
        {
             document.getElementById('result1').innerHTML = "ההחזר תואם את בקשתך";
        }
    
    }
    
    
    
    function checkInput(input){
    
        let value = Number(input.value)
    
        if (isNaN(value)|| Number (input.value) < 0){
            input.style.border = '2px solid red';
        }
    
        else {
            input.style.border = '1px solid green';
        }
    
    }