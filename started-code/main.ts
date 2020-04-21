import{StringManipulationService,NumberManipulationService} from "./main-service";
class StringManipulation implements StringManipulationService{
    print(word: string): void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word[0]);
        console.log(word.concat("How can I help you"));
        console.log(word.slice(9, 13));
        console.log(word.length);
    }
    printWithSpace(sentence: string): void{
        console.log(sentence.split("").join(" "));
    }
    findVowel(str: string): void{
        var i: number;
        let count = 0;
        let st:string = str.toLowerCase();
       
        for (i = 0; i < st.length; i++) {
            if (st[i] == 'a' || st[i] == 'e' || st[i] == 'i' || st[i] == 'o' || st[i] == 'u')
                count++;
        }
        console.log(count);
    }
}

class NumberManipulation implements NumberManipulationService{
    findPrime(num: number) : void{
        let initial: number = 2;
        let flag: boolean = true;
        for (let i: number = 2; i < num / 2; i++) {
              if (num % i == 0){ flag = false; break;}
        }
        if (flag == true) console.log("Prime");
        else console.log("Not a Prime");
    }

    findMagic(num: number) : void{
        let sum:number = 0;
        do {
            sum = 0;
            while (num > 0) {
              sum += num % 10;
              num = Math.floor(num / 10);
            }
            num = sum;
            console.log(sum);
        } while (sum > 9);
        if (sum == 1) console.log("Magic number");
        else console.log("Not a Magic number");
    }
}

let strMan:StringManipulationService = new StringManipulation();
strMan.print("Hey I am Likhi");
strMan.printWithSpace("Hey I am Likhi");
strMan.findVowel("Hey I Am Likhi");

let numMan:NumberManipulationService = new NumberManipulation();
numMan.findPrime(3);
numMan.findMagic(199);
