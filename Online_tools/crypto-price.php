<?php

if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $action_type = $_POST['action'];
    if($action_type == "SBCR")
    {
        $min = $_POST['min_rank_search'];
        $max = $_POST['max_rank_search'];
        if($max<$min)
        {
            $temp = $max;
            $max = $min;
            $min = $temp;
        }
        if($min != 1)
        {
            $max = $max - $min + 1;
        }
        $url="https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

        $parameters = [
            'start' => $min,
            'limit' => $max,
            'convert' => 'USD'
          ];
          
        $headers = [
            'Accepts: application/json',
            'X-CMC_PRO_API_KEY: fbe8c3b4-ec65-41c1-8dfd-48b44641fd16'
        ];
        
        $qs = http_build_query($parameters); // query string encode the parameters
        $request = "{$url}?{$qs}"; // create the request URL
        
        
        $curl = curl_init(); // Get cURL resource
        // Set cURL options
        curl_setopt_array($curl, array(
          CURLOPT_URL => $request,            // set the request URL
          CURLOPT_HTTPHEADER => $headers,     // set the headers 
          CURLOPT_RETURNTRANSFER => 1         // ask for raw response instead of bool
        ));
        
        $response = curl_exec($curl); // Send the request, save the response
        $sendingRES = json_encode($response);
        curl_close($curl); // Close request
    }else{
        $slug = $_POST['coin_name'];

        $url="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";

        $parameters = [
            'slug' => $slug,
            'convert' => 'USD'
          ];
          
        $headers = [
            'Accepts: application/json',
            'X-CMC_PRO_API_KEY: fbe8c3b4-ec65-41c1-8dfd-48b44641fd16'
        ];
        
        $qs = http_build_query($parameters); // query string encode the parameters
        $request = "{$url}?{$qs}"; // create the request URL
        
        
        $curl = curl_init(); // Get cURL resource
        // Set cURL options
        curl_setopt_array($curl, array(
          CURLOPT_URL => $request,            // set the request URL
          CURLOPT_HTTPHEADER => $headers,     // set the headers 
          CURLOPT_RETURNTRANSFER => 1         // ask for raw response instead of bool
        ));
        
        $response = curl_exec($curl); // Send the request, save the response
        $sendingRES = json_encode($response);
        curl_close($curl); // Close request
    }
}

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>kasra071 - cryptocurrencies prices</title>
        <meta name="description"  content="">
        <link rel="stylesheet" href="../src/index.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <script src="../src/index.js" defer></script>
        <script src="../src/crypto.js" defer></script>
        <script>
            var jsonData = JSON.parse(<?= $sendingRES; ?>);
        </script>
        <link rel="icon" href="https://dl.kasra071.com/v3_assets/icon_blue.jpg">
        <meta charset="UTF-8">
    </head>
    <body onload="PageLoaded()">
        <div id="Loader"></div>
        
        <div id="header"></div>
        <div id="menu"></div>

        <div id="main">
            <div class="crypto_online_container">
                <h1 class="online_tools_title">cryptocurrencies</h1>

                <div class="cr_con">
                <span class="crypto_search">search by rank : 
                    <form method="post">
                    <input name="min_rank_search" type="number" class="rank_cr_sr" id="rank_start_crypto" min="1" max="5000">
                    to 
                    <input name="max_rank_search" type="number" class="rank_cr_sr" id="rank_end_crypto" min="1" max="5000">
                    <input type="hidden" name="action" value="SBCR">
                    <button class="online_tools_btn">
                        <span>Search</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                        <input type="submit" value="">
                    </button>

                    </form>
                </span>
                </div>

                <div class="cr_con">
                    <span class="crypto_search">search by coin name : 
                        <form method="post">
                        <input name="coin_name" type="text" class="name_cr_sr" id="coin_crypto_name" placeholder="ex : Bitcoin">
                        <input type="hidden" name="action" value="SBCN">
                        <button class="online_tools_btn">
                            <span>Search</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                            <input type="submit" value="">
                        </button>

                        </form>
                    </span>
                    </div>
                    <span id="error_crypto"></span>

                <table id="crypto_content">

                </table>



                <div style="height:200px"></div>
            </div>
        </div>

        <div id="footer"></div>
    </body>
</html>