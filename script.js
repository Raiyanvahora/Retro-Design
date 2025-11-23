// ========================================
// METRO DESIGN - INTERACTIVE JAVASCRIPT
// ========================================

// ========================================
// PRODUCTS DATA
// ========================================

const products = [
    {
        id: 1,
        name: 'Floral Maxi Dress',
        price: 1899,
        image: 'productimages/WhatsApp Image 2025-11-20 at 9.40.21 PM.jpeg',
        category: 'Dresses',
        description: 'Elegant floral maxi dress perfect for any occasion. Made with premium quality fabric that flows beautifully.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Pink', 'Blue', 'Green'],
        features: ['Premium fabric', 'Comfortable fit', 'Easy care', 'Breathable material']
    },
    {
        id: 2,
        name: 'Printed Co-ord Set',
        price: 2199,
        image: 'productimages/WhatsApp Image 2025-11-20 at 9.40.21 PM (1).jpeg',
        category: 'Co-ords',
        description: 'Stylish printed co-ord set that combines comfort and fashion. Perfect for casual outings and daily wear.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Multi', 'Blue', 'Black'],
        features: ['Matching top and bottom', 'Trendy print', 'Versatile styling', 'All-day comfort']
    },
    {
        id: 3,
        name: 'Embroidered Kurta Set',
        price: 1699,
        image: 'productimages/WhatsApp Image 2025-11-20 at 9.40.21 PM (2).jpeg',
        category: 'Kurtas & Sets',
        description: 'Beautiful embroidered kurta set that brings traditional elegance to your wardrobe.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Cream', 'Pink'],
        features: ['Intricate embroidery', 'Traditional design', 'Comfortable fabric', 'Festival ready']
    },
    {
        id: 4,
        name: 'Linen Shirt Dress',
        price: 1599,
        image: 'productimages/WhatsApp Image 2025-11-20 at 9.40.21 PM (3).jpeg',
        category: 'Dresses',
        description: 'Classic linen shirt dress perfect for summer days. Breathable and stylish.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Beige', 'White', 'Blue'],
        features: ['100% linen', 'Breathable', 'Classic style', 'Easy to style']
    },
    {
        id: 5,
        name: 'Wrap Top',
        price: 899,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.43 PM.jpeg',
        category: 'Tops & Shirts',
        description: 'Flattering wrap top that suits all body types. Versatile and comfortable.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Red', 'Navy'],
        features: ['Flattering fit', 'Adjustable wrap', 'Versatile', 'Professional look']
    },
    {
        id: 6,
        name: 'Wide Leg Palazzo',
        price: 999,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.43 PM (1).jpeg',
        category: 'Bottoms',
        description: 'Comfortable wide leg palazzo pants perfect for all-day wear.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Grey', 'Brown'],
        features: ['Wide leg', 'Elastic waist', 'Comfortable', 'Flowy design']
    },
    {
        id: 7,
        name: 'Printed Kaftan',
        price: 1399,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.44 PM.jpeg',
        category: 'Dresses',
        description: 'Relaxed fit printed kaftan ideal for summer and resort wear.',
        sizes: ['Free Size'],
        colors: ['Multi', 'Blue', 'Green'],
        features: ['Relaxed fit', 'Beautiful print', 'Lightweight', 'Resort wear']
    },
    {
        id: 8,
        name: 'Tiered Midi Skirt',
        price: 1299,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.44 PM (1).jpeg',
        category: 'Bottoms',
        description: 'Feminine tiered midi skirt that adds movement to your look.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Pink', 'White', 'Blue'],
        features: ['Tiered design', 'Flowy', 'Feminine', 'Midi length']
    },
    {
        id: 9,
        name: 'Embellished Tunic',
        price: 1799,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.44 PM (2).jpeg',
        category: 'Tops & Shirts',
        description: 'Elegant embellished tunic perfect for festive occasions.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Gold', 'Silver', 'Maroon'],
        features: ['Embellished details', 'Festive wear', 'Elegant design', 'Premium quality']
    },
    {
        id: 10,
        name: 'Cotton Kurta Set',
        price: 1499,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.45 PM.jpeg',
        category: 'Kurtas & Sets',
        description: 'Comfortable cotton kurta set perfect for everyday wear.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Blue', 'Pink'],
        features: ['Pure cotton', 'Breathable', 'Everyday wear', 'Easy care']
    },
    {
        id: 11,
        name: 'Designer Anarkali',
        price: 2499,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.45 PM (1).jpeg',
        category: 'Kurtas & Sets',
        description: 'Stunning designer anarkali for special occasions and celebrations.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Red', 'Green', 'Blue'],
        features: ['Designer piece', 'Premium fabric', 'Party wear', 'Intricate work']
    },
    {
        id: 12,
        name: 'Casual Jumpsuit',
        price: 1999,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.45 PM (2).jpeg',
        category: 'Co-ords',
        description: 'Trendy casual jumpsuit that\'s both comfortable and stylish.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Olive'],
        features: ['One-piece styling', 'Casual chic', 'Comfortable', 'Modern design']
    },
    {
        id: 13,
        name: 'Ethnic Palazzo Set',
        price: 1599,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.46 PM.jpeg',
        category: 'Co-ords',
        description: 'Beautiful ethnic palazzo set combining tradition with comfort.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Pink', 'Yellow', 'Orange'],
        features: ['Ethnic design', 'Palazzo pants', 'Matching top', 'Festival ready']
    },
    {
        id: 14,
        name: 'Festive Lehenga',
        price: 2999,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.46 PM (1).jpeg',
        category: 'Dresses',
        description: 'Gorgeous festive lehenga perfect for weddings and celebrations.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Red', 'Pink', 'Green', 'Blue'],
        features: ['Wedding wear', 'Premium embroidery', 'Traditional', 'Designer piece']
    },
    {
        id: 15,
        name: 'Summer Maxi Dress',
        price: 1899,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.47 PM.jpeg',
        category: 'Dresses',
        description: 'Light and airy summer maxi dress perfect for warm weather.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Coral', 'Sky Blue'],
        features: ['Summer perfect', 'Lightweight', 'Maxi length', 'Flowy design']
    },
    {
        id: 16,
        name: 'Trendy Co-ord Set',
        price: 2199,
        image: 'productimages/WhatsApp Image 2025-11-22 at 8.51.47 PM (1).jpeg',
        category: 'Co-ords',
        description: 'Modern trendy co-ord set that makes styling effortless.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Grey'],
        features: ['Trendy design', 'Matching set', 'Modern fit', 'Versatile']
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
    // WISHLIST BUTTON INTERACTION
    // ========================================

    const wishlistButtons = document.querySelectorAll('.wishlist-btn');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Toggle filled/unfilled heart
            const svg = this.querySelector('svg');
            const path = svg.querySelector('path');

            if (path.getAttribute('fill') === 'none' || !path.getAttribute('fill')) {
                path.setAttribute('fill', 'currentColor');
                path.setAttribute('stroke', 'none');
                this.style.color = '#d94343';

                // Add bounce animation
                this.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            } else {
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'currentColor');
                path.setAttribute('stroke-width', '2');
                this.style.color = '';
            }
        });
    });


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
                // Show success message (in a real app, you'd send this to a server)
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
    // PRODUCT CARD HOVER EFFECTS (OPTIONAL ENHANCEMENT)
    // ========================================

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });


    // ========================================
    // LAZY LOADING IMAGES (PERFORMANCE OPTIMIZATION)
    // ========================================

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[src]');

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
    // SCROLL TO TOP BUTTON (OPTIONAL)
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
        background-color: var(--color-primary);
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
    // PRODUCT CARD NAVIGATION
    // ========================================

    // Make entire product cards clickable
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card, index) => {
        // Get the View Details button
        const viewDetailsBtn = card.querySelector('.btn');

        // Add click handler to the entire card
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on wishlist button
            if (e.target.closest('.wishlist-btn')) {
                return;
            }

            // Navigate to product detail page with product ID
            const productId = index + 1; // Product IDs are 1-indexed
            window.location.href = `product-detail.html?id=${productId}`;
        });

        // Also handle button click specifically
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent double navigation
                const productId = index + 1;
                window.location.href = `product-detail.html?id=${productId}`;
            });
        }
    });


    // ========================================
    // PRODUCT DETAIL PAGE FUNCTIONALITY
    // ========================================

    // Check if we're on the product detail page
    if (window.location.pathname.includes('product-detail.html')) {
        loadProductDetails();
    }

    // ========================================
    // CONSOLE MESSAGE
    // ========================================

    console.log('%c👗 Welcome to Metro Design! ', 'background: #6b2c3e; color: white; font-size: 16px; padding: 10px;');
    console.log('Built with pure HTML, CSS, and JavaScript - no frameworks!');

});

// ========================================
// PRODUCT DETAIL PAGE FUNCTIONS
// ========================================

function loadProductDetails() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find the product
    const product = products.find(p => p.id === productId);

    if (!product) {
        alert('Product not found!');
        window.location.href = 'index.html';
        return;
    }

    // Populate product details
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

    // Quantity controls
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

    // Wishlist button
    const wishlistBtn = document.getElementById('add-to-wishlist');
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
    const addToCartBtn = document.getElementById('add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        const selectedSize = document.querySelector('.size-option.selected')?.textContent || 'N/A';
        const selectedColor = document.querySelector('.color-option.selected')?.textContent || 'N/A';
        const quantity = quantityInput.value;

        alert(`Added to cart!\n\nProduct: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nPrice: ₹${product.price * quantity}`);

        // Update cart count (simple implementation)
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const currentCount = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = currentCount + parseInt(quantity);
        }
    });

    // Buy Now button
    const buyNowBtn = document.getElementById('buy-now');
    buyNowBtn.addEventListener('click', function() {
        const selectedSize = document.querySelector('.size-option.selected')?.textContent || 'N/A';
        const selectedColor = document.querySelector('.color-option.selected')?.textContent || 'N/A';
        const quantity = quantityInput.value;

        alert(`Proceeding to checkout!\n\nProduct: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nTotal: ₹${product.price * quantity}`);
    });

    // Load related products
    loadRelatedProducts(product);
}

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
        const productCard = document.createElement('article');
        productCard.className = 'product-card';
        productCard.style.cursor = 'pointer';
        productCard.addEventListener('click', function() {
            window.location.href = `product-detail.html?id=${product.id}`;
        });

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="wishlist-btn" aria-label="Add to wishlist">
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

        relatedProductsContainer.appendChild(productCard);
    });
}

// ========================================
// PERFORMANCE MONITORING (OPTIONAL)
// ========================================

// Log page load time
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('Page loaded in ' + loadTime + 'ms');
});