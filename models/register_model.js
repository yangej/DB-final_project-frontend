const db = require('./connection_db');

module.exports = function register(memberData) {
    let result = {};
    return new Promise((resolve, reject) => {
        //檢查有沒有重複帳號
        db.query('SELECT account FROM member_info WHERE account = ?', memberData.account, function (err, rows){
        // 將資料寫入資料庫
        if (err) {
            console.log(err);
            result.status = "註冊失敗。"
            result.err = "伺服器錯誤，請稍後在試！"
            reject(result);
            return;
        }
        // 如果有重複的account
        if (rows.length >= 1) {
            result.status = "註冊失敗。";
            result.err = "已有重複的帳號。";
            reject(result);
        } else {
            db.query('INSERT INTO member_info SET ?', memberData, function (err, rows) {
            // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
                if (err) {
                    console.log(err);
                    result.status = "註冊失敗。"
                    result.err = "伺服器錯誤，請稍後在試！"
                    reject(result);
                    return;
                }
                result.registerMember = memberData;
                resolve(result);
                })
            }
        })
    })
}