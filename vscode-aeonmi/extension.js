const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const disposable = vscode.commands.registerCommand('aeonmi.hello', function () {
    vscode.window.showInformationMessage('Aeonmi extension active — Hello!');
  });

  context.subscriptions.push(disposable);

  // --- Completion provider ---
  const aeonmiKeywords = [
    'let','const','fn','function','if','else','while','for','return','import',
    'true','false','null','qubit','superpose','entangle','measure','print','log','len','push','slice','concat'
  ];

  const qubeKeywords = [
    'state','apply','collapse','assert','log','print','H','X','Y','Z','S','T','CNOT','CZ','SWAP','Rx','Ry','Rz'
  ];

  const completionProvider = vscode.languages.registerCompletionItemProvider([
    { language: 'aeonmi' },
    { language: 'qube' }
  ], {
    provideCompletionItems(document, position) {
      const linePrefix = document.lineAt(position).text.substr(0, position.character);
      const items = [];
      aeonmiKeywords.forEach(k => {
        const it = new vscode.CompletionItem(k, vscode.CompletionItemKind.Keyword);
        it.detail = 'Aeonmi keyword';
        items.push(it);
      });
      qubeKeywords.forEach(k => {
        const it = new vscode.CompletionItem(k, vscode.CompletionItemKind.Keyword);
        it.detail = 'Qube keyword / gate';
        items.push(it);
      });
      return items;
    }
  });
  context.subscriptions.push(completionProvider);

  // --- Hover provider ---
  const docMap = new Map();
  // Aeonmi docs
  docMap.set('fn', 'Defines a function: `fn name(args) { }`');
  docMap.set('qubit', 'Declare a qubit: `qubit name;`');
  docMap.set('superpose', 'Create superposition: `superpose(qubit)`');
  docMap.set('entangle', 'Entangle two qubits: `entangle(q1, q2)`');
  docMap.set('measure', 'Measure a qubit: `measure(qubit)` — returns classical result');
  docMap.set('let', 'Variable declaration: `let name = value;`');
  // Qube docs / gates
  docMap.set('H', 'Hadamard gate — creates superposition.');
  docMap.set('CNOT', 'Controlled-NOT gate. use `apply CNOT(control, target)`');
  docMap.set('X', 'Pauli-X (NOT) gate.');

  const hoverProvider = vscode.languages.registerHoverProvider([
    { language: 'aeonmi' },
    { language: 'qube' }
  ], {
    provideHover(document, position) {
      const range = document.getWordRangeAtPosition(position, /[A-Za-z_⧉⟨⟩⊗↦‥←]+/);
      if (!range) return null;
      const word = document.getText(range);
      const info = docMap.get(word);
      if (info) {
        return new vscode.Hover(info);
      }
      return null;
    }
  });
  context.subscriptions.push(hoverProvider);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
