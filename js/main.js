// Datepicker Filtros Cuando
$(function() {
  $('input[name="datetimes"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  });
});


// Función para cortar la imagen de Crear Evento
let resize = $('#uploadImg').croppie({
  enableExif: true,
  enableOrientation: true,    
  viewport: { 
      width: 200,
      height: 200
  },
  boundary: {
      width: 300,
      height: 300
  }
});

// Inicio de Subir imagen en Crear Eventos

  // Función de cambio para renderizar la imagen
  $('#image').on('change', function () { 
    document.getElementById('divHid').classList.remove('hidden');
    document.getElementById('btnCrop').classList.remove('hidden');
  var reader = new FileReader();
    reader.onload = function (e) {
      resize.croppie('bind',{
        url: e.target.result
      }).then(function(){
      });
    }
    reader.readAsDataURL(this.files[0]);
  });

  // Boton para subir la imagen
  $('#btnUpload').on('click', function (ev) {
    resize.croppie('result', {
      type: 'canvas',
      size: 'original',
      quality: 1
    }).then(function (img) {
      // $.ajax({
      //   url: "image-crop.php",
      //   type: "POST",
      //   data: {"image":img},
      //   success: function (data) {
      //     html = '<img src="' + img + '" />';
      //     $("#preview-crop-image").html(html);
      //   }
      // });
      html = '<img id="imagePreview" class="w-full md:h-96 h-60 rounded-lg p-5 object-contain" src="' + img + '" />';
          $("#preview-crop-image").html(html);
    });

    
    document.getElementById('divHid').classList.add('hidden');
    document.getElementById('divContainer').classList.remove('hidden');
    document.getElementById('btnCrop').classList.add('hidden');
    document.getElementById('divContainer').classList.add('hidden');
    document.getElementById('image').classList.add('hidden');
    document.getElementById('btnBorrar').classList.remove('hidden');
  });

  // Escoger imagen desde carrusel - 1
  $('#imgCarrusel1').on('click', function (ev) {
    resize.croppie('result', {
      type: 'canvas',
      size: 'original',
      quality: 1
    }).then(function (img) {
      // $.ajax({
      //   url: "image-crop.php",
      //   type: "POST",
      //   data: {"image":img},
      //   success: function (data) {
      //     html = '<img src="' + img + '" />';
      //     $("#preview-crop-image").html(html);
      //   }
      // });
      let url = document.getElementById('imgCarrusel1').src;
      html = '<img id="imagePreview" class="w-full md:h-96 h-60 rounded-lg p-5 object-contain" src="' + url + '" />';
          $("#preview-crop-image").html(html);
    });

    
    document.getElementById('divHid').classList.add('hidden');
    document.getElementById('btnCrop').classList.add('hidden');
    document.getElementById('divContainer').classList.add('hidden');
    document.getElementById('image').classList.add('hidden');
    document.getElementById('btnBorrar').classList.remove('hidden');
  });

  // Escoger imagen desde carrusel - 2
  $('#imgCarrusel2').on('click', function (ev) {
    resize.croppie('result', {
      type: 'canvas',
      size: 'original',
      quality: 1
    }).then(function (img) {
      // $.ajax({
      //   url: "image-crop.php",
      //   type: "POST",
      //   data: {"image":img},
      //   success: function (data) {
      //     html = '<img src="' + img + '" />';
      //     $("#preview-crop-image").html(html);
      //   }
      // });
      let url = document.getElementById('imgCarrusel2').src;
      html = '<img id="imagePreview" class="w-full md:h-96 h-60 rounded-lg p-5 object-contain" src="' + url + '" />';
          $("#preview-crop-image").html(html);
    });

    
    document.getElementById('divHid').classList.add('hidden');
    document.getElementById('btnCrop').classList.add('hidden');
    document.getElementById('divContainer').classList.add('hidden');
    document.getElementById('image').classList.add('hidden');
    document.getElementById('btnBorrar').classList.remove('hidden');
  });

  // Escoger imagen desde carrusel - 3
  $('#imgCarrusel3').on('click', function (ev) {
    resize.croppie('result', {
      type: 'canvas',
      size: 'original',
      quality: 1
    }).then(function (img) {
      // $.ajax({
      //   url: "image-crop.php",
      //   type: "POST",
      //   data: {"image":img},
      //   success: function (data) {
      //     html = '<img src="' + img + '" />';
      //     $("#preview-crop-image").html(html);
      //   }
      // });
      let url = document.getElementById('imgCarrusel3').src;
      html = '<img id="imagePreview" class="w-full md:h-96 h-60 rounded-lg p-5 object-contain" src="' + url + '" />';
          $("#preview-crop-image").html(html);
    });

    
    document.getElementById('divHid').classList.add('hidden');
    document.getElementById('btnCrop').classList.add('hidden');
    document.getElementById('divContainer').classList.add('hidden');
    document.getElementById('image').classList.add('hidden');
    document.getElementById('btnBorrar').classList.remove('hidden');
  });


  // Boton de Borrar
  $('#btnDelete').on('click', function (ev) {
      let image = document.getElementById('imagePreview');
      image.parentNode.removeChild(image);
      document.getElementById('divContainer').classList.remove('hidden');
      document.getElementById('btnCrop').classList.add('hidden');
      document.getElementById('btnBorrar').classList.add('hidden');
      document.getElementById('divHid').classList.add('hidden');
      document.getElementById('image').classList.remove('hidden');
    });

// Final de Subir imagen en Crear Eventos

