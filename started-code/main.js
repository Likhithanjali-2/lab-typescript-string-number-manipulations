"use strict";
exports.__esModule = true;
var StringManipulation = /** @class */ (function () {
    function StringManipulation() {
    }
    StringManipulation.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word[0]);
        console.log(word.concat("How can I help you"));
        console.log(word.slice(9, 13));
        console.log(word.length);
    };
    StringManipulation.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split("").join(" "));
    };
    StringManipulation.prototype.findVowel = function (str) {
        var i;
        var count = 0;
        var st = str.toLowerCase();
        for (i = 0; i < st.length; i++) {
            if (st[i] == 'a' || st[i] == 'e' || st[i] == 'i' || st[i] == 'o' || st[i] == 'u')
                count++;
        }
        console.log(count);
    };
    return StringManipulation;
}());
var NumberManipulation = /** @class */ (function () {
    function NumberManipulation() {
    }
    NumberManipulation.prototype.findPrime = function (num) {
        var initial = 2;
        var flag = true;
        for (var i = 2; i < num / 2; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag == true)
            console.log("Prime");
        else
            console.log("Not a Prime");
    };
    NumberManipulation.prototype.findMagic = function (num) {
        var sum = 0;
        do {
            sum = 0;
            while (num > 0) {
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
            console.log(sum);
        } while (sum > 9);
        if (sum == 1)
            console.log("Magic number");
        else
            console.log("Not a Magic number");
    };
    return NumberManipulation;
}());
var numMan = new NumberManipulation();
numMan.findPrime(3);
numMan.findMagic(199);
var strMan = new StringManipulation();
strMan.print("Hey I am Likhi");
strMan.printWithSpace("Hey I am Likhi");
strMan.findVowel("Hey I Am Likhi");
