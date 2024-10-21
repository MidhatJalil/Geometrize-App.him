function geo(){
    
let radius = +document.getElementById('input').value;
let result = document.getElementById('result');
const pi = 3.142;
let circum = 2*pi*radius;
let area = pi*(radius**2);


// result.innerHTML = (`<h1>The Geometrizer</h1>`);

result.innerHTML = (`Radius of a circle is ${radius}<br><br>
 The Circumference is ${circum}<br><br>
 The area is ${area}<br>`);
}