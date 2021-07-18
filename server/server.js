let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit: '80mb', extended: true}));
app.use(bodyParser.json({limit: '80mb', extended: true}));
let port = process.env.PORT || 8080

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3051',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

let server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("/zimers", require("./zimers"));
app.use("/users", require("./users"));
app.use("/loveZimers", require("./loveZimers"));
app.use("/questions", require("./questions"));
app.use("/chat", require("./chat"));
app.use("/zimerOwner", require("./zimerOwner"));
