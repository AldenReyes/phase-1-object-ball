gameObject = () => { 
  return {
    home: {
      teamName:"Brooklyn Nets",
      colors:["Black", "White"],
      players: {
        "Alan Anderson":{
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans":{
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez":{
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee":{
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry":{
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName:"Charlotte Hornets",
      colors:["Turquoise", "Purple"],
      players: {
        "Jeff Adrien":{
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo":{
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop":{
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon":{
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood":{
          number: 32,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  }
}

numPointsScored = (playerName) => {
  if (playerList()[playerName]) {
    return `${playerName} scored ${playerList()[playerName]["points"]} points.`
  } else {
    return `${playerName} is not a valid player name.`
  }
}

shoeSize = (playerName) => {
  if (playerList()[playerName]) {
    return `${playerName} has a shoe size of ${playerList()[playerName]["shoe"]}.`
  } else {
    return `${playerName} is not a valid player name.`
  }
}

teamColors = (teamName) => {
  const teamList = []
  for (const team in gameObject()) {
    if (teamName === gameObject().home.teamName) {
      teamList = gameObject().home.colors
      break
    } else if (teamName === gameObject().away.teamName) {
      teamList = gameObject().away.colors
      break
    } else {teamList = `${teamName} is not a valid team`
    }};
  return teamList
}

playerNumbers = (teamName) => {
  let jerseyNumber = []
  const homePlayers = gameObject().home.players
  const awayPlayers = gameObject().away.players

  if (teamName === gameObject().home.teamName) {
    for (const key in homePlayers) {
      jerseyNumber.push(homePlayers[key].number)
    }} 
  else if (teamName === gameObject().away.teamName) {
    for (const key in awayPlayers) {
      jerseyNumber.push(awayPlayers[key].number)
    }} 
  else {jerseyNumber = `${teamName} is not a valid team`}
  return jerseyNumber
}

playerStats = (playerName) => {
  if (playerList()[playerName]) {
    return playerList()[playerName]
  } else {
    return `${playerName} is not a valid player`
  }
}

bigShoeRebounds = () => {
let playerWithLargestShoe = ""
let highestShoe = 0
let reboundNum = 0
for (const player in playerList()) {
  if (playerList()[player].shoe > highestShoe) {
    highestShoe = playerList()[player].shoe
    playerWithLargestShoe = player
  }
}
if (playerList()[playerWithLargestShoe]) {
  reboundNum = playerList()[playerWithLargestShoe].rebounds
}
return reboundNum
}

//Helpers

function teamNames() {
  const teams = [gameObject().home.teamName, gameObject().away.teamName]
  return teams
}

function playerList() {
  const players = {...gameObject().home.players, ...gameObject().away.players}
  return players
}
