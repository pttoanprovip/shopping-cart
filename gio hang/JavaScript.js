window.onload = function () {
    var quantityInput = document.getElementById('quantity');
    var priceElement = document.querySelector('.price');
    var totalElement = document.getElementById('total');

    quantityInput.addEventListener('input', function () {
        calculateTotal();
    });

    function calculateTotal() {
        var quantity = parseFloat(quantityInput.value);
        var price = parseFloat(priceElement.innerHTML);
        var total = quantity * price;
        totalElement.innerHTML = total;
    }
}