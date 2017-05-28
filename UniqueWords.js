var str;
var words = [];

function setStr(s)
     {
     str = s;
     }

function singles() {
     array = words
        for( var index = 0, single = []; index < array.length; index++ ) {
             if( array.indexOf( array[index], array.indexOf( array[index] ) + 1 ) == -1 ) single.push( array[index] );
         };
         single.forEach(function (inputWord) {
              setValue('uniqueWords', inputWord)
              console.log("UNIQUE WORDS THAT ARE FOUND: " + readValue(uniqueWords))
         });
     };
function countUniqueWords()
     {
     var index = 0;
     var place = 0;
     var word = "";
     while(place < str.length)
          {
          if(isLetter(str.substring(place, place + 1)) || (str.substring(place, place + 1) == "-" && str.substring(place + 1, place + 2) != "-")
     || (str.substring(place, place + 1) == "\'" && isLetter(str.substring(place + 1, place + 2))))
               {
               if(str.substring(place, place + 1) == "-")
                    {
                    place++;
                    if(word.length > 0)
                         {
                         word = word.toLowerCase();
                         words.push(word);
                         word = "";
                         }
                    }

               else if(str.substring(place) == "\'" && isLetter(str.substring(place - 1, place)))
                    {
                    place++;
                    }
               else
                    {
                    word = word.toLowerCase();
                    var temp = str.substring(place, place + 1);
                    word += temp;
                    place++;
                    }
               }
          else
               {
               if(word.length > 0)
                    {
                    word = word.toLowerCase();
                    words.push(word);
                    word = "";
                    }
               place++;
               }
          }
     }


function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
