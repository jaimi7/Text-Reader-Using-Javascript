const textarea = document.getElementById("text");
const speech = document.getElementById("speech");
const sound = document.getElementById("voice");

const msg = new SpeechSynthesisUtterance();

setText = (txt) => msg.text = txt;

readText = () => speechSynthesis.speak(msg);

let sounds = [];
getsound = () => {
    sounds = speechSynthesis.getVoices();
    sounds.forEach((v) => {
        const option = document.createElement("option");
        option.value = v.name;
        option.innerText = `${v.name}`;
        sound.appendChild(option);
    });
}

speechSynthesis.addEventListener("voiceschanged", getsound);
getsound();

setVoice = (e) => msg.voice = sounds.find((v) => v.name === e.target.value);

sound.addEventListener("change", setVoice);

speech.addEventListener("click", () => {
    setText(textarea.value);
    readText();
});
