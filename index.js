var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    return cats.concat(name);
}
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}
function removeLastCat(name) {
    const caats = cats.slice(0, cats.length - 1);
    return caats
}
function removeFirstCat(name) {
    const catts = cats.slice(1)
    return catts
}