//Source of data: Michael Jordan's UNC college statistics https://www.ncaa.com/news/basketball-men/article/2022-03-07/michael-jordan-college-stats-best-games-quotes-moments
//Source of data: Michael Jordan's career points https://www.landofbasketball.com/nba_players_stats/michael_jordan_tot.htm
  
/* menu bar*/
function openNav(x) {
    x.classList.toggle("change");
  }

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const labelYear = ["1984-85","1985-86","1986-87","1987-88","1988-89","1989-90","1990-91","1991-92","1992-93"]
  const labelPoints = [2313,408,3041,2868,2633,2753,2580,2404,2541]
  const labelGamesplayed = [82,18,82,82,81,82,82,80,78]
  const labelPointPerGame = [28.2,22.7,37.1,35.0,32.5,33.6,31.5,30.1,32.6]

  const dataObj = {
      labels: labelYear,
      datasets: [
          {
              label: "points" , // this property is a semantic aming of your y-axis.
              data: labelPoints, // this property contains an array of values that corresponds to your x-axis labels.
              borderWidth: 2, // the border width of your bars
              fill: false,
              lineTension: 0,
              /*backgroundColor: "hsla(20,100%,80%,0.8)",*/ // the background color of your bars
              borderColor: "hsla(0,100%,50%,1)" // the border color of your bars
          }
      ]
  }
  new Chart("career-points-line-chart",
          {
              type: "line",
              data: dataObj,
              options: { 
                  maintainAspectRatio: false,
                  legend: {
                      display: false
                  },
              options: {
                  scales:{
                      y: {
                          title: {
                              display: false,
                              text: 'lmao'
                          }
                      }
                  }
              },
                  title: {
                      display: true,
                      text: ['Total points scored per season from 1984 to 1993'],
                      fontFamily: "TrebuchetMS",
                      fontSize: 24,
                      fontColor: 'rgb(255,0,0)',
                  }
              }
          });

          const dataItem = {
              labels: labelYear ,
              datasets: [
                  {
                      label: 'Normal Season',
                      data: [82,18,82,82,81,82,0,0,0],
                      backgroundColor: 'red',
                      borderColor: 'red',
                      borderWidth: 1,
                      fill: false,
                      lineTension: 0,
                    },
                    {
                      label: 'NBA Champion season',
                      data: [0,0,0,0,0,0,82,80,78],
                      backgroundColor: 'gold',
                      borderColor: 'gold',
                      borderWidth: 1,
                      fill: false,
                      lineTension: 0
                    }
              ]
          }
  new Chart("games-played-bar-chart",
          {
              type: "bar",
              data: dataItem,
              options: { 
                  maintainAspectRatio: false,
                  legend: {
                      display: true,
                  },
                  title: {
                      display: true,
                      text: ['Numbers of games played per season'],
                      fontFamily: "TrebuchetMS",
                      fontSize: 24,
                      fontColor: 'rgb(255,0,0)',
                  }
              }
          });

          const dataUtility = {
              labels: labelYear ,
              datasets: [
                  {
                      label: 'Normal Season',
                      data: [28.2,22.7,37.1,35.0,32.5,33.6,0,0,0],
                      backgroundColor: 'red',
                      borderColor: 'red',
                      borderWidth: 1,
                      fill: false,
                      lineTension: 0,
                    },
                    {
                      label: 'NBA Champion',
                      data: [0,0,0,0,0,0,31.5,30.1,32.6],
                      backgroundColor: 'gold',
                      borderColor: 'gold',
                      borderWidth: 1,
                      fill: false,
                      lineTension: 0
                    }
                      ]
                  }
  new Chart("points-per-game-bar-chart",
          {
              type: "bar",
              data: dataUtility,
              options: { 
                  maintainAspectRatio: false,
                  legend: {
                      display: true
                  },
                  title: {
                      display: true,
                      text: ['Numbers of points per game every season'],
                      fontFamily: "TrebuchetMS",
                      fontSize: 24,
                      fontColor: 'rgb(255,0,0)',
                  }
              }
          });
            //6 RINGS STATS
          const seasons = [
            {
                year: "1994-1995",
                gamesPlayed: 17,
                pointsPerGame: 26.9,
                assistsPerGame: 5.3,
                stealsPerGame: 1.8,
                reboundsPerGame: 6.9,
                
            },
            {
                year: "1995-1996",
                gamesPlayed: 82,
                pointsPerGame: 30.4,
                assistsPerGame: 4.3,
                stealsPerGame: 2.2,
                reboundsPerGame: 6.6,
                
            },
            {
                year: "1996-1997",
                gamesPlayed: 82,
                pointsPerGame: 29.6,
                assistsPerGame: 4.3,
                stealsPerGame: 1.7,
                reboundsPerGame: 5.9,
                
            },
            {
                year: "1997-1998",
                gamesPlayed: 82,
                pointsPerGame: 28.7,
                assistsPerGame: 3.5,
                stealsPerGame: 1.7,
                reboundsPerGame: 5.8,
                
            },
        ];
        
        function displaySeason(season) {
            const content = document.getElementById('content');
            content.innerHTML = `
                <h2>${season.year}</h2>
                <p>Games Played: ${season.gamesPlayed}</p>
                <p>Points per Game: ${season.pointsPerGame}</p>
                <p>Assists per Game: ${season.assistsPerGame}</p>
                <p>Steals per Game: ${season.stealsPerGame}</p>
                <p>Rebounds per Game: ${season.reboundsPerGame}</p>
                
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
        
        //CHANGEABLE GRAPHS OF STATS
        const kns = document.getElementById('yourChart').getContext('2d');
        const changeGraphsButton = document.getElementById('changeGraphs');
        const labelPoints2 = [457, 2491, 2431, 2357];
        const data = fetch("https://2207-resources.s3.ap-southeast-1.amazonaws.com/mj_per_game_stats.csv")
        .then(function (response){
        return response.text();
        })
        .then(function (data) {
          const table = [];
          const rows = data.split("\r\n"); //replace this with the appropriate values
        
        const labelsFull = [];
        const ppgFull = [];
        const assistsFull = [];
        const stealsFull = [];
        const reboundsFull =[];

        rows.forEach((r, index)=> {
            const item = r.split(","); //insert your forEach loop here
            table.push(item);
            if (index !== 0){
            labelsFull.push(item[0])
            ppgFull.push(item[29])
            assistsFull.push(item[24])
            stealsFull.push(item[25])
            reboundsFull.push(item[23])
            }
        });

        console.log(table);

        const labels = labelsFull.slice(labelsFull.length - 19, labelsFull.length - 15);
        const pointspergame = ppgFull.slice(labelsFull.length - 19, labelsFull.length - 15);
        const assists = assistsFull.slice(labelsFull.length - 19, labelsFull.length - 15);
        const steals = stealsFull.slice(labelsFull.length - 19, labelsFull.length - 15);
        const rebounds = reboundsFull.slice(labelsFull.length - 19, labelsFull.length - 15);

        const datapoints = {
        labels: labels,
        datasets: [
            {
            label: "Total Points",
            data: labelPoints2,
            backgroundColor: 'rgba(255, 72, 255, 0.2)',
            borderColor: 'rgba(255, 72, 255, 1)',
            borderWidth: 2,
            }
        ]
        };

        const datappg = {
        labels: labels,
        datasets: [
            {
            label: "Points Per Game",
            data: pointspergame,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            }
        ]
        };

        const dataAsst = {
        labels: labels,
        datasets: [
            {
            label: "Assist Percentage",
            data: assists,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            }
        ]
        };

        const dataStl = {
        labels: labels,
        datasets: [
            {
            label: "Steal Percentage",
            data: steals,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
            }
        ]
        };

        const dataRbd = {
        labels: labels,
        datasets: [
            {
            label: "Rebound Percentage",
            data: rebounds,
            backgroundColor: 'rgba(14, 194, 255, 0.2)',
            borderColor: 'rgba(14, 194, 255, 1)',
            borderWidth: 2,
            }
        ]
        };

        const bargraph = {
        type: 'bar',
        data: datappg,
        options: {
            scales: {
                yAxes: [{
                ticks: {
                beginAtZero: true,
                }
                }]
            }
        }
        };

        let yourChart = new Chart (kns, bargraph);
        let currentGraph = 1;

        changeGraphsButton.addEventListener('click', () => {
        switch (currentGraph) {
            case 1:
                yourChart.config.data = datapoints;
                currentGraph = 2;
                break;
            case 2:
                yourChart.config.data = dataAsst;
                currentGraph = 3;
                break;
            case 3:
                yourChart.config.data = dataStl;
                currentGraph = 4;
                break;
            case 4:
                yourChart.config.data = dataRbd;
                currentGraph = 5;
                break;
            case 5:
            default:
                yourChart.config.data = datappg;
                currentGraph = 1;
                break;
        }
        yourChart.update();
        });
        })