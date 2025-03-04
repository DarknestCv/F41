const btnTag = document.getElementsByTagName("button")[0]

let clicks = 0

btnTag.onclick = () =>{
    btnTag.textContent = String(clicks)
    clicks += 1;
}

// ! as HTMLButtonElement


let b = clicks as unknown as string // так можна змінити тип обовязково через (unknown)

let a = (btnTag as HTMLButtonElement).value + 10 // так можна теж якщо ми хочемо щось зробити

// дженері це можливість передавати тип як параметр
// <HtmlButtonElement> - вказуємо спереду (це тип) - і тоді нам поверне саме його

const d = <HtmlButtonElemnt>document.getElementsByTagName('doojfjs')


// ! <T> - тип який ми очікуємо
type Human<Age> = {
    name: string;
    age: Age;
}


let human1: Human<number> ={
    name: 'Jo';
    age: 1243253250,
}

let human2: Human<string> ={
    name: 'Jo';
    age: "124325325"
}


// ///////////////////////////////////////////////
// ! навіть у функціях можна вказувати що за тип буде і працювати з ним

const f = <T>(arr: T[]): number[] => arr.map(Number)

f<boolean>([true,false,false])
f(['true', 'false', 'true'])



class A{
    public a: number = 0;
    private b: number = 0;
    protected c: number = 0 // поле яке доступне в класі і класах які його спадковують

    inc(){
        this.a += 1
        this.b += 1
        this.c += 1
    }
}



class B extends A{
    inc2(){
        this.a += 1;//! це зможу
        this.b  += 1; //! це не зможу тому що поле б приватне
        this.c += 1; //! це зможу
    }
}



type Humans = {
    name: string;
    age: number;
    id: string;
    callsign: string;
}

type Pet = Humans &{ // це розширення типів (там добавляє те шо було в тому типі і також можна добавляти щзе те що треба)
    age: number;
}

let a: Pet


// ! Утилітні типи

type Enployee = Omit<Humans, "callsign" | "age"> // першим параметром те з кого беремо а другим те що хлочемо прибрати

// ! приклад дурки

type Employee = Omit<Pick<Humans, "name" | "calslsign">, "callsign" | "age">

