$( document ).ready(function() {
  
    $('.click').click(function() {
      console.log('hi');
      $('.play-btn').toggleClass("hide");
      $('.image-png').toggleClass("hide");
    });
  });

const stats = [
    { year: '1993-1994', points: 32.3, gamesPlayed: 17, steals: 1.8, rebounds: 6.7, assists: 5.5, threes: 0.8 },
    { year: '1994-1995', points: 26.9, gamesPlayed: 17, steals: 1.8, rebounds: 6.9, assists: 5.3, threes: 1.4 },
    { year: '1995-1996', points: 30.4, gamesPlayed: 82, steals: 2.2, rebounds: 6.6, assists: 4.3, threes: 1.6 },
    { year: '1996-1997', points: 29.6, games} ]

    const season = [
        {
            year: "1993-1994",
            gamesPlayed: 17,
            pointsPerGame: 26.9,
            reboundsPerGame: 6.9,
            assistsPerGame: 5.3,
        },
        {
            year: "1994-1995",
            gamesPlayed: 17,
            pointsPerGame: 26.9,
            reboundsPerGame: 6.9,
            assistsPerGame: 5.3,
        },
        {
            year: "1995-1996",
            gamesPlayed: 82,
            pointsPerGame: 30.4,
            reboundsPerGame: 6.6,
            assistsPerGame: 4.3,
        },
        {
            year: "1996-1997",
            gamesPlayed: 82,
            pointsPerGame: 29.6,
            reboundsPerGame: 5.9,
            assistsPerGame: 4.3,
        },
        {
            year: "1997-1998",
            gamesPlayed: 82,
            pointsPerGame: 28.7,
            reboundsPerGame: 5.8,
            assistsPerGame: 3.5,
        },
    ];
    
    function displaySeason(season) {
        const content = document.getElementById('content');
        content.innerHTML = `
            <h2>${season.year}</h2>
            <p>Games Played: ${season.gamesPlayed}</p>
            <p>Points per Game: ${season.pointsPerGame}</p>
            <p>Rebounds per Game: ${season.reboundsPerGame}</p>
            <p>Assists per Game: ${season.assistsPerGame}</p>
        `;
    }
    
    function changeTab(index) {
        const tabItems = document.getElementsByClassName('tab-item');
    
        for (let i = 0; i < tabItems.length; i++) {
            tabItems[i].classList.remove('active');
        }
    
        tabItems[index].classList.add('active');
        displaySeason(season[index]);
    }
    
    // Display the first season initially.
    displaySeason(season[0]);

const playGifBtn = document.getElementById("playGifBtn");
const gifImage = document.getElementById("gifImage");

function playGifAndRedirect() {
    // Set the GIF source
    gifImage.src = "https://cdn.dribbble.com/users/31664/screenshots/1256215/media/e0be05b9bdb2c72feec862dc2016a4f3.gif";
    gifImage.style.display = "block";

    // Hide the button
    playGifBtn.style.display = "none";

    // Set a 5-second timeout before redirecting
    setTimeout(() => {
        window.location.href = "https://google.com";
    }, 5000);
}