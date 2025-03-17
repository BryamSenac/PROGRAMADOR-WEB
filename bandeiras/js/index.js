import { swapFlag } from "./flag_swap_controller.js";
import { headerScrollcontroller } from "./header_scroll_controller.js";

window.swapFlag = swapFlag;  // Torna a função disponível no HTML

document.addEventListener("DOMContentLoaded", function () {
    headerScrollcontroller();
});
