function chat() {
    return{
        users: [
			{
				name: "Zack Webster",
				image: "https://i.pravatar.cc/300?img=51",
				online: true,
				message: "Buen día Pedro.",
                read: true,
                circle: '1',
                time: 'Ahora',
			},
			{
				name: "Wilson Doe",
				image: "https://i.pravatar.cc/300?img=52",
				online: true,
				message: " Gracias, me pongo a ello ahrotia mismo.",
                read: true,
                circle: '6',
                time: '5 min',
			},
			{
				name: "James Clark",
				image: "https://i.pravatar.cc/300?img=55",
				online: false,
				message: "Saludos!",
                read: false,
                circle: '',
                time: '14:04',
			},
			{
				name: "Nova Lee",
				image: "https://i.pravatar.cc/300?img=47",
				online: true,
				message: "Como estas?",
                read: false,
                circle: '',
                time: 'Ayer',
			},
			{
				name: "Max Alexander",
				image: "https://i.pravatar.cc/300?img=48",
				online: true,
				message: "Nos vemos pronto:)",
                read: false,
                circle: '',
                time: '15/03/21',
			},
			{
				name: "Elisa Fox",
				image: "https://i.pravatar.cc/300?img=36",
				online: false,
				message: "El costo por este pastel seria de $2500",
                read: true,
                circle: '2',
                time: '26/03/20',
                
			},
		]
    };
};

let userList = document.getElementById('userList');
let chatMsg = document.getElementById('chatMsg');
let chatPerfil = document.getElementById('chatPerfil');


document.querySelector('.chatBtn').addEventListener('click', ()=> {
	chatMsg.classList.remove('hidden');
	userList.classList.add('hidden');
})

document.getElementById('btnRegresar').addEventListener('click', ()=> {
	chatMsg.classList.add('hidden');
	userList.classList.remove('hidden');
})

document.getElementById('btnPerfil').addEventListener('click', ()=> {
	chatMsg.classList.add('hidden');
	chatPerfil.classList.remove('hidden');
})

document.getElementById('btnRegresar1').addEventListener('click', ()=> {
	chatMsg.classList.remove('hidden');
	chatPerfil.classList.add('hidden');
})
