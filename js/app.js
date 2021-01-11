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

Location.prototype.getCalculate = function (minCust, maxCust, avgCookie) {
    console.log(this.locationName);
    this.numCustPerHour = calculate(maxCust, minCust, avgCookie)[0];
    this.cookiesPerHour = calculate(maxCust, minCust, avgCookie)[1];
    this.totalCookies = calculate(maxCust, minCust, avgCookie)[2];
    console.log(this.numCustPerHour);
    console.log(this.cookiesPerHour);
    console.log(this.totalCookies);
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
    return salesRow;

};
function calculate(minCust, maxCust, avgCookie) {
    var num = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    var numCus = [num];
    var cookiesPerHour = [Math.floor(num * avgCookie)];
    var totalCookies = Number(cookiesPerHour[0]);
    for (var i = 1; i < arrHour.length; i++) {
        num = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
        numCus[i] = num;
        cookiesPerHour[i] = Math.floor(num * avgCookie);
        totalCookies = (totalCookies + Number(cookiesPerHour[i]));
    }
    return [numCus, cookiesPerHour, totalCookies];
}

var Seattle = new Location('Seattle', 23, 65, 6.3);
Seattle.getCalculate(23, 65, 6.3);
var Tokyo = new Location('Tokyo', 3, 24, 1.2);
Tokyo.getCalculate(3, 24, 1.2);
var Dubai = new Location('Dubai', 11, 38, 3.7);
Dubai.getCalculate(11, 38, 3.7);
var Paris = new Location('Paris', 20, 38, 2.3);
Paris.getCalculate(20, 38, 2.3);
var Lima = new Location('Lima', 2, 16, 4.6);
Lima.getCalculate(2, 16, 4.6);
var arrLocation = [Seattle, Tokyo, Dubai, Paris, Lima];

var parent = document.getElementById("table");
var salesTable = document.createElement('table');
parent.appendChild(salesTable);
var salesHead = tableHead(arrHour, 'th');
salesTable.appendChild(salesHead);
salesTable.appendChild(Seattle.render());
salesTable.appendChild(Tokyo.render());
salesTable.appendChild(Dubai.render());
salesTable.appendChild(Paris.render());
salesTable.appendChild(Lima.render());
var salesFooter = tableFoot();
salesTable.appendChild(salesFooter);
function tableHead(array, element) {
    var salesRow = document.createElement('tr');
    var cell = document.createElement(element);
    cell.textContent = '';
    salesRow.appendChild(cell);
    for (var i = 0; i < array.length; i++) {
        var cell = document.createElement(element);
        cell.textContent = array[i];
        salesRow.appendChild(cell);
    }
    var cell = document.createElement(element);
    cell.textContent = 'Daily';
    salesRow.appendChild(cell);

    return salesRow;
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
            if(i==arrHour.length){
                sum=sum+arrLocation[j].totalCookies;
            }
            else{
                sum = sum + arrLocation[j].cookiesPerHour[i];
            }
        }
        cell.textContent = sum;
        salesRow.appendChild(cell);
    }
    return salesRow;
}