var header = document.getElementById('header')
var footer = document.getElementById('footer')
var menu = document.getElementById('menu')
var main = document.getElementById('main')

function PageLoaded(page)
{

    if(page=='clock'){}else{
    menu.innerHTML=
    `            
    <div class="tmp_menu">
        <a href="https://v3.kasra071.com/" class="tmp_menu_item">Home Page</a>
        <a href="https://v3.kasra071.com/contact-me.html" class="tmp_menu_item">Contact Me</a>
        <a href="https://v3.kasra071.com/Tools/" class="tmp_menu_item">Tools</a>
        <a href="https://v3.kasra071.com/Online_tools/" class="tmp_menu_item">Online Tools</a>
        <a href="https://v3.kasra071.com/Games/" class="tmp_menu_item">Games</a>
        <img onclick="MenuTrigger()" id="tmp_open_close_menu" src="https://dl.kasra071.com/v3_assets/menu_arrow.svg" alt="arrow" />
    </div>
    `
    header.innerHTML=
    `
    <div class="tmp_Header">
        <div class="tmp_Desktop_Header">
            <a href="https://v3.kasra071.com">www.kasra071.com<span> v3</span></a>
        </div>

        <button onclick="MenuTrigger()">
            <img src="https://dl.kasra071.com/v3_assets/hamburger_menu.svg" alt="Menu" />
        </button>
    </div>
    `

    footer.innerHTML =
    `
    <div class="tmp_footer">
        <span class="tmp_footer_text">
            Thanks for using my website
        </span>
        <span class="tmp_footer_text_margin-top">
            social media accounts :
        </span>

        <div class="tmp_footer_icons">
            <a class="tmp_footer_icons_discord" href="https://discord.gg/qRfrnwSRMd">
                <svg class="tmp_footer_icons_discord_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                </svg>
            </a>
            <a class="tmp_footer_icons_discord_dm" href="https://www.discordapp.com/users/703866030056931378">
                <svg class="tmp_footer_icons_discord_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                </svg>
            </a>
            <a class="tmp_footer_icons_instagram" href="https://www.instagram.com/kasraa071/">
                <svg class="tmp_footer_icons_instagram_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
            </a>
            <a class="tmp_footer_icons_telegram" href="https://t.me/kasraa071">
                <svg class="tmp_footer_icons_telegram_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/>
                </svg>
            </a>
            <a class="tmp_footer_icons_xbox" href="https://account.xbox.com/en-us/profile?gamertag=kasraa071">
                <svg class="tmp_footer_icons_xbox_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"/>
                </svg>
            </a>
            <a class="tmp_footer_icons_steam" href="https://steamcommunity.com/profiles/76561199100539086">
                <svg class="tmp_footer_icons_steam_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                </svg>
            </a>
            <a class="tmp_footer_icons_mail" href="mailto:me@kasra071.com">
                <svg class="tmp_footer_icons_mail_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
            </a>
        </div>

        <span class="tmp_footer_made">
            made with 
            <img src="https://dl.kasra071.com/v3_assets/redheart.svg" alt="love" />
            by kasra
        </span>
    </div>
    `
    }

    document.getElementById('main').style.display = 'block';
    document.getElementById('Loader').style.display = 'none';

    switch(page)
    {
        case 'tools':
            Tools_index_sync()
            break;
        case 'o_tools':
            Online_index_sync()
            break;
        case 'games':
            Games_index_sync()
            break;
        case 'colors':
            Random_Color()
            break;
        case 'reverse':
            reverse_loaded()
            break;
        case 'num_con':
            numbers_sync()
            break;
        case 'memory_game':
            Memory_Game_Onload()
        case 'Periodic_Table':
            Periodic_Table_Sync_Onload()
    }
}

function Games_index_sync()
{
    var Names = [];
    var smallDesc = [];
    var desc = [];
    var url = [];
    var img = [];

    Names[0] = 'Guess Color Game'
    smallDesc[0] = 'guess the color by its rgb-hex code'
    desc[0] = `in this game you'll be shown a color code and a bunch of colors , and you should pick the related color. `
    url[0]=`https://v3.kasra071.com/Games/GuessColorGame.html`
    img[0]=`https://dl.kasra071.com/v3_assets/Games/GCG.png`

    Names[1] = 'Memory Game - Matching game'
    desc[1] = `Matching games are games that require player to match similar elements. player need to find a match for a picture or card.`
    url[1]=`https://v3.kasra071.com/Games/Memory_Game.html`
    img[1]=`https://dl.kasra071.com/v3_assets/Games/MGMG.png`

    var i=0;
    var html = `<div style="height:1px;"></div>`
    while(-1)
    {
        if(Names[i] == undefined){break;}
        if(smallDesc[i]==undefined){smallDesc[i]=""}
        var temp = `
        <div class="Tools_Item">
            <p>
                <a href="${url[i]}">
                    <span>${Names[i]}</span>
                </a>
                <span class="Tools_small">${smallDesc[i]}</span><br>
                ${desc[i]}
                <a href="${url[i]}">
                    <button class="Tools_button">
                            <span>TRY IT</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px"><path d="M1,5 L11,5"></path><polyline points="8 1 12 5 8 9"></polyline></svg>
                    </button> 
                </a>

            </p>
            <img src="${img[i]}" />
        </div>
        `
        html=html+temp
        i++;
    }
    document.getElementById('Game_Items').innerHTML = html;
}
function Online_index_sync()
{
    var Names = [];
    var smallDesc = [];
    var desc = [];
    var url = [];
    var img = [];

    Names[0] = 'Weather'
    desc[0] = `in this page you have 2 options :
    let us find your city by your location and show your city's weather to you
    or enter any city name you want and see the weather for it.
    this page uses openweathermap api to get weather data.`
    url[0]=`https://v3.kasra071.com/Online_tools/Weather.html`
    img[0]=`https://dl.kasra071.com/v3_assets/Online_tools/weather.png`

    Names[1] = `crypto price`
    smallDesc[1] = `see all cryptocurrency prices in one page`
    desc[1] =`you can see coin prices , market caps and 24 hours volumes. you can search coin names or search them by rank.
    this page uses coinmarketcap api to get data.`
    url[1]=`https://v3.kasra071.com/Online_tools/crypto-price.php`
    img[1]=`https://dl.kasra071.com/v3_assets/Online_tools/crypto.png`





    var i=0;
    var html = `<div style="height:1px;"></div>`
    while(-1)
    {
        if(Names[i] == undefined){break;}
        if(smallDesc[i]==undefined){smallDesc[i]=""}
        var temp = `
        <div class="Tools_Item">
            <p>
                <a href="${url[i]}">
                    <span>${Names[i]}</span>
                </a>
                <span class="Tools_small">${smallDesc[i]}</span><br>
                ${desc[i]}
                <a href="${url[i]}">
                    <button class="Tools_button">
                            <span>TRY IT</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px"><path d="M1,5 L11,5"></path><polyline points="8 1 12 5 8 9"></polyline></svg>
                    </button> 
                </a>

            </p>
            <img src="${img[i]}" />
        </div>
        `
        html=html+temp
        i++;
    }
    document.getElementById('o_Tools_Items').innerHTML = html;


}
function Tools_index_sync()
{
    var Names = [];
    var smallDesc = [];
    var desc = [];
    var url = [];
    var img = [];

    Names[0] = 'Periodic Table'
    desc[0] = `The periodic table of chemical elements, often called the periodic table, organizes all discovered chemical elements in rows (called periods) and columns (called groups) according to increasing atomic number.`
    url[0] = 'https://v3.kasra071.com/Tools/Periodic_Table.html'
    img[0] = 'https://www.dl.kasra071.com/v3_assets/Tools/pertab.png'


    Names[1] = 'Text Reverser'
    desc[1] = `you can reverse your texts in any language.
    for example if you reverse "hello" it becomes "olleh". you can try it yourself `
    url[1]=`https://v3.kasra071.com/Tools/Text-reverser.html`
    img[1]=`https://dl.kasra071.com/v3_assets/Tools/reverseICON.png`

    Names[2] = 'color tools'
    desc[2] = `this tool can convert hex to rgb , or rgb to hex. you can change rgb values and see the change on the color instantly. also , you can change hex code and see the changes. you can generate random colors. try it if you like `
    url[2] = 'https://v3.kasra071.com/Tools/colors.html'
    img[2] = 'https://dl.kasra071.com/v3_assets/Tools/ColorICON.png'

    Names[3] = 'Numbers Conversion'
    smallDesc[3] = 'converts numbers to all number systems for you'
    desc[3] = 'in this page you can convert numbers from any base to any base. all bases from base 2 to base 36 are supported. just choose the bases , and start converting ! '
    url[3] = 'https://v3.kasra071.com/Tools/Numbers_Conversion.html'
    img[3] = 'https://dl.kasra071.com/v3_assets/Tools/binaryICON.png'

    Names[4] = 'bmi calculator'
    desc[4] = `calculate your bmi (Body Mass Index) with one click `
    url[4] = 'https://v3.kasra071.com/Tools/bmi_calculator.html'
    img[4] = 'https://dl.kasra071.com/v3_assets/Tools/bmiicon.png'

    Names[5] = 'digital clock'
    desc[5] = `a digital clock based on your device time-zone , it shows time and date. `
    url[5] = 'https://v3.kasra071.com/Tools/Clock.html'
    img[5] = 'https://dl.kasra071.com/v3_assets/Tools/clockICON.png'

    Names[6] = 'dice roller'
    desc[6] = `click a button and roll as many dices you want `
    url[6] = 'https://v3.kasra071.com/Tools/dice.html'
    img[6] = 'https://dl.kasra071.com/v3_assets/Tools/diceICON.png'

    var i=0;
    var html = `<div style="height:1px;"></div>`
    while(-1)
    {
        if(Names[i] == undefined){break;}
        if(smallDesc[i]==undefined){smallDesc[i]=""}
        var temp = `
        <div class="Tools_Item">
            <p>
                <a href="${url[i]}">
                    <span>${Names[i]}</span>
                </a>
                <span class="Tools_small">${smallDesc[i]}</span><br>
                ${desc[i]}
                <a href="${url[i]}">
                    <button class="Tools_button">
                            <span>TRY IT</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px"><path d="M1,5 L11,5"></path><polyline points="8 1 12 5 8 9"></polyline></svg>
                    </button> 
                </a>

            </p>
            <img src="${img[i]}" />
        </div>
        `
        html=html+temp
        i++;
    }
    document.getElementById('Tools_Items').innerHTML = html;
}



var opened = 0;
function MenuTrigger()
{
    var menu = document.querySelector('.tmp_menu');

    if(opened == 0){
        opened = 1;
        menu.style.height = "250px"
        var items = document.getElementsByClassName('tmp_menu_item');
        var i = 0;
        while(-1){
            if(items[i] == null){break;}
            items[i].style.display = "flex"
            i++;
        }
        document.getElementById('tmp_open_close_menu').style.rotate="180deg"
    }else if(opened == 1){
        opened = 0;
        menu.style.height = "30px"
        var items = document.getElementsByClassName('tmp_menu_item');
        var i = 0;
        while(-1){
            if(items[i] == null){break;}
            items[i].style.display = "none"
            i++;
        }
        document.getElementById('tmp_open_close_menu').style.rotate="0deg"
    }

}

//number base convert
function numbers_sync() {
    numbers_changed_input_type(), numbers_changed_output_type();
}
var frombase;
var tobase;
var neededCHAR_output;
var neededCHAR_input;
var From_Input = document.getElementById('numbers_input');
var To_Input = document.getElementById('numbers_output');

function Needed_Check(Base)
{
    switch (Base) {
        case 2:
            return /[0-1]/g;
             
        case 3:
            return /[0-2]/g;
             
        case 4:
            return /[0-3]/g;
             
        case 5:
            return /[0-4]/g;
             
        case 6:
            return /[0-5]/g;
             
        case 7:
            return /[0-6]/g;
             
        case 8:
            return /[0-7]/g;
             
        case 9:
            return /[0-8]/g;
             
        case 10:
            return /[0-9]/g;
             
        case 11:
            return /[0-9aA]/g;
             
        case 12:
            return /[0-9a-bA-B]/g;
             
        case 13:
            return /[0-9a-cA-C]/g;
             
        case 14:
            return /[0-9a-dA-D]/g;
             
        case 15:
            return /[0-9a-eA-E]/g;
             
        case 16:
            return /[0-9a-fA-F]/g;
             
        case 17:
            return /[0-9a-gA-G]/g;
             
        case 18:
            return /[0-9a-hA-H]/g;
             
        case 19:
            return /[0-9a-iA-I]/g;
             
        case 20:
            return /[0-9a-jA-J]/g;
             
        case 21:
            return /[0-9a-kA-K]/g;
             
        case 22:
            return /[0-9a-lA-L]/g;
             
        case 23:
            return /[0-9a-mA-M]/g;
             
        case 24:
            return /[0-9a-nA-N]/g;
             
        case 25:
            return /[0-9a-oA-O]/g;
             
        case 26:
            return /[0-9a-pA-P]/g;
             
        case 27:
            return /[0-9a-qA-Q]/g;
             
        case 28:
            return /[0-9a-rA-R]/g;
             
        case 29:
            return /[0-9a-sA-S]/g;
             
        case 30:
            return /[0-9a-tA-T]/g;
             
        case 31:
            return /[0-9a-uA-U]/g;
             
        case 32:
            return /[0-9a-vA-V]/g;
             
        case 33:
            return /[0-9a-wA-W]/g;
             
        case 34:
            return /[0-9a-xA-X]/g;
             
        case 35:
            return /[0-9a-yA-Y]/g;
             
        case 36:
            return /[0-9a-zA-Z]/g;
             
        }
}
function Base_Convert(number , currentBase , ToBase)
{
    var num = parseInt(parseInt(number,currentBase));
    num = num.toString(ToBase);
    return num;
}


function numbers_changed_input_type()
{
    frombase = document.getElementById('convert_from').value;
    document.getElementById('input_text_nums').textContent = `Base ${frombase}`
    From_Input.placeholder = `Base ${frombase}`

    frombase = parseInt(frombase)

    neededCHAR_input = Needed_Check(frombase)


    numbers_input_sync()
}

function numbers_changed_output_type()
{
    tobase = document.getElementById('convert_to').value;
    document.getElementById('output_text_nums').textContent = `Base ${tobase}`
    To_Input.placeholder = `Base ${tobase}`

    tobase = parseInt(tobase)

    neededCHAR_output = Needed_Check(tobase)

    numbers_input_sync()
}

function numbers_input_sync() {

    var From_Value =  From_Input.value;

    var check = From_Value.replace(neededCHAR_input , "")

    if(check != "")
    {
        To_Input.value = "not valid enteries"
    }else{



        var num = Base_Convert(From_Input.value , frombase , tobase)

        if(From_Input.value == "")
        {
            To_Input.value = "";
        }else{
            To_Input.value = num;
        }

    }


}


function numbers_output_sync() {

    var To_Value =  To_Input.value;

    var check = To_Value.replace(neededCHAR_output , "")

    if(check != "")
    {
        From_Input.value = "not valid enteries"
    }else{

        var num = Base_Convert(To_Input.value , tobase , frombase)

        if(To_Input.value == "")
        {
            From_Input.value = "";
        }else{
            From_Input.value = num;
        }

    }

}

//text reverser
var reversed_thing = '';

function reverse_loaded()
{
    Reverse();if(!navigator.clipboard.writeText){document.getElementById('copy_reverse').style.display="none"}
}

function checkForLanguage_reverse() {
    let persianLetters = /^[\u0600-\u06FF\s]+$/;
    var Textarea = document.querySelector('.reverse_text').value;
    let FirstLetter;
    var i = 0;
    var k = 0;
    while (-1) {
        if (i == 10) {
            k = 1;
            document.querySelector('.reversed_text').style.direction = "ltr";
            document.querySelector('.reversed_text').style.textAlign = "left";
            document.querySelector(".reverse_text").style.textAlign = "left";
            document.querySelector(".reverse_text").style.direction = 'ltr';
            break;
        }
        FirstLetter = Textarea.charAt(i);
        if (FirstLetter == '' || FirstLetter == null || FirstLetter == ' ') {
            i++;
            continue;
        }
        break;
    }
    if (k != 1) {
        var LangCheck = persianLetters.test(FirstLetter);
        LangCheck ? LangCheck = 'fa' : LangCheck = 'en';
        switch (LangCheck) {
        case 'en':
            document.querySelector(".reversed_text").style.direction = "ltr";
            document.querySelector('.reversed_text').style.textAlign = "left";
            document.querySelector('.reverse_text').style.textAlign = "left";
            document.querySelector(".reverse_text").style.direction = "ltr";
            break;
        case 'fa':
            document.querySelector(".reversed_text").style.direction = "rtl";
            document.querySelector(".reversed_text").style.textAlign = "right";
            document.querySelector(".reverse_text").style.textAlign = 'right';
            document.querySelector(".reverse_text").style.direction = "rtl";
            break;
        }
    }
}

function copy_reverse()
{
    if(reversed_thing != ""){navigator.clipboard.writeText(reversed_thing);alert('Copied to your clipboard')}
}

function clear_reverse()
{
    document.querySelector('.reversed_text').textContent = '';
    document.querySelector('.reversed_text').value = '';
    document.querySelector('.reverse_text').textContent = '';
    document.querySelector('.reverse_text').value = '';
}

function Reverse()
{
    var input_text = document.querySelector('.reverse_text').value;
    reversed_thing = input_text.split('').reverse().join('');
    document.querySelector('.reversed_text').textContent = reversed_thing;
}

//BMI calculator
function Calculate_BMI() {
    var height = document.getElementById('hieght_bmi').value;
    var weight = document.getElementById('weight_bmi').value;
    weight = parseFloat(weight);
    height = parseFloat(height);

    if (isNaN(weight) || isNaN(height)) 
    {
        document.getElementById('bmi_res').style.color = "red";
        document.getElementById('bmi_res').textContent = "Please Enter Valid values";
    }
    else {
        document.getElementById('bmi_res').style.color = 'white';
        document.getElementById('bmi_res').textContent = '';
        var bmi = weight / (height / 100 * (height / 100))

        var status_html;
        if (bmi > 24.9) status_html = '<span style="color:red;">overweight</span>';
        else {
            if (bmi < 18.4) status_html = '<span style="color:red;">Underweight</span>';
            else status_html = '<span style="color:green;">normal</span>';
        }
        bmi = bmi.toFixed(2);
        document.getElementById("bmi_res").innerHTML = "your bmi is :" + bmi + ' (' + status_html + ')';
    }
}

//dice
function RollPictureDice() {
    document.getElementById('error_dice').textContent = '';
    var dice_input_value = document.getElementById("dice_input").value;

    if(dice_input_value == 0) {
        dice_input_value = 1;
        document.getElementById("dice_input").value = '1';
    }

    var i = 0
        , dice_div_html = document.getElementById('dice_part')
        , sum = 0
        , pr = 1
        , dice1_count = 0
        , dice2_count = 0
        , dice3_count = 0
        , dice4_count = 0
        , dice5_count = 0
        , dice6_count = 0
        , dice_div_container = document.createElement('div');
    dice_div_container.classList.add('dice_pic_con');
    var dices_image;
    while (i < dice_input_value) {
        var indexdice = indexs = Math.floor(Math.random() * 6 + 1);
        var dices_img_temp = '\n <img src="https://dl.kasra071.com/v3_assets/dice/dice-' + indexdice + ".svg\" alt=\"dice " + indexdice + "\" class=\"dice_img\">\n "
        i == 0 ? dices_image = dices_img_temp : dices_image = dices_image + dices_img_temp;
        switch (indexdice) {
        case 1:
            dice1_count = dice1_count + 1;
            break;
        case 2:
            dice2_count = dice2_count + 1;
            break;
        case 3:
            dice3_count = dice3_count + 1;
            break;
        case 4:
            dice4_count = dice4_count + 1;
            break;
        case 5:
            dice5_count = dice5_count + 1;
            break;
        case 6:
            dice6_count = dice6_count + 1;
            break;
        }
        sum = sum + indexdice
        pr = pr * indexdice
        i = i + 1
    }
    dice_div_container.innerHTML = dices_image, 
    document.getElementById('dice_part').innerHTML = '', 
    dice_div_html.appendChild(dice_div_container), 
    document.getElementById('sum_dice').textContent = "sum : " + sum, 
    document.getElementById('prod_dice').textContent = 'product : ' + pr, 
    document.getElementById('count_shower_dice').innerHTML = "\n    <div class=\"count_dice_img\"><img src=\"https://dl.kasra071.com/v3_assets/dice/dice-1.svg\" alt=\"dice 1 image\"><span>  = " + dice1_count + ' </div>\x0a    <div class=\"count_dice_img\"><img src=\"https://dl.kasra071.com/v3_assets/dice/dice-2.svg\" alt=\"dice 2 image\"><span>  = ' + dice2_count + " </div>\n    <div class=\"count_dice_img\"><img src=\"https://dl.kasra071.com/v3_assets/dice/dice-3.svg\" alt=\"dice 3 image\"><span>  = " + dice3_count + " </div>\n    <div class=\"count_dice_img\"><img src=\"https://dl.kasra071.com/v3_assets/dice/dice-4.svg\" alt=\"dice 4 image\"><span>  = " + dice4_count + " </div>\n    <div class=\"count_dice_img\"><img src=\"https://dl.kasra071.com/v3_assets/dice/dice-5.svg\" alt=\"dice 5 image\"><span>  = " + dice5_count + " </div>\n    <div class=\"count_dice_img\"><img src=\"https://dl.kasra071.com/v3_assets/dice/dice-6.svg\" alt=\"dice 6 image\"><span>  = " + dice6_count + " </div>\n    ",
    dice1_count = 0, 
    dice2_count = 0, 
    dice3_count = 0, 
    dice4_count = 0, 
    dice5_count = 0,
    dice6_count = 0;
}

function count_check() {
    var dice_input = document['getElementById']('dice_input');
    if(dice_input.value > 500) {
        dice_input.value = '500' 
        document.getElementById('error_dice').textContent = "max dices : 500"
    }
    if(dice_input.value < 0)  {
        dice_input.value = '1', 
        document.getElementById('error_dice').textContent = "min dices : 1"
    }
}

//colors
var colorDiv = document.querySelector('.colors_colorshower')
    , hexinput = document.querySelector(".Hex_colors_input")
    , red_num = document.getElementById('red_number')
    , blue_num = document.getElementById("blue_number")
    , green_num = document.getElementById("green_number")
    , red_range = document.getElementById('red_range')
    , blue_range = document.getElementById("blue_range")
    , green_range = document.getElementById('green_range')
    , rgb_text = document.querySelector(".RGB_color_shower")
    , html_color = document.querySelector(".color_color_input");

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function colorCync_HEX() {
    var hex_value = hexinput.value;
    if(hexToRgb(hex_value) == null) {
        hex_value = "#ffffff", hexinput.value = hex_value;
    }
    var green_hextoRGB = hexToRgb(hex_value).g
        , blue_hextoRGB = hexToRgb(hex_value).b
        , red_hextoRGB = hexToRgb(hex_value).r
    
    colorDiv.style.backgroundColor = "rgb(" + red_hextoRGB + ',' + green_hextoRGB + ',' + blue_hextoRGB + ')'
    rgb_text.textContent = "rgb(" + red_hextoRGB + ',' + green_hextoRGB + ',' + blue_hextoRGB + ')'
    red_num.value = red_hextoRGB 
    green_num.value = green_hextoRGB
    blue_num.value = blue_hextoRGB
    red_range.value = red_hextoRGB
    green_range.value = green_hextoRGB
    blue_range.value = blue_hextoRGB
    green_hextoRGB = parseInt(green_hextoRGB)
    blue_hextoRGB = parseInt(blue_hextoRGB)
    red_hextoRGB = parseInt(red_hextoRGB)
    var HEX_CODE = rgbToHex(red_hextoRGB, green_hextoRGB, blue_hextoRGB)
    html_color.value = HEX_CODE
    hexinput.value = HEX_CODE
}

function colorCync_RGB_NUMBER() {
    var greenNumVal = green_num.value
    var blueNumVal = blue_num.value
    var redNumVal = red_num.value

    redNumVal > 255 && (redNumVal = 255);
    greenNumVal > 255 && (greenNumVal = 255);
    blueNumVal > 255 && (blueNumVal = 255);

    greenNumVal = parseInt(greenNumVal), 
    blueNumVal = parseInt(blueNumVal), 
    redNumVal = parseInt(redNumVal);

    var HEX_CODE = rgbToHex(redNumVal, greenNumVal, blueNumVal);
    hexinput.value = HEX_CODE
    colorCync_HEX();
}

function colorCync_RGB_RANGE() {

    var Green_range_num = green_range.value
    var blue_range_num = blue_range.value
    var red_range_num = red_range.value

    Green_range_num = parseInt(Green_range_num)
    blue_range_num = parseInt(blue_range_num)
    red_range_num = parseInt(red_range_num)

    var HEX_VALUE = rgbToHex(red_range_num, Green_range_num, blue_range_num);
    hexinput.value = HEX_VALUE
    colorCync_HEX();
}

function colorCync_HTML() {
    hexinput.value = html_color.value
    colorCync_HEX();
}

function Random_Color() {
    var red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    green = parseInt(green)
    blue = parseInt(blue)
    red = parseInt(red);
    var HEX_VALUE = rgbToHex(red, green, blue);
    hexinput.value = HEX_VALUE
    colorCync_HEX();
}



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
//memory game:
var memory_game_card_count;
var memory_game_card_count_show = document.getElementById('memory_game_diff_shower');
var memory_game_wins = getCookie('mG_wins');
if(memory_game_wins == undefined || memory_game_wins == NaN || memory_game_wins == "") 
{
document.cookie = "mG_wins=0;SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
memory_game_wins = getCookie('mG_wins')
}
var ThemeFolderName = ""
var Memoey_Timer_Time = 15;
var memory_game_Loses = getCookie('mG_losses');
if(memory_game_Loses == undefined || memory_game_Loses == NaN || memory_game_Loses == "") 
{
document.cookie = "mG_losses=0;SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
memory_game_Loses = getCookie('mG_wins')
}

var memory_game_Flips = getCookie('mG_Flips');
if(memory_game_Flips == undefined || memory_game_Flips == NaN || memory_game_Flips == "") 
{
document.cookie = "mG_Flips=0;SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/"
memory_game_Flips = getCookie('mG_Flips')
}


function Memory_Game_Onload()
{
    document.getElementById('memory_game_winShow').textContent = "wins: " + memory_game_wins
    document.getElementById('memory_game_LoseShow').textContent = "losses: " + memory_game_Loses
    document.getElementById('memory_game_FlipShow').textContent = "Flips: " + memory_game_Flips

    $(document).ready(function () {
        $(this).scrollTop(0);
    });
    Memoey_Game_Change_Diff(3)
    Memoey_Game_Theme_Change(0)

    
}

function Memoey_Game_Change_Diff(n)
{
    var veryeasy =  document.getElementById('memory_game_diff_btn_VE')
    var normal =  document.getElementById('memory_game_diff_btn_N')
    var easy =  document.getElementById('memory_game_diff_btn_E')
    var hard = document.getElementById('memory_game_diff_btn_H')
    var veryhard =  document.getElementById('memory_game_diff_btn_VH')

    switch(n)
    {
        case 1:
            veryeasy.className="memory_button_choose_diff_enabled"
            normal.className="memory_button_choose_diff_disabled"
            easy.className="memory_button_choose_diff_disabled"
            hard.className="memory_button_choose_diff_disabled"
            veryhard.className="memory_button_choose_diff_disabled"
            memory_game_card_count = 8;
            break;
        case 2:
            veryeasy.className="memory_button_choose_diff_disabled"
            normal.className="memory_button_choose_diff_disabled"
            easy.className="memory_button_choose_diff_enabled"
            hard.className="memory_button_choose_diff_disabled"
            veryhard.className="memory_button_choose_diff_disabled"
            memory_game_card_count = 14;
            break
        case 3:
            veryeasy.className="memory_button_choose_diff_disabled"
            normal.className="memory_button_choose_diff_enabled"
            easy.className="memory_button_choose_diff_disabled"
            hard.className="memory_button_choose_diff_disabled"
            veryhard.className="memory_button_choose_diff_disabled"
            memory_game_card_count = 22;
            break
        case 4:
            veryeasy.className="memory_button_choose_diff_disabled"
            normal.className="memory_button_choose_diff_disabled"
            easy.className="memory_button_choose_diff_disabled"
            hard.className="memory_button_choose_diff_enabled"
            veryhard.className="memory_button_choose_diff_disabled" 
            memory_game_card_count = 28;
            break
        case 5:
            veryeasy.className="memory_button_choose_diff_disabled"
            normal.className="memory_button_choose_diff_disabled"
            easy.className="memory_button_choose_diff_disabled"
            hard.className="memory_button_choose_diff_disabled"
            veryhard.className="memory_button_choose_diff_enabled"  
            memory_game_card_count = 32;
            break
    }
    memory_game_card_count_show.textContent=`cards : ${memory_game_card_count}`
}

function Memoey_Game_Theme_Change(n)
{
    var PL = document.getElementById('memory_game_theme_btn_PL');
    var CI = document.getElementById('memory_game_theme_btn_CI');
    var themeFolderNameShow;
    switch(n)
    {
        case 0:
            PL.className = 'memory_button_choose_diff_enabled'
            CI.className = 'memory_button_choose_diff_disabled'
            ThemeFolderName = 'programming_Languages';
            themeFolderNameShow = 'programming languages';
            break;
        case 1:
            PL.className = 'memory_button_choose_diff_disabled'
            CI.className = 'memory_button_choose_diff_enabled'
            ThemeFolderName = 'crypto_coins';
            themeFolderNameShow = 'Cryptocurrency Icons'
            break;
    }

    document.getElementById('memory_game_Theme_Show').textContent = `theme : ${themeFolderNameShow}`
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


var memory_game_timer;
function Memory_Game_Play()
{
    var gameContainer = document.getElementById('memory_game_the_game');
    clearInterval(memory_game_timer)
    memory_game_timer = 15;
    gameContainer.innerHTML = ""
    document.getElementById('memory_game_play_button').disabled = true
    window.location.hash = "memory_game_the_game"
    var GameHTML = document.createElement('div');
    GameHTML.className = "Memory_game_PLAY_IMAGE_CONTAINER";

    var Items = []
    var i = 0;
    var k = 1;
    var o = 0;
    while(i<memory_game_card_count/2)
    {
        Items[o] = k;
        Items[o+1] = k;
        o = o + 2;
        i++;
        k++;
    }
    shuffle(Items)
    console.log(Items)

    var s = 0;
    var q = 0;
    var M_G_html_code;
    while(s<memory_game_card_count)
    {
        var temp = `
        <button id="Memory_Game_DIV${q}" class="Memoey_game_PLAY_IMAGE" onclick="Memory_Game_Click(${Items[s]},${q})">
            <img id="Memory_Game_IMG${q}" src="https://www.dl.kasra071.com/v3_assets/Memory_Game/${ThemeFolderName}/${Items[s]}.png" />
        </button>
        `
        if(s==0){M_G_html_code=temp}else{M_G_html_code = M_G_html_code + temp}
        s++;
        q++;
    }
    GameHTML.innerHTML = M_G_html_code;
    gameContainer.innerHTML=`
    <p id="Memory_Game_Timer_Lose_Win_Shower"></p>
    <button onclick="Memory_Game_PlayAgain()" id="memory_game_playAgain_button">Play Again</button>
    <button onclick="Memory_Game_Exit()" id="memory_game_Exit_button">EXIT</button>
    <p id="memoey_game_flip_counter"></p>

    `
    gameContainer.appendChild(GameHTML)
    memory_game_timer = setInterval(Memory_Game_Timer,1000);
    

    
}
function Memory_Game_PlayAgain()
{
    var gameContainer = document.getElementById('memory_game_the_game');
    gameContainer.innerHTML = ""
    document.getElementById('memory_game_play_button').disabled = false;
    Memory_Game_Play()
}

function Memory_Game_Exit()
{
    $(document).ready(function () {
        $(this).scrollTop(0);
    });
    var gameContainer = document.getElementById('memory_game_the_game');
    document.getElementById('memory_game_play_button').disabled = false;
    gameContainer.innerHTML = ""
    clearInterval(memory_game_timer)
    memory_game_timer = 15;
}

function Memory_Game_Timer()
{
    var memory_game_timer_p = document.getElementById('Memory_Game_Timer_Lose_Win_Shower')
    Memoey_Timer_Time--;
    memory_game_timer_p.textContent = `Time Remaining : ${Memoey_Timer_Time}`
    if(Memoey_Timer_Time==0){Memory_Game_Lose()}
}

function Memory_Game_Lose(){
    memory_game_win_count = 0
    memory_game_succses_flips = []
    memory_game_Loses++
    document.cookie = `mG_losses=${memory_game_Loses};SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/`
    document.getElementById('memory_game_LoseShow').textContent = "losses: " + memory_game_Loses

    document.cookie = `mG_Flips=${(parseInt(getCookie('mG_Flips')) + parseInt(memory_game_flip_count)).toString()};SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/`
    document.getElementById('memory_game_FlipShow').textContent = "Flips: " + getCookie('mG_Flips')


    document.getElementById('memory_game_Exit_button').style.display="block"
    document.getElementById('memory_game_playAgain_button').style.display="block"
    clearInterval(memory_game_timer)
    Memoey_Timer_Time = 15;
    document.getElementById('Memory_Game_Timer_Lose_Win_Shower').textContent = "You Lost!"
    document.getElementById('memoey_game_flip_counter').textContent = "flips :" + memory_game_flip_count
    var i = 0;
    while(-1)
    {
        var temp = document.getElementById(`Memory_Game_DIV${i}`)
        if(!temp){break;}
        temp.disabled = true
        i++
    }
}

var Memory_game_flipped = []
var memory_game_flipped_BOOL = false;
var memory_game_image_opacity = []
var memory_game_succses_flips = []
var memory_game_win_count = 0;

var memory_game_flip_count = 0;

function nothing(){}

function Memory_Game_Click(n,img)
{
    var image = document.getElementById(`Memory_Game_IMG${img}`);

    if(!memory_game_flipped_BOOL)
    {
        memory_game_flip_count++;
        Memory_game_flipped[0] = n;
        memory_game_image_opacity[0] = img
        image.style.opacity = 1;
        memory_game_flipped_BOOL = true;
    }else{

        Memory_game_flipped[1] = n;
        memory_game_image_opacity[1] = img
        image.style.opacity = 1;
        console.log(Memory_game_flipped)
        console.log(memory_game_image_opacity)
        console.log()
        console.log(memory_game_succses_flips)
        
        if(memory_game_image_opacity[0] == memory_game_image_opacity[1]){}else{
            memory_game_flip_count++;
            if(Memory_game_flipped[0] == Memory_game_flipped[1])
            {
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).onclick = nothing()
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).onclick = nothing()
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).style.cursor = "defualt";
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).style.cursor = "defualt";
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).style.animation = "memory_game_right 0.7s"
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).style.animation = "memory_game_right 0.7s"


                clearInterval(memory_game_timer)
                Memoey_Timer_Time = 15;
                memory_game_timer = setInterval(Memory_Game_Timer,1000);
                memory_game_image_opacity = []
                Memory_game_flipped = []
                memory_game_succses_flips[memory_game_win_count] = n;
                memory_game_win_count++;
                if(memory_game_succses_flips.length == memory_game_card_count/2 || memory_game_succses_flips.length > memory_game_card_count/2)
                {
                    document.getElementById('memory_game_Exit_button').style.display="block"
                    document.getElementById('memory_game_playAgain_button').style.display="block"

                    clearInterval(memory_game_timer)
                    Memoey_Timer_Time = 15;
                    document.getElementById('Memory_Game_Timer_Lose_Win_Shower').textContent = "You Won!"
                    document.getElementById('memoey_game_flip_counter').textContent = "flips :" + memory_game_flip_count
                    document.cookie = `mG_Flips=${(parseInt(getCookie('mG_Flips')) + parseInt(memory_game_flip_count)).toString()};SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/`
                    document.getElementById('memory_game_FlipShow').textContent = "Flips: " + getCookie('mG_Flips')
                    memory_game_wins++;
                    document.cookie = `mG_wins=${memory_game_wins};SameSite=Lax;expires=Wed, 01 Nov 2023 20:15:03 GMT;path=/`   
                    document.getElementById('memory_game_winShow').textContent = "wins: " + memory_game_wins            
                    
                    memory_game_succses_flips = []
                    memory_game_win_count = 0;
                }
            }else{
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).style.animation = "memory_game_shake 0.2s"
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).style.animation = "memory_game_shake 0.2s"
                setTimeout(() => {
                    document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).style.animation = ""
                    document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).style.animation = ""
                }, 200);
                var i = 0;
                while(-1)
                {
                    var temp = document.getElementById(`Memory_Game_DIV${i}`)
                    if(!temp){break;}
                    temp.disabled = true
                    i++
                }
                setTimeout(function(){
                    var i = 0;
                    while(-1)
                    {
                        var temp = document.getElementById(`Memory_Game_DIV${i}`)
                        if(!temp){break;}
                        temp.disabled = false
                        i++
                    }
                    document.getElementById(`Memory_Game_IMG${memory_game_image_opacity[0]}`).style.opacity = 0;
                    document.getElementById(`Memory_Game_IMG${memory_game_image_opacity[1]}`).style.opacity = 0;
                    memory_game_image_opacity = []
                    Memory_game_flipped = []
                },500)
            }
            memory_game_flipped_BOOL = false;
        }
    }


}


//periodic table

var perTabUsable_Data;
function Periodic_Table_Sync_Onload()
{
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      let value = params.atomNum;
      

    fetch('https://www.dl.kasra071.com/v3_assets/json/?file=PeriodicTableJSON')
    .then(response => response.json())
    .then(data => {
        perTabUsable_Data = data
        if(value==null || value==undefined){Periodic_Table_Data_Print()}
        else{
            Periodic_Table_SingleAtom_Print(value)
        }
    }).catch(err => document.getElementById('perTab_error').textContent = "Error : Unable To Fetch The Data. Error Details : " + err)



}

function Periodic_Table_SingleAtom_Print(num)
{
    var data = perTabUsable_Data['elements'][num-1]
    if(data==undefined){
        document.getElementById('perTab_error').textContent = "invalid number - Please enter a value beetween 1 and 119"
        var container = document.getElementById('PerTab_Table_Container')
        container.innerHTML = ""
        document.getElementById('PerTab_Header_Container').innerHTML = `<a class="PerTab_BackToTable" href="https://v3.kasra071.com/Tools/Periodic_Table.html">Back To Table</a> `
        
    }else{

        if(data['cpk-hex']==null){color="black";bg_color="ffffff"}else{
            Y = 0.2126*hexToRgb(`#${data['cpk-hex']}`).r + 0.7152*hexToRgb(`#${data['cpk-hex']}`).g + 0.0722*hexToRgb(`#${data['cpk-hex']}`).b

            var color = Y > 128 ? 'black' : 'white'
            var bg_color = data['cpk-hex']
        }

        var shells = []

        var ii = 0;
        while(-1)
        {
            if(data['shells'][ii] == undefined) break;
            shells[ii] = data['shells'][ii]
            ii++;
        }
        
        var container = document.getElementById('PerTab_Table_Container')
        container.innerHTML = ""
        document.getElementById('PerTab_Header_Container').innerHTML = `<a class="PerTab_BackToTable" href="https://v3.kasra071.com/Tools/Periodic_Table.html">Back To Table</a> `
        container.innerHTML = 
        `
            <div class="PerTab_ATM_Con">
                <div class="PerTab_Sym_ATM" style="background-color:#${bg_color};color:${color};">${data['symbol']}</div>
                <p class="PerTab_Name_ATM">${data['name']}</p>
                <p class="PerTab_phase_ATM">${data['phase']}</p>
                <p class="PerTab_shells_ATM">electron shells : ${shells}</p>
                <p class="PerTab_shells_ATM">electron configuration : ${data['electron_configuration']}</p>
                <p class="PerTab_shells_ATM">electron configuration semantic : ${data['electron_configuration_semantic']}</p>
                <p class="PerTab_NameSum_ATM">${data['summary']}</p>
                <p class="PerTab_ImgTitle_ATM">${data['image']['title']}</p>
                <img src="${data['image']['url']}" alt="${data['image']['title']}"/>
                <p class="PerTab_ImgCr_ATM">${data['image']['attribution']}</p>
                <p class="PerTab_appearance_ATM"><span>appearance:  </span> ${data['appearance']}</p>
                <p class="PerTab_appearance_ATM"><span>category:   </span> ${data['category']}</p>
                <p class="PerTab_appearance_ATM"><span>atomic_mass:  </span> ${data['atomic_mass']}</p>
                <p class="PerTab_appearance_ATM"><span>boil:  </span> ${KelvinToCelcuis(data['boil'])} celsius</p>
                <p class="PerTab_appearance_ATM"><span>melt:  </span> ${KelvinToCelcuis(data['melt'])}  celsius</p>
                <p class="PerTab_appearance_ATM"><span>discovered by:  </span> ${data['discovered_by']}</p>
                <p class="PerTab_appearance_ATM"><span>Group:  </span> ${data['xpos']}</p>
                <p class="PerTab_appearance_ATM"><span>density:  </span> ${data['density']} g/cm³</p>
                <p class="PerTab_appearance_ATM"><span>Period:  </span> ${data['ypos']}</p>

                <p class="PerTab_Source_ATM"><span>Source:  </span> <a href="${data['source']}">${data['source']}</a></p>



            </div>
        `
    }
}

function Periodic_Table_Data_Print()
{
    var table = document.getElementById('Periodic_Table_Content')
    var atomCount = 0;
    while(-1)
    {
        if(perTabUsable_Data['elements'][atomCount] == undefined) break;
        atomCount++;
    }

    var i = 0;
    var html = `
    <tr>
        <td class="PerTab_Number_Table">#</td>
        <td class="PerTab_Symbol_Table">Symbol</td>
        <td class="PerTab_Name_Table"><p>Name</p></td>
        <td class="PerTab_phase_Table"><p>phase</p></td>
        <td class="PerTab_period_Table"><p>period</p></td>
        <td class="PerTab_group_Table"><p>group</p></td>
    </tr>
    <tr style="height:20px"></tr>
    `

    var data = perTabUsable_Data['elements']
    while(i<atomCount)
    {  

        if(data[i]['cpk-hex']==null){color="black";bg_color="white"}else{
        Y = 0.2126*hexToRgb(`#${data[i]['cpk-hex']}`).r + 0.7152*hexToRgb(`#${data[i]['cpk-hex']}`).g + 0.0722*hexToRgb(`#${data[i]['cpk-hex']}`).b

        var color = Y > 128 ? 'black' : 'white'
        var bg_color = data[i]['cpk-hex']
        }

        var temp = `
            <tr id="atom${data[i]['number']}">
                <td class="PerTab_Number_Table">${data[i]['number']}</td>
                <td class="PerTab_Symbol_Table_${data[i]['phase']}" style="background-color:#${bg_color};color:${color};">${data[i]['symbol']}</td>
                <td class="PerTab_Name_Table"><p>${data[i]['name']}</p></td>
                <td class="PerTab_phase_Table"><p>${data[i]['phase']}</p></td>
                <td class="PerTab_period_Table"><p>${data[i]['period']}</p></td>
                <td class="PerTab_group_Table"><p>${data[i]['xpos']}</p></td>
                <td class="PerTab_More_Details"><a href="?atomNum=${data[i]['number']}">More_Details</a></td>
            </tr>
            <tr style="height:10px"></tr>
        `
        html = html + temp;
        i++;
    }
    table.innerHTML = html
}

function KelvinToCelcuis(n)
{
    return n-273.15
}

function Period_Table_Goto()
{
    window.location.hash = `atom${document.getElementById('Per_Tab_Goto_Input').value}`
    setTimeout(() => {
        document.getElementById(`atom${document.getElementById('Per_Tab_Goto_Input').value}`).style.animation="perTabAnim 0.5s"
        setTimeout(() => {
            document.getElementById(`atom${document.getElementById('Per_Tab_Goto_Input').value}`).style.animation="none"
        }, 500);
    }, 500);
}