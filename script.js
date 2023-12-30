function vowelsCounter()
{
    let userText=document.getElementById("userText").value;
    let count=document.getElementById("count");
    let string=userText.toLowerCase();
    if(userText==""){
    alert("please enter text");
}
let vowelsCount=0;
const vowels = ["a","e","i","o","u"];
for (let char of string)
{
    if(vowels.includes(char))
    {
        vowelsCount++;
    }
}

count.innerHTML=`Total vowels: ${vowelsCount}`;
}