function myFunction() {
    if (document.getElementById("education").checked){
        document.getElementById("text").innerHTML = "Сентябрь 1995 — Июнь 2000 <br> Санкт-Петербургский политехнический университет Петра Великого <br> Факультет: Компьютерных наук и технологий <br> Специальность: Математика и компьютерные науки <br> Форма обучения: Очная <h2>Курсы и тренинги</h2> Ноябрь 2020 — Февраль 2021 <br> Программа дополнительного образования «3D Моделирование» <br> Место проведения: Институт дополнительного образования «Политех» <br> Ноябрь 2020 — Февраль 2021 <br> Программа дополнительного образования «3D Моделирование» <br> Место проведения: Институт дополнительного образования «Политех» <br> Ноябрь 2020 — Февраль 2021 <br> Программа дополнительного образования «3D Моделирование» <br> Место проведения: Институт дополнительного образования «Политех» <br> Ноябрь 2020 — Февраль 2021 <br> Программа дополнительного образования «3D Моделирование» <br> Место проведения: Институт дополнительного образования «Политех» <br>";
    } else if (document.getElementById("exp").checked){
        document.getElementById("text").innerHTML = "Опыт работы"
    } else if (document.getElementById("ach").checked){
        document.getElementById("text").innerHTML = "Награды"
    }
    
}

function on_window() {
    document.getElementById("view").style.display="block";
}

function off_window() {
    document.getElementById("view").style.display="none";
}