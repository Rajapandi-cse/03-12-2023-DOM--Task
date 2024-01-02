const formel = document.querySelector("form");
const tbodyel = document.querySelector("tbody");
function addvalues(e) {
  e.preventDefault();
  const f = document.getElementById("first").value;
  const l = document.getElementById("last").value;
  const ad = document.getElementById("addr").value;
  const p = document.getElementById("pin").value;
  const g = document.getElementById("gen").value;
  const st = document.getElementById("state").value;
  const con = document.getElementById("country").value;
  const fo = [];
  var markedchekedbox = document.getElementsByName("check");
  for (var checkbox of markedchekedbox) {
    if (checkbox.checked) fo.push(checkbox.value);
  }

  tbodyel.innerHTML += ` 
     <tr>
       <td> ${f}</td>
       <td> ${l}</td>
       <td> ${ad}</td>
       <td> ${p}</td>
       <td> ${g}</td>
       <td> ${fo}</td>
       <td> ${st}</td>
       <td> ${con}</td>

     </tr>
   
   
     `;
}

function clear(e) {
  document.querySelector("form").reset();
}
formel.addEventListener("submit", addvalues);
formel.addEventListener("submit", clear);
