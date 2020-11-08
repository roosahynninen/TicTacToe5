var counter = 0;

var board = document.getElementById("board");
var table = document.createElement("table");

createTable();

function createTable() {
  for (var i = 0; i < 5; i++) {
    var row = table.insertRow();

    for (var j = 0; j < 5; j++) {
      var cell = row.insertCell();
      var text = document.createTextNode("");
      cell.appendChild(text);
    }
  }
  board.appendChild(table);
}

function onClick() {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function () {
        fill(this);
      };
    }
  }
}

function fill(cell) {
  if (counter % 2 === 0) {
    if (cell.innerHTML === "") {
      cell.innerHTML = "X";
      winCheck();
      drawCheck();
      counter++;
      document.getElementById("info").innerHTML = "Player 2's turn";
    } else {
      alert("Pick a free cell");
    }
  } else {
    if (cell.innerHTML === "") {
      cell.innerHTML = "O";
      winCheck();
      drawCheck();
      counter++;
      document.getElementById("info").innerHTML = "Player 1's turn";
    } else {
      alert("Pick a free cell");
    }
  }
}

function winCheck() {
  var winner = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var r0 = 0;
    var r1 = 0;
    var r2 = 0;
    var r3 = 0;
    var r4 = 0;
    var c0 = 0;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    var d1 = 0;
    var d2 = 0;

    for (var j = 0; j < 5; j++) {
      if (table.rows[0].cells[j].innerHTML === winner[i]) {
        r0++;
      }
      if (table.rows[1].cells[j].innerHTML === winner[i]) {
        r1++;
      }
      if (table.rows[2].cells[j].innerHTML === winner[i]) {
        r2++;
      }
      if (table.rows[3].cells[j].innerHTML === winner[i]) {
        r3++;
      }
      if (table.rows[4].cells[j].innerHTML === winner[i]) {
        r4++;
      }
      if (table.rows[j].cells[0].innerHTML === winner[i]) {
        c0++;
      }
      if (table.rows[j].cells[1].innerHTML === winner[i]) {
        c1++;
      }
      if (table.rows[j].cells[2].innerHTML === winner[i]) {
        c2++;
      }
      if (table.rows[j].cells[3].innerHTML === winner[i]) {
        c3++;
      }
      if (table.rows[j].cells[4].innerHTML === winner[i]) {
        c4++;
      }
      if (table.rows[j].cells[j].innerHTML === winner[i]) {
        d1++;
      }
      var reverse = 4 - j;
      if (table.rows[j].cells[reverse].innerHTML === winner[i]) {
        d2++;
      }
    }
    if (
      r0 === 5 ||
      r1 === 5 ||
      r2 === 5 ||
      r3 === 5 ||
      r4 === 5 ||
      c0 === 5 ||
      c1 === 5 ||
      c2 === 5 ||
      c3 === 5 ||
      c4 === 5 ||
      d1 === 5 ||
      d2 === 5
    ) {
      if (winner[i] === "X") {
        alert("Player 1 won!");
        empty();
      }
      if (winner[i] === "O") {
        alert("Player 2 won!");
        empty();
      }
    }
  }
}

function drawCheck() {
  var filled = 0;
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      if (
        table.rows[i].cells[j].innerHTML === "X" ||
        table.rows[i].cells[j].innerHTML === "O"
      ) {
        filled++;
      }
    }
  }
  if (filled === 25) {
    alert("Draw!");
    empty();
  }
}

function empty() {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerHTML = "";
    }
  }
  if (counter % 2 === 0) {
    document.getElementById("info").innerHTML = "Player 1 you start";
  } else {
    document.getElementById("info").innerHTML = "Player 2 you start";
  }
}

empty(table);
onClick(table);
