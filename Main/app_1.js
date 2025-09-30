// Application Data
const appData = {
  destinations: [
    {
      name: "Delhi", 
      state: "Delhi",
      description: "India's capital with historic monuments and vibrant markets",
      bestTime: "Oct-Mar",
      attractions: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple"],
      icon: "fas fa-landmark"
    },
    {
      name: "Agra", 
      state: "Uttar Pradesh",
      description: "Home to the magnificent Taj Mahal",
      bestTime: "Oct-Mar", 
      attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
      icon: "fas fa-mosque"
    },
    {
      name: "Jaipur",
      state: "Rajasthan", 
      description: "The Pink City with royal palaces and forts",
      bestTime: "Oct-Mar",
      attractions: ["Hawa Mahal", "Amber Fort", "City Palace"],
      icon: "fas fa-chess-rook"
    },
    {
      name: "Udaipur",
      state: "Rajasthan",
      description: "City of Lakes with romantic palaces", 
      bestTime: "Oct-Mar",
      attractions: ["City Palace", "Lake Pichola", "Jagdish Temple"],
      icon: "fas fa-water"
    },
    {
      name: "Goa",
      state: "Goa", 
      description: "Beach paradise with Portuguese heritage",
      bestTime: "Nov-Feb",
      attractions: ["Baga Beach", "Old Goa Churches", "Dudhsagar Falls"],
      icon: "fas fa-umbrella-beach"
    },
    {
      name: "Kerala",
      state: "Kerala",
      description: "God's Own Country with backwaters and hills", 
      bestTime: "Oct-Mar",
      attractions: ["Alleppey Backwaters", "Munnar Hills", "Kochi"],
      icon: "fas fa-tree"
    }
  ],
  budgetBreakdown: {
    budget: {
      dailyCost: "₹2,000-4,000",
      accommodation: "₹700-1,500 (hostels/guesthouses)",
      food: "₹400-800 (street food/local restaurants)", 
      transport: "₹200-600 (local buses/trains)",
      activities: "₹200-500 (entry fees/basic tours)"
    },
    comfort: {
      dailyCost: "₹4,000-7,000", 
      accommodation: "₹2,000-4,000 (hotels/boutique stays)",
      food: "₹800-1,500 (restaurants/cafes)",
      transport: "₹500-1,200 (AC trains/taxis)",
      activities: "₹500-1,000 (guided tours/experiences)"
    },
    luxury: {
      dailyCost: "₹10,000+",
      accommodation: "₹8,000+ (luxury hotels/resorts)", 
      food: "₹2,000+ (fine dining)",
      transport: "₹2,000+ (private cars/flights)",
      activities: "₹2,000+ (premium experiences)"
    }
  },
  emergencyContacts: {
    "Emergency Services": "112",
    "Police": "100",
    "Fire Department": "101", 
    "Medical Emergency": "102",
    "Tourist Helpline": "1800-11-1363",
    "Women Helpline": "1091"
  },
  festivals2025: [
    {
      name: "Diwali",
      date: "October 21, 2025",
      description: "Festival of Lights celebrated across India"
    },
    {
      name: "Holi", 
      date: "March 14, 2025",
      description: "Festival of Colors marking spring arrival"
    },
    {
      name: "Dussehra",
      date: "October 2, 2025", 
      description: "Victory of good over evil celebration"
    },
    {
      name: "Navratri",
      date: "September 22 - October 2, 2025",
      description: "Nine-night festival honoring Goddess Durga"
    }
  ],
  sampleItinerary: {
    title: "10-Day Rajasthan Cultural Heritage Tour",
    budget: "₹45,000 for family of 4",
    days: [
      {
        day: 1,
        city: "Delhi",
        activities: ["Arrival", "Red Fort", "Chandni Chowk", "India Gate"],
        accommodation: "Hotel in Connaught Place",
        meals: "Welcome dinner at Indian restaurant",
        cost: "₹4,500"
      },
      {
        day: 2,
        city: "Delhi to Jaipur",
        activities: ["Drive to Jaipur", "City Palace", "Hawa Mahal"],
        accommodation: "Heritage hotel in Pink City", 
        meals: "Rajasthani thali dinner",
        cost: "₹4,800"
      },
      {
        day: 3,
        city: "Jaipur",
        activities: ["Amber Fort", "Jaigarh Fort", "Local markets"],
        accommodation: "Heritage hotel",
        meals: "Cooking class and traditional meal",
        cost: "₹4,200"
      },
      {
        day: 4,
        city: "Jaipur to Jodhpur", 
        activities: ["Drive to Jodhpur", "Mehrangarh Fort"],
        accommodation: "Hotel near Blue City",
        meals: "Rooftop dinner with fort views",
        cost: "₹4,600"
      },
      {
        day: 5,
        city: "Jodhpur",
        activities: ["Clock Tower market", "Umaid Bhawan Palace", "Village visit"],
        accommodation: "Hotel",
        meals: "Rural lunch with local family", 
        cost: "₹4,300"
      }
    ]
  },
  bookingPlatforms: [
    {
      name: "MakeMyTrip",
      type: "flights/hotels",
      features: ["AI assistant Myra", "Multilingual support"],
      icon: "fas fa-plane",
      url: "https://www.makemytrip.com"
    },
    {
      name: "Cleartrip", 
      type: "flights/trains",
      features: ["Transparent pricing", "Easy cancellation"],
      icon: "fas fa-train",
      url: "https://www.cleartrip.com"
    },
    {
      name: "ixigo",
      type: "flights/trains/buses", 
      features: ["PNR status", "Fare alerts"],
      icon: "fas fa-bus",
      url: "https://www.ixigo.com"
    },
    {
      name: "GetYourGuide",
      type: "activities/tours",
      features: ["Local experiences", "Skip-the-line tickets"],
      icon: "fas fa-map-marked-alt",
      url: "https://www.getyourguide.com"
    }
  ],
  weatherData: [
    { city: "Delhi", temp: "28°C", condition: "Sunny" },
    { city: "Mumbai", temp: "32°C", condition: "Humid" },
    { city: "Bangalore", temp: "24°C", condition: "Pleasant" },
    { city: "Jaipur", temp: "31°C", condition: "Clear" },
    { city: "Goa", temp: "29°C", condition: "Breezy" },
    { city: "Kerala", temp: "27°C", condition: "Partly Cloudy" }
  ]
};

// DOM elements
const tripPlanningForm = document.getElementById('tripPlanningForm');
const itinerarySection = document.getElementById('plan-trip');
const itineraryTimeline = document.getElementById('itineraryTimeline');
const destinationsGrid = document.getElementById('destinationsGrid');
const weatherGrid = document.getElementById('weatherGrid');
const festivalsList = document.getElementById('festivalsList');
const emergencyContacts = document.getElementById('emergencyContacts');
const bookingGrid = document.getElementById('bookingGrid');
const chatWidget = document.getElementById('chatWidget');
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const destinationModal = document.getElementById('destinationModal');
const modalClose = document.getElementById('modalClose');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    populateDestinations();
    populateWeatherData();
    populateFestivals();
    populateEmergencyContacts();
    populateBookingPlatforms();
    setMinDateForTravelPicker();
}

function setupEventListeners() {
    // Trip planning form
    tripPlanningForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleTripFormSubmit();
    });
    
    // Chat widget
    chatToggle.addEventListener('click', toggleChatWindow);
    chatClose.addEventListener('click', closeChatWindow);
    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    
    // Modal
    modalClose.addEventListener('click', closeModal);
    destinationModal.addEventListener('click', function(e) {
        if (e.target === destinationModal) {
            closeModal();
        }
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('.header__nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Language selector
    document.getElementById('languageSelector').addEventListener('change', function(e) {
        showNotification(`Language changed to: ${e.target.options[e.target.selectedIndex].text}`);
    });
    
    // Itinerary actions
    document.addEventListener('click', function(e) {
        if (e.target.id === 'modifyBtn') {
            showNotification('Itinerary modification feature coming soon!');
        }
        if (e.target.id === 'bookNowBtn') {
            showBookingOptions();
        }
    });
}

function handleTripFormSubmit() {
    // Get form values directly from elements
    const destination = document.getElementById('destination').value;
    const duration = document.getElementById('duration').value;
    const budget = document.getElementById('budget').value;
    const travelers = document.getElementById('travelers').value;
    const travelDate = document.getElementById('travelDate').value;
    
    // Get selected interests
    const interests = [];
    document.querySelectorAll('input[name="interests"]:checked').forEach(checkbox => {
        interests.push(checkbox.value);
    });
    
    // Validate required fields
    if (!destination) {
        showNotification('Please select a destination preference', 'error');
        return;
    }
    if (!duration) {
        showNotification('Please select travel duration', 'error');
        return;
    }
    if (!budget) {
        showNotification('Please select budget range', 'error');
        return;
    }
    if (!travelers) {
        showNotification('Please enter number of travelers', 'error');
        return;
    }
    if (!travelDate) {
        showNotification('Please select travel dates', 'error');
        return;
    }
    
    // Show loading animation
    showLoadingAnimation();
    
    // Generate itinerary after a delay
    setTimeout(() => {
        generateItinerary({
            destination,
            duration,
            budget,
            travelers,
            travelDate,
            interests
        });
        
        // Scroll to itinerary section
        itinerarySection.classList.remove('hidden');
        itinerarySection.scrollIntoView({ behavior: 'smooth' });
        
        showNotification('Your personalized itinerary has been generated!', 'success');
    }, 2000);
}

function generateItinerary(preferences) {
    const { destination, duration, budget, travelers, interests } = preferences;
    
    // Customize title based on preferences
    let title = '';
    
    if (duration === '3-5') {
        title += '4-Day ';
    } else if (duration === '7') {
        title += '7-Day ';
    } else if (duration === '14') {
        title += '14-Day ';
    } else if (duration === '21-28') {
        title += '25-Day ';
    } else {
        title += duration + '-Day ';
    }
    
    if (interests.includes('culture')) {
        title += 'Cultural Heritage ';
    } else if (interests.includes('adventure')) {
        title += 'Adventure ';
    } else if (interests.includes('spiritual')) {
        title += 'Spiritual ';
    } else if (interests.includes('nature')) {
        title += 'Nature & Wildlife ';
    } else {
        title += 'Discovery ';
    }
    
    if (destination === 'rajasthan' || destination === 'north') {
        title += 'Tour of Rajasthan';
    } else if (destination === 'south') {
        title += 'Tour of South India';
    } else if (destination === 'west') {
        title += 'Tour of West India';
    } else if (destination === 'east') {
        title += 'Tour of East India';
    } else if (destination === 'northeast') {
        title += 'Tour of Northeast India';
    } else {
        title += 'Tour of India';
    }
    
    // Calculate budget
    const budgetInfo = appData.budgetBreakdown[budget];
    const dailyCostRange = budgetInfo.dailyCost.match(/₹([\d,]+)-([\d,]+)/);
    let avgDailyCost = 5000;
    
    if (dailyCostRange) {
        const minCost = parseInt(dailyCostRange[1].replace(',', ''));
        const maxCost = parseInt(dailyCostRange[2].replace(',', ''));
        avgDailyCost = Math.round((minCost + maxCost) / 2);
    } else if (budget === 'luxury') {
        avgDailyCost = 12000;
    }
    
    const durationDays = duration === '3-5' ? 4 : duration === '21-28' ? 25 : parseInt(duration);
    const totalBudget = avgDailyCost * durationDays * parseInt(travelers);
    
    // Update itinerary header
    document.getElementById('itineraryTitle').textContent = title;
    document.querySelector('.itinerary-budget strong').textContent = 
        `₹${totalBudget.toLocaleString('en-IN')} for ${travelers} travelers`;
    
    // Generate timeline
    generateTimeline(destination, durationDays, budget, interests);
}

function generateTimeline(destination, days, budget, interests) {
    const budgetInfo = appData.budgetBreakdown[budget];
    
    let timelineHTML = '';
    
    // Use sample itinerary as base for Rajasthan, customize for others
    if (destination === 'rajasthan' || destination === 'north') {
        for (let i = 0; i < Math.min(days, appData.sampleItinerary.days.length); i++) {
            timelineHTML += createDayHTML(appData.sampleItinerary.days[i], budgetInfo);
        }
        
        // Add extra days if needed
        for (let i = appData.sampleItinerary.days.length; i < days; i++) {
            const extraDay = {
                day: i + 1,
                city: i % 2 === 0 ? "Udaipur" : "Jaisalmer",
                activities: ["Local exploration", "Cultural activities", "Shopping", "Leisure time"],
                accommodation: budget === 'luxury' ? "Luxury palace hotel" : budget === 'comfort' ? "Heritage hotel" : "Comfortable guesthouse",
                meals: "Local specialties and regional cuisine",
                cost: `₹${(Math.random() * 1000 + 4000).toFixed(0)}`
            };
            timelineHTML += createDayHTML(extraDay, budgetInfo);
        }
    } else {
        // Generate generic itinerary for other destinations
        for (let i = 1; i <= days; i++) {
            const genericDay = {
                day: i,
                city: getDestinationCity(destination, i),
                activities: getActivitiesForInterests(interests, i),
                accommodation: getAccommodation(budget),
                meals: "Local cuisine and regional specialties",
                cost: `₹${(Math.random() * 1000 + 4000).toFixed(0)}`
            };
            timelineHTML += createDayHTML(genericDay, budgetInfo);
        }
    }
    
    itineraryTimeline.innerHTML = timelineHTML;
}

function createDayHTML(day, budgetInfo) {
    return `
        <div class="timeline-day">
            <div class="timeline-day-number">${day.day}</div>
            <div class="timeline-day-content">
                <h4>${day.city}</h4>
                <div class="timeline-activities">
                    <div class="activity-item">
                        <h5>Activities</h5>
                        <p>${Array.isArray(day.activities) ? day.activities.join(', ') : day.activities}</p>
                    </div>
                    <div class="activity-item">
                        <h5>Accommodation</h5>
                        <p>${day.accommodation}</p>
                    </div>
                    <div class="activity-item">
                        <h5>Meals</h5>
                        <p>${day.meals}</p>
                    </div>
                </div>
                <span class="day-cost">Daily Cost: ${day.cost}</span>
            </div>
        </div>
    `;
}

function getDestinationCity(destination, dayNumber) {
    const cityMap = {
        'south': ['Kochi', 'Munnar', 'Alleppey', 'Thekkady', 'Kovalam'],
        'west': ['Mumbai', 'Goa', 'Aurangabad', 'Pune', 'Lonavala'],
        'east': ['Kolkata', 'Darjeeling', 'Puri', 'Bhubaneswar', 'Sundarbans'],
        'northeast': ['Guwahati', 'Shillong', 'Kaziranga', 'Tezpur', 'Dirang']
    };
    
    const cities = cityMap[destination] || ['Delhi', 'Agra', 'Jaipur', 'Udaipur', 'Jodhpur'];
    return cities[(dayNumber - 1) % cities.length];
}

function getActivitiesForInterests(interests, dayNumber) {
    const activityMap = {
        culture: ['Visit museums', 'Explore historic sites', 'Local art galleries', 'Traditional performances'],
        adventure: ['Trekking', 'Water sports', 'Rock climbing', 'Safari'],
        spiritual: ['Temple visits', 'Meditation sessions', 'Spiritual talks', 'Pilgrimage sites'],
        nature: ['National parks', 'Wildlife spotting', 'Nature walks', 'Bird watching'],
        food: ['Food tours', 'Cooking classes', 'Local markets', 'Street food exploration'],
        beaches: ['Beach activities', 'Water sports', 'Sunset viewing', 'Beach walks']
    };
    
    let activities = ['City exploration', 'Local sightseeing'];
    
    interests.forEach(interest => {
        if (activityMap[interest]) {
            activities.push(activityMap[interest][(dayNumber - 1) % activityMap[interest].length]);
        }
    });
    
    return activities.slice(0, 4);
}

function getAccommodation(budget) {
    const accommodationMap = {
        budget: "Budget hotel or guesthouse with basic amenities",
        comfort: "Comfortable hotel with good amenities and service",
        luxury: "Luxury hotel or heritage property with premium facilities"
    };
    
    return accommodationMap[budget] || accommodationMap.comfort;
}

function populateDestinations() {
    destinationsGrid.innerHTML = '';
    
    appData.destinations.forEach(destination => {
        const destinationCard = document.createElement('div');
        destinationCard.className = 'destination-card';
        destinationCard.innerHTML = `
            <div class="destination-card__image">
                <i class="${destination.icon}"></i>
            </div>
            <div class="destination-card__content">
                <div class="destination-card__meta">
                    <span>${destination.state}</span>
                    <span>Best: ${destination.bestTime}</span>
                </div>
                <h3>${destination.name}</h3>
                <p class="destination-card__description">${destination.description}</p>
                <button class="btn btn--primary destination-card__button" onclick="showDestinationDetails('${destination.name}')">
                    <i class="fas fa-eye"></i> Explore
                </button>
            </div>
        `;
        destinationsGrid.appendChild(destinationCard);
    });
}

function populateWeatherData() {
    weatherGrid.innerHTML = '';
    
    appData.weatherData.forEach(weather => {
        const weatherItem = document.createElement('div');
        weatherItem.className = 'weather-item';
        weatherItem.innerHTML = `
            <span class="weather-city">${weather.city}</span>
            <span class="weather-temp">${weather.temp}</span>
        `;
        weatherGrid.appendChild(weatherItem);
    });
}

function populateFestivals() {
    festivalsList.innerHTML = '';
    
    appData.festivals2025.forEach(festival => {
        const festivalItem = document.createElement('div');
        festivalItem.className = 'festival-item';
        festivalItem.innerHTML = `
            <div class="festival-name">${festival.name}</div>
            <div class="festival-date">${festival.date}</div>
            <p class="festival-description">${festival.description}</p>
        `;
        festivalsList.appendChild(festivalItem);
    });
}

function populateEmergencyContacts() {
    emergencyContacts.innerHTML = '';
    
    Object.entries(appData.emergencyContacts).forEach(([service, number]) => {
        const contactItem = document.createElement('div');
        contactItem.className = 'emergency-contact';
        contactItem.innerHTML = `
            <span class="contact-service">${service}</span>
            <span class="contact-number">${number}</span>
        `;
        emergencyContacts.appendChild(contactItem);
    });
}

function populateBookingPlatforms() {
    bookingGrid.innerHTML = '';
    
    appData.bookingPlatforms.forEach(platform => {
        const bookingCard = document.createElement('div');
        bookingCard.className = 'card booking-card';
        bookingCard.innerHTML = `
            <div class="card__body">
                <div class="booking-card__icon">
                    <i class="${platform.icon}"></i>
                </div>
                <h3>${platform.name}</h3>
                <p>${platform.type}</p>
                <p>${platform.features.join(' • ')}</p>
                <button class="btn btn--primary" onclick="openBookingPlatform('${platform.url}')">
                    <i class="fas fa-external-link-alt"></i> Visit ${platform.name}
                </button>
            </div>
        `;
        bookingGrid.appendChild(bookingCard);
    });
}

function showDestinationDetails(destinationName) {
    const destination = appData.destinations.find(d => d.name === destinationName);
    if (!destination) return;
    
    document.getElementById('modalDestinationName').textContent = destination.name;
    document.getElementById('modalDestinationContent').innerHTML = `
        <div class="destination-details">
            <p><strong>State:</strong> ${destination.state}</p>
            <p><strong>Best Time to Visit:</strong> ${destination.bestTime}</p>
            <p><strong>Description:</strong> ${destination.description}</p>
            <div class="attractions-section">
                <h4>Top Attractions:</h4>
                <ul>
                    ${destination.attractions.map(attraction => `<li>${attraction}</li>`).join('')}
                </ul>
            </div>
            <div class="grid-cols-2" style="margin-top: 20px;">
                <button class="btn btn--primary" onclick="planTripToDestination('${destination.name}')">
                    <i class="fas fa-route"></i> Plan Trip Here
                </button>
                <button class="btn btn--secondary" onclick="closeModal()">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
        </div>
    `;
    
    destinationModal.classList.remove('hidden');
}

function closeModal() {
    destinationModal.classList.add('hidden');
}

function planTripToDestination(destinationName) {
    closeModal();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill form based on destination
    const destinationSelect = document.getElementById('destination');
    if (destinationName === 'Delhi' || destinationName === 'Agra') {
        destinationSelect.value = 'north';
    } else if (destinationName === 'Jaipur' || destinationName === 'Udaipur') {
        destinationSelect.value = 'rajasthan';
    } else if (destinationName === 'Goa') {
        destinationSelect.value = 'west';
    } else if (destinationName === 'Kerala') {
        destinationSelect.value = 'south';
    }
    
    showNotification(`Form pre-filled for ${destinationName}. Complete the details to generate your itinerary!`);
}

function toggleChatWindow() {
    chatWindow.classList.toggle('hidden');
}

function closeChatWindow() {
    chatWindow.classList.add('hidden');
}

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    addTypingIndicator();
    
    // Simulate AI response with realistic delay
    setTimeout(() => {
        removeTypingIndicator();
        const response = generateAIResponse(message);
        addChatMessage(response, 'bot');
    }, 1500);
}

function addChatMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message chat-message--${type}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message chat-message--bot typing-indicator';
    typingDiv.innerHTML = '<p><i class="fas fa-ellipsis-h"></i> AI is typing...</p>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = chatMessages.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('budget') || message.includes('cost')) {
        return "For a comfortable trip to India, budget around ₹4,000-7,000 per day per person. This includes accommodation, meals, transport, and activities. Would you like a detailed breakdown for a specific region?";
    }
    
    if (message.includes('rajasthan') || message.includes('jaipur') || message.includes('udaipur')) {
        return "Rajasthan is perfect for cultural heritage tours! The Golden Triangle (Delhi-Agra-Jaipur) plus Udaipur makes an excellent 10-day itinerary. Best time to visit is October to March. Don't miss the forts, palaces, and vibrant markets!";
    }
    
    if (message.includes('weather') || message.includes('when') || message.includes('time')) {
        return "The best time to visit most of India is October to March when the weather is pleasant and cool. Avoid monsoon season (June-September) for most regions, except Kerala where monsoons can be quite beautiful!";
    }
    
    if (message.includes('kerala') || message.includes('backwater')) {
        return "Kerala is absolutely amazing! I recommend visiting Kochi for colonial history, Munnar for tea plantations and cool weather, and Alleppey for the famous backwater houseboat experience. The food is incredible too!";
    }
    
    if (message.includes('food') || message.includes('eat')) {
        return "Indian cuisine varies dramatically by region! Try biryanis in Hyderabad, street food like chaat in Delhi, seafood in Goa, and vegetarian thalis in Gujarat. Each state has its own unique flavors and specialties!";
    }
    
    if (message.includes('safety') || message.includes('safe')) {
        return "India is generally safe for tourists when you take normal precautions. Keep emergency numbers handy: 112 for general emergency, 1800-11-1363 for tourist helpline. Stay aware of surroundings, use licensed guides, and trust your instincts.";
    }
    
    if (message.includes('train') || message.includes('transport')) {
        return "Indian Railways is an excellent way to travel! Book in advance for popular routes. For comfort, choose AC classes. Flights connect major cities quickly. Local buses and taxis are good for shorter distances.";
    }
    
    if (message.includes('hello') || message.includes('hi')) {
        return "Hello! Welcome to your AI Travel Assistant for India! I'm here to help you plan an amazing journey. Feel free to ask about destinations, budgets, weather, activities, or anything else about traveling in Incredible India!";
    }
    
    return "I'd be happy to help you plan your India adventure! You can ask me about destinations, budgets, best times to visit, safety tips, transportation, food, or anything else about traveling in India. What would you like to know?";
}

function openBookingPlatform(url) {
    window.open(url, '_blank');
    showNotification('Opening booking platform in new tab...');
}

function showBookingOptions() {
    const bookingSection = document.querySelector('.booking-section');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
    showNotification('Choose from our trusted booking partners below!');
}

function setMinDateForTravelPicker() {
    const travelDateInput = document.getElementById('travelDate');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    travelDateInput.min = tomorrow.toISOString().split('T')[0];
    
    // Set a default date (7 days from now) to help with testing
    const defaultDate = new Date(today);
    defaultDate.setDate(defaultDate.getDate() + 7);
    travelDateInput.value = defaultDate.toISOString().split('T')[0];
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-surface);
        color: var(--color-text);
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        border-left: 4px solid var(--color-${type === 'error' ? 'error' : type === 'success' ? 'success' : 'primary'});
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function showLoadingAnimation() {
    const submitBtn = document.querySelector('.hero__cta');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating Your Itinerary...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2500);
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});