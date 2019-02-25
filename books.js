var genres=[];
var booksArray=[];

var genreSelect=document.querySelector('select#genres');
var bookSelect=document.querySelector('select#book');

var bookDetails=document.querySelector('.book-details');

genreSelect.addEventListener("change",genreChange);
bookSelect.addEventListener("change",bookChange);
var books = {
    "book1": {
        name:'panchatantra',
        author: 'vishnu',
        genre: 'moral',
        summary:'hauifiy qypmyptw qytcmyqc yqmcotpyqqqmytpq umqyypmq'
    },
    "book2":{
        name:'tenaliramalinga',
        author: 'manoj',
        genre: 'moral',
        summary:'hauifiy qypmyptw qytcmyqc yqmcotpyqqqmytpq umqyypmq'
    },
    "book3":{
        name:'ramayan',
        author: 'valmiki',
        genre: 'ethic',
        summary:'hauifiy qypmyptw qytcmyqc yqmcotpyqqqmytpq umqyypmq'
    },
    "book4":{
        name:'mahabhrat',
        author: 'vyas',
        genre: 'war',
        summary:'hauifiy qypmyptw qytcmyqc yqmcotpyqqqmytpq umqyypmq'
    },
    "book5":{
        name:'sindhbad,the sailor',
        author: 'hari',
        genre: 'adventure',
        summary:'hauifiy qypmyptw qytcmyqc yqmcotpyqqqmytpq umqyypmq'
    }
 }

 for(key in books){
     console.log(key);
     if (books.hasOwnProperty(key)){
         var bookGenre = books[key].genre;
         console.log(genres.indexOf(bookGenre));
         if(genres.indexOf(bookGenre) == -1)

         {
             genres.push(bookGenre);
             var genreOpt= document.createElement('option');
             genreOpt.innerHTML = bookGenre;
             genreSelect.appendChild(genreOpt);
            
         }
     }
 }
 function genreChange(){
    var length = bookSelect.options.length;
    console.log(length);
    bookDetails.style.display = 'none' ;
    bookSelect.innerHTML = "<option>select Book</option>";
    for(i=1; i< length;i++){
        bookSelect.options[i] = null;
    }
    var selectGenre = genreSelect.options[genreSelect.selectedIndex].value;
    if(selectGenre !="select Genre"){
         bookSelect.style.display = 'block';
      }
    else{
         bookSelect.style.display = 'none';
    }
for(key in books){
        if (books.hasOwnProperty(key)){
            var bookGenre = books[key].genre;
            var bookName = books[key].name;
            if(bookGenre == selectGenre)
            {
                genres.push(bookGenre);
                var Opt = document.createElement('option');
                Opt.innerHTML = bookName;
                bookSelect.appendChild(Opt);
            }
        }
    }
}
   
 
 function bookChange(){
    var selectedBook = bookSelect.options[bookSelect.selectedIndex].value;
    var bookElement=document.querySelector('#name')
    var bookAuthor=document.querySelector('#author');
    var bookGenre=document.querySelector('#genre');
    var bookSummary=document.querySelector('#summary');
    console.log("selected book is "+selectedBook);
    if(selectedBook !="select book"){
        console.log("inside if");
         bookDetails.style.display = 'block';
         for(key in books){
            if (books.hasOwnProperty(key)){
                var bookName = books[key].name;
                if(bookName == selectedBook)
                {
                   bookElement.innerHTML=bookName;
                   bookAuthor.innerHTML=books[key].author;
                   bookGenre.innerHTML=books[key].genre;
                   bookSummary.innerHTML=books[key].summary;
                }
            }
        }
      }
    }
