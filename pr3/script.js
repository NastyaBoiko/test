Math.getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Задача 1
// Временной масштаб симуляции: 1200мс:1ч.


const stops = [
    {
        name: 'Конная',
        time: 0
    },
    {
        name: 'Понтонная',
        time: 2
    },
    {
        name: '25 километр',
        time: 2
    },
    {
        name: '70 километр',
        time: 3
    },
    {
        name: '170 километр',
        time: 4
    }
];

const stops2 = [
    {
        name: 'Лавинная',
        time: 0
    },
    {
        name: 'Лавандовая',
        time: 2
    },
    {
        name: 'Креативная',
        time: 2
    },
    {
        name: 'Хижина 25',
        time: 3
    },
    {
        name: 'Наличная',
        time: 4
    },
    {
        name: 'Боровая',
        time: 4
    }
];

function Train(name, stops, date) {
    this.name = name;
    this.stops = stops
    this.date = new Date(2023, 0, 17, 15);
    this.schedule = new Date(2023, 0, 17, 15);
    this.i = 0;
    this.charecter;

    this.go = () => {

        this.charecter = (this.i == 0) ? 0 : Math.getRandom(-15, 15);

        this.changeTime();

        console.log(`${this.name}: ${this.stops[this.i].name}, время: ${this.date.toLocaleTimeString()}, ожидаемое время: ${this.schedule.toLocaleTimeString()}, характер: ${this.defineCharecter(this.schedule, this.date)}`);

        this.i++;
        if (this.i < this.stops.length) {
            setTimeout(this.go, this.stops[this.i].time * 1200 + this.charecter * 1200 / 60)
        }
    }

    this.curTimeMinsSec = () => {
        return `${(new Date).getMinutes()}:${(new Date).getSeconds()}:${(new Date).getMilliseconds()}`;
    }

    this.changeTime = () => {
        this.schedule.setHours(this.schedule.getHours() + this.stops[this.i].time);
        this.date.setHours(this.date.getHours() + this.stops[this.i].time);
        this.date.setMinutes(this.date.getMinutes() + this.charecter);
    }


    this.defineCharecter = (dataSc, dataCur) => {
        let char = dataSc - dataCur;
        let itog;
        let diff = Math.abs(char / (1000 * 60));
        if (char > 0) {
            itog = `пришел заранее на ${diff} мин.`
        } else if (char == 0) {
            itog = "по расписанию"
        } else {
            itog = `с опозданием на ${diff} мин.`
        }
        return itog;
    }

    this.run = () => {
        setTimeout(this.go, this.stops[this.i].time * 1200 + this.charecter * 1200 / 60 )
    }

}

let tinny = new Train("Поезд 1", stops, 2023, 0, 17, 15);
tinny.run()
let tinny2 = new Train("Поезд 2", stops2, 2023, 0, 17, 5);
tinny2.run()



//Задача 2
// Временной масштаб симуляции: 320мс:1ч.

function Turtle(name) {
    this.name = name;
    this.distance = 40;
    this.velocity = 2;
    this.timeLim = 4;
    this.extraTime = 0
    this.sleep = Math.getRandom(3, 5);
    this.timeAll = 0;
    this.res = ``

    this.changeSleep = () => {
        this.sleep = Math.getRandom(3, 5);

        if (this.sleep > 4) {
            this.extraTime = 0.125 * (this.sleep - 4) / 0.25 //7,5 минут на преодоление 250 метров
        } else {
            this.extraTime = 0
        }
    }

    this.run = () => {
        let length = this.velocity * (this.timeLim + this.extraTime)
        this.timeAll += this.timeLim + this.extraTime
        this.distance -= length

        console.log(`Черепаха ${this.name} преодолевает ${length} км за ${this.timeLim + this.extraTime} часа, осталось: ${this.distance} км\n`)
        if (this.distance > 0) {
            setTimeout(this.rest, this.timeLim * 320)
        } else {
            this.finish();
            results()
        } 
    }

    this.rest = () => {
        this.changeSleep()
        this.timeAll += this.sleep;
        console.log(`Черепаха ${this.name} устала и спит ${this.sleep} часа\n`)
        this.distance > 0 ? setTimeout(this.run, this.sleep * 320) : ``;
    }

    this.zabeg = () => {
        setTimeout(this.run, this.timeLim * 320);
    }

    this.finish = () => {
        // alert(`Черепаха ${this.name}, время забега: ${this.timeAll}\n`);
        this.res = `Черепаха ${this.name}, время забега: ${this.timeAll}\n`;
        
    }



}

let paha = new Turtle('Paha')
let paha2 = new Turtle('Paha2')
// paha.zabeg();
// paha2.zabeg();

// function results() {
//     alert(paha.res + paha2.res )
// }