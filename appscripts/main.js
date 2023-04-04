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
                        label: "number of games played" , // this property is a semantic aming of your y-axis.
                        data: labelGamesplayed, // this property contains an array of values that corresponds to your x-axis labels.
                        borderWidth: 2, // the border width of your bars
                        backgroundColor: ["hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "#ffdf00", "#ffdf00", "#ffdf00"], // the background color of your bars
                        borderColor: ["hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "hsla(0,100%,50%,1)", "#ffdf00", "#ffdf00", "#ffdf00"] // the border color of your bars
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
                        display: false,
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
                    }
            new Chart("points-per-game-bar-chart",
                    {
                        type: "bar",
                        data: dataUtility,
                        options: { 
                            plugins: {
                                legend: {
                                  display: true,
                                  position: 'bottom'
                                }
                              },
                            maintainAspectRatio: false,
                            legend: {
                                display: false
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