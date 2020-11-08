var count = 0;
var table = document.createElement("table");

//the reference for the body
var board = document.getElementById("board");

function createTable() {
  // create rows
  for (var r = 0; r < 5; r++) {
    var t_row = table.insertRow();
    // create cells in row
    for (var c = 0; c < 5; c++) {
      var t_cell = t_row.insertCell();
      var cellText = document.createTextNode("");
      t_cell.appendChild(cellText);
    }
  }
  board.appendChild(table);
  onClick(table);
}

function onClick(table) {
  for (var t = 0; t < table.rows.length; t++) {
    for (var i = 0; i < table.rows[t].cells.length; i++) {
      table.rows[t].cells[i].onclick = function () {
        fillCell(table, this);
      };
    }
  }
}

function fillCell(table, t_cell) {
  count++;
  if (count % 2 === 0) {
    if (t_cell.innerHTML === "") {
      t_cell.innerHTML = "O";
    } else {
      alert("That cell is already chosen");
      count--;
    }
  } else {
    if (t_cell.innerHTML === "") {
      t_cell.innerHTML = "X";
    } else {
      alert("That cell is already chosen");
      count--;
    }
  }
  checkWin(table);
  checkDraw(table);
}

function checkWin(table) {
  var xo = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var pysty1 = 0;
    var pysty2 = 0;
    var pysty3 = 0;
    var pysty4 = 0;
    var pysty5 = 0;
    var vaaka1 = 0;
    var vaaka2 = 0;
    var vaaka3 = 0;
    var vaaka4 = 0;
    var vaaka5 = 0;
    var viisto1 = 0;
    var viisto2 = 0;

    for (var t = 0; t < 5; t++) {
      if (table.rows[0].cells[t].innerHTML === xo[i]) {
        vaaka1++;
      }
      if (table.rows[1].cells[t].innerHTML === xo[i]) {
        vaaka2++;
      }
      if (table.rows[2].cells[t].innerHTML === xo[i]) {
        vaaka3++;
      }
      if (table.rows[3].cells[t].innerHTML === xo[i]) {
        vaaka4++;
      }
      if (table.rows[4].cells[t].innerHTML === xo[i]) {
        vaaka5++;
      }
      if (table.rows[t].cells[0].innerHTML === xo[i]) {
        pysty1++;
      }
      if (table.rows[t].cells[1].innerHTML === xo[i]) {
        pysty2++;
      }
      if (table.rows[t].cells[2].innerHTML === xo[i]) {
        pysty3++;
      }
      if (table.rows[t].cells[3].innerHTML === xo[i]) {
        pysty4++;
      }
      if (table.rows[t].cells[4].innerHTML === xo[i]) {
        pysty5++;
      }
      if (table.rows[t].cells[t].innerHTML === xo[i]) {
        viisto1++;
      }
      var reverse = 4 - t;
      if (table.rows[t].cells[reverse].innerHTML === xo[i]) {
        viisto2++;
      }
      if (
        pysty1 === 5 ||
        pysty2 === 5 ||
        pysty3 === 5 ||
        pysty4 === 5 ||
        pysty5 === 5 ||
        vaaka1 === 5 ||
        vaaka2 === 5 ||
        vaaka3 === 5 ||
        vaaka4 === 5 ||
        vaaka5 === 5 ||
        viisto1 === 5 ||
        viisto2 === 5
      ) {
        if (xo[i] === "X") {
          alert("Player 1 won!");
        }
        if (xo[i] === "O") {
          alert("Player 2 won!");
        }
        clearTable();
      }
    }
  }
}

function checkDraw(table) {
  var draw_count = 0;

  for (var t = 0; t < table.rows.length; t++) {
    for (var i = 0; i < table.rows[t].cells.length; i++) {
      if (
        table.rows[t].cells[i].innerHTML === "X" ||
        table.rows[t].cells[i].innerHTML === "O"
      ) {
        draw_count++;
      }
    }
  }
  if (draw_count === 25) {
    alert("It's a draw!");
    clearTable();
  }
}

function clearTable() {
  for (var t = 0; t < table.rows.length; t++) {
    for (var i = 0; i < table.rows[t].cells.length; i++) {
      table.rows[t].cells[i].innerHTML = "";
    }
  }
}

createTable();
