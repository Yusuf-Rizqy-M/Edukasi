const toggleMenuOpen = () => document.body.classList.toggle("open");
function calculateTotal() {
    var selectedOption = document.getElementById('menuOptions');
    var quantity = document.getElementById('quantity').value;
    var price = selectedOption.options[selectedOption.selectedIndex].getAttribute('data-price');
    var total = price * quantity;

    document.getElementById('total').innerText = 'Rp ' + total;
}

function submitOrder() {
    var selectedOption = document.getElementById('menuOptions');
    var quantity = document.getElementById('quantity').value;
    var price = selectedOption.options[selectedOption.selectedIndex].getAttribute('data-price');
    var total = price * quantity;

    alert('Anda Berlangganan : ' + selectedOption.value + '\nJumlah: ' + quantity + '\nTotal Harga: Rp ' + total);
}
  const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }