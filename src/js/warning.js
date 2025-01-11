if (!sessionStorage.getItem('wpgbingo-warning')) {
  Swal.fire({
    title: 'Warning',
    text: 'I understand that cycling in Winnipeg includes areas where cyclists are not separated from traffic, that suggested routes may not reflect current conditions and that I am responsible for planning a route that suits current infrastructure and road conditions as well as my personal health and ability.',
    confirmButtonText: 'I agree',
    icon: 'info',
    heightAuto: false,
  });
  sessionStorage.setItem('wpgbingo-warning', true);
}
