const db = require('./db');
const helper = require('../helper');
const config = require('../config');



async function getPost(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT tittle, description, date, user, section, comment , id
        FROM posts LIMIT ${offset}, ${config.listPerPage}
        `
    );
    const data = helper.emptyOrRows(rows);
    const meta = (page);

    return {
        data,
        meta
    }
}
module.exports = {
    getPost
};