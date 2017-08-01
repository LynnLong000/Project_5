/*global $
'www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
*/

$(document).ready(function(){

    var url = 'https://random-quote-generator.herokuapp.com/api/quotes/random';
    var data = {language:"en", country:"us"};
    
    function getNewQuote() {
        $.ajax({
            url: url,
            data:data,
            type:"GET",
            success: function(response){
                $("#quote").html(response.quote);
                $("#author").html(response.author);
                $(".share-twitter").attr("href", 'https://twitter.com/intent/tweet?text='+response.quote +'Author '+response.author);
                
            }
        });
    }

    getNewQuote();
    
    $('.get-quote').on('click',function(){
        event.preventDefault();
        getNewQuote();
    });
});