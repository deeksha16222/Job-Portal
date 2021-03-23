const app = express()

const db = require("./app/models");
require("./app/routes/tutorial.routes")(app);
db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {

    console.log("Drop and re-sync db.");
    
    });
    require("./app/routes/tutorial.routes")(app);


    app.listen(3000, () => {
        console.log("listening the port at 8000");
    });