new Vue({
    el : '#app',
    data : {
        robot_name : "Nom du Robot",
        roue_1 : 00,
        roue_2 : 00,
        tension : 12,
        intensite : 0.5,
        vitesse : 2,
        style_couleur : "background:rgb(12,12,12)"
    },
    methods : {
        ask_data: function () {

            setInterval( () => {
                const http = new XMLHttpRequest();
                const url = 'http://localhost:3000';
                http.open("GET", url, true);
                http.send();

                http.onreadystatechange = () => {
                    if (http.readyState === 4 && http.status === 200) {
                        json_data = JSON.parse(http.responseText);
                        console.log(json_data);
                        this.robot_name = json_data.robot_name;
                        this.roue_1 = json_data.roue_1;
                        this.roue_2 = json_data.roue_2;
                        this.tension = json_data.tension;
                        this.intensite = json_data.intensite;
                        this.vitesse = json_data.vitesse;
                        this.style_couleur = json_data.style_couleur;
                    }
                };
                }, 1000);
        }
    }
});
