const seasons = [
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
    displaySeason(seasons[index]);
}

// Display the first season initially.
displaySeason(seasons[0]);

const ctx = document.getElementById('barChart').getContext('2d');
const labelYear = ["1984-85","1985-86","1986-87","1987-88","1988-89","1989-90","1990-91","1991-92","1992-93"]
const labelPoints = [2313,408,3041,2868,2633,2753,2580,2404,2541]
const labelGamesplayed = [82,18,82,82,81,82,82,80,78]
const labelPointPerGame = [28.2,22.7,37.1,35.0,32.5,33.6,31.5,30.1,32.6]

const data = {
  labels: labelYear,
  datasets: [
    {
      label: 'normal season',
      data: [2313,408,3041,2868,2633,2753,0,0,0],
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      lineTension: 0,
    },
    {
      label: 'NBA champion',
      data: [0,0,0,0,0,0,2580,2404,2541],
      backgroundColor: 'gold',
      borderColor: 'gold',
      borderWidth: 1,
      fill: false,
      lineTension: 0
    }
  ]
};

const options = {
  scales: {
    y: {
      min: 1000,
      max: 3200,
      ticks: {
        stepSize: 1000
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom'
    }
  },
  title: {
    display: true,
    text: ['Total points scored per season from 1984 to 1993'],
    fontFamily: "TrebuchetMS",
    fontSize: 24,
    fontColor: 'rgb(255,0,0)',
}};

const barChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
  
});