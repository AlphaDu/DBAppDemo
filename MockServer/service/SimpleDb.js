var fs = require('fs');
var path = require('path');
function SimpleDb(relativePath){
    this.dbPath = path.resolve(__dirname,relativePath);
}
SimpleDb.prototype._isAvailable = function(){
    return fs.existsSync(this.dbPath);
};
SimpleDb.prototype.read = function (){
    if (!this._isAvailable()) return null;

    var contentInStr = fs.readFileSync(this.dbPath, 'utf-8'),
        content;

    try {
        content = JSON.parse(contentInStr);
    } catch (e) {
        this.delDb();
        console.error('[ERR] JSON.parse failed, deleted '+ this.dbPath);
    }

    return content || null;
};
SimpleDb.prototype.save = function (data){
    var stringToSave = JSON.stringify(data);
    if (!stringToSave) return;
    fs.writeFileSync(this.dbPath, stringToSave, 'utf-8');
};
SimpleDb.prototype.delDb = function () {
    try {
        fs.unlinkSync(this.dbPath);
    } catch(e) {
        console.error('DB file does not exist');
    }
};
module.exports = SimpleDb;