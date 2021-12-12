// Funcion para repetir card de Eventos (Unicamente para rellenar el sitio)
let body = document.querySelector(".body");
let x = "";
for (let i = 0; i < 12; i++) {
  // Componente de Card de Evento
  x =
    x +
    `
    <div class="p-6 m-6 bg-white rounded-lg shadow-md ">
                <img src="https://source.unsplash.com/300x300/?random" alt="" class="object-cover object-center w-full rounded-lg h-72">
                <div class="mt-6 mb-2">
                    <span class="block text-2xl font-bold text-secondary-500">Encuentro relajante</span>
                </div>
                <div class="grid grid-cols-2 space-y-3">
                    <div class="col-span-2">
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="px-3 text-secondary-400">Parque Central, España</span>
                        </p>
                    </div>
                    <div class="col-span-2">
                        <div class="inline-block">
                            <p class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="px-3 text-secondary-400">15/10/2021</span>
                            </p>
                        </div>
                        <div class="inline-block">
                            <p class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="inline-block px-3 text-secondary-400">14:00 p.m</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="px-3 text-secondary-400">30</span>
                        </p>
                    </div>
                </div>
            </div>
    `;
}

body.innerHTML = x;

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
  