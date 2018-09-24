## How to add new translations

1. Add Formatted Message to the element you want to translate

```
<FormattedMessage id="Page1.header" defaultMessage="Hello, I am page 1." />
```

2. Update message with the translation in 'public/locales/es.json'

```
{
  "Page1.header": "Hola soy la página 1.",
  "Page2.header": "Hola soy la página 2.",
  "Page1.button": "Ir a la página 2.",
  "Page2.button": "Ir a la página 1."
}
```

3. Run the following command to update the app with new translations

```
npm run build
```