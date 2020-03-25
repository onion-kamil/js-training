# In two steps

- [Live](https://onion-kamil.github.io/js-training/in-two-steps/)

## About

**Cel zadania:**

- Zaimplementuj funkcję, która zwróci kolejną funkcję dodającą do przekazywanego parametru zarejestrowany wcześniej przedrostek.

**Przykład:**

```javascript
const greeting = withPrefix("Witaj, ");
greeting("Janek"); // => 'Witaj, Janek'
greeting("Tomek"); // => 'Witaj, Tomek'

const goodbye = withPrefix("Żegnaj, ");
goodbye("Janek"); // => 'Żegnaj, Janek'
goodbye("Tomek"); // => 'Żegnaj, Tomek'
```

- Utworzona funkcja to tzw. funkcja wyższego rzędu.
