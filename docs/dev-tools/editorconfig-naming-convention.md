# .NET naming conventions for EditorConfig

Summary of what can be found in the official [Microsoft Docs](https://docs.microsoft.com/en-us/visualstudio/ide/editorconfig-naming-conventions?view=vs-2019).

> Naming conventions should be ordered from most-specific to least-specific in the EditorConfig file. The first rule encountered that can be applied is the only rule that is applied. However, if there are multiple rule properties with the same name, the most recently found property with that name takes precedence.

## Requirements

Each Rule **must specify**:

| What?                | Value                                                          | Where                           |
| -------------------- | -------------------------------------------------------------- | ------------------------------- |
| symbols              | `class`, `field`, `property`, `method`, `enum`, `local` etc... | applicable_kinds                |
| accessibility levels | `public`, `private`, `local` etc...                            | applicable_accessibilites       |
| severity             | `silent`, `warning`, `error` etc...                            | severity                        |
| styling              | `camel_case`, `all_upper`, `prefix`, `suffix` etc...           | capitalization, required_suffix |

##### Optional property

| What?           | Value                                              | Where              |
| --------------- | -------------------------------------------------- | ------------------ |
| symbol modifier | `abstract`, `async`, `const`, `readonly`, `static` | required_modifiers |

## Structure of a Rule

1. Naming and Severity  
   Povide a name for the Rule. The `<namingRuleTitle>`, `<symbolTitle>` and `<styleTitle>` can be an arbitrary name.

```
dotnet_naming_rule.<namingRuleTitle>.severity = suggestion
dotnet_naming_rule.<namingRuleTitle>.symbols = <symbolTitle>
dotnet_naming_rule.<namingRuleTitle>.style = <styleTitle>
```

2. Specify which symbol the Rule should be applied to

```
dotnet_naming_symbols.<symbolTitle>.applicable_kinds = class, field, property, method, enum
dotnet_naming_symbols.<symbolTitle>.applicable_accessibilities = public, private, local
dotnet_naming_symbols.<symbolTitle>.required_modifiers = abstract, async, const, readonly, static
```

3. Specify the Styling

```
dotnet_naming_style.<styleTitle>.capitalization = pascal_case
dotnet_naming_style.<styleTitle>.required_suffix = Async
```

## Examples

### `Async` methods should start with "Async\_" and end with "ASYNC"

```
dotnet_naming_rule.foobar.severity = warning
dotnet_naming_rule.foobar.symbols = foobaz
dotnet_naming_rule.foobar.style = async_method_style

dotnet_naming_symbols.foobaz.applicable_kinds = method
dotnet_naming_symbols.foobaz.applicable_accessibilities = *
dotnet_naming_symbols.foobaz.required_modifiers = async

dotnet_naming_style.async_method_style.capitalization = pascal_case
dotnet_naming_style.async_method_style.required_prefix = Async_
dotnet_naming_style.async_method_style.required_suffix = ASYNC
```
