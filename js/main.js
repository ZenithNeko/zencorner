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
	'<img src="img/Theta-delta.svg" width="32px" alt="ΘΔ">'
];
var fuckyou = Math.floor(17*Math.random())

$("#scrollText").html(r_text[fuckyou]);

// random gradient :3c
var r_grad = [
	"linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%)",
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
	"linear-gradient(to bottom, #b8e1fc 0%,#a9d2f3 10%,#90bae4 25%,#90bcea 37%,#90bff0 50%,#6ba8e5 51%,#a2daf5 83%,#bdf3fd 100%)"
];
var i = Math.floor(11*Math.random())


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

// uwu newsfeed :3333
function feedGET() {
    fetch('newsfeed.md').then(response => response.text()).then(result => $('.feed').html(snarkdown(result)));
}

// guestbook things! ^-^
async function guestbookGET() {
    const response = await fetch('https://api.ashiecorner.xyz/pygb/api/getEntries/zencorner', {mode: 'cors'});
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
                tmp += '      <p class="gbe-email">' + value[1] + '</p>';
                tmp += '    </div>';
                tmp += '    <p>' + value[2] + '</p>';
                tmp += '</div>';
            });
        
            $('.gb-entries').html(tmp);
        }
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

});
