# Aeonmi for Visual Studio Code

The official VS Code extension for the [Aeonmi](https://github.com/Aeonmi-Aysa/aeonmi.ai) language — an experimental symbolic programming language exploring AI-native execution, glyph-based syntax, and quantum-style composition.

---

## Features

- **Syntax highlighting** for `.ai` and `.qube` source files
- **Glyph operator support** — `⧉`, `⟨⟩`, `…`, `⊗`, `↦` and more
- **Bracket matching** and **auto-closing pairs** for Aeonmi delimiters
- **Code snippets** for common Aeonmi patterns (array genesis, tensor products, bindings)
- **Language configuration** for comment toggling and indentation

---

## Installation

1. Open **Visual Studio Code**.
2. Go to the **Extensions** view (`Ctrl+Shift+X` / `Cmd+Shift+X`).
3. Search for **Aeonmi**.
4. Click **Install**.

The extension will be available on the VS Code Marketplace once published.

### Install from VSIX

```bash
code --install-extension aeonmi-*.vsix
```

---

## Getting Started

1. Open or create a file with the `.ai` extension.
2. The extension activates automatically and provides syntax highlighting.
3. Use snippets by typing the trigger prefix and pressing `Tab`.

### Example `.ai` file

```aeonmi
# Bell state in Aeonmi
bell ← ⧉0.707‥0‥0‥0.707⧉
ψ ↦ bell ⊗ bell
```

---

## Supported File Types

| Extension | Description                        |
|-----------|------------------------------------|
| `.ai`     | Aeonmi source files                |
| `.qube`   | QUBE quantum-style execution files |

---

## Language Overview

Aeonmi uses a compact set of **glyph primitives** as first-class operators:

| Glyph | Name             | Description                              |
|-------|------------------|------------------------------------------|
| `⧉`   | Array Genesis    | Construct a symbolic array               |
| `⟨⟩`  | Slice / Index    | Access elements or sub-arrays            |
| `…`   | Spread           | Expand or distribute a structure         |
| `⊗`   | Tensor Product   | Compose two structures symbolically      |
| `↦`   | Binding          | Bind a name to a symbolic expression     |

Full language documentation: [Aeonmi Language Reference](docs/Language-Reference.md)

---

## Extension Settings

This extension contributes the following configuration options (accessible via `File > Preferences > Settings`):

| Setting                         | Default | Description                              |
|---------------------------------|---------|------------------------------------------|
| `aeonmi.enableSnippets`         | `true`  | Enable built-in Aeonmi code snippets     |
| `aeonmi.highlightGlyphs`        | `true`  | Apply special styling to glyph operators |
| `aeonmi.formatOnSave`           | `false` | Auto-format `.ai` files on save          |

---

## Known Issues

- Semantic token highlighting is not yet available (planned for a future release).
- QUBE file support is partial — full grammar is in progress.

Please report issues at: [GitHub Issues](https://github.com/Aeonmi-Aysa/Aeonmi-VScode/issues)

---

## Roadmap

- [ ] Language server (LSP) with diagnostics and hover information
- [ ] Go-to-definition and find-references support
- [ ] Integrated Aeonmi REPL in the VS Code terminal
- [ ] Formatter for `.ai` files
- [ ] Full QUBE grammar support

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/Aeonmi-Aysa/Aeonmi-VScode).

---

## License

See [LICENSE](LICENSE) for license information.

---

## Related Projects

- [aeonmi.ai](https://github.com/Aeonmi-Aysa/aeonmi.ai) — The Aeonmi language runtime, compiler, and documentation
- [aeonmi.ai website](http://www.aeonmi.ai/) — Official project website
