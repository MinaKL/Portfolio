$(document).ready(function(){
    //Write all your jQuery code here
    int count = 0;
        $("#button1").click(function() {
            count++;
      $("#like").html("You like this project!" + count);
      
    });
    
    $("#button2").click(function() {
      $("#like2").html("You like this project!");
    });
    
    function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
    
});