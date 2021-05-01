function buttonclicked(val)
{
   
    document.getElementById("abc").value+=val
}


function ramzicleardisplay()
{
    document.getElementById("abc").value=""

}
function equalclicked()
{
   var text=document.getElementById("abc").value
   var result=eval(text)
   document.getElementById("abc").value=result
}