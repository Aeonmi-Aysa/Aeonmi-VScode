# Snippets

A reference for all code snippets included with the **Aeonmi VS Code extension**.

To use a snippet, type the **prefix** in an `.ai` file and press `Tab` to expand it.

---

## Available Snippets

### `array` — Array Genesis

Creates an array using the `⧉` glyph.

**Prefix:** `array`

**Expands to:**

```aeonmi
name ← ⧉ ${1:value} ‥ ${2:value} ⧉
```

**Example:**

```aeonmi
coords ← ⧉ 1.0 ‥ 2.0 ‥ 3.0 ⧉
```

---

### `bind` — Binding Expression

Creates a symbolic binding with `↦`.

**Prefix:** `bind`

**Expands to:**

```aeonmi
${1:name} ↦ ${2:expression}
```

**Example:**

```aeonmi
ψ ↦ bell ⊗ bell
```

---

### `tensor` — Tensor Product

Creates a tensor product expression with `⊗`.

**Prefix:** `tensor`

**Expands to:**

```aeonmi
${1:a} ⊗ ${2:b}
```

**Example:**

```aeonmi
result ↦ stateA ⊗ stateB
```

---

### `spread` — Spread Expression

Spreads a structure using `…`.

**Prefix:** `spread`

**Expands to:**

```aeonmi
… ${1:name}
```

**Example:**

```aeonmi
flat ← … arr
```

---

### `slice` — Slice / Index

Accesses an element or sub-array using `⟨⟩`.

**Prefix:** `slice`

**Expands to:**

```aeonmi
${1:name}⟨${2:index}⟩
```

**Example:**

```aeonmi
first ← arr⟨0⟩
```

---

### `qstate` — QUBE State Declaration

Declares a quantum-style state in a `.qube` file.

**Prefix:** `qstate`

**Expands to:**

```qube
|${1:name}⟩ ← ⧉ ${2:1} ‥ ${3:0} ⧉
```

**Example:**

```qube
|0⟩ ← ⧉ 1 ‥ 0 ⧉
|1⟩ ← ⧉ 0 ‥ 1 ⧉
```

---

## Tips

- Use `Tab` to jump between **tab stops** (`${1:…}`, `${2:…}`) within an expanded snippet.
- Press `Escape` to exit snippet mode and return to normal editing.
- Snippets are only active inside `.ai` and `.qube` files.
