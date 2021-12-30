
//Función para agregar Boton de Crear Evento
window.addEventListener('scroll', () => {
  let anima = document.getElementById('cardBody');
  // let animaBottom = document.getElementById('cardFooter');
  let btnCrear = document.getElementById('btnCrear');
  let position = anima.getBoundingClientRect().top;
  // let positionBottom = anima.getBoundingClientRect().top;
  let sizeScreen = window.innerHeight / 3.5;

  if(position < sizeScreen)
  {
    btnCrear.classList.remove('hidden');
    btnCrear.classList.remove('scale-in-center-reverse');
    btnCrear.classList.add('scale-in-center');
  }
  else
  {
    btnCrear.classList.add('scale-in-center-reverse');
  }
})

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
      html = '<img id="imagePreview" class="w-full h-96 rounded-lg p-5 object-contain" src="' + img + '" />';
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


