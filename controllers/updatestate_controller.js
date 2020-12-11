const { TRUE } = require('node-sass');
const updateUnitState = require('../models/modifyunitstate_model');

module.exports = class Status{
    postUnitState(req, res, next){
        const unit_state = req.body.ustate;
        updateUnitState(unit_state).then(result =>{
            res.json({
                status: "發送題目成功",
                result: result
            })
        }, (err) => {
            // 若寫入失敗則回傳
            res.json({
                result: err
            })
        })
    }
}