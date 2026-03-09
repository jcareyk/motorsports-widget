import React, { useEffect, useMemo, useState } from "react";

const API_BASE =
  "https://motorsports-api-app-adgqb3amcqg5c4d4.canadacentral-01.azurewebsites.net";

const buildPreviewRow = (driver, team, pos, overrides = {}) => {
  const generatedWinnerOdds =
    pos <= 3
      ? "+1200"
      : pos <= 6
      ? "+1600"
      : pos <= 10
      ? "+2200"
      : pos <= 15
      ? "+3000"
      : pos <= 20
      ? "+4000"
      : pos <= 28
      ? "+6000"
      : "+9000";

  const generatedWinnerPrev =
    pos <= 3
      ? "+1300"
      : pos <= 6
      ? "+1700"
      : pos <= 10
      ? "+2400"
      : pos <= 15
      ? "+3200"
      : pos <= 20
      ? "+4200"
      : pos <= 28
      ? "+6500"
      : "+9500";

  const generatedMoneyline =
    pos <= 3
      ? "-145"
      : pos <= 6
      ? "-120"
      : pos <= 10
      ? "+105"
      : pos <= 15
      ? "+130"
      : pos <= 20
      ? "+165"
      : pos <= 28
      ? "+220"
      : "+300";

  const generatedMoneylinePrev =
    pos <= 3
      ? "-135"
      : pos <= 6
      ? "-110"
      : pos <= 10
      ? "+100"
      : pos <= 15
      ? "+140"
      : pos <= 20
      ? "+175"
      : pos <= 28
      ? "+230"
      : "+320";

  const winnerCurrentNum = parseInt(generatedWinnerOdds.replace("+", ""), 10);
  const winnerPrevNum = parseInt(generatedWinnerPrev.replace("+", ""), 10);
  const moneylineCurrentNum = parseInt(
    generatedMoneyline.replace("+", ""),
    10
  );
  const moneylinePrevNum = parseInt(
    generatedMoneylinePrev.replace("+", ""),
    10
  );

  return {
    driver,
    team,
    book: "DraftKings",
    winnerOdds: generatedWinnerOdds,
    winnerPrev: generatedWinnerPrev,
    winnerMove: winnerCurrentNum < winnerPrevNum ? "down" : "up",
    moneyline: generatedMoneyline,
    moneylinePrev: generatedMoneylinePrev,
    moneylineMove: moneylineCurrentNum < moneylinePrevNum ? "down" : "up",
    spreadLine:
      pos <= 5
        ? `Top ${pos + 2}.5`
        : pos <= 12
        ? "Top 10.5"
        : pos <= 20
        ? "Top 15.5"
        : "Top 20.5",
    spreadOdds:
      pos <= 5 ? "-120" : pos <= 12 ? "-110" : pos <= 20 ? "+100" : "+120",
    spreadPrev:
      pos <= 5 ? "-115" : pos <= 12 ? "-105" : pos <= 20 ? "+105" : "+125",
    spreadMove: pos <= 12 ? "down" : "up",
    pos,
    ...overrides,
  };
};

const seriesSnapshots = {
  NASCAR: {
    updatedAt: "2026-03-08T11:31:00-05:00",
    event: {
      name: "Straight Talk Wireless 500",
      status: "Snapshot",
      books: 1,
      source: "Entry list: NASCAR.com | odds snapshot: DraftKings via Covers",
      sourceUpdatedLabel: "Updated Mar 8, 2026",
    },
    rows: [
      buildPreviewRow("Ryan Blaney", "Team Penske", 1, {
        winnerOdds: "+500",
        winnerPrev: "+550",
        winnerMove: "down",
        moneyline: "-145",
        moneylinePrev: "-135",
        moneylineMove: "down",
      }),
      buildPreviewRow("Denny Hamlin", "Joe Gibbs Racing", 2, {
        winnerOdds: "+550",
        winnerPrev: "+600",
        winnerMove: "down",
        moneyline: "-130",
        moneylinePrev: "-120",
        moneylineMove: "down",
      }),
      buildPreviewRow("Kyle Larson", "Hendrick Motorsports", 3, {
        winnerOdds: "+650",
        winnerPrev: "+700",
        winnerMove: "down",
        moneyline: "-135",
        moneylinePrev: "-125",
        moneylineMove: "down",
      }),
      buildPreviewRow("Christopher Bell", "Joe Gibbs Racing", 4, {
        winnerOdds: "+650",
        winnerPrev: "+650",
        winnerMove: "flat",
        moneyline: "+105",
        moneylinePrev: "+100",
        moneylineMove: "up",
      }),
      buildPreviewRow("William Byron", "Hendrick Motorsports", 5, {
        winnerOdds: "+750",
        winnerPrev: "+800",
        winnerMove: "down",
        moneyline: "-120",
        moneylinePrev: "-115",
        moneylineMove: "down",
      }),
      buildPreviewRow("Tyler Reddick", "23XI Racing", 6, {
        winnerOdds: "+1000",
        winnerPrev: "+900",
        winnerMove: "up",
        moneyline: "+110",
        moneylinePrev: "+105",
        moneylineMove: "up",
      }),
      buildPreviewRow("Ross Chastain", "Trackhouse Racing", 7),
      buildPreviewRow("Austin Cindric", "Team Penske", 8),
      buildPreviewRow("Austin Dillon", "Richard Childress Racing", 9),
      buildPreviewRow("Noah Gragson", "Front Row Motorsports", 10),
      buildPreviewRow("Brad Keselowski", "RFK Racing", 11),
      buildPreviewRow("Daniel Suárez", "Spire Motorsports", 12),
      buildPreviewRow("Kyle Busch", "Richard Childress Racing", 13),
      buildPreviewRow("Chase Elliott", "Hendrick Motorsports", 14),
      buildPreviewRow("Ty Dillon", "Kaulig Racing", 15),
      buildPreviewRow("AJ Allmendinger", "Kaulig Racing", 16),
      buildPreviewRow("Chris Buescher", "RFK Racing", 17),
      buildPreviewRow("Chase Briscoe", "Joe Gibbs Racing", 18),
      buildPreviewRow("Josh Berry", "Wood Brothers Racing", 19),
      buildPreviewRow("Joey Logano", "Team Penske", 20),
      buildPreviewRow("Bubba Wallace", "23XI Racing", 21),
      buildPreviewRow("Austin Hill", "Richard Childress Racing", 22),
      buildPreviewRow("Todd Gilliland", "Front Row Motorsports", 23),
      buildPreviewRow("Riley Herbst", "23XI Racing", 24),
      buildPreviewRow("Zane Smith", "Front Row Motorsports", 25),
      buildPreviewRow("Cole Custer", "Haas Factory Team", 26),
      buildPreviewRow("John H. Nemechek", "Legacy Motor Club", 27),
      buildPreviewRow("Erik Jones", "Legacy Motor Club", 28),
      buildPreviewRow("Ricky Stenhouse Jr", "HYAK Motorsports", 29),
      buildPreviewRow("Anthony Alfredo", "Hendrick Motorsports", 30),
      buildPreviewRow("Cody Ware", "Rick Ware Racing", 31),
      buildPreviewRow("Ty Gibbs", "Joe Gibbs Racing", 32),
      buildPreviewRow("Ryan Preece", "RFK Racing", 33),
      buildPreviewRow("Michael McDowell", "Spire Motorsports", 34),
      buildPreviewRow("Carson Hocevar", "Spire Motorsports", 35),
      buildPreviewRow("Connor Zilisch", "Trackhouse Racing", 36),
      buildPreviewRow("Shane Van Gisbergen", "Trackhouse Racing", 37),
    ],
  },
  IndyCar: {
    updatedAt: "2026-03-07T12:05:00-05:00",
    event: {
      name: "Good Ranchers 250",
      status: "Snapshot",
      books: 1,
      source: "Starting grid: IndyCar.com | odds snapshot: DraftKings via FOX Sports",
      sourceUpdatedLabel: "Updated Mar 7, 2026",
    },
    rows: [
      buildPreviewRow("Josef Newgarden", "Team Penske", 1, {
        winnerOdds: "+180",
        winnerPrev: "+220",
        winnerMove: "down",
        moneyline: "-160",
        moneylinePrev: "-150",
        moneylineMove: "down",
      }),
      buildPreviewRow("David Malukas", "Team Penske", 2, {
        winnerOdds: "+300",
        winnerPrev: "+350",
        winnerMove: "down",
        moneyline: "-125",
        moneylinePrev: "-120",
        moneylineMove: "down",
      }),
      buildPreviewRow("Alex Palou", "Chip Ganassi Racing", 3, {
        winnerOdds: "+350",
        winnerPrev: "+300",
        winnerMove: "up",
        moneyline: "+110",
        moneylinePrev: "+100",
        moneylineMove: "up",
      }),
      buildPreviewRow("Pato O'Ward", "Arrow McLaren", 4, {
        winnerOdds: "+800",
        winnerPrev: "+900",
        winnerMove: "down",
        moneyline: "+130",
        moneylinePrev: "+140",
        moneylineMove: "down",
      }),
      buildPreviewRow("Scott McLaughlin", "Team Penske", 5, {
        winnerOdds: "+1000",
        winnerPrev: "+1000",
        winnerMove: "flat",
        moneyline: "+150",
        moneylinePrev: "+150",
        moneylineMove: "flat",
      }),
      buildPreviewRow("Scott Dixon", "Chip Ganassi Racing", 6, {
        winnerOdds: "+2200",
        winnerPrev: "+2000",
        winnerMove: "up",
        moneyline: "+165",
        moneylinePrev: "+155",
        moneylineMove: "up",
      }),
      buildPreviewRow("Graham Rahal", "Rahal Letterman Lanigan Racing", 7),
      buildPreviewRow("Mick Schumacher", "Rahal Letterman Lanigan Racing", 8),
      buildPreviewRow("Alexander Rossi", "ECR", 9),
      buildPreviewRow("Rinus VeeKay", "Juncos Hollinger Racing", 10),
      buildPreviewRow("Nolan Siegel", "Arrow McLaren", 11),
      buildPreviewRow(
        "Kyle Kirkwood",
        "Andretti Global w/ Curb-Agajanian",
        12
      ),
      buildPreviewRow("Sting Ray Robb", "Juncos Hollinger Racing", 13),
      buildPreviewRow(
        "Marcus Armstrong",
        "Meyer Shank w/ Curb-Agajanian",
        14
      ),
      buildPreviewRow("Marcus Ericsson", "Andretti Global", 15),
      buildPreviewRow(
        "Louis Foster",
        "Rahal Letterman Lanigan Racing",
        16
      ),
      buildPreviewRow("Christian Lundgaard", "Arrow McLaren", 17),
      buildPreviewRow("Christian Rasmussen", "ECR", 18),
      buildPreviewRow("Kyffin Simpson", "Chip Ganassi Racing", 19),
      buildPreviewRow("Romain Grosjean", "Dale Coyne Racing", 20),
      buildPreviewRow("Santino Ferrucci", "A.J. Foyt Enterprises", 21),
      buildPreviewRow("Dennis Hauger", "Dale Coyne Racing", 22),
      buildPreviewRow("Caio Collet", "A.J. Foyt Enterprises", 23),
      buildPreviewRow(
        "Felix Rosenqvist",
        "Meyer Shank w/ Curb-Agajanian",
        24
      ),
      buildPreviewRow("Will Power", "Andretti Global", 25),
    ],
  },
  IMSA: {
    updatedAt: new Date().toISOString(),
    event: {
      name: "Sebring Placeholder",
      status: "Demo",
      books: 1,
      source: "Demo data",
      sourceUpdatedLabel: "Preview only",
    },
    rows: [
      buildPreviewRow("Felipe Nasr", "Porsche Penske", 1, {
        winnerOdds: "+250",
        winnerPrev: "+275",
        winnerMove: "down",
        moneyline: "-145",
        moneylinePrev: "-135",
        moneylineMove: "down",
      }),
      buildPreviewRow("Tom Blomqvist", "Acura Meyer Shank", 2, {
        winnerOdds: "+425",
        winnerPrev: "+400",
        winnerMove: "up",
        moneyline: "+110",
        moneylinePrev: "+105",
        moneylineMove: "up",
      }),
    ],
  },
  "MX-5 Cup": {
    updatedAt: new Date().toISOString(),
    event: {
      name: "MX-5 Cup Demo",
      status: "Demo",
      books: 1,
      source: "Demo data",
      sourceUpdatedLabel: "Preview only",
    },
    rows: [
      buildPreviewRow("Connor Zilisch", "BSI", 1, {
        winnerOdds: "+300",
        winnerPrev: "+350",
        winnerMove: "down",
        moneyline: "-125",
        moneylinePrev: "-120",
        moneylineMove: "down",
      }),
      buildPreviewRow("Gresham Wagner", "JTR", 2, {
        winnerOdds: "+500",
        winnerPrev: "+450",
        winnerMove: "up",
        moneyline: "+105",
        moneylinePrev: "+100",
        moneylineMove: "up",
      }),
    ],
  },
};

const fallbackData = seriesSnapshots.NASCAR;

function oddsColor(odds) {
  if (typeof odds !== "string") return "#ffffff";
  const trimmed = odds.trim();
  if (trimmed.startsWith("+")) return "#4ade80";
  if (trimmed.startsWith("-")) return "#f87171";
  return "#ffffff";
}

function parseAmericanOdds(odds) {
  if (typeof odds !== "string") return Number.POSITIVE_INFINITY;
  const trimmed = odds.trim();
  const value = Number(trimmed.replace("+", ""));
  return Number.isFinite(value) ? value : Number.POSITIVE_INFINITY;
}

function getPriceForMarket(row, market) {
  if (market === "winner") return row.winnerOdds;
  if (market === "moneyline") return row.moneyline;
  return row.spreadOdds;
}

function getPrevPriceForMarket(row, market) {
  if (market === "winner") return row.winnerPrev;
  if (market === "moneyline") return row.moneylinePrev;
  return row.spreadPrev;
}

function getDisplayForMarket(row, market) {
  if (market === "spread") return `${row.spreadLine} • ${row.spreadOdds}`;
  return getPriceForMarket(row, market);
}

function getBestOddsRow(rows, market) {
  if (!Array.isArray(rows) || rows.length === 0) return null;
  return [...rows].sort(
    (a, b) =>
      parseAmericanOdds(getPriceForMarket(a, market)) -
      parseAmericanOdds(getPriceForMarket(b, market))
  )[0];
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#09090b",
    color: "white",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
  },
  wrap: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  card: {
    background: "#18181b",
    border: "1px solid #3f3f46",
    borderRadius: "24px",
    padding: "20px",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  button: (active) => ({
    padding: "10px 16px",
    borderRadius: "16px",
    border: "1px solid #52525b",
    background: active ? "#ffffff" : "#09090b",
    color: active ? "#000000" : "#ffffff",
    cursor: "pointer",
  }),
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "16px",
    border: "1px solid #52525b",
    background: "#09090b",
    color: "white",
    boxSizing: "border-box",
  },
  stat: {
    padding: "10px 14px",
    borderRadius: "12px",
    border: "1px solid #52525b",
    background: "#09090b",
    color: "#e4e4e7",
    display: "inline-block",
  },
  marketRow: {
    border: "1px solid #52525b",
    borderRadius: "18px",
    background: "#09090b",
    padding: "16px",
    display: "grid",
    gap: "12px",
  },
  notice: {
    padding: "12px 14px",
    borderRadius: "14px",
    background: "rgba(120,53,15,.35)",
    border: "1px solid rgba(251,191,36,.4)",
    color: "#fde68a",
  },
  best: {
    padding: "16px",
    borderRadius: "18px",
    background: "rgba(6,78,59,.35)",
    border: "1px solid rgba(52,211,153,.4)",
  },
};

export default function App() {
  const [series, setSeries] = useState("NASCAR");
  const [searchText, setSearchText] = useState("");
  const [market, setMarket] = useState("winner");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [countdown, setCountdown] = useState(10);
  const [data, setData] = useState(seriesSnapshots.NASCAR);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadOdds() {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        series: series.toLowerCase(),
        market: "winner",
      });

      const response = await fetch(
        `${API_BASE}/widget/odds?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const json = await response.json();

      if (json?.rows?.length) {
        setData(json);
      } else {
        setData(seriesSnapshots[series] || fallbackData);
      }

      setCountdown(10);
    } catch (err) {
      console.error(err);
      setError("Live backend unavailable. Showing snapshot data.");
      setData(seriesSnapshots[series] || fallbackData);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOdds();
  }, [series]);

  useEffect(() => {
    if (!autoRefresh) return;

    const intervalId = setInterval(() => {
      setCountdown((currentNumber) => {
        if (currentNumber <= 1) {
          loadOdds();
          return 10;
        }
        return currentNumber - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [autoRefresh, series]);

  const filteredRows = useMemo(() => {
    const lowerSearch = searchText.toLowerCase();

    return data.rows.filter(
      (row) =>
        row.driver.toLowerCase().includes(lowerSearch) ||
        row.team.toLowerCase().includes(lowerSearch) ||
        row.book.toLowerCase().includes(lowerSearch)
    );
  }, [searchText, data]);

  const bestOddsRow = useMemo(
    () => getBestOddsRow(data.rows, market),
    [data, market]
  );

  return (
    <div style={styles.page}>
      <div style={styles.wrap}>
        <div style={styles.card}>
          <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
            Motorsports Odds Widget
          </h1>
          <div style={{ color: "#e4e4e7", marginBottom: "16px" }}>
            This version is connected to your live Azure backend.
          </div>

          <div style={styles.buttonRow}>
            {["NASCAR", "IndyCar", "IMSA", "MX-5 Cup"].map((item) => (
              <button
                key={item}
                onClick={() => setSeries(item)}
                style={styles.button(series === item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search driver, team, or book"
              style={styles.input}
            />

            <div style={styles.buttonRow}>
              <div style={styles.stat}>{data.event.status}</div>
              <div style={styles.stat}>{data.event.books} books</div>
              <button onClick={loadOdds} style={styles.button(false)}>
                {loading ? "Refreshing..." : "Refresh"}
              </button>
            </div>

            <div style={styles.buttonRow}>
              {["winner", "moneyline", "spread"].map((item) => (
                <button
                  key={item}
                  onClick={() => setMarket(item)}
                  style={styles.button(market === item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div style={styles.marketRow}>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {series} • {data.event.name}
              </div>
              <div style={{ color: "#e4e4e7" }}>
                Updated {new Date(data.updatedAt).toLocaleTimeString()}
              </div>
              <div style={{ color: "#d4d4d8" }}>
                Source: {data.event.source || "Backend feed"} •{" "}
                {data.event.sourceUpdatedLabel || "Live"}
              </div>
              <div style={{ color: "#e4e4e7" }}>
                {autoRefresh
                  ? `Refresh in ${countdown}s`
                  : "Auto refresh off"}
              </div>
              <div>
                <button
                  onClick={() => setAutoRefresh((oldValue) => !oldValue)}
                  style={styles.button(false)}
                >
                  {autoRefresh ? "Pause" : "Resume"}
                </button>
              </div>
            </div>

            {bestOddsRow && (
              <div style={styles.best}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Best current price on the board
                </div>
                <div style={{ marginTop: "8px", color: "#e4e4e7" }}>
                  {bestOddsRow.driver} • {bestOddsRow.team} •{" "}
                  {bestOddsRow.book}
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: oddsColor(getPriceForMarket(bestOddsRow, market)),
                  }}
                >
                  {getDisplayForMarket(bestOddsRow, market)}
                </div>
              </div>
            )}

            {error && <div style={styles.notice}>{error}</div>}
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
            Live{" "}
            {market === "winner"
              ? "Winner"
              : market === "moneyline"
              ? "Moneyline"
              : "Spread"}{" "}
            Market
          </h2>

          <div style={{ display: "grid", gap: "12px" }}>
            {filteredRows.map((row) => (
              <div
                key={`${row.driver}-${row.book}-${market}`}
                style={styles.marketRow}
              >
                <div style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {row.driver}
                </div>
                <div style={{ color: "#e4e4e7" }}>{row.team}</div>
                <div style={{ color: "#e4e4e7" }}>{row.book}</div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: oddsColor(getPriceForMarket(row, market)),
                  }}
                >
                  {getDisplayForMarket(row, market)}
                </div>
                <div style={{ color: "#e4e4e7" }}>
                  Previous: {getPrevPriceForMarket(row, market)}
                </div>
                <div style={{ color: "#e4e4e7" }}>Pos {row.pos}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
            Sponsor or affiliate callout
          </h2>
          <div style={styles.marketRow}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              Track the latest motorsports prices
            </div>
            <div style={{ color: "#e4e4e7" }}>
              This block can later become a sportsbook affiliate button, a
              sponsor placement, or a premium-signup CTA for line movement
              alerts.
            </div>
            <div>
              <button style={styles.button(false)}>
                View featured odds partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}