<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/faviconS/FavNoBg.png" type="image/x-icon">
    <link rel="stylesheet" href="styles/style.css">
    <title>Naslovna</title>
    <h1 class="HomeTitle">Naslov Dokumenta</h1>
</head>
<body>
    <h1 class="h1Body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <hr>
        <br> Distinctio soluta assumendas.
    </h1>

    <p>Then i am adding this random pic here</p>
    <a  href="http://stackedfully.test/">
        <img class="imageStyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqmQYAhV-t5LBvSF1Ty1vHCXCDg5Vv4n5fwJXNkODSQ&s=10" alt="Just a placeholder" srcset="">
    </a>

    <table class="NamesLists">
        <tr class="tableHead">
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
        </tr>

        <tr class="tableBody">
            <td>Pera &#169;</td>
            <td>69</td>
            <td>DIck sucker</td>
        </tr>
    </table>

    <form action="userList" method="get">
        <label for="username">Name</label>
        <br>
        <input type="text" name="username" id="username">
        <br>
        <label for="age">Age</label>
        <br>
        <input type="number" name="age" id="age">
        <br>
        <label for="ocupation">Ocupation</label>
        <br>
        <input type="text" name="ocupation" id="ocupation">
        <br>

        <h1>How High are you?</h1>
        
        <label for="howhigh2"> HI, how are you </label>
        <input type="radio" name="answer" id="howhigh2" value="HI, how are you"><br>

        <label for="howhigh1"> I am not high </label>
        <input type="radio" name="answer" id="howhigh1" value="I am not high"><br>

        <input type="button" value="send">

    </form>

    <iframe title="laragon" class="frameStyle" src="https://laragon.org/download" height="500" width="100%"></iframe>

</body>
</html>