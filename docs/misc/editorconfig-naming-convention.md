## Requirements

Each Rule **must specify**:

| What?                | Value                                                          | Where                           |
| -------------------- | -------------------------------------------------------------- | ------------------------------- |
| symbols              | `class`, `field`, `property`, `method`, `enum`, `local` etc... | applicable_kinds                |
| accessibility levels | `public`, `private`, `local` etc...                            | applicable_accessibilites       |
| severity             | `silent`, `warning`, `error` etc...                            | severity                        |
| styling              | `camel_case`, `all_upper`, `prefix`, `suffix` etc...           | capitalization, required_suffix |

### Optional property

|                 |                                                    |
| --------------- | -------------------------------------------------- |
| symbol modifier | `abstract`, `async`, `const`, `readonly`, `static` |
|                 |                                                    |

## Structure of a Rule

1. Naming the Rule and Styling

```
dotnet_naming_rule.<namingRuleTitle>.severity = suggestion
dotnet_naming_rule.<namingRuleTitle>.symbols = <symbolTitle>
dotnet_naming_rule.<namingRuleTitle>.style = <styleTitle>
```

The `<namingRuleTitle>`, `<symbolTitle>` and `<styleTitle>` can be anything.

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

### `Async` methods should end with "Async"

```
dotnet_naming_rule.foobar.severity = warning
dotnet_naming_rule.foobar.symbols = foobaz
dotnet_naming_rule.foobar.style = async_method_style

dotnet_naming_symbols.foobaz.applicable_kinds = method
dotnet_naming_symbols.foobaz.required_modifiers = *

dotnet_naming_style.async_method_style.capitalization = pascal_case
dotnet_naming_style.async_method_style.required_suffix = Async
```

The naming rule is called `foobar`
