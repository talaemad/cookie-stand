'use strict';
var arrHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    numCustPerHour: null,
    amountsCookiesHour: null,
    amountHourly: null,
    getNumbCustHour: function () {
        var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        var numCus = [num];
        var amountCookiesPurchased = [Math.floor(num * this.avgCookieSale)];
        var sumAmountHourly =amountCookiesPurchased[0];
        for (var i = 1; i < arrHour.length; i++) {
            num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            numCus[i] = [num];
            amountCookiesPurchased[i] = [Math.floor(num * this.avgCookieSale)];
            sumAmountHourly = (sumAmountHourly + Number(amountCookiesPurchased[i]));

        }
        this.numCustPerHour = numCus;
        this.amountsCookiesHour = amountCookiesPurchased;
        this.amountHourly =sumAmountHourly;
    }
}
Seattle.getNumbCustHour();
var parent1 = document.getElementById("Seattle");
var header1 = document.createElement('h1');
header1.textContent = 'Seattle';
parent1.appendChild(header1);
var list1 = document.createElement('ul');
parent1.appendChild(list1);
for (var i = 0; i <= arrHour.length; i++) {
    var listitem = document.createElement('li');
    listitem.textContent = (arrHour[i] + ': ' + Seattle.amountsCookiesHour[i]+' cookies');
    list1.appendChild(listitem);
}
listitem.textContent = ('Total: ' + Seattle.amountHourly+' cookies');
list1.appendChild(listitem);

var Tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    numCustPerHour: null,
    amountsCookiesHour: null,
    amountHourly: null,
    getNumbCustHour: function () {
        var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        var numCus = [num];
        var amountCookiesPurchased =[Math.floor(num * this.avgCookieSale)];
        var sumAmountHourly = Number(amountCookiesPurchased[0]);
        for (var i = 1; i < arrHour.length; i++) {
            num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            numCus[i] = [num];
            amountCookiesPurchased[i] =[Math.floor(num * this.avgCookieSale)];;
            sumAmountHourly = (sumAmountHourly + Number(amountCookiesPurchased[i]));
        }
        this.numCustPerHour = numCus;
        this.amountsCookiesHour = amountCookiesPurchased;
        this.amountHourly = Math.floor(sumAmountHourly);
    }
}
Tokyo.getNumbCustHour();
var parent2 = document.getElementById("Tokyo");
var header2 = document.createElement('h1');
header2.textContent = 'Tokyo';
parent2.appendChild(header2);
var list2 = document.createElement('ul');
parent2.appendChild(list2);
for (var i = 0; i <= arrHour.length; i++) {
    var listitem = document.createElement('li');
    listitem.textContent = (arrHour[i] + ': ' + Tokyo.amountsCookiesHour[i]+' cookies');
    list2.appendChild(listitem);
}
listitem.textContent = ('Total: ' + Tokyo.amountHourly+' cookies');
list2.appendChild(listitem);

var Dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    numCustPerHour: null,
    amountsCookiesHour: null,
    amountHourly: null,
    getNumbCustHour: function () {
        var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        var numCus = [num];
        var amountCookiesPurchased = [Math.floor(num * this.avgCookieSale)];
        var sumAmountHourly = Number(amountCookiesPurchased[0]);
        for (var i = 1; i < arrHour.length; i++) {
            num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            numCus[i] = [num];
            amountCookiesPurchased[i] = [Math.floor(num * this.avgCookieSale)];
            sumAmountHourly = (sumAmountHourly + Number(amountCookiesPurchased[i]));

        }
        this.numCustPerHour = numCus;
        this.amountsCookiesHour = amountCookiesPurchased;
        this.amountHourly = Math.floor(sumAmountHourly);
    }
}
Dubai.getNumbCustHour();
var parent2 = document.getElementById("Dubai");
var header2 = document.createElement('h1');
header2.textContent = 'Dubai';
parent2.appendChild(header2);
var list2 = document.createElement('ul');
parent2.appendChild(list2);
for (var i = 0; i <= arrHour.length; i++) {
    var listitem = document.createElement('li');
    listitem.textContent = (arrHour[i] + ': ' + Dubai.amountsCookiesHour[i]+' cookies');
    list2.appendChild(listitem);
}
listitem.textContent = ('Total: ' + Dubai.amountHourly+' cookies');
list2.appendChild(listitem);

var Paris = {
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    numCustPerHour: null,
    amountsCookiesHour: null,
    amountHourly: null,
    getNumbCustHour: function () {
        var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        var numCus = [num];
        var amountCookiesPurchased = [Math.floor(num * this.avgCookieSale)];
        var sumAmountHourly = Number(amountCookiesPurchased[0]);
        for (var i = 1; i < arrHour.length; i++) {
            num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            numCus[i] = [num];
            amountCookiesPurchased[i] = [Math.floor(num * this.avgCookieSale)];
            sumAmountHourly = (sumAmountHourly + Number(amountCookiesPurchased[i]));

        }
        this.numCustPerHour = numCus;
        this.amountsCookiesHour = amountCookiesPurchased;
        this.amountHourly = Math.floor(sumAmountHourly);
    }
}
Paris.getNumbCustHour();
var parent2 = document.getElementById("Paris");
var header2 = document.createElement('h1');
header2.textContent = 'Paris';
parent2.appendChild(header2);
var list2 = document.createElement('ul');
parent2.appendChild(list2);
for (var i = 0; i <= arrHour.length; i++) {
    var listitem = document.createElement('li');
    listitem.textContent = (arrHour[i] + ': ' + Paris.amountsCookiesHour[i]+' cookies');
    list2.appendChild(listitem);
}
listitem.textContent = ('Total: ' + Paris.amountHourly+' cookies');
list2.appendChild(listitem);

var Lima = {
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    numCustPerHour: null,
    amountsCookiesHour: null,
    amountHourly: null,
    getNumbCustHour: function () {
        var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        var numCus = [num];
        var amountCookiesPurchased = [Math.floor(num * this.avgCookieSale)];
        var sumAmountHourly = Number(amountCookiesPurchased[0]);
        for (var i = 1; i < arrHour.length; i++) {
            num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            numCus[i] = [num];
            amountCookiesPurchased[i] = [Math.floor(num * this.avgCookieSale)];
            sumAmountHourly = (sumAmountHourly + Number(amountCookiesPurchased[i]));

        }
        this.numCustPerHour = numCus;
        this.amountsCookiesHour = amountCookiesPurchased;
        this.amountHourly = Math.floor(sumAmountHourly);
    }
}
Lima.getNumbCustHour();
var parent2 = document.getElementById("Lima");
var header2 = document.createElement('h1');
header2.textContent = 'Lima';
parent2.appendChild(header2);
var list2 = document.createElement('ul');
parent2.appendChild(list2);
for (var i = 0; i <= arrHour.length; i++) {
    var listitem = document.createElement('li');
    listitem.textContent = (arrHour[i] + ': ' + Lima.amountsCookiesHour[i]+' cookies');
    list2.appendChild(listitem);
}
listitem.textContent = ('Total: ' + Lima.amountHourly+' cookies');
list2.appendChild(listitem);

/*
var parent = document.getElementById("nav");
var logo=document.createElement('img');
logo.setAttribute('src','img/salmon.png');
parent.appendChild(logo);
*/



