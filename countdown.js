export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }

    get _actualDate() {
        return new Date();
    }

    get futureDate(){
        return new Date(this.futureDate);
    }

    get diference(){
        return this.futureDate - this.actualDate;
    }

    get days (){
        return Math.floor(this.diference / (24 * 60 * 60 * 1000)); // hours, minutes, seconds, miliseconds
    }
   
    get hours(){
        return Math.floor(this.diference / (60 * 60 * 1000));
    }
    get minutes(){
        return Math.floor(this.diference / (60 * 1000));
    }
    get seconds(){
        return Math.floor(this.diference / (1000));
    }

    // get total(){

    // }

}