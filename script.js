let numOfWidgets = 0

let widgetBuilder = {
  model: {number: 0, upgradeCost: 50, clickMod: 1},
  power: {number: 0, upgradeCost: 100, clickMod: 10},
  ai: {number: 0, upgradeCost: 2000, clickMod: 20},
  quantum: {number: 0, upgradeCost: 10000, clickMod: 50},
  widgetsPerClick: 1
};

function buildWidget() {
  numOfWidgets += widgetBuilder.widgetsPerClick
  document.getElementById('widgetCounter').innerText = `Widget Inventory: ${numOfWidgets} widgets`
}

function purchaseUpgrade(upgrade) {
  if (numOfWidgets >= widgetBuilder[upgrade].upgradeCost) {
    numOfWidgets -= widgetBuilder[upgrade].upgradeCost
    widgetBuilder[upgrade].number += 1
    widgetBuilder.widgetsPerClick += widgetBuilder[upgrade].clickMod
    widgetBuilder[upgrade].upgradeCost += widgetBuilder[upgrade].upgradeCost
  }
  draw()
}

function draw() {
  document.getElementById('widgetCounter').innerText = `Widget Inventory: ${numOfWidgets} widgets`

  document.getElementById('modelUpgradeCounter').innerText = `+${(widgetBuilder.model.number * widgetBuilder.model.clickMod)} production for ${widgetBuilder.model.number} Model upgrades.`
  document.getElementById('modelCounter').innerText = `Current Widget Maker Model: X${(widgetBuilder.model.number) * 100}`
  document.getElementById('modelUpgradeButton').innerText = `Upgrade model: Cost = ${widgetBuilder.model.upgradeCost} Widgets`

  document.getElementById('powerUpgradeCounter').innerText = `+${(widgetBuilder.power.number * widgetBuilder.power.clickMod)} production for ${widgetBuilder.power.number} Power upgrades.`
  document.getElementById('powerModuleCounter').innerText = `Current number of Power Modules: ${widgetBuilder.power.number} Modules`
  document.getElementById('powerUpgradeButton').innerText = `Upgrade power: Cost = ${widgetBuilder.power.upgradeCost} Widgets`

  document.getElementById('machineAIUpgradeCounter').innerText = `+${(widgetBuilder.ai.number * widgetBuilder.ai.clickMod)} production for ${widgetBuilder.ai.number} Machine AI upgrades.`
  document.getElementById('machineAICounter').innerText = `Current number of AI upgrades: ${widgetBuilder.ai.number} upgrades`
  document.getElementById('machineAIUpgradeButton').innerText = `Upgrade AI: Cost = ${widgetBuilder.ai.upgradeCost} Widgets`

  document.getElementById('quantumProcessorUpgradeCounter').innerText = `+${(widgetBuilder.quantum.number * widgetBuilder.quantum.clickMod)} production for ${widgetBuilder.quantum.number} Quantum Processor upgrades.`
  document.getElementById('quantumProcessorCounter').innerText = `Current number of Quantum Processor upgrades: ${widgetBuilder.quantum.number} upgrades`
  document.getElementById('quantumProcessorUpgradeButton').innerText = `Upgrade Quantum Processor: Cost = ${widgetBuilder.quantum.upgradeCost} Widgets`
}

draw()