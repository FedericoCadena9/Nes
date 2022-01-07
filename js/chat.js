function chat() {
  return {
    users: [
      {
        name: "Zack Webster",
		age: '32',
		location: 'Madrid, España',
        image: "https://i.pravatar.cc/300?img=51",
        online: true,
        message: "Buen día Pedro.",
        read: true,
        circle: "1",
        time: "Ahora",
      },
      {
        name: "Wilson Doe",
		age: '27',
		location: 'CDMX, México',
        image: "https://i.pravatar.cc/300?img=52",
        online: true,
        message:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eaque enim tenetur doloribus quae impedit itaque exercitationem at dolorum ad! Quos deleniti nihil voluptate in qui odit id, doloremque tenetur!",
        read: true,
        circle: "6",
        time: "5 min",
      },
      {
        name: "James Clark",
		age: '30',
		location: 'Barcelona, España',
        image: "https://i.pravatar.cc/300?img=55",
        online: false,
        message: "Saludos!",
        read: false,
        circle: "",
        time: "14:04",
      },
      {
        name: "Nova Lee",
		age: '28',
		location: 'Londres, Inglaterra',
        image: "https://i.pravatar.cc/300?img=47",
        online: true,
        message: "Como estas?",
        read: false,
        circle: "",
        time: "Ayer",
      },
      {
        name: "Max Alexander",
		age: '23',
		location: 'Madrid, España',
        image: "https://i.pravatar.cc/300?img=48",
        online: true,
        message: "Nos vemos pronto:)",
        read: false,
        circle: "",
        time: "15/03/21",
      },
      {
        name: "Elisa Fox",
		age: '27',
		location: 'Cancún, México',
        image: "https://i.pravatar.cc/300?img=36",
        online: false,
        message: "El costo por este pastel seria de $2500",
        read: true,
        circle: "2",
        time: "26/03/20",
      },
    ],

    groups: [
      {
        name: "Grupo relajante",
        text: "",
        image: "https://source.unsplash.com/300x300/?random",
        color: "bg-yellow-600",
        online: true,
        user: "Luis",
        message: " Así fue.",
        read: true,
        circle: "2",
        time: "Ahora",
      },
      {
        name: "Encuentro deportivo",
        text: "ED",
        image: "",
        color: "bg-red-600",
        online: false,
        user: "Tú",
        message: "¿A qué hora es el encuentro?",
        read: false,
        circle: "",
        time: "10 min",
      },
      {
        name: "Programadores",
        text: "P",
        image: "",
        color: "bg-gray-800",
        online: true,
        user: "Pablo",
        message: "No",
        read: true,
        circle: "1",
        time: "Ayer",
      },
    ],

	openProfile: true


  };
}



let userList = document.getElementById("userList");
let chatMsg = document.getElementById("chatMsg");
let chatPerfil = document.getElementById("chatPerfil");

document.querySelector(".chatBtn").addEventListener("click", () => {
  chatMsg.classList.remove("hidden");
  userList.classList.add("hidden");
});

document.getElementById("btnRegresar").addEventListener("click", () => {
  chatMsg.classList.add("hidden");
  userList.classList.remove("hidden");
});

document.getElementById("btnPerfil").addEventListener("click", () => {
  chatMsg.classList.add("hidden");
  chatPerfil.classList.remove("hidden");
});

document.getElementById("btnRegresar1").addEventListener("click", () => {
  chatMsg.classList.remove("hidden");
  chatPerfil.classList.add("hidden");
});
