
let arr = [];

function createArray() {
    let n = Number(document.getElementById("length").value);
    let div = document.getElementById("elementInputs");

    if (!Number.isInteger(n) || n <= 0) {
        alert("Enter a valid array length");
        return;
    }

    div.innerHTML = "";

    for (let i = 0; i < n; i++) {
        div.innerHTML +=
            `<input type="text" id="element${i}" placeholder="Element ${i + 1}"><br>`;
    }
}

function saveArray() {
    let n = Number(document.getElementById("length").value);
    let newArray = [];

    for (let i = 0; i < n; i++) {
        let value = document.getElementById("element" + i).value;

        if (value.trim() === "") {
            alert("Enter all array elements");
            return;
        }

        newArray[i] = value;
    }

    arr = newArray;
    showArray();
}

function showArray() {
    document.getElementById("arrDisplay").innerText =
        "[" + arr.join(", ") + "]";
}

// Using standard array methods
function removeItem() {
    let value = document.getElementById("removeVal").value;

    if (value === "") {
        alert("Enter an element to delete");
        return;
    }

    let result = [...arr];
    let index = result.indexOf(value);

    if (index !== -1) {
        result.splice(index, 1);
        document.getElementById("standardResult").innerText =
            "After deletion: [" + result.join(", ") + "]";
        arr = result;
        showArray();
    } else {
        document.getElementById("standardResult").innerText =
            "Element not found";
    }
}

function checkItem() {
    let value = document.getElementById("checkVal").value;

    if (value === "") {
        alert("Enter a value to check");
        return;
    }

    document.getElementById("standardResult").innerText =
        arr.includes(value) ? "Value is present" : "Value is not present";
}

function emptyArray() {
    arr.splice(0, arr.length);
    showArray();

    document.getElementById("standardResult").innerText =
        "Array emptied: []";
}

// Without standard array methods
function removeItemManual() {
    let value = document.getElementById("removeVal").value;

    if (value === "") {
        alert("Enter an element to delete");
        return;
    }

    let result = [];
    let removed = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value && !removed) {
            removed = true;
        } else {
            result[result.length] = arr[i];
        }
    }

    if (removed) {
        arr = result;
        showArray();

        document.getElementById("manualResult").innerText =
            "After deletion: [" + arr.join(", ") + "]";
    } else {
        document.getElementById("manualResult").innerText =
            "Element not found";
    }
}

function checkItemManual() {
    let value = document.getElementById("checkVal").value;

    if (value === "") {
        alert("Enter a value to check");
        return;
    }

    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            found = true;
            break;
        }
    }

    document.getElementById("manualResult").innerText =
        found ? "Value is present" : "Value is not present";
}

function emptyArrayManual() {
    let empty = [];

    arr = empty;
    showArray();

    document.getElementById("manualResult").innerText =
        "Array emptied: []";
}
