//no wa admin
$("#noAdmin").val('6287737072717');
$('.whatsapp-btn').click(function () {
  $('#WaForm').toggleClass('toggle');
}

);
// Onclick Whatsapp Sent!
$('#WaForm .submit').click(WhatsApp);
$("#WaForm input, #whatsapp textarea").keypress(function () {
  if (event.which==13) WhatsApp();
}

);
var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z] {
  2, 4
}

)$/;
function WhatsApp() {
  var ph='';
  if ($('#WaForm .nama').val()=='') {
    // Cek Nama
    ph=$('#WaForm .nama').attr('placeholder');
    alert('Silahkan tulis ' + ph);
    $('#WaForm .nama').focus();
    return false;
  }
  else if ($('#WaForm .nowhatsapp').val()=='') {
    // Cek Whatsapp
    ph=$('#WaForm .nowhatsapp').attr('placeholder');
    alert('Silahkan tulis ' + ph);
    $('#WaForm .nowhatsapp').focus();
    return false;
  }
  else if ($('#WaForm .warna').val()=='') {
    // Cek Whatsapp
    ph=$('#WaForm .warna').attr('placeholder');
    alert('Silahkan pilih ' + ph);
    $('#WaForm .warna').focus();
    return false;
  }
  else if ($('#WaForm .ukuran').val()=='') {
    // Cek Whatsapp
    ph=$('#WaForm .ukuran').attr('placeholder');
    alert('Silahkan pilih ' + ph);
    $('#WaForm .ukuran').focus();
    return false;
  }
  else if ($('#WaForm .bayar').val()=='') {
    // Cek Whatsapp
    ph=$('#WaForm .bayar').attr('placeholder');
    alert('Silahkan pilih ' + ph);
    $('#WaForm .bayar').focus();
    return false;
  }
  else if ($('#WaForm .alamat').val()=='') {
    // Cek Whatsapp
    ph=$('#WaForm .alamat').attr('placeholder');
    alert('Silahkan tulis ' + ph);
    $('#WaForm .alamat').focus();
    return false;
  }
  else {
    // Check Device (Mobile/Desktop)
    var url_wa='https://api.whatsapp.com/send';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      url_wa='whatsapp://send/';
    }
    // Get Value
    var tujuan=$('#WaForm .tujuan').val(),
    via_url=location.href,
    warna=$('#WaForm .warna').val(),
    ukuran=$('#WaForm .ukuran').val(),
    bayar=$('#WaForm .bayar').val(),
    nama=$('#WaForm .nama').val(),
    pesanan=$('#WaForm .pesanan').val(),
    nowhatsapp=$('#WaForm .nowhatsapp').val(),
    alamat=$('#WaForm .alamat').val();
    $(this).attr('href', url_wa + '?phone= ' + tujuan + '&text=' + pesanan + ' %0A%0A*Nama :* ' + nama + ' %0A*Whatsapp :* ' + nowhatsapp + ' %0A*Warna :* ' + warna + ' %0A*Ukuran :* ' + ukuran + ' %0A*Cara%20Bayar :* ' + bayar + ' %0A*Alamat :* ' + alamat + ' %0A%0Avia ' + via_url);
    var w=960,
    h=540,
    left=Number((screen.width / 2) - (w / 2)),
    tops=Number((screen.height / 2) - (h / 2)),
    popupWindow=window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
    popupWindow.focus();
    return false;
  }
}
