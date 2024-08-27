var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * GET FETCH API
 */
var fetchData = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./data.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error Fetch Data", error_1);
                    return [3 /*break*/, 4];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * overflow
 */
var overflow = document.querySelector("[data-overflow]");
/**
 * load start
 */
var load_start = document.querySelector("[data-load-start]");
var body = document.body;
/**
 * theme color
 */
var sun = document.querySelector("[data-sun]");
var moon = document.querySelector("[data-moon]");
var HTML = document.documentElement;
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
var sidebar_list_lang = document.querySelector("[data-sidebar-list-lang]");
var sidebar_list_lang_help = document.querySelector("[data-sidebar-list-help]");
function getSidebarList() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    data = _a.sent();
                    sidebar_list_lang.innerHTML = "";
                    sidebar_list_lang_help.innerHTML = "";
                    // load start
                    setTimeout(function () {
                        load_start.classList.add("load");
                        body.classList.add("load");
                    }, 1500);
                    // lang
                    data.Homepage.forEach(function (ele) {
                        sidebar_list_lang.innerHTML += "\n        <a href=\"index.html?search=".concat(ele.titleCard, "\" class=\"sidebar-link label-medium\">\n            <img src=\"").concat(ele.image, "\" alt=\"").concat(ele.titleCard, "\" loading=\"lazy\" class=\"img-sidebar img-cover\">\n            ").concat(ele.titleCard, "\n        </a>\n        ");
                    });
                    // Helpful tools
                    data.SidePages.forEach(function (ele) {
                        sidebar_list_lang_help.innerHTML += "\n        <a href=\"index.html?search=".concat(ele.titlePage, "\" class=\"sidebar-link label-medium\">\n            ").concat(ele.titlePage, "\n        </a>\n        ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getSidebarList();
/**
 * open aside and close aside
 */
var open_aside = document.querySelector("[data-open-aside]");
var close_aside = document.querySelector("[data-close-aside]");
var sidebar = document.querySelector("[data-sidebar]");
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
var search = document.querySelector("[data-search]");
var btn_search = document.querySelector("[data-btn-search]");
btn_search.addEventListener("click", function () { if (search.value.toLowerCase())
    window.location.href = "./index.html?search=".concat(search.value.toLowerCase()); });
search.addEventListener("keydown", function (e) { if (e.key === "Enter")
    btn_search.click(); });
// get value
var urlParam = new URLSearchParams(window.location.search);
var langParam = urlParam.get("search");
search.value = langParam;
// search.value = langParam;
/**
 * get main
 */
var main_list = document.querySelector("[data-main-list]");
var input_page = document.querySelector("[data-input-page]");
var number_page = document.querySelector("[data-number-page]");
var input_box = document.querySelector("[data-input-box]");
var itemsPerPage = 30;
function getMainList() {
    return __awaiter(this, void 0, void 0, function () {
        var data, urlParams, langParam, lang, filteredItems, allCards, currentPage, totalCards, startIndex, endIndex, pageCards, totalPages, card_code, code_text, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    data = _a.sent();
                    urlParams = new URLSearchParams(window.location.search);
                    langParam = urlParams.get("search");
                    lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
                    filteredItems = data.Display.filter(function (ele) { return ele.titlePage.toLowerCase().includes(lang); });
                    // If the "search" parameter is not present, make main_list empty.
                    if (!langParam) {
                        main_list.innerHTML = "\n        <div class=\"body-web\">\n            <h1 class=\"title-content display-small\">\u0627\u0647\u0644\u0627 \u0628\u0643 \u0641\u064A \u0643\u062A\u0627\u0628\u064A</h1>\n            <p class=\"text-content label-small\">\n                \u0645\u0646\u0635\u062A\u064A \u0627\u0644\u062A\u064A \u062A\u0639\u0631\u0636 \u062E\u0628\u0631\u062A\u064A \u0641\u064A \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 (Frontend). \u062A\u0645 \u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062A\u0642\u0646\u064A\u0627\u062A \u062D\u062F\u064A\u062B\u0629 \u062A\u0634\u0645\u0644 \n                HTML\u060C CSS\u060C Bootstrap\u060C JavaScript\u060C OOP\u060C TypeScript\u060C JSON\u060C API\u060C Vue.js\u060C React.js\u060C Angular\u060C Git\u060C \u0648GitHub. \n                \u064A\u0642\u062F\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 \u062A\u0635\u0645\u064A\u0645\u064B\u0627 \u0645\u062A\u062C\u0627\u0648\u0628\u064B\u0627 \u0648\u062C\u0630\u0627\u0628\u064B\u0627\u060C \u0645\u0639 \u0623\u062F\u0627\u0621 \u0645\u062D\u0633\u0651\u0646 \u0644\u0636\u0645\u0627\u0646 \u062A\u062C\u0631\u0628\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 \u0633\u0644\u0633\u0629 \u0648\u0633\u0631\u064A\u0639\u0629.\n                \u0627\u0633\u062A\u0645\u062A\u0639\u0648\u0627 \u0628\u062A\u0635\u0641\u062D \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0643\u062A\u0634\u0627\u0641 \u062C\u0645\u0627\u0644 \u0648\u0628\u0633\u0627\u0637\u0629 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629\n            </p>\n        </div>\n        ";
                        input_box.style.display = "none";
                        return [2 /*return*/];
                    }
                    ;
                    if (langParam !== search.value) {
                        main_list.innerHTML = "<p class=\"massage-error label-large\">\u0647\u0630\u0629 \u0627\u0644\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629</p>";
                        document.body.style.overflow = "hidden";
                    }
                    ;
                    allCards = filteredItems.flatMap(function (ele) { return ele.cards; });
                    currentPage = parseInt(urlParams.get("page") || "1", 10);
                    totalCards = allCards.length;
                    startIndex = (currentPage - 1) * itemsPerPage;
                    endIndex = startIndex + itemsPerPage;
                    pageCards = allCards.slice(startIndex, endIndex);
                    totalPages = Math.ceil(totalCards / itemsPerPage);
                    // get elemnts
                    main_list.innerHTML = "";
                    pageCards.map(function (card) {
                        main_list.innerHTML += "\n        <div class=\"card-code\" data-card-code>\n            <h2 class=\"code-text label-small\" data-code-text>".concat(card.titleCard, "</h2>\n            <p class=\"text-content label-small\">").concat(card.description, "</p>\n        </div>\n        ");
                    });
                    if (currentPage > totalPages) {
                        main_list.innerHTML = "<p class=\"massage-error label-large\">\u0647\u0630\u0629 \u0627\u0644\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629</p>";
                        document.body.style.overflow = "hidden";
                    }
                    ;
                    card_code = document.querySelectorAll("[data-card-code]");
                    code_text = document.querySelectorAll("[data-code-text]");
                    _loop_1 = function (i) {
                        search.addEventListener("keyup", function () {
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
                    };
                    for (i = 0; i < code_text.length; i++) {
                        _loop_1(i);
                    }
                    ;
                    // get value page
                    input_page.value = currentPage.toString();
                    number_page.innerHTML = totalPages.toString();
                    // get page
                    input_page.addEventListener("keyup", function (e) {
                        if (e.key === "Enter") {
                            var currentUrl = new URL(window.location.href);
                            currentUrl.searchParams.set("page", input_page.value.toLowerCase());
                            window.history.pushState({}, "", currentUrl.toString());
                            window.location.href = currentUrl.toString();
                        }
                        ;
                    });
                    // show input box
                    input_box.style.display = "flex";
                    return [2 /*return*/];
            }
        });
    });
}
;
getMainList();
