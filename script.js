// AFL Teams data
const aflTeams = [
  { name: "Adelaide Crows", emoji: "🐦", founded: 1991, premierships: 2 },
  { name: "Brisbane Lions", emoji: "🦁", founded: 1997, premierships: 3 },
  { name: "Carlton Blues", emoji: "🐨", founded: 1864, premierships: 16 },
  { name: "Collingwood Magpies", emoji: "🐯", founded: 1892, premierships: 15 },
  { name: "Essendon Bombers", emoji: "✈️", founded: 1872, premierships: 16 },
  { name: "Fremantle Dockers", emoji: "⚓", founded: 1995, premierships: 0 },
  { name: "Geelong Cats", emoji: "🐱", founded: 1859, premierships: 10 },
  { name: "Gold Coast Suns", emoji: "☀️", founded: 2011, premierships: 0 },
  {
    name: "Greater Western Sydney Giants",
    emoji: "🦅",
    founded: 2012,
    premierships: 0,
  },
  { name: "Hawthorn Hawks", emoji: "🦅", founded: 1902, premierships: 13 },
  { name: "Melbourne Demons", emoji: "😈", founded: 1858, premierships: 13 },
  {
    name: "North Melbourne Kangaroos",
    emoji: "🦘",
    founded: 1869,
    premierships: 4,
  },
  { name: "Port Adelaide Power", emoji: "⚡", founded: 1997, premierships: 1 },
  { name: "Richmond Tigers", emoji: "🐅", founded: 1885, premierships: 13 },
  { name: "St Kilda Saints", emoji: "😇", founded: 1873, premierships: 1 },
  { name: "Sydney Swans", emoji: "🦢", founded: 1874, premierships: 5 },
  { name: "West Coast Eagles", emoji: "🦅", founded: 1987, premierships: 4 },
  { name: "Western Bulldogs", emoji: "🐕", founded: 1877, premierships: 2 },
];

// AFL Statistics
const aflStats = {
  totalTeams: 18,
  seasonRounds: 23,
  grandFinalVenue: "Melbourne Cricket Ground (MCG)",
  averageAttendance: "35,000+",
  recordAttendance: "121,696 (1970 Grand Final)",
  mostPremierships: "Carlton & Essendon (16 each)",
  currentPremiers: "Collingwood Magpies (2023)",
  seasonDuration: "March to September",
};

// Theme colors
const themes = [
  { name: "Default", primary: "#667eea", secondary: "#764ba2" },
  { name: "AFL Red", primary: "#e74c3c", secondary: "#c0392b" },
  { name: "AFL Blue", primary: "#3498db", secondary: "#2980b9" },
  { name: "AFL Green", primary: "#27ae60", secondary: "#2ecc71" },
  { name: "AFL Gold", primary: "#f39c12", secondary: "#e67e22" },
];

let currentThemeIndex = 0;

// DOM elements
const randomTeamBtn = document.getElementById("randomTeamBtn");
const showStatsBtn = document.getElementById("showStatsBtn");
const changeThemeBtn = document.getElementById("changeThemeBtn");
const output = document.getElementById("output");

// Event listeners
randomTeamBtn.addEventListener("click", showRandomTeam);
showStatsBtn.addEventListener("click", showAFLStats);
changeThemeBtn.addEventListener("click", changeTheme);

/**
 * Display a random AFL team with details
 */
function showRandomTeam() {
  const randomIndex = Math.floor(Math.random() * aflTeams.length);
  const team = aflTeams[randomIndex];

  const teamInfo = `
        <div style="text-align: center;">
            <h3 style="color: #2c3e50; margin-bottom: 15px;">${team.emoji} ${
    team.name
  }</h3>
            <div style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 20px; border-radius: 15px; margin: 15px 0;">
                <p style="margin: 5px 0;"><strong>Founded:</strong> ${
                  team.founded
                }</p>
                <p style="margin: 5px 0;"><strong>Premierships:</strong> ${
                  team.premierships
                }</p>
                <p style="margin: 5px 0;"><strong>Years in AFL:</strong> ${
                  2024 - team.founded
                }</p>
            </div>
            <p style="color: #7f8c8d; font-style: italic;">${getTeamFunFact(
              team.name
            )}</p>
        </div>
    `;

  output.innerHTML = teamInfo;
  addAnimation();
}

/**
 * Display AFL statistics
 */
function showAFLStats() {
  const statsHtml = `
        <div style="text-align: center;">
            <h3 style="color: #2c3e50; margin-bottom: 20px;">📊 AFL Statistics</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                <div style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 15px; border-radius: 10px;">
                    <strong>Total Teams</strong><br>${aflStats.totalTeams}
                </div>
                <div style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 15px; border-radius: 10px;">
                    <strong>Season Rounds</strong><br>${aflStats.seasonRounds}
                </div>
                <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 15px; border-radius: 10px;">
                    <strong>Avg Attendance</strong><br>${aflStats.averageAttendance}
                </div>
                <div style="background: linear-gradient(135deg, #f39c12, #e67e22); color: white; padding: 15px; border-radius: 10px;">
                    <strong>Record Crowd</strong><br>${aflStats.recordAttendance}
                </div>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 15px; margin: 15px 0;">
                <p><strong>Grand Final Venue:</strong> ${aflStats.grandFinalVenue}</p>
                <p><strong>Most Premierships:</strong> ${aflStats.mostPremierships}</p>
                <p><strong>Current Premiers:</strong> ${aflStats.currentPremiers}</p>
                <p><strong>Season Duration:</strong> ${aflStats.seasonDuration}</p>
            </div>
        </div>
    `;

  output.innerHTML = statsHtml;
  addAnimation();
}

/**
 * Change the theme of the page
 */
function changeTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const theme = themes[currentThemeIndex];

  // Update CSS custom properties
  document.documentElement.style.setProperty("--primary-color", theme.primary);
  document.documentElement.style.setProperty(
    "--secondary-color",
    theme.secondary
  );

  // Update body class for dark theme
  if (theme.name === "AFL Blue") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  // Update button text
  changeThemeBtn.innerHTML = `🎨 ${theme.name} Theme`;

  const themeInfo = `
        <div style="text-align: center;">
            <h3 style="color: #2c3e50; margin-bottom: 15px;">🎨 Theme Changed!</h3>
            <div style="background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary}); color: white; padding: 20px; border-radius: 15px;">
                <p style="margin: 0; font-size: 1.2rem; font-weight: bold;">${theme.name} Theme Applied</p>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Enjoy the new look! 🎉</p>
            </div>
        </div>
    `;

  output.innerHTML = themeInfo;
  addAnimation();
}

/**
 * Get a fun fact about a specific team
 */
function getTeamFunFact(teamName) {
  const funFacts = {
    "Adelaide Crows":
      "The Crows are known for their passionate fan base and the 'Crows Nest' at Adelaide Oval.",
    "Brisbane Lions":
      "Formed from the merger of Brisbane Bears and Fitzroy Lions in 1996.",
    "Carlton Blues": "One of the oldest clubs in the AFL, founded in 1864.",
    "Collingwood Magpies":
      "Known as 'The Pies' and have one of the largest fan bases in the AFL.",
    "Essendon Bombers": "Nicknamed 'The Bombers' and play at Marvel Stadium.",
    "Fremantle Dockers":
      "The only AFL team from Western Australia's port city.",
    "Geelong Cats":
      "Play their home games at Kardinia Park, also known as 'The Cattery'.",
    "Gold Coast Suns": "The youngest team in the AFL, founded in 2011.",
    "Greater Western Sydney Giants":
      "Represent the Greater Western Sydney region.",
    "Hawthorn Hawks":
      "Known for their successful period in the 1980s and 2010s.",
    "Melbourne Demons": "The oldest club in the AFL, founded in 1858.",
    "North Melbourne Kangaroos":
      "Known as 'The Roos' and play at Marvel Stadium.",
    "Port Adelaide Power":
      "Based in Adelaide and known for their black, white, and teal colors.",
    "Richmond Tigers":
      "Recent success with multiple premierships in the 2010s.",
    "St Kilda Saints": "Play their home games at Marvel Stadium in Melbourne.",
    "Sydney Swans": "Based in Sydney and play at the SCG.",
    "West Coast Eagles":
      "One of the most successful teams from Western Australia.",
    "Western Bulldogs":
      "Based in Melbourne's western suburbs and play at Marvel Stadium.",
  };

  return (
    funFacts[teamName] || "A proud member of the Australian Football League!"
  );
}

/**
 * Add animation to the output area
 */
function addAnimation() {
  output.style.opacity = "0";
  output.style.transform = "translateY(20px)";

  setTimeout(() => {
    output.style.transition = "all 0.5s ease";
    output.style.opacity = "1";
    output.style.transform = "translateY(0)";
  }, 100);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  console.log("AFL Information Hub loaded successfully! 🏈");

  // Add some initial interactivity
  const buttons = document.querySelectorAll(".action-button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Load AFL ladder on page load
  loadAFLadder();
});

/**
 * Load AFL ladder data from the API
 */
async function loadAFLadder() {
  const loadingElement = document.getElementById("ladderLoading");
  const contentElement = document.getElementById("ladderContent");
  const errorElement = document.getElementById("ladderError");

  try {
    // Show loading state
    loadingElement.style.display = "block";
    contentElement.style.display = "none";
    errorElement.style.display = "none";

    // Fetch ladder data from our PHP API
    const response = await fetch("api/ladder.php");
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to fetch ladder data");
    }

    // Display the ladder
    displayLadder(data.data);

    // Hide loading and show content
    loadingElement.style.display = "none";
    contentElement.style.display = "block";
  } catch (error) {
    console.error("Error loading AFL ladder:", error);

    // Show error state
    loadingElement.style.display = "none";
    contentElement.style.display = "none";
    errorElement.style.display = "block";
  }
}

/**
 * Display the AFL ladder in the UI
 */
function displayLadder(ladderData) {
  const contentElement = document.getElementById("ladderContent");

  if (!ladderData || ladderData.length === 0) {
    contentElement.innerHTML = "<p>No ladder data available</p>";
    return;
  }

  // Sort ladder by position (rank)
  const sortedLadder = ladderData.sort(
    (a, b) => parseInt(a.rank) - parseInt(b.rank)
  );

  let ladderHtml = `
    <div class="ladder-table">
      <div class="ladder-header">
        <div class="ladder-col pos">Pos</div>
        <div class="ladder-col team">Team</div>
        <div class="ladder-col played">P</div>
        <div class="ladder-col won">W</div>
        <div class="ladder-col lost">L</div>
        <div class="ladder-col drawn">D</div>
        <div class="ladder-col points">Pts</div>
        <div class="ladder-col percentage">%</div>
      </div>
  `;

  sortedLadder.forEach((team, index) => {
    const position = parseInt(team.rank);
    const teamName = team.team || "Unknown";
    const played = team.played || 0;
    const won = team.won || 0;
    const lost = team.lost || 0;
    const drawn = team.drawn || 0;
    const points = team.points || 0;
    const percentage = team.percentage || 0;

    // Add position-based styling
    let rowClass = "ladder-row";
    if (position <= 4) {
      rowClass += " top-four";
    } else if (position <= 8) {
      rowClass += " finals";
    } else if (position >= 15) {
      rowClass += " bottom-four";
    }

    ladderHtml += `
      <div class="${rowClass}">
        <div class="ladder-col pos">${position}</div>
        <div class="ladder-col team">${teamName}</div>
        <div class="ladder-col played">${played}</div>
        <div class="ladder-col won">${won}</div>
        <div class="ladder-col lost">${lost}</div>
        <div class="ladder-col drawn">${drawn}</div>
        <div class="ladder-col points">${points}</div>
        <div class="ladder-col percentage">${percentage.toFixed(1)}%</div>
      </div>
    `;
  });

  ladderHtml += "</div>";
  contentElement.innerHTML = ladderHtml;
}
