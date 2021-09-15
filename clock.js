//boilerplate
let secArm = document.querySelector('#second')
let hrArm = document.querySelector('#hour')
let minArm = document.querySelector('#minute')
let digitalHour = document.querySelector('#digitalHour')
let digitalMinute = document.querySelector('#digitalMinutes')
let digitalAmPm = document.querySelector('#amPm')
let digitalDate = document.querySelector('#date')
let qOTD = document.querySelector('#quoteOfTheDay')
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let quotes = {
    0: 'Nobody realizes that some people expend tremendous energy merely to be normal',
    1: 'The difference between stupidity and genius is that genius has its limits',
    2: "I don't believe in astrology. I'm a Sagittarius and we're skeptical.",
    3: "We never really grow up, we only learn how to act in public.",
    4: "Never under any circumstances take a sleeping pill and a laxative on the same night.",
    5: "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    6: "I've always wanted to go to Switzerland to see what the army does with those wee red knives."
}
//start clock function, set interval to call function for every 1 second.
setInterval(function() {
    let date = new Date(); //call todays date and time
    const armRotate = (time, seg) => {
        return (time * seg) + 90 //function to rotate arm, time is current time, seg is how many degrees between each time segment(6 deg between each minute/second and 30deg for each hour, 90deg is where 0 starts, add 90 to get current arm position for min/secs)
    }
    const hrDiff = (min) => { //function to rotate hour arm in between each hour to stop the hour hand from moving just each hour and move it slowly towards the next hour like a real clock. Add to armRotate function to get realistic hour arm. 
        return ((min * 6)/360)*30
    }
    const digHr = (hr) => {//function to print digital hours and adapt 24 hour to 12 hour 
        let hour
        (hr>12)?hour=`${hr-12}`:hour=hr
        return hour
    }
    const digMin = min => {//function to print digital minutes on page, if minutes is less than 10, then it add a 0 to the front
        let minutes 
        (min<10)?minutes=`0${min}`:minutes=min
        return minutes
    }
    const amPm = () =>{//function to determine if the hour is AM or PM and attach that to the digital time
        let meridiem = (date.getHours()>11)&&(date.getHours()!==24)?'PM':'AM'
        return meridiem
    }
    hrArm.style.transform = `rotate(${(armRotate(date.getHours(),30) + hrDiff(date.getMinutes()))}deg`//change style to rotate hour arm
    minArm.style.transform = `rotate(${armRotate(date.getMinutes(),6)}deg)`//change style to rotate minute arm
    secArm.style.transform = `rotate(${armRotate(date.getSeconds(),6)}deg)`//change style to rotate second arm
    digitalHour.textContent = digHr(date.getHours())//print digital hour to screen
    digitalMinute.textContent = digMin(date.getMinutes())//print digital minutes to screen
    digitalAmPm.textContent = `${amPm()}`//print digital am or pm to screen
    digitalDate.textContent = `${day[date.getDay()]}, ${month[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`//print date to screen
    qOTD.textContent = quotes[date.getDay()]//print quote to screen depending on day
}, 1000)

let allp = document.getElementById('pdiv').children
console.log(allp)