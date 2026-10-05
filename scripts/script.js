const HomeSend = document.querySelector("#HomeSend");
const NewRow = document.querySelector("#NewRow");


HomeSend.onclick = showInfo;
NewRow.onclick = addTableData;

function showInfo(){
    const username = document.querySelector("#username").value;
    const age = document.querySelector("#age").value;
    const ocupation = document.querySelector("#ocupation").value;

    const answer = document.querySelector('input[name="answer"]:checked');

    let radioAnswer = "No answer selected";

    if (answer){
        if (answer.id ==="howhigh2"){
            radioAnswer = "they high as fuck"
        }else radioAnswer = "Not high YET!"
    }

    alert(
        "Name: " + username +
        "\nAge: " +  age +
        "\nOcupation: " + ocupation +
        "\nAre they high?: " + radioAnswer
    );
}
// Scripta za popunjavanje tabele


function addTableData(){
    const username = document.querySelector("#username").value;
    const age = document.querySelector("#age").value;
    const ocupation = document.querySelector("#ocupation").value;

    const tabele = document.querySelector(".NamesLists");
    
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const ocupationCell = document.createElement("td");

    nameCell.textContent = username;
    ageCell.textContent = age;
    ocupationCell.textContent = ocupation;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(ocupationCell);

    tabele.appendChild(row);
}