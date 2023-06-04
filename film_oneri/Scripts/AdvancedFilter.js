//// Function to display the modal when the button is clicked
//function showModal() {
//    var modal = document.getElementById("filterModal");
//    modal.style.display = "block";
//}

//// Function to hide the modal when the close button is clicked
//function closeModal() {
//    var modal = document.getElementById("filterModal");
//    modal.style.display = "none";
//    console.log();
//}

//// Attach event listeners to the button and close button
//var filterButton = document.getElementById("filterButton");
//var closeButton = document.getElementsByClassName("close")[0];

//filterButton.addEventListener("click", showModal);
//closeButton.addEventListener("click", closeModal);


// Get the modal
var modal = document.getElementById("filterModal");

// Get the button that opens the modal
var btn = document.getElementById("filterButton");

//<span> elementi ile kapatma işlemi için x butonu alınır
var span = document.getElementsByClassName("close")[0];

// butona basılınca modal açılır 
btn.onclick = function () {
    modal.style.display = "inline-block";
}

//x'e basılınca modal kapatılır
span.onclick = function () {
    modal.style.display = "none";
}

// modal dışında bir yere tıklandığında modal kapatılır
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function listeyeekle(event) {
    event.preventDefault();

    var category = event.target.dataset.category;
    var kosul1 = document.getElementById('kategori')
    var kosul2 = document.getElementById('kategori2')
  

    var categoryExists = true;


    for (var i = 0; i < kosul1.childElementCount; i++) {
        if (kosul1.children[i].textContent === category) {
            categoryExists = false;
            break;
        }
    }

    if (!categoryExists) {
        for (var j = 0; j < kosul2.childElementCount; j++) {
            if (kosul2.children[j].textContent === category) {
                categoryExists = true;
                break;
            }
        }
    }


    if (!categoryExists) {// eğer kategori listede yoksa ekle
        var selectedCategoryElement = document.createElement('li');
        selectedCategoryElement.href = '#';
        selectedCategoryElement.onclick = listesil; 

        selectedCategoryElement.textContent = category;

        var selectedCategoriesList = document.getElementById('kategori2');
        selectedCategoriesList.appendChild(selectedCategoryElement);
    }
}


// oluşturulan yeni li elementi silinir üzerine basıldığında
function listesil(event) {

    event.preventDefault();

    var selectedCategoryElement = event.target;
    selectedCategoryElement.remove();
}



