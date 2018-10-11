new Vue({
    el : '#app',
    data : {
        robot_name : "Nom du Robot",
        roue_1 : 30,
        roue_2 : 30,
        tension : 12,
        intensite : 0.5,
        vitesse : 2,
        style_couleur : "background:rgb(12,12,12)"
    },
    methods : {
        ask_data: function () {
            const http = new XMLHttpRequest();
            const url = 'http://localhost:8080/data.json';
            http.open("GET", url);
            http.send();

        }
    }
});
