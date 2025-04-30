// Preloader de 3 segundos exactos
setTimeout(function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');
}, 3000); // 3000 milisegundos = 3 segundos

// Tema oscuro/claro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Verificar preferencia del usuario
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Simulación de feed de Instagram
function loadInstagramFeed() {
    const instagramFeed = document.getElementById('instagramFeed');
    
    // Datos simulados de Instagram (en un caso real, estos vendrían de una API)
    const instagramPosts = [
        {
            id: 1,
            imageUrl: 'imagenes/canchasuni.jpeg',
            userAvatar: 'https://i.pravatar.cc/150?img=7',
            userName: 'viajero_usm1',
            caption: 'Descubrí este increíble lugar en la uni para disfrutar del aire libre y juagar. ¡100% recomendado! #USMViajeros #ArepasCaracas',
            likes: 124,
            comments: 23
        },
        {
            id: 2,
            imageUrl: 'imagenes/fotoUni.jpg',
            userAvatar: 'https://i.pravatar.cc/150?img=8',
            userName: 'explorador_usm',
            caption: 'El mejor sitio para estudiar, sin duda no podria faltar esta foto. #EstudiarEnCaracas #USMViajeros',
            likes: 89,
            comments: 15
        },
        {
            id: 3,
            imageUrl: 'imagenes/cpraga.jpg',
            userAvatar: 'https://i.pravatar.cc/150?img=9',
            userName: 'aventurera_usm',
            caption: 'Rinconcito escondido en Caracas para relajarse los fines de semana. La vista es espectacular al atardecer. #Caracas #USMViajeros',
            likes: 215,
            comments: 42
        },
        {
            id: 4,
            imageUrl: 'imagenes/burger.jpeg',
            userAvatar: 'https://i.pravatar.cc/150?img=10',
            userName: 'chef_viajero',
            caption: 'Este restaurante cerca de la USM tiene las mejores hamburguesas gourmet a precio de estudiante. ¡No se lo pierdan! #ComidaEstudiantil #USMViajeros',
            likes: 176,
            comments: 31
        },
        {
            id: 5,
            imageUrl: 'https://arquitecturayempresa.es/sites/default/files/content/imagen40.jpg',
            userAvatar: 'https://i.pravatar.cc/150?img=11',
            userName: 'deportista_usm',
            caption: 'Excelente lugar para practicar deportes al aire libre con amigos. Canchas bien mantenidas y buen ambiente. #DeportesUSM #Caracas',
            likes: 92,
            comments: 18
        },
        {
            id: 6,
            imageUrl: 'imagenes/arqui.jpeg',
            userAvatar: 'https://i.pravatar.cc/150?img=12',
            userName: 'naturaleza_usm',
            caption: 'Expo de arquitectura, Facultad de Ing y Arq. #Naturaleza #USMViajeros',
            likes: 203,
            comments: 37
        }
    ];
    
    // Generar el HTML para cada publicación
    instagramPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'instagram-post';
        postElement.innerHTML = `
            <img src="${post.imageUrl}" alt="Publicación de ${post.userName}" class="post-image">
            <div class="post-content">
                <div class="post-user">
                    <img src="${post.userAvatar}" alt="${post.userName}" class="user-avatar">
                    <span class="user-name">${post.userName}</span>
                </div>
                <p class="post-caption">${post.caption}</p>
                <div class="post-actions">
                    <span class="post-likes"><i class="fas fa-heart"></i> ${post.likes}</span>
                    <span><i class="fas fa-comment"></i> ${post.comments}</span>
                </div>
            </div>
        `;
        instagramFeed.appendChild(postElement);
    });
}

// Cargar lugares populares
function loadPopularPlaces() {
    const placesGrid = document.getElementById('placesGrid');
    
    // Datos simulados de lugares (en un caso real, estos vendrían de una API)
    const places = [
        {
            id: 1,
            title: 'Sushi & Cebiches"',
            category: 'food',
            imageUrl: 'imagenes/sushi.jpeg',
            description: 'Los mejores sushis de Caracas, con una gran variedad de roles.',
            rating: 4.8,
            location: 'Los Paolos grandes'
        },
        {
            id: 2,
            title: 'Parque del Este',
            category: 'entertainment',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Laguna_de_Parque_del_Este_%28actual_Pq.Gen._Fco._de_Miranda%29_en_diciembre_2011.jpg',
            description: 'Ideal para caminatas, deportes al aire libre o simplemente relajarse en un entorno natural.',
            rating: 4.7,
            location: 'Av. Francisco de Miranda'
        },
        {
            id: 3,
            title: 'Centro Comercial Sambil',
            category: 'entertainment',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST81CFrAXVxWbJshi6QAOairb8I08r5ixWRg&s',
            description: 'El centro comercial más grande de Caracas con cines, restaurantes y tiendas de todo tipo.',
            rating: 4.5,
            location: 'Chacao'
        },
        {
            id: 4,
            title: 'Mykonos',
            category: 'food',
            imageUrl: 'https://www.noticias24hrs.com.ve/wp-content/uploads/2024/10/photo-output-6-scaled.jpeg',
            description: 'Descubre un pedacito de Grecia en Caracas, con los mejores yogures naturales',
            rating: 4.9,
            location: ' Av. Ávila, Caracas 1060, Distrito Capital'
        },
        {
            id: 5,
            title: 'CCS PADEL CLUB',
            category: 'sports',
            imageUrl: 'https://diariodelosandes.com/wp-content/uploads/2024/09/Centro-Deportivo-San-Luis-Canchas-de-Padel-3.jpg',
            description: 'Instalaciones deportivas, ofrecen canchas y clases para todos los nivele',
            rating: 4.6,
            location: 'Entre 5ta y, 2da avenida de, 6ta transversal, Caracas 1060, Miranda'
        },
        {
            id: 6,
            title: 'MoDo Caracas',
            category: 'popular',
            imageUrl: 'https://oda-juanmachado.com/wp-content/uploads/2023/05/01-2.jpg.webp',
            description: 'multi-espacio de entretenimiento y gastronomia, cuanta con 17 espacios diferentes',
            rating: 4.9,
            location: 'Casa del Pueblo, Calle Ávila, entre Mohedano y, Av. Sta. Teresa de Jesús, Caracas 1060, Miranda'
        },
        {
            id: 7,
            title: 'Furore Ristorante',
            category: 'food',
            imageUrl: 'https://degusta-pictures-hd.b-cdn.net/5_102951_r_0.jpg?v=899',
            description: 'Restaurante de comida italiana, con un ambiente acogedor y una gran variedad de platos.',
            rating: 4.7,
            location: 'Las Mercedes'
        },
        {
            id: 8,
            title: 'FoodKart Caracas',
            category: 'entertainment',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipN7VIy-uVvTAZL7B7QjuLZ8gb7JxkPlrgFZ_Y7E=s680-w680-h510',
            description: 'Un espacio para los amantes del karting y vivir una experiencia diferente.',
            rating: 4.4,
            location: 'Parque Cerro Verde'
        }
    ];
    
    // Generar el HTML para cada lugar
    places.forEach(place => {
        const placeElement = document.createElement('div');
        placeElement.className = 'place-card';
        placeElement.dataset.category = place.category;
        
        // Determinar la etiqueta de categoría
        let categoryLabel = '';
        switch(place.category) {
            case 'food':
                categoryLabel = 'Comida';
                break;
            case 'entertainment':
                categoryLabel = 'Distracción';
                break;
            case 'sports':
                categoryLabel = 'Deportes';
                break;
            case 'popular':
                categoryLabel = 'Popular';
                break;
        }
        
        placeElement.innerHTML = `
            <img src="${place.imageUrl}" alt="${place.title}" class="place-image">
            <div class="place-info">
                <h3 class="place-title">${place.title}</h3>
                <span class="place-category">${categoryLabel}</span>
                <p class="place-description">${place.description}</p>
                <div class="place-rating">
                    <div class="stars">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.floor(place.rating))}${place.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    </div>
                    <span class="rating-value">${place.rating}</span>
                </div>
                <div class="place-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${place.location}</span>
                </div>
            </div>
        `;
        placesGrid.appendChild(placeElement);
    });
    
    // Filtrar lugares por categoría
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            const category = button.dataset.category;
            const places = document.querySelectorAll('.place-card');
            
            places.forEach(place => {
                if (category === 'all' || place.dataset.category === category) {
                    place.style.display = 'block';
                } else {
                    place.style.display = 'none';
                }
            });
        });
    });
}

// Sistema de recomendaciones de usuarios
function setupUserRecommendations() {
    const recommendationForm = document.getElementById('recommendationForm');
    const commentsList = document.getElementById('commentsList');
    
    // Cargar comentarios existentes del localStorage
    loadComments();
    
    // Manejar el envío del formulario
    recommendationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userName = document.getElementById('userName').value;
        const userComment = document.getElementById('userComment').value;
        const userRating = document.getElementById('userRating').value;
        const userImage = document.getElementById('userImage').files[0];
        const avatarImage = document.getElementById('avatarImage').src;
        
        // Crear nuevo comentario
        const newComment = {
            id: Date.now(),
            userName,
            userComment,
            userRating,
            userImage: userImage ? URL.createObjectURL(userImage) : null,
            avatarImage,
            date: new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            location: 'Caracas, Venezuela' // En una aplicación real, esto vendría del mapa
        };
        
        // Agregar comentario a la lista
        addCommentToDOM(newComment);
        
        // Guardar en localStorage
        saveComment(newComment);
        
        // Resetear formulario
        recommendationForm.reset();
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por tu recomendación! Se ha publicado correctamente.');
    });
    
    // Cargar comentarios del localStorage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('usm-viajeros-comments')) || [];
        comments.forEach(comment => {
            addCommentToDOM(comment);
        });
    }
    
    // Agregar comentario al DOM
    function addCommentToDOM(comment) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.dataset.id = comment.id;
        
        let imageHTML = '';
        if (comment.userImage) {
            imageHTML = `<img src="${comment.userImage}" alt="Imagen de ${comment.userName}" class="comment-image">`;
        }
        
        commentElement.innerHTML = `
            <img src="${comment.avatarImage}" alt="Avatar de ${comment.userName}" class="comment-avatar">
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-user">${comment.userName}</span>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <div class="comment-rating">
                    <div class="stars">
                        ${'<i class="fas fa-star"></i>'.repeat(comment.userRating)}
                    </div>
                </div>
                <p class="comment-text">${comment.userComment}</p>
                ${imageHTML}
                <div class="comment-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${comment.location}</span>
                </div>
                <div class="comment-actions">
                    <button class="comment-action">
                        <i class="fas fa-thumbs-up"></i> Me gusta
                    </button>
                    <button class="comment-action">
                        <i class="fas fa-share"></i> Compartir
                    </button>
                </div>
            </div>
        `;
        
        commentsList.prepend(commentElement);
    }
    
    // Guardar comentario en localStorage
    function saveComment(comment) {
        const comments = JSON.parse(localStorage.getItem('usm-viajeros-comments')) || [];
        comments.unshift(comment);
        localStorage.setItem('usm-viajeros-comments', JSON.stringify(comments));
    }
}

// Creador de avatares
function setupAvatarCreator() {
    const avatarOptions = document.querySelectorAll('.avatar-option');
    const avatarImage = document.getElementById('avatarImage');
    
    avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedAvatar = option.querySelector('img').src;
            avatarImage.src = selectedAvatar;
            
            // Resaltar la opción seleccionada
            avatarOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
}

// Simular mapa interactivo (en una aplicación real se usaría Google Maps API o similar)
function setupMap() {
    const map = document.getElementById('map');
    
    map.addEventListener('click', () => {
        // En una aplicación real, aquí se implementaría la lógica del mapa
        map.innerHTML = '<p style="text-align: center; padding-top: 100px;">Mapa interactivo (simulación)</p>';
    });
}

// Smooth scrolling para los enlaces del menú
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicializar todas las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadInstagramFeed();
    loadPopularPlaces();
    setupUserRecommendations();
    setupAvatarCreator();
    setupMap();
    setupSmoothScrolling();
});