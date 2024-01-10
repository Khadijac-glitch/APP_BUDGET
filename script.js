document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function (event) {
        event.preventDefault(); // 

        // Récupérer les valeurs des champs du formulaire
        var prenom = document.getElementById('validationCustom01').value;
        var nom = document.getElementById('validationCustom02').value;
        var somme = document.getElementById('somme').value;
        var dateheure = document.getElementById('dateheure').value;
        var typeTransaction = document.getElementById('validationCustom04').value;


        // Ajouter une nouvelle ligne au tableau Bootstrap
        var tableBody = document.getElementById('result');
        var newRow = tableBody.insertRow(-1);

        // Ajouter les cellules avec les données
        newRow.insertCell(0).textContent = prenom;
        newRow.insertCell(1).textContent = nom;
        newRow.insertCell(2).textContent = somme;
        newRow.insertCell(3).textContent = dateheure;
        newRow.insertCell(4).textContent = typeTransaction;

        // Effacer les champs du formulaire après l'ajout
        document.getElementById('validationCustom01').value = '';
        document.getElementById('validationCustom02').value = '';
        document.getElementById('validationCustom01').value = '';

        // Mettre à jour le solde
        updateSolde();

    });
});
// search content 
function filterTable() {
  const filterInput = document.getElementById('filterInput');
  const tableRows = document.querySelectorAll('#myTable tbody tr');

  const filterText = filterInput.value.toLowerCase();

  tableRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(filterText)) {
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  });
}

document.getElementById('filterInput').addEventListener('keyup', filterTable);
