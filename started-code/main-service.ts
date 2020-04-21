interface StringManipulationService {
    print(word: string): void;
    printWithSpace(sentence: string): void;
    findVowel(str: string): void;
}

interface NumberManipulationService {
    findPrime(num: number) : void;
    findMagic(num: number) : void;
}

export { StringManipulationService ,NumberManipulationService};  
