# Installation

This page describes how to install the **Aeonmi VS Code extension**.

---

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/) version **1.75.0** or later.

---

## Install from the Marketplace

1. Open **Visual Studio Code**.
2. Open the **Extensions** view:
   - Windows / Linux: `Ctrl+Shift+X`
   - macOS: `Cmd+Shift+X`
3. Type **Aeonmi** in the search box.
4. Select the extension published by **Aeonmi-Aysa**.
5. Click **Install**.

The extension activates automatically when you open any `.ai` or `.qube` file.

---

## Install from a VSIX file

If you have a `.vsix` package (e.g. downloaded from a release):

```bash
code --install-extension aeonmi-<version>.vsix
```

Or use the Extensions view:

1. Click the **⋯** (More Actions) button in the Extensions view.
2. Choose **Install from VSIX…**
3. Browse to the `.vsix` file and click **Install**.

---

## Verify the Installation

1. Open (or create) a file with the `.ai` extension, for example `hello.ai`.
2. Paste the following:

```aeonmi
bell ← ⧉0.707‥0‥0‥0.707⧉
ψ ↦ bell ⊗ bell
```

3. You should see syntax highlighting applied to the glyph operators.

---

## Uninstall

1. Open the **Extensions** view.
2. Find **Aeonmi** in the list of installed extensions.
3. Click **Uninstall**.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No syntax highlighting | Make sure the file has the `.ai` or `.qube` extension |
| Extension not found in Marketplace | Ensure you are running VS Code 1.75+ |
| Glyphs display as boxes | Install a font that includes Unicode math symbols (e.g. [JetBrains Mono](https://www.jetbrains.com/lp/mono/)) |

If the issue persists, please [open a GitHub issue](https://github.com/Aeonmi-Aysa/Aeonmi-VScode/issues).
