const readMore = document.querySelector("#read_more");
const moreParagraph = document.querySelector("#more_paragraph");
const readLess = document.querySelector("#read_less");

// console.log(readMore);
// console.log(moreParagraph);

readMore.addEventListener("click", function(){
    moreParagraph.style.display = "contents";
    readMore.style.display = "none";

    readLess.addEventListener("click", function(){
        moreParagraph.style.display = "none";
        readMore.style.display = "contents";
    
        
    });
    
});

  