const unitPriceInput = document.getElementById('unitPrice');
const quantityInput = document.getElementById('quantity');

const totalElement = document.getElementById('total');
const subtotalElement = document.getElementById('subtotal');

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const unitPrice = Number(unitPriceInput.value);
    const quantity = Number(quantityInput.value);

    if (
      !Number.isFinite(unitPrice) ||
      !Number.isFinite(quantity) ||
       unitPrice <= 0 ||
       !Number.isInteger(quantity) ||
       quantity < 1
   ) {
    alert('Please enter a valid price and a whole-number quantity of at least 1.');
    return;
   }
                            
    const subtotal = unitPrice * quantity;

   const discountRate = quantity >= 10 ? 0.10 : 0;
   const taxRate = 0.15;

    const discountAmount = subtotal * discountRate;
    const discountedTotal = subtotal - discountAmount;

    const taxAmount = discountedTotal * taxRate;
    const finalTotal = discountedTotal + taxAmount;

    subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('discount').textContent =
       `Discount (${discountRate * 100}%): $${discountAmount.toFixed(2)}`;
    document.getElementById('tax').textContent =
        `Tax: $${taxAmount.toFixed(2)}`;
    totalElement.textContent = `Total: $${finalTotal.toFixed(2)}`;
});
