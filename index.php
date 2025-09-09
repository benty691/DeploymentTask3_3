<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AFL Information Hub</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🏈 AFL Information Hub</h1>
            <p class="subtitle">Your gateway to Australian Football League</p>
        </header>

        <main>
            <section class="info-section">
                <h2>About AFL</h2>
                <div class="info-card">
                    <p>The Australian Football League (AFL) is the premier professional competition of Australian rules football. Founded in 1897 as the Victorian Football League (VFL), it has grown to become Australia's most popular spectator sport.</p>
                </div>

                <h2>Key Facts</h2>
                <div class="facts-grid">
                    <div class="fact-card">
                        <h3>Teams</h3>
                        <p class="fact-number">18</p>
                        <p>Professional teams across Australia</p>
                    </div>
                    <div class="fact-card">
                        <h3>Season</h3>
                        <p class="fact-number">23</p>
                        <p>Regular season rounds</p>
                    </div>
                    <div class="fact-card">
                        <h3>Grand Final</h3>
                        <p class="fact-number">1</p>
                        <p>Championship decider at MCG</p>
                    </div>
                </div>

                <h2>Popular Teams</h2>
                <div class="teams-list">
                    <div class="team-item">🏆 Richmond Tigers</div>
                    <div class="team-item">🦅 West Coast Eagles</div>
                    <div class="team-item">🐱 Geelong Cats</div>
                    <div class="team-item">🦁 Brisbane Lions</div>
                    <div class="team-item">🐨 Carlton Blues</div>
                    <div class="team-item">🐯 Collingwood Magpies</div>
                </div>
            </section>

            <section class="interactive-section">
                <h2>Interactive Features</h2>
                <div class="button-container">
                    <button id="randomTeamBtn" class="action-button">
                        🎲 Get Random Team
                    </button>
                    <button id="showStatsBtn" class="action-button">
                        📊 Show AFL Stats
                    </button>
                    <button id="changeThemeBtn" class="action-button">
                        🎨 Change Theme
                    </button>
                </div>
                
                <div id="output" class="output-area">
                    <p>Click a button above to see some AFL magic! ✨</p>
                </div>
            </section>

            <section class="ladder-section">
                <h2>AFL Ladder</h2>
                <div class="ladder-container">
                    <div id="ladderLoading" class="ladder-loading">
                        <p>Loading AFL ladder...</p>
                    </div>
                    <div id="ladderContent" class="ladder-content" style="display: none;">
                        <!-- Ladder will be populated here -->
                    </div>
                    <div id="ladderError" class="ladder-error" style="display: none;">
                        <p>Failed to load ladder data. Please try again later.</p>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 AFL Information Hub | Made with ❤️ for AFL fans</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>
