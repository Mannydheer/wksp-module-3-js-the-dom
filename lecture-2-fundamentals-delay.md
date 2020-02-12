# 2.3.2 - JS Fundamentals / Timing and delay

//GAMING USEFULL.
---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
// takes a function as a parameter and takes an amount as time.

setTimeout(function() {
    console.log('Hello');
}3000 //ms)

//after 3 seconds, it will print hello
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example

//will repeat.

//need to give it a variable. 
const myTimer = setInterval(function(){
    console.log('hello')
}, 1000);
//repeating it every 1000ms and it will never stop unless you tell it to. At the right time, you will call --> 

//
clearInterval(myTimer);
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example

```

---


