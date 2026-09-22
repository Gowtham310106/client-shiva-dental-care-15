// Client Interactive Actions
function handleInquiry(e, waNumber, bizName) {
  e.preventDefault();
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const msg = document.getElementById('cust-msg').value.trim();

  const text = `Hello ${bizName}! My name is ${name} (Phone: ${phone}). ${msg ? 'Enquiry: ' + msg : 'I would like to inquire about your services.'}`;
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
