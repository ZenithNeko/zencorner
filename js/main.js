// API LINK MEOW
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto
// uhmhm funny random text thing 
//im so fluffy rn - ash
var r_text = [
	"nyanya!",
	"sdfasdklfgsdfgsgoinrfoenlvbd",
	"Did you know? Zenith has NINE cats",
	"Any weather is skirt weather if you can stand the cold",
	"Notepad++ is certainly the program of all time",
	"Reject human, embrace meow",
	"Check out my Discord it's gay and funny",
	"incrediblegaming",
	"I have   very money         I have 1 Roys-roys 1 lombargine machine",
	"Ashie was here",
	"Zenith was here",
	"play Sonic Spinball or I'll cut you",
	"Quite.",
	"Puerto Amongalas",
	"pawwwwsssssss,,,,,",
	"The included spork is certainly the utensil of all time",
	"I love my Ashie <3",
	"sonik robo blsat 7",
	"get a windows mobile pda I promise you will not regret it",
	'<img src="img/Theta-delta.svg" width="32px" alt="ΘΔ">',
	"Onion is an acronym for  Oh No",
	'<img src="img/incrediblespinning.gif" title="it is spinning" width="16px"> Incredible　　　　　　　it is spinning',
	"This one patch of snow is comprised of more than 14 snow",
	"Although many have speculated the moon is made of cheese, the moon is not real",
	"No two snowflakes are the same　　　　unless you have a snow duplicator",
	"my humor is broken",
	"pastel gore is yes"
];
var fuckyou = Math.floor(27*Math.random());

$("#scrollText").html(r_text[fuckyou]);

// random 404 audios
var r_404 = [
	"/res/mac.mp3",
	"/res/shatter.mp3",
	"/res/xp.mp3",
	"/res/7.mp3",
	"/res/tada.mp3",
	"/res/chord.mp3",
	"/res/sosumi.mp3",
	"/res/touhou.mp3",
	"/res/mc.mp3"
];

// random 404 images
var r_404i = [
	"/img/zen404.svg",
    "/img/zen404-2.svg",
	"/img/yeag.svg"
];

// random gradient :3c
var r_grad = [
	"linear-gradient(to bottom, rgba(0,217,0,1) 0%,rgba(219,240,67,1) 100%)", //green/yellow spinball gradient
	"linear-gradient(to bottom, rgba(102,232,67,1) 0%,rgba(108,255,63,1) 50%,rgba(193,224,40,1) 51%,rgba(219,240,67,1) 100%)",
	"linear-gradient(to bottom, #ea2803 0%,#ff6600 75%,#c72200 100%)",
	"linear-gradient(to bottom, #b7deed 0%,#71ceef 50%,#21b4e2 51%,#b7deed 100%)",
	"linear-gradient(to bottom, #fcecfc 0%,#f99ddc 50%,#fd89d7 51%,#ff35c2 100%)",
	"linear-gradient(to bottom, #f6f8f9 0%,#e5ebee 50%,#d7dee3 51%,#f5f7f9 100%)",
	"linear-gradient(to bottom, #bd7fff 0%,#386dff 100%)",
	"linear-gradient(to bottom, #cb60b3 0%,#c146a1 50%,#a80077 51%,#db36a4 100%)",
	"linear-gradient(to bottom, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%)",
	"linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%)",
	"linear-gradient(to bottom, #f3e2c7 0%,#c19e67 50%,#b68d4c 51%,#e9d4b3 100%)",
	"linear-gradient(to bottom, #b8e1fc 0%,#a9d2f3 10%,#90bae4 25%,#90bcea 37%,#90bff0 50%,#6ba8e5 51%,#a2daf5 83%,#bdf3fd 100%)",
	"linear-gradient(to bottom, rgba(255,72,0,1) 0%,rgba(255,253,0,1) 100%)", //red/yellow spinball graident
	"linear-gradient(to bottom, rgba(255,253,0,1) 5%,rgba(255,72,0,1) 15%,rgba(0,253,255,1) 25%,rgba(0,217,0,1) 35%,rgba(255,253,0,1) 45%,rgba(255,72,0,1) 55%,rgba(0,253,255,1) 65%,rgba(0,217,0,1) 75%,rgba(255,253,0,1) 85%,rgba(255,72,0,1) 95%)",
	//^^^ rainbow spinball gradient
	"background: linear-gradient(to bottom, rgba(252,236,252,1) 0%,rgba(251,166,225,1) 50%,rgba(255,140,207,1) 51%,rgba(209,0,45,1) 100%);"
];
var i = Math.floor(15*Math.random())

$('.marquee').css('background-image', r_grad[i]);

// navigation button thuiwnug wuuwwuuwuuwuwuuwuwuwuwuwuwwuwuwuwuwuwuwuwu
var navState = false;
function navButton() {
	if (navState) {
        // close nav
        $(".sidebar").css('left', '');
        $(".navButton").css('left', '');
        $(".navButton img").attr('src', 'img/menu.svg');
		$(".page-content").attr('id', '');
    } else {
        $(".sidebar").css('left', '0px');
        $(".navButton").css('left', '259px');
        $(".navButton img").attr('src', 'img/close.svg');
		$(".page-content").attr('id', 'navOpen');
    }
	navState = !navState;
}
//I love ash so fucking mushc oh my   gg od gspoopsgopgsgsepioispobniohopji[e4ayut08934iw[34w5etuj8i9o
// i love you too <3333333333

async function hcGET() {
    const response = await fetch('https://api.ashiecorner.xyz/hc/gh/zencorner', {mode: 'cors'});
    if (response.ok) {
        let json = await response.json();
        if (json) {
            $('#hits').text(json['hits'] + ' hits');
        }
    }
}

// uwu newsfeed :3333
function feedGET() {
    fetch('newsfeed.md').then(response => response.text()).then(result => $('.feed').html(snarkdown(result)));
}

// guestbook things! ^-^
async function guestbookGET() {
    const response = await fetch('https://api.ashiecorner.xyz/guestbook/getEntries/zencorner', {mode: 'cors'});
    if (response.ok) {
        let json = await response.json();
        if (json) {
            var tmp = '';
            $.each( json, function( key, value ) {
                const epoch = Number(value[3])
                tmp += '<div class="gbe">';
                tmp += '    <div class="gbe-header">';
                tmp += '      <p class="gbe-name">' + value[0] + '</p>';
                if (Number.isInteger(epoch)) {
                    var date = new Date(epoch*1000);
                    var timestamp = date.toLocaleTimeString([], {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    tmp += '      <p class="gbe-timestamp">' + timestamp + '</p><br>';        
                } else {
                    tmp += '      <p class="gbe-timestamp">' + value[3] + '</p><br>';
                }
                tmp += '      <p class="gbe-email">' + atob(value[1]) + '</p>';
                tmp += '    </div>';
                tmp += '    <p>' + value[2] + '</p>';
                tmp += '</div>';
            });
        
            $('.gb-entries').html(tmp);
        }
    }
}

$(".postButton").click(function() {
    $.ajax({
       type: "POST",
       url: "https://api.ashiecorner.xyz/guestbook/postEntry/zencorner",
       data: $(".guestbook").serialize(),
       success: function(data) {
           guestbookGET();
           $('.captcha-frame').attr('src', 'https://api.ashiecorner.xyz/captcha/zencorner'); // reset captcha
           $('.captcha-frame').css('box-shadow', ''); // reset shadow
           $('.errorNotif').each(function(i, obj) { obj.remove(); }); // clear error notifications
           $('input[name="name"]').css('border', ''); // I am   programming
           $('input[name="name"]').css('box-shadow', '');
           $('input[name="name"]').css('outline', '');
           $('input[name="message"]').css('border', '');
           $('input[name="message"]').css('box-shadow', '');
           $('input[name="message"]').css('outline', '');
           $('input[name="email"]').css('border', '');
           $('input[name="email"]').css('box-shadow', '');
           $('input[name="email"]').css('outline', '');
       },
       error: function(xhr, status, error) {
           $("<div>").attr('class', 'errorNotif').append('<p>' + xhr.responseJSON['code'] + ': ' + xhr.responseJSON['description'] + '</p>').append('<a onclick="$(this).parent().remove()" href="#">X</a>').insertAfter($("#errAfter"))
           switch (xhr.responseJSON['description']) { // the jank of ever
            case "Invalid captcha.":
                $('input[name="name"]').css('border', ''); 
                $('input[name="name"]').css('box-shadow', '');
                $('input[name="name"]').css('outline', '');
                $('textarea[name="message"]').css('border', '');
                $('textarea[name="message"]').css('box-shadow', '');
                $('textarea[name="message"]').css('outline', '');
                $('input[name="email"]').css('border', '');
                $('input[name="email"]').css('box-shadow', '');
                $('input[name="email"]').css('outline', '');
                $('.captcha-frame').attr('src', 'https://api.ashiecorner.xyz/captcha/zencorner'); // reset captcha
                $('.captcha-frame').css('box-shadow', '0px 0px 12px #ff3939'); // make captcha have red shadow to show what went wrong
                break;
            case "Name missing/too long.":
                $('input[name="name"]').css('border', '2px #d51616 solid'); // BREAKING NEWS: local programmer is bad at programming
                $('input[name="name"]').css('box-shadow', '0 0 8px #ff3737');
                $('input[name="name"]').css('outline', '0');
                $('textarea[name="message"]').css('border', '');
                $('textarea[name="message"]').css('box-shadow', '');
                $('textarea[name="message"]').css('outline', '');
                $('input[name="email"]').css('border', '');
                $('input[name="email"]').css('box-shadow', '');
                $('input[name="email"]').css('outline', '');
                break;
            case "Message missing/too long.":
                $('textarea[name="message"]').css('border', '2px #d51616 solid');
                $('textarea[name="message"]').css('box-shadow', '0 0 8px #ff3737');
                $('textarea[name="message"]').css('outline', '0');
                $('input[name="name"]').css('border', '');
                $('input[name="name"]').css('box-shadow', '');
                $('input[name="name"]').css('outline', '');
                $('input[name="email"]').css('border', '');
                $('input[name="email"]').css('box-shadow', '');
                $('input[name="email"]').css('outline', '');
                break;
            case "Invalid email.":
                $('input[name="email"]').css('border', '2px #d51616 solid');
                $('input[name="email"]').css('box-shadow', '0 0 8px #ff3737');
                $('input[name="email"]').css('outline', '0');
                $('input[name="name"]').css('border', '');
                $('input[name="name"]').css('box-shadow', '');
                $('input[name="name"]').css('outline', '');
                $('textarea[name="message"]').css('border', '');
                $('textarea[name="message"]').css('box-shadow', '');
                $('textarea[name="message"]').css('outline', '');
                break;
            default:
                break;
           }
       }
    });
     
    return false; // avoid to execute the actual submit of the form.
});

// funny weather things !! x3
async function weatherGET() {
	// mew meowwmeow meorwmrwm mrwo,,,,,,,,,,,,,,,, im sleepy
	const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + $('#lat').val() + '&longitude=' + $('#long').val() + '&hourly=temperature_2m,precipitation,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto');
	if (response.ok) {
		//alert('the thing worked');
		let json = await response.json();
        if (json) {
			$('#temp').html(json['current_weather']['temperature'] + '°C ' + Math.round(100*(json['current_weather']['temperature']*1.8+32))/100 + '°F');
            const weathercode = json['current_weather']['weathercode'];
			const sunrise = new Date(json['daily']['sunrise'][0]);
			const sunset = new Date(json['daily']['sunset'][0]);
			const current = new Date();
			
			let isDay = false;
			if (current > sunrise && current < sunset) {
				isDay = true;
			}
			console.log('weathercode: '+weathercode + ', is day: ' + isDay);
            switch (weathercode) {
				case '0' || '1': // clear sky/mainly clear
					$('#weatherico').attr('src', isDay ? 'img/weather-sun.png' : 'img/weather-moon.png');
					break;
				case '2': // partly cloudy
					$('#weatherico').attr('src', isDay ? 'img/weather-pcloudy.png' : 'img/weather-moon-pcloudy.png');
					break;
				case '3': // overcast
					$('#weatherico').attr('src', 'img/weather-clouds.png');
					break;
				case '45' || '48': // fog
					$('#weatherico').attr('src', isDay ? 'img/weather-fog.png' : 'img/weather-moon-fog.png');
					break;
				case '51' || '56': // drizzle/freezing drizzle light
					$('#weatherico').attr('src', 'img/weather-rain-little.png');
					break;
				case '53' || '55' || '57': // drizzle/freezing moderate/dense
					$('#weatherico').attr('src', 'img/weather-rain.png');
					break;
				case '61' || '66' || '80': // light rain
					$('#weatherico').attr('src', 'img/weather-rain-little.png');
					break;
				case '63' || '65' || '67' || '81' || '82': // moderate/dense rain
					$('#weatherico').attr('src', 'img/weather-rain.png');
					break;
				case '71': // light snow
					$('#weatherico').attr('src', 'img/weather-snow-little.png');
					break;
				case '73' || '75' || '77' || '85' || '86': // moderate/dense snow
					$('#weatherico').attr('src', 'img/weather-snow.png');
					break;
				case '95': // thunderstorm
					$('#weatherico').attr('src', 'img/weather-lightning.png');
					break;
				case '96': // thunderstorm/slight hail
					break;
				case '99': // thunderstorm/heavy hail
					break;
				default:
					break;
			}
		} // uwu
	}
}

function locGET() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			$('#lat').attr('value', position.coords.latitude);
			$('#long').attr('value', position.coords.longitude);
		});
	} else { 
		alert('geolocation unsupported or permission denied. :3c');
	}
}    


// the funny
$(document).ready(function() {
	$("#scrollText").css("backgroundImage", r_grad[i]);
	
	// day of week bullshit
	const d = new Date();
	let day = d.getDay();
	switch (day) {
		case 1: // monday
			$(".indexImg").attr("src", "img/ZenIndex1.png");
			break;
		case 2: // tuesday
			$(".indexImg").attr("src", "img/ZenIndex2.png");
			break;
		case 3: //wednesday
			$(".indexImg").attr("src", "img/ZenIndex3.png");
			break;
		case 6: // saturday placeholder
			$(".indexImg").attr("src", "img/placeholderindexreturn.png");
			break;
		default: //  fallback pic
			$(".indexImg").attr("src", "img/ZenIndex1.png");
			break;
	}
	
// mobile nav swipe actions

function navSwipeRight() {
    // open nav
    if (!navState) {
        navButton();
    }
}
function navSwipeLeft() {
    // close nav
    if (navState) {
        navButton();
    }
}

Hammer(document).on("swipeleft", navSwipeLeft);
Hammer(document).on("swiperight", navSwipeRight);

var timeoutID;
function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
    startTimer();
}
setup();
function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 15000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
 
    goActive();
}
var houseArrest; // zen told me to call this variable house arrest
var houseAwesstUwU; // this is my (ash's's) fault

function goInactive() {
	console.log('user has gone inactive nuuuuu XwX');
    $('.text-scroller').prepend($('<span></span>')
		.text('YO, MOVE IT!')
		.addClass('marquee')
		.css('animation', '0.125s steps(8, end) 0s 8 normal both running flashtext')
		.css('background-image', 'linear-gradient(to bottom, rgba(255,72,0,1) 0%,rgba(255,253,0,1) 100%)')
	);
	$('#scrollText').css('visibility', 'hidden');
	setTimeout(function() {
		$('.text-scroller > span').remove();
		$('#scrollText').css('visibility', 'visible');
	}, 3000);
	houseArrest = setTimeout(function() {
		$('.text-scroller').prepend($('<span></span>')
			.text('HEY, ANYBODY HOME?')
			.addClass('marquee')
			.css('animation', '1s steps(8, end) 0s 1 normal both running coloranim')
			.css('background-image', 'linear-gradient(to bottom, rgba(0,217,0,1) 0%,rgba(219,240,67,1) 100%)')
			.attr('id', 'houseArrest')
		);
		$('#scrollText').css('visibility', 'hidden');
		setTimeout(function() {
			$('#houseArrest').remove();
			$('#scrollText').css('visibility', 'visible');
		}, 1800);
	}, 10000);
}
 
function goActive() {
    // do something
    clearTimeout(houseArrest);
    startTimer();
}

hcGET();

});
