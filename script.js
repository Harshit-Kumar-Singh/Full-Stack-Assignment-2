function HtmlEncode(s)
{
  var el = document.createElement("div");
  el.innerText = el.textContent = s;
  s = el.innerHTML;
  return s;
} 
function change(){
    let content = document.getElementById('text-area').value;
    let output = "";
    for(let single of content)
    {
        let character = '';
        if(single==' '){
            character = '&nbsp;';
        }
        else{
            character = HtmlEncode(single);
        }
        output+=`<span>${character}</span>`;
    }
    document.getElementById('output').innerHTML = output;
}