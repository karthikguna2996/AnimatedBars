const courseList = [
    ['html', 90],
    ['css', 90],
    ['javaScript', 95],
    ['reactJs', 95],
    ['nodeJs&expressJs', 95],
    ['SQL', 90],
    ['DSA', 85]
]

let mainCont = document.getElementById('mainCont');
const appendCourse = (courseDetails) => {
    let courseCont = document.createElement('div')
    courseCont.classList.add('cont')
    mainCont.appendChild(courseCont)

    let animeCont = document.createElement('div');
    animeCont.id = `animation-cont-${courseDetails[0]}`;
    animeCont.classList.add("animation-background");
    courseCont.appendChild(animeCont)

    let innerCircle = document.createElement('div');
    innerCircle.classList.add('inner-circle')
    animeCont.appendChild(innerCircle)

    let spanElement = document.createElement('span');
    spanElement.id = `text-${courseDetails[0]}`
    innerCircle.appendChild(spanElement)

    let courseName = document.createElement('p');
    courseName.classList.add('textStyling')
    courseName.textContent = courseDetails[0];
    courseCont.appendChild(courseName)

    let count = 0;
    let courseGripPercentage = setInterval(() => {
        count += 1
        spanElement.textContent = `${count}%`
        animeCont.style.background = `conic-gradient(#ADFE52 ${count*3.6}deg, white 0deg)`
        if (count === courseDetails[1]) {
            clearInterval(courseGripPercentage)
        }
    }, 50)
}

for (let courseDetails of courseList) {
    appendCourse(courseDetails)
}