document.write('<h1>The Story Maker</h1>');
var adj = prompt('Please enter a adjective : ');
var verb = prompt('Please enter a verb : ');
var noun = prompt('Please enter a noun : ')

var myStory = 'There once was a ' + adj + 
    ' programmer who wanted to use JS to ' + verb + 
    ' the ' + noun;

document.write('<p>' + myStory + '</p>');
