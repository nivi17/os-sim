$(document).ready(function() {
	$('.test').show();
	var topic = "TCP/IP Simulation";
    $('#side_top_navbar').load('../base.html', function(){
    	$('.left').html(topic);
    });
	particlesJS.load('particles-js', '../particles.json', function() {
		console.log('callback - particles.json config loaded');
	});
	
    $(".macbook-content").css("background-color","#000");
    $("#server").hide();
    $(".macbook1-content").css("background-color","#000");

    $("#client").hide();
    $(".wifi1").hide();
    $(".wifi2").hide();
    $(".fa-telegram").hide();

    // hide all buttons except for socket intially
    $("#bind").hide();
    $("#listen").hide();
    $("#connect").hide();
    $("#accept").hide();
    $("#send").hide();
    $("#receive").hide();
    $("#close").hide();

    var string = "";
    string+="localhost:8000<br>";

    $("#socket").click(function(){
    	$("#server").show();
    	$(".macbook-content").css("background-color","#fff");

    	$("#client").show();
    	$(".macbook1-content").css("background-color","#fff");

    	$("#bind").show();
    });
    $("#bind").click(function () {
    	$("#ip").typed({
		    strings: [
		      string
		    ],
		    typeSpeed: 0,
		 });
    	$("#listen").show();
    });
    $("#listen").click(function () {
    	$(".wifi1").show();
    	$(".wifi1").addClass("blink");

    	$("#connect").show();
    });
    $("#connect").click(function () {
			connect();
			$(".wifi2").show();
    	$(".wifi2").addClass("blink");

    	$("#accept").show();
    });
    $("#accept").click(function () {
    	accept();
    	$(".wifi1").removeClass("blink");
    	$(".wifi2").removeClass("blink");

    	$("#send").show();
    });
    
    $("#send").click(function () {
    	// $(".wifi1").hide();
    	// $(".wifi2").hide();
    	$(".fa-telegram").show();
    	$(".fa-telegram").addClass("send-sim");
			myMove();
			var client_message = "Message received from server"
    	setTimeout(function(){
    		$("#client-message").typed({
		    strings: [
		      client_message
		    ],
		    typeSpeed: 0,
		 });
    	}, 2300);	
    	

    	$("#receive").show();
    });
    $("#receive").click(function () {
    	$(".fa-telegram").show();
    	$(".fa-telegram").removeClass("send-sim");
    	$(".fa-telegram").addClass("receive-sim");
    	$("#close").show();

    	var server_message = "Message received from client"
    	setTimeout(function(){
    		$("#server-message").typed({
		    strings: [
		      server_message
		    ],
		    typeSpeed: 0,
		 });
    	}, 2500);	
    	
    });
    $("#close").click(function () {
	    $(".macbook-content").css("background-color","#000");
	    $("#server").hide();
	    $("#client").hide();
	    $("#ip").hide();
	    $(".macbook1-content").css("background-color","#000");

	    $("#server-message").hide();
	    $("#client-message").hide();
        window.location.reload();
    });	
});

function socket()
{
	document.getElementById("server").style.backgroundColor = '#FFFF00';
	document.getElementById("client").style.backgroundColor = '#FFFF00';
	document.getElementById("bind").disabled = false;
}

function bind()
{
	document.getElementById("server").style.backgroundColor = '#FF0000';
	document.getElementById("listen").disabled = false;
}

function listen()
{
	
	document.getElementById("connect").disabled = false;
}

function connect()
{
	//document.getElementById("connection").style.border = '1px solid #000000';
	console.log("connect")
	document.getElementById("container").style.border = '20px solid #000000';

}

function accept()
{	console.log("accept	")
	//document.getElementById("connection").style.backgroundColor = '#00FF00';
document.getElementById("container").style.border = '20px solid green';

 var ac =	document.getElementById("container").style.backgroundColor='yellow';
//  ac.setAttribute("style","color:green");
}

function myMove() {

	console.log("manan")

	document.getElementById("animate").style.backgroundColor = 'red';
	document.getElementById("animate").style.opacity = "1.0";
var elem = document.getElementById("animate");
var pos = 0;
var id = setInterval(frame, 5);
function frame() {
	if (pos == 903) {
		clearInterval(id);
	} else {
		pos++;
		elem.style.left = pos + 'px';
	}
	}
}

function closee()
{
	document.getElementById("animate").style.backgroundColor = '#FFFFFF'
	document.getElementById("server").style.backgroundColor = '#DCDCDC'
	document.getElementById("client").style.backgroundColor = '#DCDCDC';

 

	document.getElementById("container").style.backgroundColor = '#FFFFFF';
	document.getElementById("container").style.border = '1px solid #FFFFFF';

	document.getElementById("bind").disabled = true;
	document.getElementById("listen").disabled = true;
	document.getElementById("connect").disabled = true;
	document.getElementById("accept").disabled = true;
	document.getElementById("move").disabled = true;
	document.getElementById("close").disabled = true;
}
