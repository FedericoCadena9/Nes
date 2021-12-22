
function edit() {
  document.getElementById("title").innerText = "Editar Evento";
  document.getElementById("subText").classList.add("hidden");
  document.getElementById("person").classList.remove("hidden");
}

document.querySelector('.btnCrear').addEventListener('click', () => {
  document.getElementById("title").innerText = "Crear Evento";
  document.getElementById("subText").classList.remove("hidden");
  document.getElementById("person").classList.add("hidden");
})
  
// Funcion Más Eventos

let btnClone1 = document.getElementById('clone1');

btnClone1.addEventListener('click', () => {
  document.getElementById('hiddenCard1').classList.remove('hidden');
})


// Plugin de input de imagen (Filepond)
FilePond.registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImageCrop,
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
);

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement, {
    acceptedFileTypes: ["image/png, image/jpeg"],
    labelIdle: `Arrastre y suelte su imagen o <span class="filepond--label-action">Busque aquí.</span>`,
    imageCropAspectRatio: 1,
    imageResizeTargetWidth: 256,
    imageResizeMode: "contain",
    imageTransformVariants: {
    thumb_medium_: (transforms) => {
        transforms.resize.size.width = 512;
        transforms.crop.aspectRatio = 0.5;
        return transforms;
    },
    thumb_small_: (transforms) => {
        transforms.resize.size.width = 64;
        return transforms;
    },
},
    onaddfile: (err, fileItem) => {
    console.log(err, fileItem.getMetadata("resize"));
    },

    // Función que obtiene la imagen y ademas la agrega al body
    // onpreparefile: (fileItem, outputFiles) => {
    // outputFiles.forEach((output) => {
    //     const img = new Image();
    //     img.src = URL.createObjectURL(output.file);
    //     document.body.appendChild(img);
    //     });
    // },
});

//Carrusel

var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


//   Array de Fecha
const MONTH_NAMES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const MONTH_SHORT_NAMES = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const DAYS = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  function app() {
    return {
      showDatepicker: false,
      datepickerValue: "",
      selectedDate: "2021-02-04",
      dateFormat: "DD-MM-YYYY",
      month: "",
      year: "",
      no_of_days: [],
      blankdays: [],
      initDate() {
        let today;
        if (this.selectedDate) {
          today = new Date(Date.parse(this.selectedDate));
        } else {
          today = new Date();
        }
        this.month = today.getMonth();
        this.year = today.getFullYear();
        this.datepickerValue = this.formatDateForDisplay(
          today
        );
      },
      formatDateForDisplay(date) {
        let formattedDay = DAYS[date.getDay()];
        let formattedDate = ("0" + date.getDate()).slice(
          -2
        ); // appends 0 (zero) in single digit date
        let formattedMonth = MONTH_NAMES[date.getMonth()];
        let formattedMonthShortName =
          MONTH_SHORT_NAMES[date.getMonth()];
        let formattedMonthInNumber = (
          "0" +
          (parseInt(date.getMonth()) + 1)
        ).slice(-2);
        let formattedYear = date.getFullYear();
        if (this.dateFormat === "DD-MM-YYYY") {
          return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`; // 02-04-2021
        }
        if (this.dateFormat === "YYYY-MM-DD") {
          return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`; // 2021-04-02
        }
        if (this.dateFormat === "D d M, Y") {
          return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`; // Tue 02 Mar 2021
        }
        return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
      },
      isSelectedDate(date) {
        const d = new Date(this.year, this.month, date);
        return this.datepickerValue ===
          this.formatDateForDisplay(d) ?
          true :
          false;
      },
      isToday(date) {
        const today = new Date();
        const d = new Date(this.year, this.month, date);
        return today.toDateString() === d.toDateString() ?
          true :
          false;
      },
      getDateValue(date) {
        let selectedDate = new Date(
          this.year,
          this.month,
          date
        );
        this.datepickerValue = this.formatDateForDisplay(
          selectedDate
        );
        this.isSelectedDate(date);
        this.showDatepicker = false;
      },
      getNoOfDays() {
        let daysInMonth = new Date(
          this.year,
          this.month + 1,
          0
        ).getDate();
        // find where to start calendar day of week
        let dayOfWeek = new Date(
          this.year,
          this.month
        ).getDay();
        let blankdaysArray = [];
        for (var i = 1; i <= dayOfWeek; i++) {
          blankdaysArray.push(i);
        }
        let daysArray = [];
        for (var i = 1; i <= daysInMonth; i++) {
          daysArray.push(i);
        }
        this.blankdays = blankdaysArray;
        this.no_of_days = daysArray;
      },
    };
  } 
  