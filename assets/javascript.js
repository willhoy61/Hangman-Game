//create an array of words for user to guess
const words = ['monkey', 'phone', 'mouse', 'pencil', 'backpack']
//choose word randomly
var word = Math.floor(Math.random() * words.length);
let chword = words[word];
console.log(chword);
//create underscores based on length of word
var underScore =[];
var wordCorr = [];
var lettWrong = 12;

//let docUnderScore = document.getElementsByClassName('underscores');
//let docwordCorr = document.getElementsByClassName('');
document.onkey = function(event)
{
	var key =event.key;
};
var underGen = () =>
{
	for(var i=0; i<chword.length; i++)
	{
		underScore.push('_');
	}
};
document.onkeyup = function(event)
{
	var letter = event.key;
	var hasLetter = chword.indexOf(letter) > -1;
	var letter = document.getElementById("under");
	letter.textContent = event.key;
	if (letter === hasLetter)
	{
		for(var count=0; count<= chword.length; count ++)
		{
		words.join(letter);
		alert("you win");
		}
	};
for(var counter=0; lettWrong <lettWrong; counter++)
	{
		alert("game over");
	}
}











//get users guess
//document.addEventListener('keypress', (event) => 
// {
// 	let keyword = String.fromCharCode(event.keyCode);
// 	let keyCode = event.keyCode;
// // user guess correct
// 	if 
// 

//event();
//underGen();
//confirm guess

//if wrong push to wrong array
