//create an array of words for user to guess
var words = ['monkey', 'phone', 'mouse', 'pencil', 'backpack'];
//choose word randomly
var word = words[Math.floor(Math.random() * words.length)];

//create underscores based on length of word
var underScore =[];
var wordCorr = [];
var lettWrong = [12,11,10,9,8,7,6,5,3,2,1];
var lettGuess = "";

//let docUnderScore = document.getElementsByClassName('underscores');
//let docwordCorr = document.getElementsByClassName('');
/*document.onkey = function(event)
{
	var key =event.key;
}*/
var underGen = () =>
{
	for(var i=0; i<word.length; i++)
	{
		underScore.push('_');
	}
};

document.onkeyup = function(event)
{
	var letter = event.key;
	var hasLetter = word.indexOf(letter) > -1;
	var letter = document.getElementById("under");
	lettGuess = lettGuess + event.key;
	letter.textContent = lettGuess;

	if (lettGuess.length === word.length);
	{
	alert("you win");
	}
	/*if(event.key != chword.indexOf(letter) > -1;
	{
	var lettWrong = document.getElementById("rem");
}*/
};











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
