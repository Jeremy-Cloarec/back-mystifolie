//Importing Libraries 
require("dotenv").config();
const app = require(".");
const port = process.env.PORT || 3000;
//Listing to the app and running it on PORT 5000
app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}. Go to http://localhost:${port}/mystifolie`);
});
//# sourceMappingURL=server.js.map