<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
</head>
<body>

    <div class="container">
        <div class="search">
            <h1>Find Meals For Your Ingredient</h1>
            <div class="jamie">
                <span>Reals food doesn't have ingredients, read food is ingredients.</span><br>
                <span> - Jamie Oliver</span>
            </div>
            <div class='search-box'>
                <input type="text" class="search-content" placeholder="Enter an ingredient">
                <button type="submit" class="search-btn"> <i class="fas fa-search"></i> </button>
            </div>
        </div>


        <div class="meal-result">
            <h2 class="title">Your Search Result:</h2>
            <div class="meal">
            </div>
            <div class="meal-details">
                <button type="button" class="close-btn"><i class="fas fa-times"></i></button>
                <div class="meal-details-content">


                </div>
            </div>
        </div>
    </div>


    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>