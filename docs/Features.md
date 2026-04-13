# Features

A complete overview of what the **Aeonmi VS Code extension** provides.

---

## Syntax Highlighting

The extension provides full syntax highlighting for `.ai` and `.qube` files.

Highlighted elements include:

- **Glyph operators** — `⧉`, `⟨⟩`, `…`, `⊗`, `↦` are styled as operators
- **Keywords** — language keywords receive distinct styling
- **String literals** — quoted strings are highlighted
- **Numeric literals** — integers and floats are highlighted
- **Comments** — lines beginning with `#` are treated as line comments
- **Identifiers** — variable and function names

---

## Code Snippets

The extension includes snippets for common Aeonmi patterns.

| Prefix       | Expands to                                      |
|--------------|-------------------------------------------------|
| `array`      | Array genesis pattern using `⧉…⧉`               |
| `bind`       | Binding expression `name ↦ expression`          |
| `tensor`     | Tensor product `a ⊗ b`                          |
| `spread`     | Spread expression `…name`                       |
| `slice`      | Slice / index expression `⟨expr⟩`               |
| `qstate`     | QUBE quantum state declaration                  |

Type a prefix and press `Tab` to expand the snippet.

---

## Bracket Matching and Auto-Closing

The extension configures VS Code to:

- **Auto-close** `⧉…⧉`, `⟨…⟩`, `(…)`, `[…]`, `{…}`, and `"…"` pairs
- **Match** all bracket pairs so VS Code highlights the matching delimiter

---

## Comment Toggling

Toggle line comments with the standard VS Code shortcut:

- Windows / Linux: `Ctrl+/`
- macOS: `Cmd+/`

Aeonmi uses `#` as the line comment character.

---

## Language Configuration

The extension registers the following VS Code language configuration for `.ai` files:

- **Language ID:** `aeonmi`
- **File extensions:** `.ai`
- **Line comment:** `#`
- **Bracket pairs:** `()`, `[]`, `{}`, `⟨⟩`, `⧉⧉`

And for `.qube` files:

- **Language ID:** `qube`
- **File extensions:** `.qube`
- **Line comment:** `#`

---

## Planned Features

The following features are on the roadmap for future releases:

- **Language Server Protocol (LSP)** — diagnostics, hover documentation, and error underlining
- **Go to Definition** — jump to where a symbol is defined
- **Find All References** — list all usages of a symbol
- **Integrated REPL** — run Aeonmi code directly inside VS Code
- **Formatter** — auto-format `.ai` files on save
- **Full QUBE support** — complete grammar and highlighting for `.qube` files

---

See the [full changelog](https://github.com/Aeonmi-Aysa/Aeonmi-VScode/releases) for version history.
