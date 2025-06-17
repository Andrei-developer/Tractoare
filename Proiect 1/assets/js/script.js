// const exemplu = document.getElementsByClassName(".ex")
// console.log(typeof exemplu);
// function nume() {
//     console.log("Andrei");
// }
// nume();

// function myFunction(a) {
//     if (a === 6) {
//         console.log("okkkk");
//     } else {
//         console.log("nooo")
//     }
// }

// myFunction(6);
// myFunction(5);

// let myArray = ["blue", "red", "green"];
// console.log(myArray);

// myArray.forEach(function(myArray){
//     console.log(myArray.includes("red"));
// })

// ex1.

// function myFunctionTwo(a) {
//     if (a === "9") {
//         console.log("true")
//     } else {
//         console.log("false");
//     }
// }
// myFunctionTwo(9);true
// myFunctionTwo(10); false

// ex2.

// function myFunctionTwo(a) {
//     if (a == "9") {
//         console.log("true")
//     } else {
//         console.log("false");
//     }
// }
// myFunctionTwo(9); false
// myFunctionTwo(10); false
// fals pentru ca "9" este string si eu am 9 care este number si nu este egal un string.

// var changeStyle = document.getElementsByClassName("change-style");

// console.log(changeStyle[0]);

const changeStyle = document.querySelectorAll(".change-style");

function setActiveStyle(color) {
  changeStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Hai să explicăm pas cu pas ce face acest cod, într-un mod foarte simplu, astfel încât să fie ușor de înțeles chiar și pentru un copil de clasa a 3-a!

// ---

// ### 1. Găsirea elementelor care pot schimba stilul

// ```js
// const changeStyle = document.querySelectorAll(".change-style");
// ```

// - **Ce face:**
//   - Acest cod caută toate elementele din pagină care au clasa „change-style”.
//   - Le pune într-o cutie numită `changeStyle`.

// - **Explicație simplă:**
//   Imaginează-ți că ai o cutie de jucării și fiecare jucărie cu o etichetă specială „change-style”. Codul asta caută toate jucăriile cu acea etichetă și le pune împreună ca să le poți folosi mai târziu.

// ---

// ### 2. Funcția pentru schimbarea stilului

// ```js
// function setActiveStyle(color) {
// ```

// - **Ce face:**
//   Aceasta este o funcție care primește un parametru numit `color` (culoare). Ea se ocupă de schimbarea stilului elementelor.

// - **Explicație simplă:**
//   Gândește-te că această funcție este ca o cutie magică care primește o culoare. Când îi spui o culoare, ea va decide care jucărie din cutia ta să fie activă (să se arate) și care să fie dezactivată (să se ascundă).

// ---

// ### 3. Parcurgerea fiecărui element

// ```js
//     changeStyle.forEach((style) => {
// ```

// - **Ce face:**
//   Pentru fiecare element (fiecare jucărie cu eticheta „change-style”) din cutia `changeStyle`, se va face ceva.

// - **Explicație simplă:**
//   Imaginează-ți că ai mai multe jucării în cutia ta. Această linie spune: „Hai să vedem fiecare jucărie una câte una.”

// ---

// ### 4. Compararea culorii și modificarea atributelor

// ```js
//          if(color === style.getAttribute("title")){
//              style.removeAttribute("disabled");
//          }
//          else{
//              style.setAttribute("disabled", "true");
//          }
// ```

// - **Ce face:**
//   - **Obține titlul:** `style.getAttribute("title")` ia valoarea atributului `title` al jucăriei (elementului). Este ca și cum ai citi numele scris pe ea.
//   - **Compară cu culoarea primită:**
//     Dacă culoarea primită (`color`) este exact aceeași ca valoarea din atributul `title`:
//     - **Activează stilul:** Se scoate atributul `disabled` cu `style.removeAttribute("disabled")` pentru că vrem ca stilul să fie activ (să se arate).
//     - **Dezactivează celelalte:** Dacă nu sunt egale, se pune atributul `disabled` cu `style.setAttribute("disabled", "true")`. Astfel, stilul se dezactivează (nu se folosește).

// - **Explicație simplă:**
//   Imaginează-ți că fiecare jucărie are o etichetă cu o culoare scrisă pe ea. Cutia magică (funcția) compară culoarea pe care i-ai dat-o cu culoarea scrisă pe fiecare jucărie:
//   - Dacă se potrivesc, jucăria este „activă” și se poate juca cu ea.
//   - Dacă nu se potrivesc, jucăria este pusă deoparte și nu se folosește pentru moment.

// ---

// ### 5. Închiderea funcției

// ```js
//     });
// }
// ```

// - **Ce face:**
//   - `});` închide bucla `forEach` care merge prin fiecare element.
//   - `}` închide funcția `setActiveStyle`.

// - **Explicație simplă:**
//   La sfârșit, spunem: „Am verificat fiecare jucărie și am făcut modificările necesare. Totul este gata!”

// ---

// ### Recapitulare pe scurt

// - **Pasul 1:** Se adună toate elementele (jucăriile) care au eticheta „change-style”.
// - **Pasul 2:** Funcția `setActiveStyle` primește o culoare.
// - **Pasul 3:** Pentru fiecare jucărie, codul verifică dacă culoarea ei (scrisă pe etichetă) este aceeași cu cea primită.
// - **Pasul 4:**
//   - Dacă se potrivește, se face ca acea jucărie să se poată folosi (se scoate „disabled”).
//   - Dacă nu se potrivește, jucăria este dezactivată (se pune „disabled”).
// - **Pasul 5:** Totul se încheie și funcția se oprește.

// Astfel, codul te ajută să decizi care stil (sau jucărie) să fie activ, în funcție de culoarea pe care o alegi! Dacă mai ai întrebări sau vrei alte detalii, spune-mi!

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
