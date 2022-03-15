simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 6, // required
  day: 28, // required
  hours: 14, // Default is 0 [0-23] integer
  minutes: 50, // Default is 0 [0-59] integer
  seconds: 10, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "Día", plural: "Días" },
    hours: { singular: "Hora", plural: "Horas" },
    minutes: { singular: "Minuto", plural: "Minutos" },
    seconds: { singular: "Segundo", plural: "Segundos" },
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: "simply-countdown-inline", //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: true,
  onEnd: function () {
    // your code
    return;
  },
  refresh: 1000, //default refresh every 1s
  sectionClass: "simply-section", //section css class
  amountClass: "simply-amount", // amount css class
  wordClass: "simply-word", // word css class
  zeroPad: true,
  countUp: false, // enable count up if set to true
});

//Clases Tailwind Números
let amountClasses = ['text-secondary-500', 'text-3xl', 'font-semibold'];
document.querySelectorAll('.simply-amount').forEach(el=>el.classList.add(...amountClasses));

//Clases Tailwind Palabras
let wordClasses = ['text-gray-500', 'text-xs', 'font-medium'];
document.querySelectorAll('.simply-word').forEach(el=>el.classList.add(...wordClasses));