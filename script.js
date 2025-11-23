// ========================================
// METRO DESIGN - INTERACTIVE JAVASCRIPT
// ========================================

// ========================================
// PRODUCTS DATA - Central data structure for all products
// ========================================

const products = [
    {
        id: 1,
        name: 'Floral Maxi Dress',
        price: 1899,
        image: 'productimages/WhatsApp Image 2025-11-20 at 9.40.21 PM.jpeg',
        category: 'Dresses',
        description: 'Elegant floral maxi dress perfect for any occasion. Made with premium quality fabric that flows beautifully. Features a flattering silhouette that suits all body types.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Pink Floral', 'Blue Floral', 'Green Floral'],
        features: ['Premium fabric', 'Comfortable fit', 'Easy care', 'Breathable material'],
        urlSlug: 'floral-maxi-dress'
    },
    {
        id: 2,
        name: 'Printed Co-ord Set',
        price: 2199,
        image: 'productimages/WhatsApp Image 2025-11-20 at 9.40.21 PM (1).jpeg',
        category: 'Co-ords',
        description: 'Stylish printed co-ord set that combines comfort and fashion. Perfect for casual outings and daily wear. The matching top and bottom make styling effortless.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Multi Print', 'Blue Print', 'Black Print'],
        features: ['Matching top and bottom', 'Trendy print', 'Versatile styling', 'All-day comfort'],
        urlSlug: 'printed-coord-set'
    },
    {
        id: 3,
        name: 'Embroidered Kurta Set',
        price: 1699,
        image: 'productimages/WhatsApp Image 2025-11-20 at 9.40.21 PM (2).jpeg',
        category: 'Kurtas & Sets',
        description: 'Beautiful embroidered kurta set that brings traditional elegance to your wardrobe. Features intricate embroidery work and comfortable fabric.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Cream', 'Pink'],
        features: ['Intricate embroidery', 'Traditional design', 'Comfortable fabric', 'Festival ready'],
        urlSlug: 'embroidered-kurta-set'
    },
    {
        id: 4,
        name: 'Linen Shirt Dress',
        price: 1599,
        image: 'productimages/WhatsApp Image 2025-11-20 at 9.40.21 PM (3).jpeg',
        category: 'Dresses',
        description: 'Classic linen shirt dress perfect for summer days. Breathable and stylish with a relaxed fit that keeps you comfortable all day.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Beige', 'White', 'Blue'],
        features: ['100% linen', 'Breathable', 'Classic style', 'Easy to style'],
        urlSlug: 'linen-shirt-dress'
    },
    {
        id: 5,
        name: 'Wrap Top',
        price: 899,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.43 PM.jpeg',
        category: 'Tops & Shirts',
        description: 'Flattering wrap top that suits all body types. Versatile and comfortable, perfect for both casual and professional settings.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Red', 'Navy'],
        features: ['Flattering fit', 'Adjustable wrap', 'Versatile', 'Professional look'],
        urlSlug: 'wrap-top'
    },
    {
        id: 6,
        name: 'Wide Leg Palazzo',
        price: 999,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.43 PM (1).jpeg',
        category: 'Bottoms',
        description: 'Comfortable wide leg palazzo pants perfect for all-day wear. Features an elastic waist and flowy design for maximum comfort.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Grey', 'Brown'],
        features: ['Wide leg', 'Elastic waist', 'Comfortable', 'Flowy design'],
        urlSlug: 'wide-leg-palazzo'
    },
    {
        id: 7,
        name: 'Printed Kaftan',
        price: 1399,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.44 PM.jpeg',
        category: 'Dresses',
        description: 'Relaxed fit printed kaftan ideal for summer and resort wear. Lightweight and breezy with beautiful prints.',
        sizes: ['Free Size'],
        colors: ['Multi', 'Blue', 'Green'],
        features: ['Relaxed fit', 'Beautiful print', 'Lightweight', 'Resort wear'],
        urlSlug: 'printed-kaftan'
    },
    {
        id: 8,
        name: 'Tiered Midi Skirt',
        price: 1299,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.44 PM (1).jpeg',
        category: 'Bottoms',
        description: 'Feminine tiered midi skirt that adds movement to your look. Perfect for creating elegant and playful outfits.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Pink', 'White', 'Blue'],
        features: ['Tiered design', 'Flowy', 'Feminine', 'Midi length'],
        urlSlug: 'tiered-midi-skirt'
    },
    {
        id: 9,
        name: 'Embellished Tunic',
        price: 1799,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.44 PM (2).jpeg',
        category: 'Tops & Shirts',
        description: 'Elegant embellished tunic perfect for festive occasions. Features premium embellishments and quality fabric.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Gold', 'Silver', 'Maroon'],
        features: ['Embellished details', 'Festive wear', 'Elegant design', 'Premium quality'],
        urlSlug: 'embellished-tunic'
    },
    {
        id: 10,
        name: 'Cotton Kurta Set',
        price: 1499,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.45 PM.jpeg',
        category: 'Kurtas & Sets',
        description: 'Comfortable cotton kurta set perfect for everyday wear. Made with pure cotton for breathability and comfort.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Blue', 'Pink'],
        features: ['Pure cotton', 'Breathable', 'Everyday wear', 'Easy care'],
        urlSlug: 'cotton-kurta-set'
    },
    {
        id: 11,
        name: 'Designer Anarkali',
        price: 2499,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.45 PM (1).jpeg',
        category: 'Kurtas & Sets',
        description: 'Stunning designer anarkali for special occasions and celebrations. Features intricate work and premium fabric.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Red', 'Green', 'Blue'],
        features: ['Designer piece', 'Premium fabric', 'Party wear', 'Intricate work'],
        urlSlug: 'designer-anarkali'
    },
    {
        id: 12,
        name: 'Casual Jumpsuit',
        price: 1999,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.45 PM (2).jpeg',
        category: 'Co-ords',
        description: 'Trendy casual jumpsuit that\'s both comfortable and stylish. One-piece convenience with modern design.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Olive'],
        features: ['One-piece styling', 'Casual chic', 'Comfortable', 'Modern design'],
        urlSlug: 'casual-jumpsuit'
    },
    {
        id: 13,
        name: 'Ethnic Palazzo Set',
        price: 1599,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.46 PM.jpeg',
        category: 'Co-ords',
        description: 'Beautiful ethnic palazzo set combining tradition with comfort. Perfect for festivals and celebrations.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Pink', 'Yellow', 'Orange'],
        features: ['Ethnic design', 'Palazzo pants', 'Matching top', 'Festival ready'],
        urlSlug: 'ethnic-palazzo-set'
    },
    {
        id: 14,
        name: 'Festive Lehenga',
        price: 2999,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.46 PM (1).jpeg',
        category: 'Dresses',
        description: 'Gorgeous festive lehenga perfect for weddings and celebrations. Features premium embroidery and beautiful design.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Red', 'Pink', 'Green', 'Blue'],
        features: ['Wedding wear', 'Premium embroidery', 'Traditional', 'Designer piece'],
        urlSlug: 'festive-lehenga'
    },
    {
        id: 15,
        name: 'Summer Maxi Dress',
        price: 1899,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.47 PM.jpeg',
        category: 'Dresses',
        description: 'Light and airy summer maxi dress perfect for warm weather. Flowy and comfortable with beautiful details.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Coral', 'Sky Blue'],
        features: ['Summer perfect', 'Lightweight', 'Maxi length', 'Flowy design'],
        urlSlug: 'summer-maxi-dress'
    },
    {
        id: 16,
        name: 'Trendy Co-ord Set',
        price: 2199,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.47 PM (1).jpeg',
        category: 'Co-ords',
        description: 'Modern trendy co-ord set that makes styling effortless. Perfect for contemporary fashion lovers.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Grey'],
        features: ['Trendy design', 'Matching set', 'Modern fit', 'Versatile'],
        urlSlug: 'trendy-coord-set'
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });


    // ========================================
    // HERO SLIDER
    // ========================================

    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        currentSlide = index;
    }

    // Function to go to next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    // Function to go to previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }

    // Auto-rotate slides every 5 seconds
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Stop auto-rotation
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Start the slideshow
    startSlideShow();

    // Dot navigation - click on dots to change slides
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            stopSlideShow();
            startSlideShow(); // Restart auto-rotation
        });
    });

    // Pause slideshow on hover
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mouseenter', stopSlideShow);
    heroSection.addEventListener('mouseleave', startSlideShow);

    // Keyboard navigation for slider
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevSlide();
            stopSlideShow();
            startSlideShow();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
            stopSlideShow();
            startSlideShow();
        }
    });


    // ========================================
    // DYNAMICALLY GENERATE PRODUCT CARDS
    // ========================================

    const productsGrid = document.getElementById('products-grid');

    // Function to create a single product card
    function createProductCard(product) {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.setAttribute('data-product-id', product.id);
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `View details for ${product.name}`);

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="wishlist-btn" aria-label="Add ${product.name} to wishlist">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">₹${product.price.toLocaleString()}</p>
                <button class="btn btn-small">View Details</button>
            </div>
        `;

        // Make entire card clickable (except wishlist button)
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on wishlist button
            if (e.target.closest('.wishlist-btn')) {
                return;
            }
            navigateToProduct(product.id);
        });

        // Keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigateToProduct(product.id);
            }
        });

        // Wishlist button functionality
        const wishlistBtn = card.querySelector('.wishlist-btn');
        wishlistBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleWishlist(this, product);
        });

        return card;
    }

    // Render all product cards
    function renderProductCards() {
        productsGrid.innerHTML = '';
        products.forEach(product => {
            const card = createProductCard(product);
            productsGrid.appendChild(card);
        });
    }

    // Call this function to generate all product cards
    renderProductCards();


    // ========================================
    // WISHLIST BUTTON INTERACTION
    // ========================================

    function toggleWishlist(button, product) {
        const svg = button.querySelector('svg');
        const path = svg.querySelector('path');

        if (path.getAttribute('fill') === 'none' || !path.getAttribute('fill')) {
            path.setAttribute('fill', 'currentColor');
            path.setAttribute('stroke', 'none');
            button.style.color = '#d94343';

            // Add bounce animation
            button.style.transform = 'scale(1.3)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);

            console.log(`Added ${product.name} to wishlist`);
        } else {
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'currentColor');
            path.setAttribute('stroke-width', '2');
            button.style.color = '';

            console.log(`Removed ${product.name} from wishlist`);
        }
    }


    // ========================================
    // SPA-STYLE ROUTING - Product Detail View
    // ========================================

    const homeView = document.getElementById('home-view');
    const productDetailView = document.getElementById('product-detail-view');

    // Function to navigate to product detail page
    function navigateToProduct(productId) {
        // Update URL without reloading the page
        const product = products.find(p => p.id === productId);
        if (!product) return;

        window.history.pushState({ productId }, '', `?product=${product.urlSlug}`);
        showProductDetail(productId);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Function to show home view
    function showHomeView() {
        homeView.classList.remove('hidden');
        productDetailView.classList.add('hidden');
        window.history.pushState({}, '', 'index.html');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Function to show product detail view
    function showProductDetail(productId) {
        const product = products.find(p => p.id === productId);

        if (!product) {
            showHomeView();
            return;
        }

        // Hide home view, show product detail view
        homeView.classList.add('hidden');
        productDetailView.classList.remove('hidden');

        // Populate product details
        loadProductDetails(product);
    }

    // Function to load product details
    function loadProductDetails(product) {
        // Update breadcrumb and basic info
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-category').textContent = product.category;
        document.getElementById('product-price').textContent = `₹${product.price.toLocaleString()}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-main-image').src = product.image;
        document.getElementById('product-main-image').alt = product.name;
        document.getElementById('breadcrumb-product').textContent = product.name;

        // Populate sizes
        const sizeOptions = document.getElementById('size-options');
        sizeOptions.innerHTML = '';
        product.sizes.forEach((size, index) => {
            const sizeBtn = document.createElement('div');
            sizeBtn.className = 'size-option' + (index === 0 ? ' selected' : '');
            sizeBtn.textContent = size;
            sizeBtn.addEventListener('click', function() {
                document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
            });
            sizeOptions.appendChild(sizeBtn);
        });

        // Populate colors
        const colorOptions = document.getElementById('color-options');
        colorOptions.innerHTML = '';
        product.colors.forEach((color, index) => {
            const colorBtn = document.createElement('div');
            colorBtn.className = 'color-option' + (index === 0 ? ' selected' : '');
            colorBtn.textContent = color;
            colorBtn.addEventListener('click', function() {
                document.querySelectorAll('.color-option').forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
            });
            colorOptions.appendChild(colorBtn);
        });

        // Populate features
        const featuresList = document.getElementById('product-features');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Setup quantity controls
        setupQuantityControls();

        // Setup action buttons
        setupProductActions(product);

        // Load related products
        loadRelatedProducts(product);
    }

    // Setup quantity controls
    function setupQuantityControls() {
        const quantityInput = document.getElementById('quantity');
        const decreaseBtn = document.getElementById('decrease-qty');
        const increaseBtn = document.getElementById('increase-qty');

        decreaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        increaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        });

        // Reset quantity to 1
        quantityInput.value = 1;
    }

    // Setup product action buttons
    function setupProductActions(product) {
        const wishlistBtn = document.getElementById('add-to-wishlist');
        const addToCartBtn = document.getElementById('add-to-cart');
        const buyNowBtn = document.getElementById('buy-now');
        const quantityInput = document.getElementById('quantity');

        // Wishlist button
        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const svg = this.querySelector('svg path');
            if (this.classList.contains('active')) {
                svg.setAttribute('fill', 'currentColor');
                svg.setAttribute('stroke', 'none');
            } else {
                svg.setAttribute('fill', 'none');
                svg.setAttribute('stroke', 'currentColor');
                svg.setAttribute('stroke-width', '2');
            }
        });

        // Add to Cart button
        addToCartBtn.addEventListener('click', function() {
            const selectedSize = document.querySelector('.size-option.selected')?.textContent || 'N/A';
            const selectedColor = document.querySelector('.color-option.selected')?.textContent || 'N/A';
            const quantity = quantityInput.value;

            alert(`Added to cart!\n\nProduct: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nPrice: ₹${(product.price * quantity).toLocaleString()}`);

            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const currentCount = parseInt(cartCount.textContent) || 0;
                cartCount.textContent = currentCount + parseInt(quantity);
            }
        });

        // Buy Now button
        buyNowBtn.addEventListener('click', function() {
            const selectedSize = document.querySelector('.size-option.selected')?.textContent || 'N/A';
            const selectedColor = document.querySelector('.color-option.selected')?.textContent || 'N/A';
            const quantity = quantityInput.value;

            alert(`Proceeding to checkout!\n\nProduct: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nTotal: ₹${(product.price * quantity).toLocaleString()}`);
        });
    }

    // Load related products
    function loadRelatedProducts(currentProduct) {
        const relatedProductsContainer = document.getElementById('related-products');
        relatedProductsContainer.innerHTML = '';

        // Get products from the same category (excluding current product)
        let relatedProducts = products.filter(p =>
            p.category === currentProduct.category && p.id !== currentProduct.id
        );

        // If not enough products in same category, add random products
        if (relatedProducts.length < 4) {
            const otherProducts = products.filter(p =>
                p.category !== currentProduct.category && p.id !== currentProduct.id
            );
            relatedProducts = [...relatedProducts, ...otherProducts].slice(0, 4);
        } else {
            relatedProducts = relatedProducts.slice(0, 4);
        }

        // Create product cards for related products
        relatedProducts.forEach(product => {
            const card = createProductCard(product);
            relatedProductsContainer.appendChild(card);
        });
    }

    // Back to products button
    const backToProductsBtn = document.getElementById('back-to-products');
    backToProductsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showHomeView();
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        const urlParams = new URLSearchParams(window.location.search);
        const productSlug = urlParams.get('product');

        if (productSlug) {
            const product = products.find(p => p.urlSlug === productSlug);
            if (product) {
                showProductDetail(product.id);
            } else {
                showHomeView();
            }
        } else {
            showHomeView();
        }
    });

    // Check URL on page load to show correct view
    function initializeView() {
        const urlParams = new URLSearchParams(window.location.search);
        const productSlug = urlParams.get('product');

        if (productSlug) {
            const product = products.find(p => p.urlSlug === productSlug);
            if (product) {
                showProductDetail(product.id);
            } else {
                showHomeView();
            }
        } else {
            showHomeView();
        }
    }

    // Initialize the view based on URL
    initializeView();


    // ========================================
    // NEWSLETTER FORM SUBMISSION
    // ========================================

    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Basic email validation
            if (email && validateEmail(email)) {
                alert('Thank you for subscribing! You\'ll receive our latest updates at ' + email);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Email validation helper function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }


    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only smooth scroll if it's not just "#"
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    const headerOffset = 80; // Account for sticky header
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ========================================
    // LAZY LOADING IMAGES (PERFORMANCE OPTIMIZATION)
    // ========================================

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[loading="lazy"]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        images.forEach(img => imageObserver.observe(img));
    }


    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================

    // Create scroll to top button dynamically
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '↑';
    scrollTopButton.className = 'scroll-to-top';
    scrollTopButton.setAttribute('aria-label', 'Scroll to top');
    scrollTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #6b2c3e;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    document.body.appendChild(scrollTopButton);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.opacity = '1';
            scrollTopButton.style.visibility = 'visible';
        } else {
            scrollTopButton.style.opacity = '0';
            scrollTopButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top on button click
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect for scroll to top button
    scrollTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.backgroundColor = '#4a1f2b';
    });

    scrollTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.backgroundColor = '#6b2c3e';
    });


    // ========================================
    // CONSOLE MESSAGE
    // ========================================

    console.log('%c👗 Welcome to Metro Design! ', 'background: #6b2c3e; color: white; font-size: 16px; padding: 10px;');
    console.log('✨ Built with pure HTML, CSS, and JavaScript - no frameworks!');
    console.log('📱 Fully responsive and SPA-style navigation');
    console.log(`🛍️  ${products.length} products dynamically loaded`);

});


// ========================================
// PERFORMANCE MONITORING
// ========================================

// Log page load time
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log(`⚡ Page loaded in ${loadTime}ms`);
    }
});
