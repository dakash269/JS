var menuData = [{
    name:{key:'Crustly Garlic',value:1},
    type:'main-course',
    price:105
}, {
    name:{key:'French Fries',value:1},
    type:'desserts',
    price:105
}, {
    name:{key:'Home Country Fries with Herbs and Chilli Flakes',value:1},
    type:'appetizers',
    price:105
}, {
    name:{key:'French Fries with Cheese and Jalapenos',value:1},
    type:'beverages',
    price:135
}];
var tables = [{
    id:1,
    totalAmount:0,
    numberOfItems:0,
    menuData:[]
}, {
    id:2,
    totalAmount:0,
    numberOfItems:0,
    menuData:[]
}, {
    id:3,
    totalAmount: 0,
    numberOfItems: 0,
    menuData:[]
}];

function allowDrop(ev) {
    ev.preventDefault();}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data)===a) {
        var i=-1;
        if (ev.target.id==='a1') i=0;
        if (ev.target.id==='b1') i=1;
        if (ev.target.id==='c1') i=2;
        tables[i].menuData.push({name:{key:'Crustly Garlic',value:1}, type:'main-course', price:105});
        tables[i].numberOfItems+=1;
        tables[i].totalAmount+=105;
    }
    if(document.getElementById(data)===b) {
        var j=-1;
        if (ev.target.id==='a1') j=0;
        if (ev.target.id==='b1') j=1;
        if (ev.target.id==='c1') j=2;
        tables[j].menuData.push({name:{key:'French Fries',value:1}, type:'desserts', price:105});
        tables[j].numberOfItems+=1;
        tables[j].totalAmount+=105;
    }
    if(document.getElementById(data)===c) {
        var k=-1;
        if (ev.target.id==='a1') k=0;
        if (ev.target.id==='b1') k=1;
        if (ev.target.id==='c1') k=2;
        tables[k].menuData.push({name:{key:'Home Country Fries with Herbs and Chilli Flakes',value:1}, type:'appetizers', price:105});
        tables[k].numberOfItems+=1;
        tables[k].totalAmount+=105;
    }
    if(document.getElementById(data)===d) {
        var l=-1;
        if (ev.target.id==='a1') l=0;
        if (ev.target.id==='b1') l=1;
        if (ev.target.id==='c1') l=2;
        tables[l].menuData.push({name:{key:'French Fries with Cheese and Jalapenos',value:1}, type:'beverages', price:135});
        tables[l].numberOfItems+=1;
        tables[l].totalAmount+=135;
    }
    if (ev.target.id==='a1') setTable1(tables[0].menuData.length-1);
    if (ev.target.id==='b1') setTable2(tables[1].menuData.length-1);
    if (ev.target.id==='c1') setTable3(tables[2].menuData.length-1);
    document.getElementById("myUL1").innerHTML="<li><a href=\"#\" id=\"a1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table1<br/>\n" +
        "<h5>Rs."+tables[0].totalAmount+" |<span > Total items:"+tables[0].numberOfItems+"</span></h5></a>\n" + "</li>\n" +
        "<li><a href=\"#\" id=\"b1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table2<br/>\n" +
        "<h5>Rs."+tables[1].totalAmount+" |<span> Total items:"+tables[1].numberOfItems+"</span></h5></a>\n" + "</li>\n" +
        "<li><a href=\"#\"  id=\"c1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table3<br/>\n" +
        "<h5>Rs."+tables[2].totalAmount+" |<span > Total items:"+tables[2].numberOfItems+"</span></h5></a>\n" + "</li>";
    btn1 = document.getElementById("a1");
    btn2 = document.getElementById("b1");
    btn3 = document.getElementById("c1");
    btn1.onclick = function() { modal1.style.display = "block";};
    btn2.onclick = function() { modal2.style.display = "block";};
    btn3.onclick = function() { modal3.style.display = "block";};
}
var row1 =document.getElementById("mytable1").createTHead().insertRow(0);
    row1.insertCell(0).innerHTML='<b>S.N.<b>';
    row1.insertCell(1).innerHTML='<b>Item<b>';
    row1.insertCell(2).innerHTML='<b>Price<b>';
    row1.insertCell(3).innerHTML='<b>Quantity<b>';
var row2 =document.getElementById("mytable2").createTHead().insertRow(0);
    row2.insertCell(0).innerHTML='<b>S.N.<b>';
    row2.insertCell(1).innerHTML='<b>Item<b>';
    row2.insertCell(2).innerHTML='<b>Price<b>';
    row2.insertCell(3).innerHTML='<b>Quantity<b>';
var row3 =document.getElementById("mytable3").createTHead().insertRow(0);
    row3.insertCell(0).innerHTML='<b>S.N.<b>';
    row3.insertCell(1).innerHTML='<b>Item<b>';
    row3.insertCell(2).innerHTML='<b>Price<b>';
    row3.insertCell(3).innerHTML='<b>Quantity<b>';
function setTable1 (id) {
       i = tables[0].menuData.length-1;
            var row = document.getElementById("mytable1").createTHead().insertRow(i);
            row.insertCell(0).innerHTML = i+1;
            row.insertCell(1).innerHTML = tables[0].menuData[i].name.key;
            row.insertCell(2).innerHTML = tables[0].menuData[i].price;
            row.insertCell(3).innerHTML = tables[0].menuData[i].name.value;
            // document.getElementById("mytable1").getElementsByTagName('td')[3].contentEditable="true";
            row.insertCell(4).innerHTML = "<button class=\"fa fa-trash fa-lg\" onclick=\"deleteData(0,"+ id +")\"></button>"//tables[0].menuData[i].name.value;
}
function setTable2 (id) {
    i = tables[1].menuData.length-1;
    console.log(tables[1].menuData[0].name.value);
    var row = document.getElementById("mytable2").createTHead().insertRow(i);
    row.insertCell(0).innerHTML = i+1;
    row.insertCell(1).innerHTML = tables[1].menuData[i].name.key;
    row.insertCell(2).innerHTML = tables[1].menuData[i].price;
    row.insertCell(3).innerHTML = "<input type=\"text\" style='width: 50px' value='"+tables[1].menuData[i].name.value +"' onchange=\"update(1)\"/>"; //tables[0].menuData[i].name.value;
    row.insertCell(4).innerHTML = "  <button class=\"fa fa-trash fa-lg\" onclick=\"deleteData(1,"+ id +")\"></button>"//tables[0].menuData[i].name.value;
}
function setTable3 (id) {
    i = tables[2].menuData.length-1;
    var row = document.getElementById("mytable3").createTHead().insertRow(i);
    row.insertCell(0).innerHTML = i+1;
    row.insertCell(1).innerHTML = tables[2].menuData[i].name.key;
    row.insertCell(2).innerHTML = tables[2].menuData[i].price;
    row.insertCell(3).innerHTML = "<input type=\"text\" style='width: 50px' onchange=\"update(2)\"/>"; //tables[0].menuData[i].name.value;
    row.insertCell(4).innerHTML = "  <button class=\"fa fa-trash fa-lg\" onclick=\"deleteData(2,"+ id +")\"></button>"//tables[0].menuData[i].name.value;
}
function update(index) {
    tables[index].totalAmount = 0;
    tables[index].numberOfItems = 0;
    for(var i=tables[index].menuData.length-1;i>=0;i-- ) {
        tables[index].totalAmount = tables[index].totalAmount +
            tables[index].menuData[i].name.value * tables[index].menuData[i].price;
        tables[index].numberOfItems = tables[index].numberOfItems +
            parseInt(tables[index].menuData[i].name.value);
    }
    document.getElementById("myUL1").innerHTML = "<li><a href=\"#\" id=\"a1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table1<br/>\n" +
        "<h5>Rs."+tables[0].totalAmount+" |<span > Total items:"+tables[0].numberOfItems+"</span></h5></a>\n" + "</li>\n" +
        "<li><a href=\"#\" id=\"b1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table2<br/>\n" +
        "<h5>Rs."+tables[1].totalAmount+" |<span> Total items:"+tables[1].numberOfItems+"</span></h5></a>\n" + "</li>\n" +
        "<li><a href=\"#\"  id=\"c1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table3<br/>\n" +
        "<h5>Rs."+tables[2].totalAmount+" |<span > Total items:"+tables[2].numberOfItems+"</span></h5></a>\n" + "</li>";
    btn1 = document.getElementById("a1");
    btn2 = document.getElementById("b1");
    btn3 = document.getElementById("c1");
    btn1.onclick = function() { modal1.style.display = "block";};
    btn2.onclick = function() { modal2.style.display = "block";};
    btn3.onclick = function() { modal3.style.display = "block";};
}
function deleteData(index,$index) {
    document.getElementById("mytable1").createTHead().deleteRow($index);
    var rem=tables[index].menuData.splice($index,1);
    tables[index].totalAmount=tables[index].totalAmount-rem[0].price*rem[0].name.value;
    tables[index].numberOfItems=tables[index].numberOfItems-rem[0].name.value;
    document.getElementById("myUL1").innerHTML = "<li><a href=\"#\" id=\"a1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table1<br/>\n" +
        "<h5>Rs."+tables[0].totalAmount+" |<span > Total items:"+tables[0].numberOfItems+"</span></h5></a>\n" + "</li>\n" +
        "<li><a href=\"#\" id=\"b1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table2<br/>\n" +
        "<h5>Rs."+tables[1].totalAmount+" |<span> Total items:"+tables[1].numberOfItems+"</span></h5></a>\n" + "</li>\n" +
        "<li><a href=\"#\"  id=\"c1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table3<br/>\n" +
        "<h5>Rs."+tables[2].totalAmount+" |<span > Total items:"+tables[2].numberOfItems+"</span></h5></a>\n" + "</li>";
    btn1 = document.getElementById("a1");
    btn2 = document.getElementById("b1");
    btn3 = document.getElementById("c1");
    btn1.onclick = function() { modal1.style.display = "block";};
    btn2.onclick = function() { modal2.style.display = "block";};
    btn3.onclick = function() { modal3.style.display = "block";};
    console.log(tables[index].totalAmount);
}
document.getElementById("myUL1").innerHTML = "<li><a href=\"#\" id=\"a1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table1<br/>\n" +
    "<h5>Rs."+tables[0].totalAmount+" |<span > Total items:"+tables[0].numberOfItems+"</span></h5></a>\n" + "</li>\n" +
    "<li><a href=\"#\" id=\"b1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table2<br/>\n" +
    "<h5>Rs."+tables[1].totalAmount+" |<span> Total items:"+tables[1].numberOfItems+"</span></h5></a>\n" + "</li>\n" +
    "<li><a href=\"#\"  id=\"c1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">Table3<br/>\n" +
    "<h5>Rs."+tables[2].totalAmount+" |<span > Total items:"+tables[2].numberOfItems+"</span></h5></a>\n" + "</li>";
function searchDish() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
function searchTable() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL1");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
var modal1 = document.getElementById('table1');
var modal2 = document.getElementById('table2');
var modal3 = document.getElementById('table3');
var btn1 = document.getElementById("a1");
var btn2 = document.getElementById("b1");
var btn3 = document.getElementById("c1");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
btn1.onclick = function() {
    modal1.style.display = "block";
};
btn2.onclick = function() {
    modal2.style.display = "block";
};
btn3.onclick = function() {
    modal3.style.display = "block";
};
span1.onclick = function() {
    modal1.style.display = "none";
};
span2.onclick = function() {
    modal2.style.display = "none";
};
span3.onclick = function() {
    modal3.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};


