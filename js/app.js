'use strict';
var arrHour = ['6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm '];

function Location(locationName, minCust, maxCust, avgCookie) {
    this.locationName = locationName;
    this.maxCust = maxCust;
    this.minCust = minCust;
    this.avgCookie = avgCookie;
    this.custPerHour = [];
    this.cookiesPerHour = [];
    this.totalCookies = 0;
}

Location.prototype.getCalculate = function (minCust, maxCust) {
    this.numCustPerHour = calculatePerHour(minCust, maxCust);
};
Location.prototype.getCalculateCookies = function (custPerHour, avgCookie) {
    this.cookiesPerHour = calculateCookie(custPerHour, avgCookie)[0];
    this.totalCookies = calculateCookie(custPerHour, avgCookie)[1];
};
Location.prototype.render = function () {
    var salesRow = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = this.locationName;
    salesRow.appendChild(cell);
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
        var cell = document.createElement('td');
        cell.textContent = this.cookiesPerHour[i];
        salesRow.appendChild(cell);
    }
    cell = document.createElement('td');
    cell.textContent = this.totalCookies;
    salesRow.appendChild(cell);
    salesTable.appendChild(salesRow);

};
function calculatePerHour(minCust, maxCust) {
    var num = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    var numCus = [num];
    for (var i = 1; i < arrHour.length; i++) {
        num = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
        numCus[i] = num;
    }
    return numCus;
}
function calculateCookie(custPerHour, avgCookie) {
    var cookiesPerHour = [Math.floor(custPerHour[0] * avgCookie)];
    var totalCookies = Number(cookiesPerHour[0]);
    for (var i = 1; i < arrHour.length; i++) {
        cookiesPerHour[i] = Math.floor(custPerHour[i] * avgCookie);
        totalCookies = (totalCookies + Number(cookiesPerHour[i]));
    }
    return [cookiesPerHour, totalCookies];
}
/// Declare Location
var Seattle = new Location('Seattle', 23, 65, 6.3);
Seattle.getCalculate(23, 65);
Seattle.getCalculateCookies(Seattle.numCustPerHour, 6.3);
var Tokyo = new Location('Tokyo', 3, 24, 1.2);
Tokyo.getCalculate(3, 24);
Tokyo.getCalculateCookies(Tokyo.numCustPerHour, 1.2);
var Dubai = new Location('Dubai', 11, 38, 3.7);
Dubai.getCalculate(11, 38);
Dubai.getCalculateCookies(Dubai.numCustPerHour, 3.7);
var Paris = new Location('Paris', 20, 38, 2.3);
Paris.getCalculate(20, 38);
Paris.getCalculateCookies(Paris.numCustPerHour, 2.3)
var Lima = new Location('Lima', 2, 16, 4.6);
Lima.getCalculate(2, 16);
Lima.getCalculateCookies(Lima.numCustPerHour, 4.6);

// Declare Array of location
var arrLocation = [Seattle, Tokyo, Dubai, Paris, Lima];

//The Table
var salesTable = document.createElement('table');
var parent = document.getElementById("table");
parent.appendChild(salesTable);

console.log(salesTable);
tableHead();
doTable();
function doTable(){
    for(var i =0;i<arrLocation.length;i++){
        console.log("aaa");
        arrLocation[i].render();
    }
}

tableFoot();


function tableHead() {
    var salesRow = document.createElement('tr');
    var cell = document.createElement('th');
    cell.textContent = '';
    salesRow.appendChild(cell);
    for (var i = 0; i < arrHour.length; i++) {
        cell = document.createElement('th');
        cell.textContent = arrHour[i];
        salesRow.appendChild(cell);
    }
    var cell = document.createElement('th');
    cell.textContent = 'Daily';
    salesRow.appendChild(cell);
    salesTable.appendChild(salesRow);
}
function tableFoot() {
    var salesRow = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = 'Totals';
    salesRow.appendChild(cell);
    var sum;
    for (var i = 0; i <= arrHour.length; i++) {
        var cell = document.createElement('td');
        sum = 0;
        for (var j = 0; j < arrLocation.length; j++) {
            if (i == arrHour.length) {
                sum = sum + arrLocation[j].totalCookies;
            }
            else {
                sum = sum + arrLocation[j].cookiesPerHour[i];
            }
        }
        cell.textContent = sum;
        salesRow.appendChild(cell);
    }
    salesTable.appendChild(salesRow);
}

var form = document.getElementById('addLocation');
form.addEventListener('submit', getValue);
function getValue(event) {
    event.preventDefault();
    var name = event.target.lname.value;
    var minCust = event.target.minCust.value;
    var maxCust = event.target.maxCust.value;
    var avgCookieSale = event.target.avgCookieSale.value;

    if (maxCust > minCust) {
        var avgCookieSale = event.target.avgCookieSale.value;
        var name = new Location(name, minCust, maxCust, avgCookieSale);
        name.getCalculate(minCust, maxCust);
        name.getCalculateCookies(name.numCustPerHour, avgCookieSale);
        arrLocation.push(name);

        salesTable.innerHTML='';
        event.target.lname.value='';
        event.target.minCust.value='';
        event.target.maxCust.value='';
        event.target.avgCookieSale.value='';

        tableHead();
        doTable();
        tableFoot();
       
    }
    else {
        alert('the maxNumber must be larger than min');
    }
}
