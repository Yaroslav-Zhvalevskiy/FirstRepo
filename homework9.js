// Создать папку
// Создать текстовый файл
// создать вторую папку
// переместить файл из первой папки во вторую
// Удалить файл
// удалить папки

const fse = require('fs-extra');

const folder1 = 'Folder1';
const folder2 = 'Folder2';
const file1 = 'Folder1/file1.txt';
const file2 = 'Folder2/file1.txt';

function createFolder1(folder1) {
    fse.emptyDir(folder1, (err) => {
        if (err) return console.error(err);
        createFile1(file1);
    });
}

function createFile1(file1) {
    fse.ensureFile(file1, (err) => {
        if (err) return console.error(err);
        createFolder2(folder2);
    });
}

function createFolder2(folder2) {
    fse.emptyDir(folder2, (err) => {
        if (err) return console.error(err);
        moveFile(file1, file2);
    });
}

function moveFile(file1, file2) {
    fse.move(file1, file2, (err) => {
        if (err) return console.error(err);
        deleteFile(file2);
    });
}

function deleteFile(file2) {
    fse.remove(file2, (err) => {
        if (err) return console.error(err);
        deleteFolders(folder1, folder2)
    });
}

function deleteFolders(folder1, folder2) {
    fse.remove(folder1);
    fse.remove(folder2);
}

createFolder1(folder1);