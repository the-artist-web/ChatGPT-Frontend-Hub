/**
 * GET FETCH API
 */
declare const fetchData: () => Promise<any[] | undefined>;
/**
 * overflow
 */
declare const overflow: HTMLDivElement;
/**
 * load start
 */
declare const load_start: HTMLDivElement;
declare const body: HTMLBodyElement;
/**
 * theme color
 */
declare const sun: HTMLButtonElement;
declare const moon: HTMLButtonElement;
declare const HTML: HTMLHtmlElement;
declare function moodSun(): void;
declare function moodMoon(): void;
/**
 * GET SIDEBAR
 */
declare const sidebar_list_lang: HTMLDivElement;
declare const sidebar_list_lang_help: HTMLDivElement;
declare function getSidebarList(): Promise<void>;
/**
 * open aside and close aside
 */
declare const open_aside: HTMLButtonElement;
declare const close_aside: HTMLButtonElement;
declare const sidebar: HTMLDivElement;
declare function openAside(): void;
declare function closeAside(): void;
declare function closeAsideOverflow(): void;
/**
 * search
 */
declare const search: HTMLInputElement;
declare const btn_search: HTMLButtonElement;
declare const urlParam: URLSearchParams;
declare const langParam: any;
/**
 * get main
 */
declare const main_list: HTMLDivElement;
declare const input_page: HTMLInputElement;
declare const number_page: HTMLElement;
declare const input_box: HTMLDivElement;
declare let itemsPerPage: number;
declare function getMainList(): Promise<void>;
