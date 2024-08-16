VSCode provides a variety of settings that make our life easier.

I like the following ones:

```json
"editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
    "source.fixAll": "explicit"
  }
```

They do the following things:

- `editor.formatOnPaste`: Automatically formats the code when pasting it.


- `editor.formatOnSave`: Automatically formats the code when saving the file.


- `editor.codeActionsOnSave`: Actions that are executed when saving the file.
  - `source.organizeImports`: Organizes the imports.
  - `source.fixAll`: Fixes all issues.
