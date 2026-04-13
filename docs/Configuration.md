# Configuration

The **Aeonmi VS Code extension** exposes several settings you can configure to customize your experience.

---

## Accessing Settings

1. Open **File > Preferences > Settings** (or `Ctrl+,` / `Cmd+,`).
2. Search for **Aeonmi** to filter to extension-specific settings.

Or edit your `settings.json` directly:

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Run **Preferences: Open User Settings (JSON)**.
3. Add your Aeonmi settings inside the JSON object.

---

## Available Settings

### `aeonmi.enableSnippets`

| Property | Value   |
|----------|---------|
| Type     | boolean |
| Default  | `true`  |

Enable or disable the built-in Aeonmi code snippets.

```json
"aeonmi.enableSnippets": true
```

---

### `aeonmi.highlightGlyphs`

| Property | Value   |
|----------|---------|
| Type     | boolean |
| Default  | `true`  |

Apply special styling (colour and weight) to Aeonmi glyph operators (`⧉`, `⟨⟩`, `…`, `⊗`, `↦`).

```json
"aeonmi.highlightGlyphs": true
```

---

### `aeonmi.formatOnSave`

| Property | Value   |
|----------|---------|
| Type     | boolean |
| Default  | `false` |

Automatically format `.ai` files when they are saved.

> **Note:** The formatter is a planned feature and is not yet available. This setting is reserved for a future release.

```json
"aeonmi.formatOnSave": false
```

---

## Recommended `settings.json` for Aeonmi Development

```json
{
  "editor.fontFamily": "JetBrains Mono, monospace",
  "editor.fontSize": 14,
  "aeonmi.enableSnippets": true,
  "aeonmi.highlightGlyphs": true,
  "aeonmi.formatOnSave": false,
  "[aeonmi]": {
    "editor.tabSize": 2,
    "editor.insertSpaces": true
  }
}
```

> **Tip:** Using a font that supports Unicode math symbols (like [JetBrains Mono](https://www.jetbrains.com/lp/mono/) or [Fira Code](https://github.com/tonsky/FiraCode)) ensures that Aeonmi glyphs render correctly.
