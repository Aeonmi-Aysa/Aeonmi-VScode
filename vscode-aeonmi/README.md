# Aeonmi VS Code Extension (minimal scaffold)

This is a minimal scaffold of the Aeonmi extension (languages: `.ai`, `.qube`).

Installation (developer):

- Copy the `vscode-aeonmi/` folder into `%USERPROFILE%\.vscode\extensions\aeonmi-0.1.0\` and reload VS Code.
- Or package a VSIX and install:

```powershell
npm install -g @vscode/vsce
cd vscode-aeonmi
vsce package
code --install-extension aeonmi-0.1.0.vsix
```

This scaffold provides basic snippets, simple grammars, and a test command `Aeonmi: Hello`.

Refer to the provided `vscode_extension_spec.txt` for the language spec to expand features.
