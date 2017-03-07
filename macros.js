var totalCalories = 0;
var totalCarbs = 0;
var totalProtein = 0;
var totalFats = 0;
var totalSugars = 0;
var superTotal = 0;

var height = 0; //height in inches
var weight = 0;  //weight in pounds
var age = 0;    //age in years

// food name, calories, carbs, protein, fats, sugars

var foodList = `
BMR(height_inches,weight_pounds,age_years): 68 150 24
                              1 egg       80        0        7        5        0
                       1/2c oatmeal      150       27        5        3        1
                  cnc protein shake  672.154       60   62.308   20.308       52
              cnc protein shake 1/2  366.077       30   31.154   10.154       26
      dannon light fit greek yogurt       80        9       12        0        7
                          dr.pepper      150       40        0        0       40
                               milk      160       13        8        8       13
                       oikos yogurt      120       19       12        0       18
                      scrambled egg      102        1        7        7        1
                  special k protein      160       19       10        1        7
`;


var insolFibers = superTotal - totalCalories;

var fatl = 0;
var fath = 0;
var carbl = 0;
var carbh = 0;
var protl = 0;
var proth = 0;

var faterr = 0;
var carberr = 0;
var proterr = 0;
var fatacc = 0;
var carbacc = 0;
var protacc = 0;
var calacc = 0;

var carbpercent = 0;
var protpercent = 0;
var fatpercent = 0;

var carbString = "";
var protString = "";
var fatString = "";


var outString0 = "";
var outString1 = "";
var outString2 = "";
var outString3 = "";
var outString4 = "";
var outString5 = "";
var outString6 = "";
var outString7 = "";
var outString8 = "";
var outString9 = "";
var outString10 = "";
var outString11 = "";
var outString12 = "";
var outString13 = "";
var outString14 = "";
var outString15 = "";
var outString16 = "";

var BMR = 0;

function updateOutputDiv(){
   superTotal = 9*parseFloat(totalFats) + 4*parseFloat(totalCarbs) + 4*parseFloat(totalProtein);
   insolFibers = superTotal - totalCalories;

   fatl = (.10 * totalCalories)/9;
   fath = (.20 * totalCalories)/9;
   carbl = (.40 * totalCalories)/4;
   carbh = (.60 * totalCalories)/4;
   protl = (.30 * totalCalories)/4;
   proth = (.40 * totalCalories)/4;

   faterr = 0;
   carberr = 0;
   proterr = 0;
   fatacc = totalFats;
   carbacc = totalCarbs;
   protacc = totalProtein;
   calacc = totalCalories;

   carbpercent = (carbacc*400)/calacc;
   protpercent = (protacc*400)/calacc;
   fatpercent = (fatacc*900)/calacc;

   if ((fatacc >= fatl)&&(fatacc <= fath)){ faterr=0;}//fat
   else if (fatacc < fatl){ faterr = (fatl - fatacc)*100/fatl;}
   else if (fatacc > fath){ faterr = (fatacc - fath)*100/fath;}
   if ((carbacc >= carbl)&&(carbacc <= carbh)){ carberr=0;} //carbs
   else if (carbacc < carbl){ carberr = (carbl - carbacc)*100/carbl;}
   else if (carbacc > carbh){ carberr = (carbacc - carbh)*100/carbh;}
   if ((protacc >= protl)&&(protacc <= proth)){ proterr=0;} //protein
   else if (protacc < protl){ proterr = (protl - protacc)*100/protl;}
   else if (protacc > proth){ proterr = (protacc - proth)*100/proth;}

   carbString = "";
   protString = "";
   fatString = "";

   if (carbpercent>60) carbString = "TOO HIGH!";
   else if (carbpercent<40) carbString = "TOO LOW!";
   else carbString = "(safe)";

   if (protpercent>40) protString = "TOO HIGH!";
   else if (protpercent<30) protString = "TOO LOW!";
   else protString = "(safe)";

   if (fatpercent>20) fatString = "TOO HIGH!";
   else if (fatpercent<10) fatString = "TOO LOW!";
   else fatString = "(safe)";

   BMR = 66 + (6.23*weight) + (12.7*height) - (6.8*age);

   outString0 = "";
   outString1 = "";
   outString2 = "";
   outString3 = "";
   outString4 = "";
   outString5 = "";
   outString6 = "";
   outString7 = "";
   outString8 = "";
   outString9 = "";
   outString10 = "";
   outString11 = "";
   outString12 = "";
   outString13 = "";
   outString14 = "";
   outString15 = "";
   outString16 = "";

   if (0 == parseFloat(totalCarbs)) totalCarbs = 0;
   if (0 == parseFloat(totalProtein)) totalProtein = 0;
   if (0 == parseFloat(totalFats)) totalFats = 0;
   if (0 == parseFloat(totalSugars)) totalSugars = 0;

   //if (1e-12 > insolFibers) insolFibers = 0;

   var date = new Date();
   outString0 =+ (parseInt(date.getMonth())+1) + "-"
      + date.getDate() + "-" + date.getFullYear();

   outString1 += "Calories" + "</br>" + "Carbs(g)" + "</br>"
      + "Prot(g)" + "</br>" + "Fats(g)" + "</br>" + "Sugars(g)";

   outString2 += ":" + "</br>" + ":" + "</br>" + ":" + "</br>" + ":"
      + "</br>" + ":" + "</br>";

   outString3 += totalCalories + "</br>"
      + totalCarbs.toFixed(2) + " (" + carbpercent.toFixed(3) + "%) "
      + carbString + "</br>"
      + totalProtein.toFixed(2) + " (" + protpercent.toFixed(3) + "%) "
      + protString + "</br>"
      + totalFats.toFixed(2) + " (" + fatpercent.toFixed(3) + "%) "
      + fatString + "</br>"
      + totalSugars;

   outString4 += "Calories lost from insoluble fibers: " + insolFibers;

   outString5 += "[TARGET] " + totalCalories + " Calorie Diet";

   outString6 += "Macro" + "</br>"+ "</br>" + "Carbs" + "</br>"
      + "Protein" + "</br>" + "Fats";

   outString7 += "Range(%)" + "</br>" + "</br>" + "40% - 60% (" + "</br>"
      + "30% - 40% (" + "</br>" + "10% - 20% (";

   outString8 += "Min(g)" + "</br>" + "</br>" + carbl.toFixed(3) + " - "
      + "</br>" + protl.toFixed(3) + " - " + "</br>" + fatl.toFixed(3)
      + " - " + "</br>";

   outString9 += "Max(g)" + "</br>" + "</br>" + carbh.toFixed(3) + ")"
      + "</br>" + proth.toFixed(3) + ")" +"</br>" + fath.toFixed(3)
      + ")";

   outString10 += "</br>" + "</br>" + "[" + "</br>" + "[" + "</br>"
      + "[" + "</br>";

   outString11 += "error(%)" + "</br>" + "</br>" + carberr.toFixed(3)
      + "]" + "</br>" + proterr.toFixed(3) + "]" + "</br>"
      + faterr.toFixed(3) + "]" + "</br>";

   outString12 += "height(inches) = " + height + "; weight(lbs) = "
      + weight + "; age = " + age + "</br>";

   outString13 += "BMR (RAW): " + BMR.toFixed(2) + " Calories"
      + "</br>";

   outString14 += "Calories needed to maintain weight if:";

   outString15 += "little to no exercise:" + "</br>"
      + "lightly active (light exercise 1-3days/week):" + "</br>"
      + "moderately active (moderate exervise 3-5days/week):" + "</br>"
      + "very active (hard exercise 6-7days/week):" + "</br>"
      + "extra active (very hard exervise/sports & physical job):";

   outString16 += (1.2*BMR).toFixed(2) + " Calories" + "</br>"
      + (1.375*BMR).toFixed(2) + " Calories" + "</br>"
      + (1.55*BMR).toFixed(2) + " Calories" + "</br>"
      + (1.725*BMR).toFixed(2) + " Calories" + "</br>"
      + (1.9*BMR).toFixed(2) + " Calories" + "</br>";
   
   document.getElementById("OutputSubDiv0").innerHTML = outString0;
   document.getElementById("OutputSubDiv1").innerHTML = outString1;
   document.getElementById("OutputSubDiv2").innerHTML = outString2;
   document.getElementById("OutputSubDiv3").innerHTML = outString3;
   document.getElementById("OutputSubDiv4").innerHTML = outString4;
   document.getElementById("OutputSubDiv5").innerHTML = outString5;
   document.getElementById("OutputSubDiv6").innerHTML = outString6;
   document.getElementById("OutputSubDiv7").innerHTML = outString7;
   document.getElementById("OutputSubDiv8").innerHTML = outString8;
   document.getElementById("OutputSubDiv9").innerHTML = outString9;
   document.getElementById("OutputSubDiv10").innerHTML = outString10;
   document.getElementById("OutputSubDiv11").innerHTML = outString11;
   document.getElementById("OutputSubDiv12").innerHTML = outString12;
   document.getElementById("OutputSubDiv13").innerHTML = outString13;
   document.getElementById("OutputSubDiv14").innerHTML = outString14;
   document.getElementById("OutputSubDiv15").innerHTML = outString15;
   document.getElementById("OutputSubDiv16").innerHTML = outString16;
}

var createInputClickHandler = function(row){
   return function() { 
      var fooditem = row.getElementsByTagName("td")[0].innerHTML;
      var calories = row.getElementsByTagName("td")[1].innerHTML;
      var carbs = row.getElementsByTagName("td")[2].innerHTML;
      var protein = row.getElementsByTagName("td")[3].innerHTML;
      var fats = row.getElementsByTagName("td")[4].innerHTML;
      var sugars = row.getElementsByTagName("td")[5].innerHTML;

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

// Process file line by line
var lines = foodList.split('\n');
for(var line = 0; line < lines.length; line++){

   var fooditem = "";
   var calories = 0;
   var carbs = 0;
   var protein = 0;
   var fats = 0;
   var sugars = 0;

   var tokens = lines[line].match(/\S+/g);

   if (tokens == null) continue;
   if (tokens.length == 4){
      height=tokens[1];
      weight=tokens[2];
      age=tokens[3];

      continue;
   }
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

function insertCellInRow(inputRow, CellText){
   console.log("insertCellRow: ", CellText);
   var newCell = inputRow.insertCell(inputRow.length);
   var newCellText = document.createTextNode(CellText);
   newCell.appendChild(newCellText);
}


function saveTextAsFile(){
   outString0 = "";
   var date = new Date();
   outString0 =+ (parseInt(date.getMonth())+1) + "-"
      + date.getDate() + "-" + date.getFullYear();

   var OutputFileString = outString0 + `\n` + `\n`;

   var table = document.getElementById('OutputTable');
   var rows = table.getElementsByTagName("tr");
   
   // first print all the rows in the output table
   for (var i=0; i < rows.length; i++){
      var currentRow = table.rows[i];

      if (i==0){
         OutputFileString += printf(30, currentRow.getElementsByTagName("th")[0].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("th")[1].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("th")[2].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("th")[3].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("th")[4].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("th")[5].innerHTML);
         OutputFileString += `\n`;
      }else{
         OutputFileString += printf(30, currentRow.getElementsByTagName("td")[0].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("td")[1].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("td")[2].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("td")[3].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("td")[4].innerHTML) + " ";
         OutputFileString += printf(8, currentRow.getElementsByTagName("td")[5].innerHTML);
      }
      OutputFileString += `\n`;
   }
   OutputFileString +=`//////// Total ////////` + `\n`;
   OutputFileString += `Calories :      ` + totalCalories +  `\n` 
      + `Carbs(g) :      ` + totalCarbs.toFixed(2) + ` (`
      + carbpercent.toFixed(3) + `%) ` + carbString + `\n`
      + `Prot(g)  :      ` + totalProtein.toFixed(2) + ` (`
      + protpercent.toFixed(3) + `%) ` + protString + `\n`
      + `Fats(g)  :      ` + totalFats.toFixed(2) + ` (`
      + fatpercent.toFixed(3) + `%) ` + fatString + `\n`
      + `Sugars(g):      ` + totalSugars + `\n`
      + `\n` + `Calories lost from insoluble fibers:`
      + insolFibers + `\n` + `\n` + `[TARGET] `
      + totalCalories + ` Calorie Diet` + `\n`
      + `Macro    Range(%)      Min(g)     Max(g)     error(%)`
      + `\n` + `\n`
      + `Carbs    40% - 60% (` + printf(8,carbl.toFixed(3)) + ` - `
      + printf(8,carbh.toFixed(3)) + `)   [` + printf(8, carberr.toFixed(3)) + `]` + `\n`
      + `Protein  30% - 40% (` + printf(8,protl.toFixed(3)) + ` - `
      + printf(8,proth.toFixed(3)) + `)   [` + printf(8,proterr.toFixed(3)) + `]` + `\n`
      + `Fats     10% - 20% (` + printf(8,fatl.toFixed(3)) + ` - `
      + printf(8,fath.toFixed(3)) + `)   [` + printf(8,faterr.toFixed(3)) + `]` + `\n`
      + `\n` + `BMR (RAW): ` + BMR + ` Calories` + `\n`
      + `Calories needed to maintain weight if:`
      + `\n` + `\n`
      + `                                      little to no exercise: `
      + (1.2*BMR).toFixed(2) + ` Calories` + `\n`
      + `               lightly active (light exercise 1-3days/week): `
      + (1.375*BMR).toFixed(2) + ` Calories` + `\n`
      + `         moderately active (moderate exervise 3-5days/week): `
      + (1.55*BMR).toFixed(2) + ` Calories` + `\n`
      + `                   very active (hard exercise 6-7days/week): `
      + (1.725*BMR).toFixed(2) + ` Calories` + `\n`
      + `    extra active (very hard exervise/sports & physical job): `
      + (1.9*BMR).toFixed(2) + ` Calories` + `\n`;

   //even with white-space: pre; still looks ugly in html
   //document.getElementById("testdiv").innerHTML = OutputFileString;


    var textToSave = OutputFileString;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = outString0 + ".txt"; //output filename
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}

function destroyClickedElement(event){
    document.body.removeChild(event.target);
}

function printf(spacing, inputString){
   if (inputString.length >= spacing){
      // if length of string is too long, return the original string
      return inputString;
   }else{
      var numSpaces = spacing - inputString.length;
      var padding = ``;
      for (var i=1; i<=numSpaces; i++){
         padding += ` `;
      }
      return padding + inputString;
   }
}