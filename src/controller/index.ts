const _ = require('lodash')
const fs = require('fs')
const path = require('path')

const mapDir = (d: string) => {
    let tree: any = {};
    const [dirs, files] = _(fs.readdirSync(d)).partition((p: string) => fs.statSync(path.join(d, p)).isDirectory());
    dirs.forEach((dir: string) => {
        tree[dir] = mapDir(path.join(d, dir))
    });
    files.forEach((file: string) => {
        if (path.extname(file) === '.ts') {
            tree[path.basename(file, '.ts')] = require(path.join(d, file))
        }
    });
    return tree;
}

module.exports = mapDir(path.join(__dirname))
