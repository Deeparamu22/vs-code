Array.prototype.shuffleArray=function()
{
   for(var i=this.length-1; i>0; i--)
   {
    var j=Math.floor(Math.random()*(i+1));
    var temp=this[i];
    this[i]=this[j];
    this[j]=temp;
   }
   return this;
}
String.prototype.stringReverse=function(){
    return this.split("").reverse().join("")
}
