function oblicz() {
    let arr = [];
    for (let i = 1; i <= 20; i++) {
        let czas = document.getElementById("pracownik" + [i]).getElementsByClassName("czas")[0];
        let stawka = document.getElementById("pracownik" + [i]).getElementsByClassName("stawka")[0];
        let pracownik = document.getElementById("pracownik" + [i]).getElementsByClassName("pracownik")[0];
        if (czas.value > 160) {
            let bonus_czas = czas.value - 160;
            let bonus_stawka = stawka.value * 2;
            let bonus = (bonus_czas * bonus_stawka) + (160 * stawka.value);
            document.getElementById("pracownik" + [i]).
                getElementsByClassName("wyplata")[0].innerHTML = bonus;
        } else {
            document.getElementById("pracownik" + [i]).
                getElementsByClassName("wyplata")[0].innerHTML = (czas.value * stawka.value);
        }
        if (czas.value < 100) {
            document.getElementById("pracownik" + [i]).getElementsByClassName("pracownik")[0].style.backgroundColor = "red";
        }
        let obj = {
            'pracownik': pracownik.textContent,
            'czas': czas.value}
        arr.push(obj);
    }
    arr.sort((a, b) => parseFloat(b.czas) - parseFloat(a.czas));
    document.getElementById('najlepsi-pracownicy').innerHTML = 
    arr[0].pracownik + ', ' +arr[1].pracownik + ', ' + arr[2].pracownik;
}
let form = document.getElementById('oblicz');
form.addEventListener('click', oblicz);