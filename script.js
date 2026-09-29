let market = "NIFTY 50";
let base = 25000;

function changeMarket(name, value) {
  market = name;
  base = value;

  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.classList.remove("active");
  });

  generateSignal();
}

function generateSignal() {
  const move = (Math.random() - 0.5) * 200;
  const price = base + move;
  const bullish = move >= 0;

  const action = bullish ? "BUY" : "SELL";
  const direction = bullish ? "BULLISH" : "BEARISH";

  const sl = bullish ? price - 80 : price + 80;
  const target = bullish ? price + 150 : price - 150;

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="card">
      <div class="row">
        <div>
          <div class="symbol">${market}</div>
          <div class="price">${price.toFixed(2)}</div>
        </div>

        <div class="${bullish ? "up" : "down"}">
          ${bullish ? "▲" : "▼"} ${Math.abs(move).toFixed(2)}
        </div>
      </div>

      <div class="signal">
        <span class="badge ${bullish ? "buy" : "sell"}">
          ${action} / ${direction}
        </span>

        <div class="grid">
          <div class="box">
            <div class="label">5 MIN</div>
            <div class="value ${bullish ? "up" : "down"}">
              ${bullish ? "UP" : "DOWN"}
            </div>
          </div>

          <div class="box">
            <div class="label">15 MIN</div>
            <div class="value ${bullish ? "up" : "down"}">
              ${bullish ? "UP" : "DOWN"}
            </div>
          </div>

          <div class="box">
            <div class="label">30 MIN</div>
            <div class="value ${bullish ? "up" : "down"}">
              ${bullish ? "UP" : "DOWN"}
            </div>
          </div>

          <div class="box">
            <div class="label">1 HOUR</div>
            <div class="value ${bullish ? "up" : "down"}">
              ${bullish ? "UP" : "DOWN"}
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="box">
            <div class="label">STOP LOSS</div>
            <div class="value">${sl.toFixed(2)}</div>
          </div>

          <div class="box">
            <div class="label">TARGET</div>
            <div class="value">${target.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

generateSignal();