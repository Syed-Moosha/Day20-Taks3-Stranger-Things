//* getting the tag 
const main=document.querySelector(".main");
const btn=document.querySelector(".btn");
const quote=document.querySelector(".quote");

//* api fetch:

const response=fetch("https://strangerthings-quotes.vercel.app/api/quotes/5");
response.then((data)=>data.json())
.then((ele)=>{
    for (let i = 0; i < ele.length; i++){
    quote.innerHTML=`${ele[i].quote} - ${ele[i].author} `
    main.append(quote,btn);
    // console.log(ele);
}
})
.catch((error)=>alert("There is no api data"));

//* Button for new quote
btn.addEventListener("click",()=>
{
    location.reload();
})  