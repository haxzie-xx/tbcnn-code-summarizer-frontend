const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const exec = require('child_process').exec;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let data = "";

app.get('/', (req, res) => {
    console.log(data);
    res.status(200)
        .send(data);
});

app.post('/', (req, res) => {
    data = req.body.data;
    console.log(data);
    exec("python /home/haxzie/projects/final-year-project/tbcnn/result/predict.py", (err, stdout, stderr) => {
        if (err) {
            console.log(err)
        }
        console.log(stderr);
        console.log(stdout);
        res.status(200)
            .json({
                message: stdout
            });
    });
});


app.post('*', (req, res) => {
    res.send('Not Found');
});



app.listen(3001, () => {
    console.log(`Server running on port 3001`);
})