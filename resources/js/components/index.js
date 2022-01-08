import Vue from "vue";

/* These components are lazy loaded! Group their global registrations */
//SERVER
Vue.component("component-1", () => import("./server/component-1.vue"));

//WEBAPP
Vue.component("component-2", () => import("./webapp/component-2.vue"));

// export default Vue;
