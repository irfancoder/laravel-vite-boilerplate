import Vue from "vue";
import "@/css/app.scss";
import "@/js/components";
// import "../forms";

window.addEventListener("load", function () {
    window.app = new Vue({
        el: "#app",
    });
});
