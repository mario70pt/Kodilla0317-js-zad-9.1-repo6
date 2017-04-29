function getTriangleArea(a, h) {
    var triangleArea = a * h / 2;
    if ((a > 0) && (h > 0)) {
        triangleArea = a * h / 2;
    } else {
    console.log('Nieprawidłowe dane');
    }
    return triangleArea;
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15)
console.log(getTriangleArea(10, 15));
var triangle2Area = getTriangleArea(0, 0)
console.log(getTriangleArea(0, 0));
var triangle3Area = getTriangleArea(20, 35)
console.log(getTriangleArea(20, 35));