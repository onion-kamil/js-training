# Predicate

- [Live](https://onion-kamil.github.io/js-training/predicate/)

## About

**Cel zadania:**

- Zaimplementuj funkcję, która jako parametr przyjmie tablicę elementów oraz predykat.
- Predykatem będzie funkcja która jako parametr przyjmuje jeden element z podanej tablicy i zwraca dla niego wartość true lub false.
- Funkcja powinna zwrócić nową tablicę w której znajdą się tylko elementy spełniające podany warunek, nie używając wbudowanych metod filter lub map.

**Przykład:**

```javascript
applyPredicate([1, 2, 3], element => element > 2); // => [3]
applyPredicate(["a", "b", "c"], element => ["b", "c"].includes(element)); // => ['b', 'c']
```
