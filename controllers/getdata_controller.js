const studentGetUnit = require('../models/studentgetunit_model');
const teacherGetQuestion = require('../models/teachergetquestion_model');
const teacherGetUnit = require('../models/teachergetunit_model');

module.exports = class Data {
    getQuestion(req, res, next) {
        const question_unit_id = req.query.qid;
        const token = req.headers['token'];
        if (check.checkNull(token) === true) {
            res.json({
                err: '請輸入token！',
            });
        } else if (check.checkNull(token) === false) {
            verify(token).then((tokenResult) => {
                if (tokenResult === false) {
                    res.json({
                        result: {
                            status: 'token錯誤。',
                            err: '請重新登入。',
                        },
                    });
                } else {
                    teacherGetQuestion(question_unit_id).then(
                        (result) => {
                            res.json({
                                result: result,
                            });
                        },
                        (err) => {
                            // 若寫入失敗則回傳
                            res.json({
                                result: err,
                            });
                        }
                    );
                }
            });
        }
    }
    getUnit(req, res, next) {
        const token = req.headers['token'];
        if (check.checkNull(token) === true) {
            res.json({
                err: '請輸入token！',
            });
        } else if (check.checkNull(token) === false) {
            verify(token).then((tokenResult) => {
                if (tokenResult === false) {
                    res.json({
                        result: {
                            status: 'token錯誤。',
                            err: '請重新登入。',
                        },
                    });
                } else {
                    let payload = tokenResult;
                    if (payload.user_identity == 'teacher') {
                        teacherGetUnit().then(
                            (result) => {
                                res.json({
                                    result: result,
                                });
                            },
                            (err) => {
                                // 若寫入失敗則回傳
                                res.json({
                                    result: err,
                                });
                            }
                        );
                    } else if (payload.user_identity == 'student') {
                        studentGetUnit().then(
                            (result) => {
                                res.json({
                                    result: result,
                                });
                            },
                            (err) => {
                                // 若寫入失敗則回傳
                                res.json({
                                    result: err,
                                });
                            }
                        );
                    }
                }
            });
        }
    }
};
