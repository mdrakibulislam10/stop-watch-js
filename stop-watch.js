const getInnerText = (id) => {
    const elementValue = document.getElementById(id);
    return parseInt(elementValue.innerText);
};

const setInnerText = (value, id) => {
    document.getElementById(id).innerText = value;
}

const startBtn = () => {
    const previousTime = getInnerText("time");
    let currentTime = previousTime;
    let interValId = setInterval(() => {
        currentTime++;
        // console.log(currentTime);
        setInnerText(currentTime, "time");
    }, 1000);
    document.getElementById("stop-parent").innerHTML = `<button onclick="stopBtn(${interValId})">Stop</button>`
};

const stopBtn = (interValId) => {
    clearInterval(interValId);
};

const resetBtn = () => {
    setInnerText(0, "time");
};