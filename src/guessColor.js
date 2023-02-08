var colorsRGB = []
var colorsHEX = []
var rightAwnser
var interval
var timer_time = 10;
var score = getCookie('GCG_score');
var difficulty
var ShowCodes
var ShowCodes = 1
var difficulty = 2 



ChangeGameMode(1) 
Changedifficulty(2)
$(document).ready(function () {
    $(this).scrollTop(0);
});

if(score == undefined || score == NaN || score == "") 
{
document.cookie = "GCG_score=0;SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
score = getCookie('GCG_score')
}
document.getElementById('score_GCG').textContent = score;
document.getElementById('play_button_id').disabled = false;


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function ChangeGameMode(code_to_show) {
  var rgb_option_html = document.getElementById('RGB_GCG_OPT')
  var hex_option_html = document.getElementById("HEX_GCG_OPT")
  var both_option_html = document.getElementById('BOTH_GCG_OPT')
  var code_text = document.getElementById('code_GCG')
  ShowCodes = code_to_show;
  switch (code_to_show) {
    case 1:
        rgb_option_html.className = 'button_option_GCG_enb'
        hex_option_html.className = 'button_option_GCG_dis'
        both_option_html.classList = 'button_option_GCG_dis'
        code_text.textContent = 'RGB'
      break;
    case 2:
      rgb_option_html.className = "button_option_GCG_dis"
      hex_option_html.className = 'button_option_GCG_enb'
      both_option_html.classList = 'button_option_GCG_dis'
      code_text.textContent = 'HEX'
      break;
    case 3:
      rgb_option_html.className = 'button_option_GCG_dis_dis'
      hex_option_html.className = 'button_option_GCG_dis_dis'
      both_option_html.classList = "button_option_GCG_enb",
      code_text.textContent = "BOTH";
      break;
  }
}

function Changedifficulty(dif_to_play) {
  Easy_Option = document.getElementById('EAS_GCG_OPT');
  normal_Option = document.getElementById('NOR_GCG_OPT');
  hard_Option = document.getElementById("HAR_GCG_OPT");
  dif_text = document.getElementById('dif_GCG');

  difficulty = dif_to_play;

  switch (dif_to_play) {
    case 1:
      Easy_Option.className = "button_option_GCG_enb"
      normal_Option.className = "button_option_GCG_dis"
      hard_Option.classList = "button_option_GCG_dis"
      dif_text.textContent = "easy"
      break;
    case 2:
      Easy_Option.className = "button_option_GCG_dis"
      normal_Option.className = "button_option_GCG_enb"
      hard_Option.classList = "button_option_GCG_dis"
      dif_text.textContent = "normal"
      break;
    case 3:
      Easy_Option.className = "button_option_GCG_dis"
      normal_Option.className = "button_option_GCG_dis"
      hard_Option.classList = "button_option_GCG_enb"
      dif_text.textContent = "hard"
      break;
  }
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function Play() {
  document.getElementById('play_button_id').disabled = true
  clearInterval(interval)
  timer_time = 10
  loop_var = 0
  colorsHEX = []
  colorsRGB = []

  var game_container_html = document.getElementById('game_container');
  game_container_html.innerHTML = `
  <div id="win_lose_game"></div>
  <div id="game_title"></div>
  <div id="timer_div"></div>
  <div id="colors_container"></div>
  <div id="play_again"></div>
  `

  var colors_container_html = document.getElementById("colors_container")
  var game_title_html = document.getElementById("game_title")
  var difficulity_times3 = difficulty * 3
  var loop_var = 0;


  while (loop_var < difficulity_times3) {
    
    var random_red = Math.floor(Math.random() * 256) + 0
    var random_green = Math.floor(Math.random() * 256) + 0
    var random_blue = Math.floor(Math.random() * 256) + 0
    var random_hex = "#" + componentToHex(random_red) + componentToHex(random_green) + componentToHex(random_blue)
    var random_rgb = "rgb(" + random_red + "," + random_green + "," + random_blue + ")";
    colorsRGB.push(random_rgb)
    colorsHEX.push(random_hex)
    loop_var++;
  }

  max = difficulity_times3
  rightAwnser = Math.floor(Math.random() * max);

  var title_html_codes;
  switch (ShowCodes) {
    case 1:
      title_html_codes = '<p class="title_GCG_Game">which color is this code showing:</p><p class="title_GCG_Game">' + colorsRGB[rightAwnser] +"</p>";
      break;
    case 2:
      title_html_codes = '<p class="title_GCG_Game">which color is this code showing:</p><p class="title_GCG_Game">' + colorsHEX[rightAwnser] + "</p>";
      break;
    case 3:
      title_html_codes = '<p class="title_GCG_Game">which color are these codes showing:</p><p class="title_GCG_Game">' + colorsRGB[rightAwnser] + " - " + colorsHEX[rightAwnser] + "</p>";
      break;
  }
  game_title_html.innerHTML = title_html_codes;

  var colors_html_codes
  var colors_html_temp
  var i = 0

  while (true) {
    if (colorsRGB[i] == null || colorsRGB[i] == undefined) break;

    colors_html_temp = '<div class="GCG_color_opt" style="background-color:' + colorsRGB[i] + '" onclick="check_awnser(' + i + ')"></div>';
    if (i == 0) colors_html_codes = colors_html_temp; else colors_html_codes = colors_html_codes + colors_html_temp;
    i++;
  }
  colors_container_html.innerHTML = colors_html_codes;
  var timer_div = document.getElementById('timer_div');
  timer_div.textContent = "10s"
  interval = setInterval(TIMEUPDATE, 1000)
  location.hash = "#game_container";
}

function TIMEUPDATE() {
  var timer_div_t = document.getElementById("timer_div");
  timer_time--;
  timer_div_t.textContent = timer_time + "s"
  if(timer_time == 0){check_awnser(85);clearInterval(interval)}
}

function EXIT() {
    document.getElementById('play_button_id').disabled = false;
    var game_container_html_div = document.getElementById('game_container');
    game_container_html_div.innerHTML = ""
    $(this).scrollTop(0);
}

function nothing() {}

function check_awnser(awnser) {
  clearInterval(interval);
  var win_lose_game_htmldiv = document.getElementById('win_lose_game');

  colorsRGB[rightAwnser] == colorsRGB[awnser] ? check_awnser_shower(1) : check_awnser_shower(0);

  var color_items_opt = document.getElementsByClassName('GCG_color_opt')
  var i = 0;
  while (true) {
    if (colorsRGB[i] == null || colorsRGB[i] == undefined) break;

    color_items_opt[i].innerHTML = "<p>" + colorsHEX[i] + "</p><p>" + colorsRGB[i] + '</p><p class="w">' + colorsHEX[i] + '</p><p class="w">' + colorsRGB[i] + "</p>"
    color_items_opt[i].style.cursor = "default"
    color_items_opt[i].onclick = nothing
    i++;
  }
  var play_again_div = document.getElementById("play_again");
  play_again_div.innerHTML = '<button class="PLAYBTN_GCG PLAYBTN_GCG_ag" onclick="Play()">PLAY AGAIN</button><button class="PLAYBTN_GCG PLAYBTN_GCG_ag" onclick="EXIT()">EXIT</button>'
}


function check_awnser_shower(right_anwserQ) {
  var Win_Lose_Game_Div = document.getElementById("win_lose_game");
  switch (right_anwserQ) {
    case 0:
      switch (difficulty) {
        case 1:
          Win_Lose_Game_Div.innerHTML = ' <p id="win_lose_text_GCG">you lost... maybe next time(-3 score)</p> ';
          var  Win_Lose_Text_Html = document.getElementById("win_lose_text_GCG");
           Win_Lose_Text_Html.style.color = "red"
           score = getCookie("GCG_score")
           score = parseInt(score);
          var Cookie_Score_3 = score - 3;
          document.cookie = "GCG_score="+Cookie_Score_3+";SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
          document.getElementById("score_GCG").textContent = Cookie_Score_3;
          break;
        case 2:
          Win_Lose_Game_Div.innerHTML = ' <p id="win_lose_text_GCG">you lost... maybe next time(-2 score)</p> ';
          var  Win_Lose_Text_Html = document.getElementById("win_lose_text_GCG");
           Win_Lose_Text_Html.style.color = "red"
           score = getCookie("GCG_score"), score = parseInt(score);
          var Cookie_Score_3 = score - 2;
          document.cookie = "GCG_score="+Cookie_Score_3+";SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
          document.getElementById("score_GCG").textContent = Cookie_Score_3;
          break;
        case 3:
          Win_Lose_Game_Div.innerHTML = ' <p id="win_lose_text_GCG">you lost... maybe next time(-1 score)</p>'
          var  Win_Lose_Text_Html = document.getElementById("win_lose_text_GCG");
           Win_Lose_Text_Html.style.color = "red"
           score = getCookie("GCG_score")
           score = parseInt(score);
          var Cookie_Score_3 = score - 1;
          document.cookie = "GCG_score="+Cookie_Score_3+";SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
          document.getElementById("score_GCG").textContent = Cookie_Score_3;
          break;
      }
      break;
    case 1:
      switch (difficulty) {
        case 1:
          Win_Lose_Game_Div.innerHTML = '<p id="win_lose_text_GCG">YOU WON!!! congrats! (+5 score)</p>'
          var  Win_Lose_Text_Html = document.getElementById("win_lose_text_GCG");
           Win_Lose_Text_Html.style.color = "rgb(0, 138, 0)"
           score = getCookie("GCG_score")
           score = parseInt(score);
          var Cookie_Score_3 = score + 5;
          document.cookie = "GCG_score="+Cookie_Score_3+";SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
          document.getElementById("score_GCG").textContent = Cookie_Score_3;
          break;
        case 2:
          Win_Lose_Game_Div.innerHTML = '<p id="win_lose_text_GCG">YOU WON!!! congrats! (+7 score)</p>';
          var  Win_Lose_Text_Html = document.getElementById("win_lose_text_GCG");
           Win_Lose_Text_Html.style.color = "rgb(0, 138, 0)"
           score = getCookie("GCG_score")
           score = parseInt(score);
          var Cookie_Score_3 = score + 7;
          document.cookie = "GCG_score="+Cookie_Score_3+";SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
          document.getElementById("score_GCG").textContent = Cookie_Score_3;
          break;
        case 3:
          Win_Lose_Game_Div.innerHTML = ' <p id="win_lose_text_GCG">YOU WON!!! congrats! (+9 score)</p> ';
          var  Win_Lose_Text_Html = document.getElementById("win_lose_text_GCG");
           Win_Lose_Text_Html.style.color = "rgb(0, 138, 0)"
           score = getCookie("GCG_score")
           score = parseInt(score);
          var Cookie_Score_3 = score + 9;
          document.cookie = "GCG_score="+Cookie_Score_3+";SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
          document.getElementById("score_GCG").textContent = Cookie_Score_3;
          break;
      }
  }
}




