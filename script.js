async function loadLadder() {
  const contentEl = document.getElementById("content");

  try {
    const response = await fetch("api/ladder.php");
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to load ladder");
    }

    displayLadder(data.data);
  } catch (error) {
    console.error("Error loading ladder:", error);
    contentEl.innerHTML = `<div class="error">Failed to load ladder: ${error.message}</div>`;
  }
}

function displayLadder(standings) {
  const contentEl = document.getElementById("content");

  if (!standings || standings.length === 0) {
    contentEl.innerHTML = '<div class="error">No ladder data available</div>';
    return;
  }

  // Sort by position (rank)
  const sortedStandings = standings.sort((a, b) => {
    const rankA = parseInt(a.rank) || parseInt(a.position) || 0;
    const rankB = parseInt(b.rank) || parseInt(b.position) || 0;
    return rankA - rankB;
  });

  let html = `
      <table>
          <thead>
              <tr>
                  <th class="pos">Pos</th>
                  <th class="team">Team</th>
                  <th class="number">P</th>
                  <th class="number">W</th>
                  <th class="number">L</th>
                  <th class="number">D</th>
                  <th class="number">Pts</th>
                  <th class="number">%</th>
              </tr>
          </thead>
          <tbody>
  `;

  sortedStandings.forEach((team, index) => {
    const pos = team.rank || team.position || index + 1;
    const name = team.name || team.team || "Unknown";
    const played = team.played || 0;
    const wins = team.wins || 0;
    const losses = team.losses || 0;
    const draws = team.draws || 0;
    const points = team.points || 0;
    const percentage = team.percentage || 0;

    html += `
          <tr>
              <td class="pos">${pos}</td>
              <td class="team">${name}</td>
              <td class="number">${played}</td>
              <td class="number">${wins}</td>
              <td class="number">${losses}</td>
              <td class="number">${draws}</td>
              <td class="number">${points}</td>
              <td class="number">${percentage.toFixed(1)}%</td>
          </tr>
      `;
  });

  html += "</tbody></table>";
  contentEl.innerHTML = html;
}

// Load ladder when page loads
document.addEventListener("DOMContentLoaded", loadLadder);
