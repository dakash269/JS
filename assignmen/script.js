var menuData = [{
    name:{key:'Crustly Garlic',value:1},
    type:'main-course',
    price:105
}, {
    name:{key:'French Fries',value:1},
    type:'desserts',
    price:195
}, {
    name:{key:'Home Country Fries with Herbs and Chilli Flakes',value:1},
    type:'appetizers',
    price:175
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
        var flag=0;
        for(j=0;j<tables[i].menuData.length;j++) {
            if (tables[i].menuData[j].name.key === 'Crustly Garlic') {
                flag++;
                var x=j;
            }
        }
        if(flag===0) tables[i].menuData.push({name: {key: 'Crustly Garlic', value: 1}, type: 'main-course', price: 105});
        else {
            tables[i].menuData[x].name.value += 1;
            if(i===0)document.getElementsByClassName("inp1")[x].value=tables[i].menuData[x].name.value;
            if(i===1)document.getElementsByClassName("inp2")[x].value=tables[i].menuData[x].name.value;
            if(i===2)document.getElementsByClassName("inp3")[x].value=tables[i].menuData[x].name.value;
        }
        tables[i].numberOfItems+=1;
        tables[i].totalAmount+=105;
        if (ev.target.id==='a1' && flag===0) setRow1(tables[0].menuData.length-1);
        if (ev.target.id==='b1' && flag===0) setRow2(tables[1].menuData.length-1);
        if (ev.target.id==='c1' && flag===0) setRow3(tables[2].menuData.length-1);
    }
    if(document.getElementById(data)===b) {
        var p=-1;
        if (ev.target.id==='a1') p=0;
        if (ev.target.id==='b1') p=1;
        if (ev.target.id==='c1') p=2;
         flag=0;
        for(j=0;j<tables[p].menuData.length;j++) {
            if (tables[p].menuData[j].name.key === 'French Fries') {
                flag++;
                x=j;
            }
        }
        if(flag===0) tables[p].menuData.push({name:{key:'French Fries',value:1}, type:'desserts', price:195});
        else {
            tables[p].menuData[x].name.value+=1;
            if(p===0) document.getElementsByClassName("inp1")[x].value=tables[p].menuData[x].name.value;
            if(p===1) document.getElementsByClassName("inp2")[x].value=tables[p].menuData[x].name.value;
            if(p===2) document.getElementsByClassName("inp3")[x].value=tables[p].menuData[x].name.value;
        }
        tables[p].numberOfItems+=1;
        tables[p].totalAmount+=195;
        if (ev.target.id==='a1' && flag===0) setRow1(tables[0].menuData.length-1);
        if (ev.target.id==='b1' && flag===0) setRow2(tables[1].menuData.length-1);
        if (ev.target.id==='c1' && flag===0) setRow3(tables[2].menuData.length-1);
    }
    if(document.getElementById(data)===c) {
        var k=-1;
        if (ev.target.id==='a1') k=0;
        if (ev.target.id==='b1') k=1;
        if (ev.target.id==='c1') k=2;
         flag=0;
        for(j=0;j<tables[k].menuData.length;j++) {
            if (tables[k].menuData[j].name.key === 'Home Country Fries with Herbs and Chilli Flakes' ) {
                flag++;
                x=j;
            }
        }
        if(flag===0) tables[k].menuData.push({name:{key:'Home Country Fries with Herbs and Chilli Flakes',value:1}, type:'appetizers', price:175});
        else {
            tables[k].menuData[x].name.value+=1;
            if(k===0) document.getElementsByClassName("inp1")[x].value=tables[k].menuData[x].name.value;
            if(k===1) document.getElementsByClassName("inp2")[x].value=tables[k].menuData[x].name.value;
            if(k===2) document.getElementsByClassName("inp3")[x].value=tables[k].menuData[x].name.value;
        }
        tables[k].numberOfItems+=1;
        tables[k].totalAmount+=175;
        if (ev.target.id==='a1' && flag===0) setRow1(tables[0].menuData.length-1);
        if (ev.target.id==='b1' && flag===0) setRow2(tables[1].menuData.length-1);
        if (ev.target.id==='c1' && flag===0) setRow3(tables[2].menuData.length-1);
    }
    if(document.getElementById(data)===d) {
        var l=-1;
        if (ev.target.id==='a1') l=0;
        if (ev.target.id==='b1') l=1;
        if (ev.target.id==='c1') l=2;
         flag=0;
        for(j=0;j<tables[l].menuData.length;j++) {
            if (tables[l].menuData[j].name.key === 'French Fries with Cheese and Jalapenos' ) {
                flag++;
                x=j;
            }
        }
        if(flag===0) tables[l].menuData.push({name: {key:'French Fries with Cheese and Jalapenos',value:1}, type:'beverages', price:135});
        else {
            tables[l].menuData[x].name.value+=1;
            if(l===0) document.getElementsByClassName("inp1")[x].value=tables[l].menuData[x].name.value;
            if(l===1) document.getElementsByClassName("inp2")[x].value=tables[l].menuData[x].name.value;
            if(l===2) document.getElementsByClassName("inp3")[x].value=tables[l].menuData[x].name.value;
        }
        tables[l].numberOfItems+=1;
        tables[l].totalAmount+=135;
        if (ev.target.id==='a1' && flag===0) setRow1(tables[0].menuData.length-1);
        if (ev.target.id==='b1' && flag===0) setRow2(tables[1].menuData.length-1);
        if (ev.target.id==='c1' && flag===0) setRow3(tables[2].menuData.length-1);
    }
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
// var row1 =document.getElementById("mytable1").createTHead().insertRow(0);
//     row1.insertCell(0).innerHTML='<b>S.N.<b>';
//     row1.insertCell(1).innerHTML='<b>Item<b>';
//     row1.insertCell(2).innerHTML='<b>Price<b>';
//     row1.insertCell(3).innerHTML='<b>Quantity<b>';
// var row2 =document.getElementById("mytable2").createTHead().insertRow(0);
//     row2.insertCell(0).innerHTML='<b>S.N.<b>';
//     row2.insertCell(1).innerHTML='<b>Item<b>';
//     row2.insertCell(2).innerHTML='<b>Price<b>';
//     row2.insertCell(3).innerHTML='<b>Quantity<b>';
// var row3 =document.getElementById("mytable3").createTHead().insertRow(0);
//     row3.insertCell(0).innerHTML='<b>S.N.<b>';
//     row3.insertCell(1).innerHTML='<b>Item<b>';
//     row3.insertCell(2).innerHTML='<b>Price<b>';
//     row3.insertCell(3).innerHTML='<b>Quantity<b>';
function setRow1 (i) {
            var row = document.getElementById("mytable1").createTHead().insertRow(i);
            row.insertCell(0).innerHTML = i+1;
            row.insertCell(1).innerHTML = tables[0].menuData[i].name.key;
            row.insertCell(2).innerHTML = tables[0].menuData[i].price;
            row.insertCell(3).innerHTML = "<input type=\"number\" onkeypress=\"return (event.charCode === 8 || event.charCode === 0 || event.charCode === 13) ? null : event.charCode >= 48 && event.charCode <= 57\" class=\"inp1\" style='width: 50px' value='"+tables[0].menuData[i].name.value+"' onchange=\"update(0,"+i+",this.value)\"/>";
            row.insertCell(4).innerHTML = "<button class=\"fa fa-trash fa-lg\" onclick=\"deleteData(0,"+ i +")\"></button>"
}
function setRow2 (i) {
    var row = document.getElementById("mytable2").createTHead().insertRow(i);
    row.insertCell(0).innerHTML = i+1;
    row.insertCell(1).innerHTML = tables[1].menuData[i].name.key;
    row.insertCell(2).innerHTML = tables[1].menuData[i].price;
    row.insertCell(3).innerHTML = "<input type=\"number\" onkeypress=\"return (event.charCode === 8 || event.charCode === 0 || event.charCode === 13) ? null : event.charCode >= 48 && event.charCode <= 57\" class=\"inp2\" style='width: 50px' value='"+tables[1].menuData[i].name.value+"' onchange=\"update(1,"+i+",this.value)\"/>";
    row.insertCell(4).innerHTML = "  <button class=\"fa fa-trash fa-lg\" onclick=\"deleteData(1,"+ i +")\"></button>"
}
function setRow3 (i) {
    var row = document.getElementById("mytable3").createTHead().insertRow(i);
    row.insertCell(0).innerHTML = i+1;
    row.insertCell(1).innerHTML = tables[2].menuData[i].name.key;
    row.insertCell(2).innerHTML = tables[2].menuData[i].price;
    row.insertCell(3).innerHTML = "<input type=\"number\" onkeypress=\"return (event.charCode === 8 || event.charCode === 0 || event.charCode === 13) ? null : event.charCode >= 48 && event.charCode <= 57\" class=\"inp3\" style='width: 50px' value='"+tables[2].menuData[i].name.value+"' onchange=\"update(2,"+i+",this.value)\"/>";
    row.insertCell(4).innerHTML = "  <button class=\"fa fa-trash fa-lg\" onclick=\"deleteData(2,"+ i +")\"></button>"
}
function update(index,ind,value) {
    tables[index].menuData[ind].name.value=value;
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
    var rem=tables[index].menuData.splice($index,1);
    if(index===0) {
        for(var j=0;j<tables[0].menuData.length;j++){
            setRow1(j);
        }
        var i=tables[0].menuData.length;
        for(var k=0;k<i+1;k++){
            document.getElementById("mytable1").tHead.children[i].remove();
        }
    }
    if(index===1) {
        for(j=0;j<tables[1].menuData.length;j++){
            setRow2(j);
        }
         i=tables[1].menuData.length;
        for(k=0;k<i+1;k++){
            document.getElementById("mytable2").tHead.children[i].remove();
        }
    }
    if(index===2) {
        for( j=0;j<tables[2].menuData.length;j++){
            setRow3(j);
        }
         i=tables[2].menuData.length;
        for( k=0;k<i+1;k++){
            document.getElementById("mytable3").tHead.children[i].remove();
        }
    }
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


