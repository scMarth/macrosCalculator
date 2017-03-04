var totalCalories = 0;
var totalCarbs = 0;
var totalProtein = 0;
var totalFats = 0;
var totalSugars = 0;
var superTotal = 0;

function updateOutputDiv(){
   superTotal = 9*parseFloat(totalFats) + 4*parseFloat(totalCarbs) + 4*parseFloat(totalProtein);
   var insolFibers = superTotal - totalCalories;

   var fatl = (.10 * totalCalories)/9;
   var fath = (.20 * totalCalories)/9;
   var carbl = (.40 * totalCalories)/4;
   var carbh = (.60 * totalCalories)/4;
   var protl = (.30 * totalCalories)/4;
   var proth = (.40 * totalCalories)/4;

   var faterr = 0;
   var carberr = 0;
   var proterr = 0;
   var fatacc = totalFats;
   var carbacc = totalCarbs;
   var protacc = totalProtein;
   var calacc = totalCalories;

   var carbpercent = (carbacc*400)/calacc;
   var protpercent = (protacc*400)/calacc;
   var fatpercent = (fatacc*900)/calacc;

   if ((fatacc >= fatl)&&(fatacc <= fath)){ faterr=0;}//fat
   else if (fatacc < fatl){ faterr = (fatl - fatacc)*100/fatl;}
   else if (fatacc > fath){ faterr = (fatacc - fath)*100/fath;}
   if ((carbacc >= carbl)&&(carbacc <= carbh)){ carberr=0;} //carbs
   else if (carbacc < carbl){ carberr = (carbl - carbacc)*100/carbl;}
   else if (carbacc > carbh){ carberr = (carbacc - carbh)*100/carbh;}
   if ((protacc >= protl)&&(protacc <= proth)){ proterr=0;} //protein
   else if (protacc < protl){ proterr = (protl - protacc)*100/protl;}
   else if (protacc > proth){ proterr = (protacc - proth)*100/proth;}

   document.getElementById("OutputTextDiv").innerHTML = "";

   var carbString = "";
   var protString = "";
   var fatString = "";

   if (carbpercent>60) carbString = "TOO HIGH!";
   else if (carbpercent<40) carbString = "TOO LOW!";
   else carbString = "(safe)";

   if (protpercent>40) protString = "TOO HIGH!";
   else if (protpercent<30) protString = "TOO LOW!";
   else protString = "(safe)";

   if (fatpercent>20) fatString = "TOO HIGH!";
   else if (fatpercent<10) fatString = "TOO LOW!";
   else fatString = "(safe)";

   var outputString = "//////// Total ////////</br>"
      + "Calories : " + totalCalories + "</br>"

      + "Carbs(g) : " + totalCarbs.toFixed(2) + " " + "(" 
      + carbpercent.toFixed(3) + "%) " + carbString + "</br>"

      + "Prot(g)  : " + totalProtein.toFixed(2) + " " + "(" 
      + protpercent.toFixed(3) + "%) " + protString + "</br>"

      + "Fats(g)  : " + totalFats.toFixed(2) + " " + "(" 
      + fatpercent.toFixed(3) + "%) " + fatString + "</br>"


      + "Sugars(g): " + totalSugars + "</br>"
      + "</br>" + "Calories lost from insoluble fibers:"
      + insolFibers + "</br>" + "</br>" + "[TARGET] "
      + totalCalories + " Calorie Diet" + "</br>"
      + "Macro    Range(%)      Min(g)     Max(g)     error(%)"
      + "</br>" + "</br>"
      + "Carbs    40% - 60% ( " + carbl.toFixed(3) + " - "
      + carbh.toFixed(3) + " ) [ " + carberr.toFixed(3) + "]" + "</br>"
      + "Protein  30% - 40% ( " + protl.toFixed(3) + " - "
      + proth.toFixed(3) + " ) [ " + proterr.toFixed(3) + "]" + "</br>"
      + "Fats     10% - 20% ( " + fatl.toFixed(3) + " - "
      + fath.toFixed(3) + " ) [ " + faterr.toFixed(3) + "]" + "</br>"
      ;
   document.getElementById("OutputTextDiv").innerHTML = outputString;
}

var createInputClickHandler = function(row){
   return function() { 
      var fooditem = row.getElementsByTagName("td")[0].innerHTML;
      var calories = row.getElementsByTagName("td")[1].innerHTML;
      var carbs = row.getElementsByTagName("td")[2].innerHTML;
      var protein = row.getElementsByTagName("td")[3].innerHTML;
      var fats = row.getElementsByTagName("td")[4].innerHTML;
      var sugars = row.getElementsByTagName("td")[5].innerHTML;
      //alert("id:" + fooditem);
      console.log("fooditem = ", fooditem);
      console.log("calories = ", calories);
      console.log("carbs = ", carbs);
      console.log("protein = ", protein);
      console.log("fats = ", fats);
      console.log("sugars = ", sugars);

      totalCalories += parseFloat(calories);
      totalCarbs += parseFloat(carbs);
      totalProtein += parseFloat(protein);
      totalFats += parseFloat(fats);
      totalSugars += parseFloat(sugars);

      var tableRef = document.getElementById('OutputTable').getElementsByTagName('tbody')[0];
      // Insert a row in the table at the last row
      var newRow = tableRef.insertRow(tableRef.rows.length);
      // Insert a cell in the row at index 0
      insertCellInRow(newRow, fooditem);
      insertCellInRow(newRow, calories);
      insertCellInRow(newRow, carbs);
      insertCellInRow(newRow, protein);
      insertCellInRow(newRow, fats);
      insertCellInRow(newRow, sugars);
      updateOutputDiv();
      newRow.onclick = createOutputClickHandler(newRow);
   };
};

var createOutputClickHandler = function(row){
   return function() { 
      var fooditem = row.getElementsByTagName("td")[0].innerHTML;
      var calories = row.getElementsByTagName("td")[1].innerHTML;
      var carbs = row.getElementsByTagName("td")[2].innerHTML;
      var protein = row.getElementsByTagName("td")[3].innerHTML;
      var fats = row.getElementsByTagName("td")[4].innerHTML;
      var sugars = row.getElementsByTagName("td")[5].innerHTML;
      //delete the row
      document.getElementById('OutputTable').deleteRow(row.rowIndex);
      //update totals
      totalCalories -= parseFloat(calories);
      totalCarbs -= parseFloat(carbs);
      totalProtein -= parseFloat(protein);
      totalFats -= parseFloat(fats);
      totalSugars -= parseFloat(sugars);

      updateOutputDiv();
   };
};

document.getElementById('file').onchange = function(){

   var file = this.files[0];
   console.log(file);
   var reader = new FileReader();
   reader.onload = function(progressEvent){

      // get rid of the old file's data before adding the data of the new file
      var new_tbody = document.createElement('tbody');
      var old_tbody = document.getElementById('FoodTable').getElementsByTagName('tbody')[0];
      old_tbody.parentNode.replaceChild(new_tbody, old_tbody);


      // Process file line by line
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){

         var fooditem = "";
         var calories = 0;
         var carbs = 0;
         var protein = 0;
         var fats = 0;
         var sugars = 0;

         var tokens = lines[line].match(/\S+/g);

         if (tokens == null) continue;
         if (tokens.length < 6) continue;

         // get food name
         if (tokens != null)
         for (var i=0; i<=tokens.length-6; i++){
            fooditem += tokens[i];
            if (i != tokens.length-6) fooditem += " ";
         }

         if (tokens != null){
            calories = tokens[tokens.length-5];
            carbs = tokens[tokens.length-4];
            protein = tokens[tokens.length-3];
            fats = tokens[tokens.length-2];
            sugars = tokens[tokens.length-1];
         }

         var tableRef = document.getElementById('FoodTable').getElementsByTagName('tbody')[0];
         // Insert a row in the table at the last row
         var newRow = tableRef.insertRow(tableRef.rows.length);
         // insert elements into cells in the row
         insertCellInRow(newRow, fooditem);
         insertCellInRow(newRow, calories);
         insertCellInRow(newRow, carbs);
         insertCellInRow(newRow, protein);
         insertCellInRow(newRow, fats);
         insertCellInRow(newRow, sugars);

         // add row handler
         newRow.onclick = createInputClickHandler(newRow);
      }
   };
   reader.readAsText(file);
};

function insertCellInRow(inputRow, CellText){
   console.log("insertCellRow: ", CellText);
   var newCell = inputRow.insertCell(inputRow.length);
   var newCellText = document.createTextNode(CellText);
   newCell.appendChild(newCellText);
}