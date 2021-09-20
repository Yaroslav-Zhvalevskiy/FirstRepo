const fse = require('fs-extra');

function foo() {
    const folder1 = 'Folder1';
    const folder2 = 'Folder2';
    const file1 = 'Folder1/file1.txt';
    const file2 = 'Folder2/file1.txt';

    fse.emptyDirSync(folder1);
    fse.ensureFileSync(file1);
    fse.emptyDirSync(folder2);
    fse.moveSync(file1, file2);
    fse.removeSync(file2);
    fse.removeSync(folder1);
    fse.removeSync(folder2);
}
foo();

console.log("some changes");

