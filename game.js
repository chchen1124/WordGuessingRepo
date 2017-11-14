var words=["apple","pizza","burger","corndog"];
//initialize all wins and losses to zero
var wins=0;
var losses=0;

//computer gets a random word from the words array
var random_word=words[Math.floor(Math.random()*words.length)];
//random word is put in the message2 box
$(".message2").html(random_word);
//the words in the array are assigned to the images of the students 
var i1=words[Math.floor(Math.random()*words.length)];
var i2=words[Math.floor(Math.random()*words.length)];
var i3=words[Math.floor(Math.random()*words.length)];
var i4=words[Math.floor(Math.random()*words.length)];
var i5=words[Math.floor(Math.random()*words.length)];
var i6=words[Math.floor(Math.random()*words.length)];
var i7=words[Math.floor(Math.random()*words.length)];
var i8=words[Math.floor(Math.random()*words.length)];
var i9=words[Math.floor(Math.random()*words.length)];
var i10=words[Math.floor(Math.random()*words.length)];
var i11=words[Math.floor(Math.random()*words.length)];
var i12=words[Math.floor(Math.random()*words.length)];
$("#christopher").val(i1);
$("#jon_healy").val(i2);
$("#matthew").val(i3);
$("#rowinn").val(i4);
$("#dayton").val(i5);
$("#jeanelle").val(i6);
$("#anna").val(i7);
$("#fargin").val(i8);
$("#julie").val(i9);
$("#kevin").val(i10);
$("#klayton").val(i11);
$("#mike").val(i12);

$(document).ready(function(){
	//if I am clicked
	$("#christopher").click(function(){
		//$(".message").html("Give beneficial advice to others");
		//if the randomly chosen word is equal to the word in my image then increment the wins and display the You win message
		if($("#christopher").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		//else increment the losses and display the You lose message
		else
		{
			losses++;
			$(".message").html("You lose.");
			$("#loss").html("Losses: "+losses);
		}
		//have the computer choose another word randomly from the array
		random_word=words[Math.floor(Math.random()*words.length)];
		//put the random word in the message2 box
		$(".message2").html(random_word);
		//assign the words to the images again
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});
	$("#jon_healy").click(function(){
		//$(".message").html("Visit UC Riverside sometime next month");
		if($("#jon_healy").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});
	$("#matthew").click(function(){
		//$(".message").html("Go to Cannonball someday");
		if($("#matthew").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});
	$("#rowinn").click(function(){
		//$(".message").html("Play ping pong someday");
		if($("#rowinn").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});

	$("#dayton").click(function(){
		//$(".message").html("Help others with programming more often");
		if($("#dayton").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});
	$("#jeanelle").click(function(){
		//$(".message").html("Visit Scripps Ranch High School");
		if($("#jeanelle").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});
	$("#anna").click(function(){
		//$(".message").html("View diverse clothes stores");
		if($("#anna").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});
	$("#fargin").click(function(){
		//$(".message").html("Hang out with the cool kids");
		if($("#fargin").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});
	$("#julie").click(function(){
		//$(".message").html("Use quotes from famous scientists");
		if($("#julie").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});
	$("#kevin").click(function(){
		//$(".message").html("play basketball someday");
		if($("#kevin").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);			
	});
	$("#klayton").click(function(){
		//$(".message").html("Tell jokes to others");
		if($("#klayton").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);			
	});
	$("#mike").click(function(){
		//$(".message").html("Guide others well to help them succeed in their future careers");
		if($("#mike").val()===random_word)
		{
			wins++;
			$(".message").html("You win.");
			$("#won").html("Wins: "+wins);
		}
		else
		{
			losses++;
			$(".message").html("You lose");
			$("#loss").html("Losses: "+losses);
		}
		random_word=words[Math.floor(Math.random()*words.length)];
		$(".message2").html(random_word);
		i1=words[Math.floor(Math.random()*words.length)];
		i2=words[Math.floor(Math.random()*words.length)];
		i3=words[Math.floor(Math.random()*words.length)];
		i4=words[Math.floor(Math.random()*words.length)];
		i5=words[Math.floor(Math.random()*words.length)];
		i6=words[Math.floor(Math.random()*words.length)];
		i7=words[Math.floor(Math.random()*words.length)];
		i8=words[Math.floor(Math.random()*words.length)];
		i9=words[Math.floor(Math.random()*words.length)];
		i10=words[Math.floor(Math.random()*words.length)];
		i11=words[Math.floor(Math.random()*words.length)];
		i12=words[Math.floor(Math.random()*words.length)];
		$("#christopher").val(i1);
		$("#jon_healy").val(i2);
		$("#matthew").val(i3);
		$("#rowinn").val(i4);
		$("#dayton").val(i5);
		$("#jeanelle").val(i6);
		$("#anna").val(i7);
		$("#fargin").val(i8);
		$("#julie").val(i9);
		$("#kevin").val(i10);
		$("#klayton").val(i11);
		$("#mike").val(i12);				
	});

	//display the random word the computer chose
	var rword=random_word;
	document.querySelector(".message2").innerHTML=rword;

	//display the wins
	var win_html="<p>Wins: "+wins+"</p>";
	document.querySelector("#won").innerHTML=win_html;

	//display the losses
	var lose_html="<p>Losses: "+losses+"</p>";
	document.querySelector("#loss").innerHTML=lose_html;
});