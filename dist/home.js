"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * GET FETCH API
 */
const fetchData = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./data.json");
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error Fetch Data", error);
        }
        ;
    });
};
/**
 * overflow
 */
const overflow = document.querySelector("[data-overflow]");
/**
 * load start
 */
const load_start = document.querySelector("[data-load-start]");
const body = document.body;
/**
 * theme color
 */
const sun = document.querySelector("[data-sun]");
const moon = document.querySelector("[data-moon]");
const HTML = document.documentElement;
// local storage
if (localStorage.length != 0) {
    if (localStorage.theme) {
        HTML.dataset.theme = localStorage.theme;
    }
    ;
    if (localStorage.sun) {
        sun.classList.add(localStorage.sun);
    }
    ;
    if (localStorage.moon) {
        moon.classList.add(localStorage.moon);
    }
    ;
}
;
// mood sun 
function moodSun() {
    HTML.dataset.theme = "light";
    sun.classList.add("active");
    moon.classList.add("active");
    // local storage
    localStorage.setItem("theme", "light");
    localStorage.setItem("sun", "active");
    localStorage.setItem("moon", "active");
}
;
sun.addEventListener("click", moodSun);
// mood moon
function moodMoon() {
    HTML.dataset.theme = "dark";
    sun.classList.remove("active");
    moon.classList.remove("active");
    // local storage
    localStorage.setItem("theme", "dark");
    localStorage.setItem("sun", "");
    localStorage.setItem("moon", "");
}
;
moon.addEventListener("click", moodMoon);
/**
 * GET SIDEBAR
 */
const sidebar_list_lang = document.querySelector("[data-sidebar-list-lang]");
const sidebar_list_lang_help = document.querySelector("[data-sidebar-list-help]");
function getSidebarList() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData();
        sidebar_list_lang.innerHTML = "";
        sidebar_list_lang_help.innerHTML = "";
        // load start
        setTimeout(() => {
            load_start.classList.add("load");
            body.classList.add("load");
        }, 1500);
        // lang
        data.Homepage.forEach((ele) => {
            sidebar_list_lang.innerHTML += `
        <a href="index.html?search=${ele.titleCard}" class="sidebar-link label-medium">
            <img src="${ele.image}" alt="${ele.titleCard}" loading="lazy" class="img-sidebar img-cover">
            ${ele.titleCard}
        </a>
        `;
        });
        // Helpful tools
        data.SidePages.forEach((ele) => {
            sidebar_list_lang_help.innerHTML += `
        <a href="index.html?search=${ele.titlePage}" class="sidebar-link label-medium">
            ${ele.titlePage}
        </a>
        `;
        });
    });
}
;
getSidebarList();
/**
 * open aside and close aside
 */
const open_aside = document.querySelector("[data-open-aside]");
const close_aside = document.querySelector("[data-close-aside]");
const sidebar = document.querySelector("[data-sidebar]");
// open sidebar
function openAside() {
    sidebar.classList.add("active");
    overflow.classList.add("active");
}
;
open_aside.addEventListener("click", openAside);
// close sidebar
function closeAside() {
    sidebar.classList.remove("active");
    overflow.classList.remove("active");
}
;
close_aside.addEventListener("click", closeAside);
// close sidebar overflow
function closeAsideOverflow() {
    sidebar.classList.remove("active");
    overflow.classList.remove("active");
}
;
overflow.addEventListener("click", closeAsideOverflow);
/**
 * search
 */
const search = document.querySelector("[data-search]");
const btn_search = document.querySelector("[data-btn-search]");
btn_search.addEventListener("click", () => { if (search.value.toLowerCase())
    window.location.href = `./index.html?search=${search.value.toLowerCase()}`; });
search.addEventListener("keydown", (e) => { if (e.key === "Enter")
    btn_search.click(); });
// get value
const urlParam = new URLSearchParams(window.location.search);
const langParam = urlParam.get("search");
search.value = langParam;
// search.value = langParam;
/**
 * get main
 */
const main_list = document.querySelector("[data-main-list]");
const input_page = document.querySelector("[data-input-page]");
const number_page = document.querySelector("[data-number-page]");
const input_box = document.querySelector("[data-input-box]");
let itemsPerPage = 20;
function getMainList() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData();
        // get url search
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get("search");
        const lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
        const filteredItems = data.Display.filter((ele) => { return ele.titlePage.toLowerCase().includes(lang); });
        // If the "search" parameter is not present, make main_list empty.
        if (!langParam) {
            main_list.innerHTML = `
        <div class="body-web">
            <h1 class="title-content display-small">اهلا بك في كتابي</h1>
            <p class="text-content label-small">
                منصتي التي تعرض خبرتي في تطوير الواجهة الأمامية (Frontend). تم بناء الموقع باستخدام تقنيات حديثة تشمل 
                HTML، CSS، Bootstrap، JavaScript، OOP، TypeScript، JSON، API، Vue.js، React.js، Angular، Git، وGitHub. 
                يقدم الموقع تصميمًا متجاوبًا وجذابًا، مع أداء محسّن لضمان تجربة مستخدم سلسة وسريعة.
                استمتعوا بتصفح الموقع واكتشاف جمال وبساطة البرمجة المتقدمة
            </p>
        </div>
        `;
            input_box.style.display = "none";
            return;
        }
        ;
        // get cards lsit
        const allCards = filteredItems.flatMap((ele) => ele.cards);
        // get page
        const currentPage = parseInt(urlParams.get("page") || "1", 10);
        const totalCards = allCards.length;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageCards = allCards.slice(startIndex, endIndex);
        const totalPages = Math.ceil(totalCards / itemsPerPage);
        // get elemnts
        main_list.innerHTML = "";
        pageCards.map((card) => {
            main_list.innerHTML += `
        <div class="card-code" data-card-code>
            <h2 class="code-text label-small" data-code-text>${card.titleCard}</h2>
            <p class="text-content label-small">${card.description}</p>
        </div>
        `;
        });
        // search in cards
        const card_code = document.querySelectorAll("[data-card-code]");
        const code_text = document.querySelectorAll("[data-code-text]");
        for (let i = 0; i < code_text.length; i++) {
            search.addEventListener("keyup", () => {
                if (code_text[i].innerHTML.toLowerCase().indexOf(search.value.toLowerCase()) >= 0) {
                    card_code[i].style.display = "";
                    input_box.style.display = "flex";
                }
                else {
                    card_code[i].style.display = "none";
                    input_box.style.display = "none";
                }
                ;
            });
        }
        ;
        // get value page
        input_page.value = currentPage.toString();
        number_page.innerHTML = totalPages.toString();
        // get page
        input_page.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                const currentUrl = new URL(window.location.href);
                currentUrl.searchParams.set("page", input_page.value.toLowerCase());
                window.history.pushState({}, "", currentUrl.toString());
                window.location.href = currentUrl.toString();
            }
            ;
        });
        // show input box
        input_box.style.display = "flex";
    });
}
;
getMainList();
//# sourceMappingURL=home.js.map