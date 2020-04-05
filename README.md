# Js - training

Simple javascript training projects.

# List of projects

# 1. Add element after click

## About

- The user sets what element will be changed - adding a class, and then creates these elements using the button.
- After clicking on the item information appears which number is the item.

## Link

- [Live](https://onion-kamil.github.io/js-training/add-element-after-click/)
- [Project](add-element-after-click/)

# 2. Scroll

## About

- Change the size of the square by scrolling.

## Link

- [Live](https://onion-kamil.github.io/js-training/scroll/)
- [Project](scroll/)

# 3. Scroll 2

## About

- Change the size of the square by scrolling(
  Very similar to number 2).

## Link

- [Live](https://onion-kamil.github.io/js-training/scroll-2/)
- [Project](scroll-2/)

# 4. Mouse movement

## About

- The project displays the current course position relative to the browser window and on this basis generates a background color.
- After clicking anywhere on the page the x and y clicks are taken. The values of the numbers are checked and on this basis the background of element h1 is changed.
  Both values are even - the color changer to red.
  Both odd values - blue.
  Even and odd - green.

## Link

- [Live](https://onion-kamil.github.io/js-training/mouse-movement/)
- [Project](mouse-movement/)

# 5. Mouse item

## About

- Catch and move the item.

## Link

- [Live](https://onion-kamil.github.io/js-training/move-item/)
- [Project](move-item/)

# 6. Arrows keys change background color

- [Live](https://onion-kamil.github.io/js-training/arrows-keys-change-background/)
- [Project](arrows-keys-change-background/)

## About

- Use the down and up arrows to change the background color from gray.

## Actions for the future

After clicking on the keyboard r, g, b it will be possible to change this value and it will be displayed on the screen.

# 7. Password Messages

- [Live](https://onion-kamil.github.io/js-training/password-message/)
- [Project](password-message/)

## About

- After entering the correct password, the message is displayed.

# 8. Random name

- [Live](https://onion-kamil.github.io/js-training/random-name/)
- [Project](random-name/)

## About

- Random name of arrow.

# 9. Add name and random

- [Live](https://onion-kamil.github.io/js-training/add-names-and-random/)
- [Project](add-names-and-random/)

## About

- Add names and random from among them.

# 10. Random answer

- [Live](https://onion-kamil.github.io/js-training/random-answer/)
- [Project](random-answer/)

## About

- Ask yourself a question, add answers and randomly draw a random answer.

# 11. Rock paper scissors

- [Live](https://onion-kamil.github.io/js-training/rock-paper-scissors/)
- [Project](rock-paper-scissors/)

## About

- Game paper rock scissors with the computer.

# 12. Typing

- [Live](https://onion-kamil.github.io/js-training/typng/)
- [Project](typing/)

## About

- Typing animation

# 13. Baner

- [Live](https://onion-kamil.github.io/js-training/baner/)
- [Project](baner/)

## About

- Banner project with changing slides and the ability to change them using the arrows.

# 14. Time counter

- [Live](https://onion-kamil.github.io/js-training/time-counter/)
- [Project](time-counter/)

## About

- Set the time and see how much time is left until the selected date.

# 15. Interweaving

- [Live](https://onion-kamil.github.io/js-training/interweaving/)
- [Project](interweaving/)

## About

- Interlacing of two words

# 16. Predicate

- [Live](https://onion-kamil.github.io/js-training/predicate/)

- [Project](predicate/)

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

# 17. Pangram

- [Live](https://onion-kamil.github.io/js-training/pangram/)

- [Project](pangram/)

## About

**Cel zadania:**

- Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.

- Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.

**Przykład:**

```javascript
isPangram("test"); // => false
isPangram("Dość gróźb fuzją, klnę, pych i małżeństw!"); // => true
```

# 18. In two steps

- [Live](https://onion-kamil.github.io/js-training/in-two-steps/)

- [Project](in-two-steps/)

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

# 19. Emoji

- [Live](https://onion-kamil.github.io/js-training/emoji/)

- [Project](emoji/)

## About

**Cel zadania:**

- Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie z mapowaniem z obiektu "emojiMappings"

**Przykład:**

```javascript
useEmoji("Takiemu zachowaniu mówię stop i to mocny stop!"); // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
useEmoji("Jadę po nowy samochód :D"); // => 'Jadę po nowy 🏎 :D'
```

# 20. Durations

- [Live](https://onion-kamil.github.io/js-training/durations/)

- [Project](durations/)

## About

**Cel zadania:**

- Napisz funkcję, która policzy czas trwania kursu z podziałem na lekcje przygotowane przez Adama, Marcina i Przemka.

# 21. Factory

- [Live](https://onion-kamil.github.io/js-training/factory/)

- [Project](factory/)

## About

**Cel zadania:**

- Zmodyfikuj funkcję factory w taki sposób, aby zmienna quote była dostępna jako właściwość.

# 22. One to manage everything

- [Live](https://onion-kamil.github.io/js-training/one-to-manage-everything/)

- [Project](one-to-manage-everything/)

## About

**Cel zadania:**

- Zaimplementuj funkcję rule() w taki sposób aby wszystkie przekazane do niej tablice zostały połączone w jedną

- Przykład:

```javascript
rule([1, 2], [5, 6]); // => [1, 2, 5 , 6];
```

- Punkty dodatkowe
  Wykorzystaj operator rest
  Zapisz rozwiązanie w jednej linii

# 23. Mr. Elliot

- [Live](https://onion-kamil.github.io/js-training/mr-elliot/)

- [Project](mr-elliot/)

## About

**Cel zadania:**

- Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.

- Przykład:

```javascript
greetings("hacker"); // => 'H4Ck3r'
greeting("Control Is An Illusion"); // => 'C0NtR0L 15 4N 1lLu510n'
greeting("Saving The World"); // => 'S4V1Ng tHe w0rLd'
```

# 24. Izogram

- [Live](https://onion-kamil.github.io/js-training/izogram/)

- [Project](izogram/)

## About

**Cel zadania:**

- Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.

- Przykład:

```javascript
greetings("hacker"); // => 'H4Ck3r'
greeting("Control Is An Illusion"); // => 'C0NtR0L 15 4N 1lLu510n'
greeting("Saving The World"); // => 'S4V1Ng tHe w0rLd'
```

# 24. Regex

- [Live](https://onion-kamil.github.io/js-training/regex/)

- [Project](regex/)

## About

Simple form validation for learning regular expresison.

# 25. Find Tags

- [Live](https://onion-kamil.github.io/js-training/find-tags/)

- [Project](find-tags/)

## About

**Cel zadania:**

- Zaimplementuj funkcję wyszukującą hashtagi w zdaniu

**Przykład:**

```javascript
findTags("W 2020 #opanujeJS"); // => opanujeJS
findTags("Za chwilę dodam #opanujeJS!"); // => opanujeJS
findTags("Lubię tagować #yolo #love#happy #h3cker"); // => yolo, love, happy, h3cker
```

# 26. Array Functions

- [Live](https://onion-kamil.github.io/js-training/array-functions/)

- [Project](array-functions/)

## About

**Cel zadania:**

- Zaimplementuj własne wersje funkcji tablicowych Array.prototype.length oraz Array.prototype.filter, bez wykorzystania tych wbudowanych.

**Przykład:**

```javascript
filter([1, 2, 3, 4], isEven); // => [2, 4]
length([1, 2, 3, 4]); // => 4
```

# 27. Array Functions

- [Live](https://onion-kamil.github.io/js-training/count-words//)

- [Project](count-words/)

## About

**Cel zadania:**

- Otrzymując zdanie jako parametr wejściowy, zwróć obiekt, który będzie zawierał liczbę wystąpień każdego słowa w zdaniu. Zignoruj to czy słowo jest napisane z dużej czy z małej litery.

**Przykład:**

```javascript
countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda"); // => {
  nauka: 1,
  javascript: 2,
  z: 1,
  kursem: 1,
  opanuj: 1,
  to: 1,
  frajda: 1
}
```
