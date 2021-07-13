function addRow() {
    var table = document.getElementsByTagName("table")[0];

    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);

    cel1.innerHTML = document.getElementById("name").value;
    cel2.innerHTML = document.getElementById("roll").value;
    cel3.innerHTML = document.getElementById("subject").value;

    console.log("all done");
  }