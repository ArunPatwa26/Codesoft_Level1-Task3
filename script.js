var value1 = document.getElementById("value")
function input(value) {
    value1.value += value

}
function clearItem() {
    value1.value = " "
}
function deleteItem() {
    value1.value = value1.value.slice(0, -1)
}
function output() {
    try {
        value1.value = eval(value1.value)
    } catch (error) {
        console.log(error);
        value1.value = "Not Defined"

    }
}
