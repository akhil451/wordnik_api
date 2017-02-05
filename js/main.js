var winheight=$(window).height();
var winwidth=$(window).width();

$("body").css("height",winheight);

$("#search").click(function(){

    var word=document.getElementById('word').value ;
/* definitions*/
var defurl1="http://api.wordnik.com:80/v4/word.json/";
console.log(word);


var defurl2="/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var defurl=defurl1+word+defurl2;
var synurl1="http://api.wordnik.com:80/v4/word.json/"

$.getJSON(defurl,function(defdata){
//    console.log(defdata.length);
    var defstring="";
    for( i=0;i<defdata.length;i++){
defstring+="&#8226"+defdata[i].text+"<br><br>";
//console.log(defdata[i].text);
    }
    console.log(defstring);
    $("#showdef").html(defstring);
});


var synurl2="/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
var synurl=synurl1+word+synurl2;
console.log(synurl);
/* synonyms*/
$.getJSON(synurl,function(data){
//console.log(data[2].words);
 var synstring="";
var index,index2;
for(i=0;i<data.length;i++)
{
if(data[i].relationshipType==="synonym")
{
    index=i;
}
if(data[i].relationshipType==="rhyme")
{
    index2=i;
}
}

console.log(data[index].words);
console.log(data[index2].words);

    for( i=0;i<data[index].words.length;i++){
synstring+="&#8226"+data[index].words[i]+"<br><br>";
//console.log(defdata[i].text);
    }
    console.log(synstring);
    $("#showsyn").html(synstring);
var rhymstring=""
     for( i=0;i<data[index2].words.length;i++){
rhymstring+="&#8226"+data[index2].words[i]+"<br><br>";
//console.log(defdata[i].text);
    }
    console.log(rhymstring);
    $("#showrhym").html(rhymstring);
});


//console.log(defurl);





});