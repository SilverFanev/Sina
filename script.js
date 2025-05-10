document.addEventListener('DOMContentLoaded', function() {
    // Ajustement des marges
    const header = document.getElementById('main-header');
    const footer = document.querySelector('footer');
    document.body.style.paddingTop = `${header.offsetHeight}px`;
    document.body.style.paddingBottom = `${footer.offsetHeight}px`;

    // Données des produits (avec chemins d'images valides)
const products = [
        {
            id: 1, 
            name: "Améthyste", 
            price: 29, 
            rating: 4, 
            desc: "Pierre spirituelle pour calmer l'esprit",
            image: "images/amethyste.jpg" 
        },
        { 
            id: 2, 
            name: "Quartz Rose", 
            price: 34, 
            rating: 5, 
            desc: "Pierre de l'amour qui apaise les émotions",
            image: "images/quartz-rose.jpg"
        },
        { 
        	id: 3,
		name: "Turquoise",
		price: 39, rating: 4,
		desc: "Pierre protectrice et équilibrante",
		image: "images/turquoise.jpg"
	},
        { 
        	id: 4,
		name: "Labradorite",
		price: 45,
		rating: 5,
		desc: "Pierre magique aux reflets bleutés",
		image: "images/labradorite.jpg" 
	},
        {
        	id: 5,
		name: "Oeil de Tigre",
		price: 27, rating: 3,
		desc: "Pierre de protection et de courage",
		image: "images/oeil-de-tigre.jpg" 
	},
        { 
        	id: 6,
		name: "Aventurine",
		price: 32,
		rating: 4,
		desc: "Pierre de chance et de prospérité",
		image: "images/aventurine.jpg" 
	},
        { 
        	id: 7,
		name: "Lapis Lazuli",
		price: 49, rating: 5,
		desc: "Pierre de sagesse et de vérité",
		image: "images/lapis-lazuli.jpg" 
	},
        { 
		id: 8,
		name: "Jade",
		price: 42,
		rating: 4,
		desc: "Pierre de pureté et de sérénité",
		image: "images/jade.jpg" 
	},
        { 
		id: 9,
		name: "Cornaline",
		price: 28,
		rating: 3,
		desc: "Pierre de vitalité et de créativité",
		image: "images/cornaline.jpg" 
	},
        { 
        	id: 10,
		name: "Amazonite",
		price: 36,
		rating: 4,
		desc: "Pierre de communication et d'harmonie",
		image: "images/amazonite.jpg" 
	},
	{ 
		id: 11,
		name: "Amazonite",
		price: 37,
		rating: 2,
		desc: "Pierre de communication",
		image: "images/Bracelet_Perte_de_Poids_en_Apatite.jpg" 
	}
    ];

    // Génération des produits
    const gallery = document.querySelector('.gallery');
    
    // Vide la galerie avant d'ajouter des produits
    gallery.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bracelet-card';
        card.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image"
                     onerror="this.src='./images/placeholder.jpg'">
            </div>
            <div class="card-info">
                <h3>${product.name}</h3>
                <div class="price-rating">
                    <p class="price">${product.price}€</p>
                    <div class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = `produit.html?id=${product.id}`;
        });
        
        gallery.appendChild(card);
    });

    // Fonctionnalité de recherche
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const term = searchInput.value.toLowerCase();
            document.querySelectorAll('.bracelet-card').forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = name.includes(term) ? 'block' : 'none';
            });
        }
    });
});
