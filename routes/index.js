var express = require('express');
var router = express.Router();

const StudentModifyMethod = require('../controllers/modify_controller');
const GetDataMethod = require('../controllers/getdata_controller');
const UpdateUnitStateMethod = require('../controllers/updatestate_controller');

let studentModifyMethod = new StudentModifyMethod();
let getDataMethod = new GetDataMethod();
let updateUnitStateMethod = new UpdateUnitStateMethod();

/* GET home page. */
router.get('/', function (req, res, next) {
    //console.log(req.body.test);
    res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
    console.log(req.body.test);
});

router.post('/register', studentModifyMethod.postRegister);

router.post('/login', studentModifyMethod.postLogin);

router.post('/teacher/postquestion', updateUnitStateMethod.postUnitState);

router.get('/teacher/unit/getquestion', getDataMethod.getQuestion);

router.get('/teacher/getunit', getDataMethod.getUnit);

router.get('/student/getquestion', getDataMethod.getQuestion);

module.exports = router;
