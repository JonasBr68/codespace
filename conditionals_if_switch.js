/* eslint-disable*/

function getColorStringFromCode(colorNumber) {
    if (colorNumber == 0) //Numeric code for Red
    {
        return "Red";
    }
    else if (colorNumber == 1) //Numeric code for Green
    {
        return "Green";
    }
    else if (colorNumber == 2) //Numeric code for Blue
    {
        return "Blue";
    }
    else if (colorNumber == 3) //Numeric code for Pink
    {
        return "Pink";
    }
    else if (colorNumber == 4) //Numeric code for Brown
    {
        return "Brown";
    }
    else if (colorNumber == 5) //Numeric code for Black
    {
        return "Black";
    }
    else if (colorNumber == 6) //Numeric code for White
    {
        return "White";
    }
    else if (colorNumber == 7) //Numeric code for Gray
    {
        return "Gray";
    }
    else {
        return undefined;
    }
}

function getColorStringFromCode2(colorNumber) {
    var colorName;
    switch (colorNumber) {
        case 0:
            colorName = "Red";
            break;
        case 1:
            colorName = "Green";
            break;
        case 2:
            colorName = "Blue";
            break;
        case 3:
            colorName = "Pink";
            break;
        case 4:
            colorName = "Brown";
            break;
        case 5:
            colorName = "Black";
            break;
        case 6:
            colorName = "White";
            break;
        case 7:
            colorName = "Gray";
            break;
        default:
            colorName = undefined;

    }
    return colorName;
}

console.log(getColorStringFromCode(0) + " = " + getColorStringFromCode2(0));
console.log(getColorStringFromCode(1) + " = " + getColorStringFromCode2(1));
console.log(getColorStringFromCode(2) + " = " + getColorStringFromCode2(2));
console.log(getColorStringFromCode(3) + " = " + getColorStringFromCode2(3));
console.log(getColorStringFromCode(4) + " = " + getColorStringFromCode2(4));
console.log(getColorStringFromCode(5) + " = " + getColorStringFromCode2(5));
console.log(getColorStringFromCode(6) + " = " + getColorStringFromCode2(6));
console.log(getColorStringFromCode(7) + " = " + getColorStringFromCode2(7));
console.log(getColorStringFromCode(8) + " = " + getColorStringFromCode2(8));
