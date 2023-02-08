var showin = document.getElementById('crypto_content')

var error_code = jsonData['status']['error_code'];

if(error_code == 0)
{
    var jsondatause = jsonData['data'];
    var add_temp;
    var add = `
    <tr class="table_title">
    <td><h2>#</h2></td>
    <td><h2>Logo</h2></td>
    <td><h2 class="coin_name">Name</h2></td>
    <td><h2 class="coin_sym">Symbol</h2></td>
    <td><h2 class="coin_price">Price</h2></td>  
    <td><h2 class="coin_price">market cap</h2></td> 
    </tr>
    `;
    var i = 1;
    while(-1)
    {
        if(jsondatause[i]==null){break;}
        i++;
    }

    var count = i - 1;

    i = 0;
    console.log(jsondatause)
    
    while(i<count+1)
    {
        
        var checker = jsondatause[i];
        
        if(checker == undefined)
        {
            i = 1;
            id = jsondatause[i];
            if(id == undefined)
            {
                while(id == undefined)
                {
                    i++;
                    id = jsondatause[i]
                }
            }
        }
        
        var id = jsondatause[i]['id'];
        var namecoin = jsondatause[i]['name'];
        var imgurl = `https://s2.coinmarketcap.com/static/img/coins/128x128/${id}.png`
        var rank = jsondatause[i]['cmc_rank']
        var symbol_coin = jsondatause[i]['symbol']
        var price = jsondatause[i]['quote']['USD']['price'];
        var market = jsondatause[i]['quote']['USD']['market_cap'];

        price = parseFloat(price)
        if(price>100)
        {
            price = price.toFixed(2)
        }else if(price>10)
        {
            price = price.toFixed(3)
        }else if(price > 1)
        {
            price = price.toFixed(5)
        }else if(price > 0.1)
        {
            price = price.toFixed(6)
        }else if(price > 0.01)
        {
            price = price.toFixed(7)
        }else{
            price = price.toFixed(10)
        }


        market = parseFloat(market)
        if(market>100)
        {
            market = market.toFixed(2)
        }else if(market>10)
        {
            market = market.toFixed(3)
        }else if(market > 1)
        {
            market = market.toFixed(5)
        }else if(market > 0.1)
        {
            market = market.toFixed(6)
        }else if(market > 0.01)
        {
            market = market.toFixed(7)
        }else{
            market = market.toFixed(10)
        }


        add_temp = `
        <tr class="space_crypto"></tr>
        <tr class="coincon">
        <td><h2>${rank}</h2></td>
        <td><img src="${imgurl}" alt="${namecoin}"></td>
        <td><h2 class="coin_name">${namecoin}</h2></td>
        <td><h2 class="coin_sym">${symbol_coin}</h2></td>
        <td><h2 class="coin_price">${price}$</h2></td>
        <td><h2 class="coin_price">${market}$</h2></td>
        </tr>
        `
        add = add + add_temp
        i++;
        
    }
    showin.innerHTML = add



}else{
    if(error_code == 400)
    {
        document.getElementById('error_crypto').textContent = "error 400 - bad request - please make sure you entered right values"
    }else if(error_code == 429)
    {
        document.getElementById('error_crypto').textContent = "so many requests have sent today -- we use free coinmarketcap api and because of that we have limited requests per day, sorry , try again tommorow"
    }else{
        document.getElementById('error_crypto').textContent = "unknown error , please contact our support"
    }
}

