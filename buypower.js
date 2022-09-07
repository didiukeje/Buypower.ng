window.onload = () => {
    document.getElementById('alert-close').onclick = function() {
      this.parentNode.remove()
      return false;
    };
};

const meterNoInput = document.getElementById('meterNo');
const discoInput = document.getElementById('disco');
const vendAmount = document.getElementById('vendAmount');

const inputChangeHandler = () => {
  const paymentButton = document.getElementById("buy-electricity-btn");
  if (!meterNoInput.value || !discoInput.value || !vendAmount.value) {
		paymentButton.disabled = true;
	} else {
		paymentButton.disabled = false;
	}
}

meterNoInput.addEventListener('change', inputChangeHandler);
discoInput.addEventListener('change', inputChangeHandler);
vendAmount.addEventListener('change', inputChangeHandler);


const removeFranchiseId = document.getElementById('disco'); 
const array = document.querySelectorAll('.location')
removeFranchiseId.addEventListener('change', function handleChange(event){
  if (event.target.value === '18') {
    array.forEach((e) => e.style.setProperty('display', 'block', 'important'))
    console.log(array, "BLOCK");
  } else {
    array.forEach((e) => e.style.setProperty('display', 'none', 'important'));
    console.log(array, "NONE");
  }
});
