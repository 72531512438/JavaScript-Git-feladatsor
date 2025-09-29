const data=[12, 32, 46, 43, 12, 18];
data.map(changeformula());

function changeformula(item){
    return (item * 9 / 5) + 32;
}