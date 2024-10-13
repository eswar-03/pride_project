const events = [
    {
      name: "Music Fiesta",
      description: "Enjoy a night filled with soulful music and mesmerizing performances.",
      category: "Music",
      city: "karnool",
      date: "2024-10-18",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VXiN1EH2JsOk4BmAWhTOWZ7d6rPpK60ZUA&s"
    },
    {
      name: "Food Extravaganza",
      description: "A paradise for food lovers with cuisines from around the globe.",
      category: "Food",
      city: "Tirupathi",
      date: "2024-11-05",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfBqeUxSfgJMttAWbP3ksa7opqjyAmw_aaA&s"
    },
    {
      name: "Tech Meetup",
      description: "Meet tech enthusiasts and explore innovations shaping the future.",
      category: "Technology",
      city: "Hydrabad",
      date: "2024-10-25",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtMBb6MFl_SHvEV2OoWxt3805o0XW1EIJzA&s"
    },
    {
      name: "Art Exhibition",
      description: "Discover works from contemporary and classical artists.",
      category: "Art",
      city: "vizag",
      date: "2024-12-01",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQPiaWJDd9egSekAd3k-EVQEJsQJ0eDqlyw&s"
    },
    {
      name: "Book Fair",
      description: "A heaven for book lovers with new releases and classics.",
      category: "Books",
      city: "guntur",
      date: "2024-11-15",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzqiD_yBZi1OqDaD_NILrMSUWJOGyBr-MXQ&s"
    },
    {
      name: "Startup Summit",
      description: "Pitch your startup ideas and meet investors.",
      category: "Business",
      city: "chennai",
      date: "2024-11-22",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hFD1CmPdWjMN1OPJ9AIiYpQMZbkdiNVwig&s"
    },
    {
      name: "Photography Walk",
      description: "Capture the essence of the city through your lens.",
      category: "Photography",
      city: "kerala",
      date: "2024-10-30",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L6V3gMURD_4s63nWbCvZ06WLoHXL5vteTw&s"
    },
    {
      name: "Fitness Bootcamp",
      description: "A weekend of fitness activities and health tips.",
      category: "Health",
      city: "Hydrabad",
      date: "2024-11-02",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwr0pq7DQMS8bB-C1rRIaQvxL9itwFIgepMg&s"
    },
    {
      name: "Film Festival",
      description: "Screenings of award-winning films and documentaries.",
      category: "Film",
      city: "chennai",
      date: "2024-12-10",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfN_qNJrQ9OyNrGgJhaKDh4K4fcElD7T89A&s"
    }
   ];
  
  function displayEvents(events) {
    const container = document.getElementById("events-container");
    container.innerHTML = "";
  
    events.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-card";
  
      card.innerHTML = `
        <img src="${event.imageUrl}" alt="${event.name}">
        <h3>${event.name}</h3>
        <p>${event.description}</p>
        <p class="category">Category: ${event.category}</p>
        <p>City: ${event.city}</p>
        <p>Date: ${event.date}</p>
      `;
  
      container.appendChild(card);
    });
  }
  
  document.getElementById("search").addEventListener("input", function(e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredEvents = events.filter(event =>
      event.city.toLowerCase().includes(searchValue) ||
      event.category.toLowerCase().includes(searchValue)
    );
    displayEvents(filteredEvents);
  });
  
  window.onload = () => displayEvents(events);
  