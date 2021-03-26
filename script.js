let numOfWidgets = 0

let widgetBuilder = {
  model: {number: 100, upgradeCost: 50},
  widgetsPerClick: 1,
  numOfUpgrade2: 0,
  numOfUpgrade3: 0,
  numOfUpgrade4: 0
};

function buildWidget() {
  numOfWidgets += widgetBuilder.widgetsPerClick
  document.getElementById('widgetCounter').innerText = `Widget Inventory: ${numOfWidgets} widgets`
}

function purchaseUpgrade(upgrade) {
  if (upgrade === 'model' && numOfWidgets >= widgetBuilder.model.upgradeCost) {
    numOfWidgets -= widgetBuilder.model.upgradeCost
    widgetBuilder.model.number += 100
    widgetBuilder.widgetsPerClick = widgetBuilder.model.number / 100
    widgetBuilder.model.upgradeCost = widgetBuilder.model.upgradeCost + 50
    document.getElementById('widgetCounter').innerText = `Widget Inventory: ${numOfWidgets} widgets`
    document.getElementById('upgrade1Counter').innerText = `You are currently using ${(widgetBuilder.model.number / 100) - 1} model upgrades (+${(widgetBuilder.model.number / 100) - 1} production per click)`
    document.getElementById('modelCounter').innerText = `Current Widget Maker Model: X${widgetBuilder.model.number}`
    document.getElementById('modelUpgradeButton').innerText = `Upgrade to X${widgetBuilder.model.number + 100}: Cost = ${widgetBuilder.model.upgradeCost} Widgets`
    
  }


}