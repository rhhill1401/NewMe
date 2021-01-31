'use strict';
const priceConvertor = function (strikePrice) {
  return strikePrice * 100;
};

const premiumComparison = [];
const total = [];
const stocksSymbl = [];
const calculator = document;

document.querySelector('.btn1').addEventListener('click', function () {
  let symbol = document.querySelector('.symbol').value;
  let stockPrice = document.querySelector('.price').value;
  let premium = document.querySelector('.premium').value;
  let strike = document.querySelector('.strike').value;
  let expiration = document.querySelector('.expiration').value;

  const stockConversion = priceConvertor(stockPrice);

  const premConversion = priceConvertor(premium);

  const strikeConversion = priceConvertor(strike);

  const gain = strikeConversion - stockConversion;
  const profit = premConversion + gain;
  premiumComparison.push(profit);
  stocksSymbl.push(symbol);
  let totalAll = total[premiumComparison.length];

  // document.querySelector('h3').classList.add('gainAfterPush');

  const calculator = (document.querySelector(
    '.stock1'
  ).textContent = `${symbol} has a profit of $${Math.round(
    profit
  )} dollars  ${expiration}!💰💰💰`);
  // result.push(result0);
});

document.querySelector('.btn2').addEventListener('click', function () {
  let symbol = document.querySelector('.symbol1').value;
  let stockPrice = document.querySelector('.price1').value;
  let premium = document.querySelector('.premium1').value;
  let strike = document.querySelector('.strike1').value;
  let expiration = document.querySelector('.expiration1').value;

  const stockConversion = priceConvertor(stockPrice);

  const premConversion = priceConvertor(premium);

  const strikeConversion = priceConvertor(strike);

  const gain = strikeConversion - stockConversion;
  const profit = premConversion + gain;
  premiumComparison.push(profit);

  let totalAll = total[premiumComparison.length];

  // document.querySelector('h3').classList.add('gainAfterPush');

  document.querySelector(
    '.stock2'
  ).textContent = `${symbol} has a profit of $${Math.round(
    profit
  )} dollars  ${expiration}!💰💰💰`;

  stocksSymbl.push(symbol);
});

const calculator3 = document
  .querySelector('.btn3')
  .addEventListener('click', function () {
    let symbol = document.querySelector('.symbol2').value;
    let stockPrice = document.querySelector('.price2').value;
    let premium = document.querySelector('.premium2').value;
    let strike = document.querySelector('.strike2').value;
    let expiration = document.querySelector('.expiration2').value;

    const stockConversion = priceConvertor(stockPrice);

    const premConversion = priceConvertor(premium);

    const strikeConversion = priceConvertor(strike);

    const gain = strikeConversion - stockConversion;
    const profit = premConversion + gain;
    premiumComparison.push(profit);
    stocksSymbl.push(symbol);
    let totalAll = total[premiumComparison.length];

    // document.querySelector('h3').classList.add('gainAfterPush');

    document.querySelector(
      '.stock3'
    ).textContent = `${symbol} has a profit of $${Math.round(
      profit
    )} dollars  ${expiration}!💰💰💰`;
  });

const calculateTotal = document
  .querySelector('.btn4')
  .addEventListener('click', function () {
    // document.querySelector('h3').classList.add('gainAfterPush');

    document.querySelector('.final').textContent = stocksSymbl[2];
    document.querySelector('.final1').textContent = stocksSymbl[1];
    document.querySelector('.final2').textContent = stocksSymbl[0];
    var test = 0;

    for (var i = 0; i < premiumComparison.length; i++) {
      test += premiumComparison[i];
    }
    document.querySelector(
      '.total'
    ).textContent = ` = A total of $${test} dollars`;
  });
