var verifica = 0;
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var rV = document.getElementsByClassName("verdade");
	var correct = 0;
	verifica++;

	if (question1 == "V") {
		correct++;
		rV[0].style.backgroundColor = "teal";
}
	if (question2 == "V") {
		correct++;
		rV[1].style.backgroundColor = "teal";
}	
	if (question3 == "V") {
		correct++;
		rV[2].style.backgroundColor = "teal";
	}
	if (question4 == "V") {
		correct++;
		rV[3].style.backgroundColor = "teal";
}
	if (question5 == "V") {
		correct++;
		rV[4].style.backgroundColor = "teal";
}	
	if (question6 == "V") {
		correct++;
		rV[5].style.backgroundColor = "teal";
	}
	if (question7 == "V") {
		correct++;
		rV[6].style.backgroundColor = "teal";
}
	if (question8 == "V") {
		correct++;
		rV[7].style.backgroundColor = "teal";
}	
	if (question9 == "V") {
		correct++;
		rV[8].style.backgroundColor = "teal";
	}
	if (question10 == "V") {
		correct++;
		rV[9].style.backgroundColor = "teal";
}
	
	var pictures = ["_imagens/1010.gif", "_imagens/bom_trabalho.gif","_imagens/maismenos.gif", "_imagens/lose.gif"];
	var messages = ["- 10/10!", "- Bom trabalho!", "- Ainda dá para melhorar...","- Você realmente precisa melhorar..."];
	var score;

	if (correct >= 0 && correct <=4) {
		score = 3;
		
	}

	if (correct >= 5 && correct <= 6) {
		score = 2;
		
	}
	
	if(correct >= 7 && correct <= 9)
	{
		score = 1;
		
	}

	if (correct == 10) {
		score = 0;
		verifica = 2;
	}

	if(verifica >= 2)
	{
		for(var i=0; i<10; i++)
		{
			rV[i].style.backgroundColor = "teal";
		}
		
		var rF = document.getElementsByClassName("falso");
		for(var i=0; i<20; i++)
		{
			rF[i].style.backgroundColor = "#e61919";
		}
		document.getElementById("button").style.visibility = "hidden";
	}
	else alert("Você só tem mais uma chance!!!");
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "- Você conseguiu " + correct + " resposta(s) correta(s)";
	document.getElementById("picture").src = pictures[score];
	}

/*
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Verdadeiro") {
		correct++;
}
	if (question2 == "Verdadeiro") {
		correct++;
}	
	if (question3 == "Verdadeiro") {
		correct++;
	}
	if (question4 == "Verdadeiro") {
		correct++;
}
	if (question5 == "Verdadeiro") {
		correct++;
}	
	if (question6 == "Verdadeiro") {
		correct++;
	}
	if (question7 == "Verdadeiro") {
		correct++;
}
	if (question8 == "Verdadeiro") {
		correct++;
}	
	if (question9 == "Verdadeiro") {
		correct++;
	}
	if (question10 == "Verdadeiro") {
		correct++;
}
	
	var pictures = ["../_imagens/win.gif", "../_imagens/bom_trabalho.gif","../_imagens/meh.jpeg", "../_imagens/lose.gif"];
	var messages = ["Parabéns!", "Bom trabalho!", "Ainda dá para melhorar...","Você realmente precisa melhorar..."];
	var score = 0;

	if (correct >= 0 && correct <=4) {
		score = 3;
	}

	if (correct >= 5 && correct <=7 ) {
		score = 2;
	}

	if (correct >= 8 && <= 9) {
		score = 1;
	}
	if(correct == 10)
	{
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Você conseguiu " + correct + " resposta(s) correta(s)";
	document.getElementById("picture").src = pictures[score];
	}*/
	
