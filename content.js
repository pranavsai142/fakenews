// var elements = document.getElementsByTagName('*');
//
// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//
//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];
//
//         if (node.nodeType === 3) {
//             var text = node.nodeValue;
//             var replacedText = text.replace(/Purple/gi, 'thing');
//
//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }

// var title = document.getElementsByTagName("title")[0];
// console.log(title);
var url = document.URL;
var doc = document.body;
var text = doc.innerText || doc.textContent;
var visitedWebsites = readValue("visitedWebsites");
console.log("Visited Websites" + visitedWebsites);
var fakeWebsites = readValue("fakeWebsites")
console.log("FakeWebsites" + fakeWebsites);
var loggedWebsites = readValue("loggedWebsites")
console.log("logged" + loggedWebsites);
var uniqueWords = readValue("uniqueWords")
console.log("unique" + loggedWebsites);
if(isFakeSite(url))
     {
     addUniqueWords();
     }
else {
     if(checkIfFakeSite())
          {
          notification2();
          }
     }

function addUniqueWords()
     {
     if(!logged(url))
          {
          var s = url;
          if(s.substring(0, 7) == ("http://"))
               {
               s = s.substring(7);
               }
          else if(s.substring(0, 8) == ("https://"))
               {
               s = s.substring(8);
               }
          if(s.substring(0, 4) == ("www."))
               {
               s = s.substring(4);
               }
          if(s.indexOf("/") > 0)
               {
               s = s.substring(0, s.indexOf("/"));
               }
          setValue("visitedWebsites", s);
          visitedWebsites = readValue("visitedWebsites");
          console.log("New Visited" + visitedWebsites)
          setStr(text);
          countUniqueWords();
          singles();
          }
     notification1();

     }

function logged(url)
     {
     var logged = false;
     var s = url;
     if(s.substring(0, 7) == ("http://"))
          {
          s = s.substring(7);
          }
     else if(s.substring(0, 8) == ("https://"))
          {
          s = s.substring(8);
          }
     if(s.substring(0, 4) == ("www."))
          {
          s = s.substring(4);
          }
     if(s.indexOf("/") > 0)
          {
          s = s.substring(0, s.indexOf("/"));
          }
     for(var i = 0; i < visitedWebsites.length; i++)
          {
          if(s == visitedWebsites[i])
               {
               logged = true;
               }
          }
     return logged;
     }

function isFakeSite(url)
     {
     console.log("IN FAKE SITE CHECKER")
     var isFakeSite = false;
     var s = url;
     if(s.substring(0, 7) == ("http://"))
          {
          s = s.substring(7);
          }
     else if(s.substring(0, 8) == ("https://"))
          {
          s = s.substring(8);
          }
     if(s.substring(0, 4) == ("www."))
          {
          s = s.substring(4);
          }
     if(s.indexOf("/") > 0)
          {
          s = s.substring(0, s.indexOf("/"));
          }
          console.log(s)
     for(var i = 0; i < fakeWebsites.length; i++)
          {
          console.log("Current fake website being checked" + fakeWebsites[i])
          if(fakeWebsites[i] == s)
               {
               isFakeSite = true;
               }
          }
     return isFakeSite;
     }

function checkIfFakeSite()
     {
     var uniqueWordCount = 0;
     var personalUniqueWords = readValue("uniqueWords");
     var webpageTextArray = text.split(" ");
     for(var i = 0; i < personalUniqueWords.length; i++)
          {
          for(var j = 0; j < webpageTextArray.length; j++)
               {
               if(personalUniqueWords[i] == webpageTextArray[j])
                    {
                    uniqueWordCount++;
                    }
               }
          }
     if((uniqueWordCount / (webpageTextArray * 1.0)) >= .15)
          {
          return true;
          }
     return false;
     }
