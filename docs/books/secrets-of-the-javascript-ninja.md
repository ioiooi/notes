# Secrets of the JavaScript Ninja

## Part 2 - Apprentice training

### Chapter 3: Functions are fundamental

* Functions are _first-class objects_; coexist and are treated like any other Javascript object.
* Functions can be referenced by variables, declared with literals and passed as function parameters.

#### 3.1.1: Functions as first class objects

* Objects in Javascript enjoy certain capabilities:
  * They can be created via literals.
  * They can be assigned to variables, array entries, and properties of other objects.
  * They can be passed as arguments to functions.
  * They can be returned as values from functions.
  * They can possess properties that can be dynamically created and assigned.

Functions possess all those capabilities ⇒ They are treated like any other Object in the Javascript language. And more: they can be _invoked_. Invocation is frequently done in an _asynchronous_ manner.

#### 3.1.1: The Browser event loop

* Programmers have to set up handlers for the various events that can occur in the browser. These events are placed in an event queue and get handled via a FIFO procedure.
* Event execution is unpredictable (ajax, mouse clicks etc… ) and so the invocation of their handling functions is asynchronous.
* Event loop is single-threaded.
* Events get placed onto queue and handled via FIFO procedure.
* Callback = function that we set up to be called at a later time.
* The functional Nature allows us to create a function as a standalone entity, just as any other object type, and to pass it as an argument to a method/function.
* Putting function declarations near where they're used makes the code more compact, easier to understand and avoid polluting the global namespace.

```js
const values = [213, 16, 2045, 34, 10, 534];
values.sort((value1, value2) => value2 - value1);
```

* Using a anonymous callback to sort an array in descending order. Every benefit of JavaScript in one line.

#### 3.2: Declarations

* Functions are declared using function literal.
* They can be nameless (see anonymous functions).

#### 3.2.1: Scope

* In Javascript, scopes are declared by _functions_, and not by blocks. In ES6 introduced declarations `let` and `const` adhere to the block.
* Named functions are in scope within the entire function within which they're declared, regardless of block nesting (some call this mechanism _hoisting_).
* For the purposes of declaration scopes, the global context acts like one big function encompassing the code on the page.
* Function declarations can be forward-referenced within their scope but variables can't. You can't use/reference variables before they were even declared, but you can use/reference a function even if it is declared later.

#### 3.3 Invocations

* The manner in which a function is invoked has huge impact on how the code within it operates, primarily in how the this parameter is established.
* There are four different ways to invoke a function:
  * As a function `()`, straightforward nothing fancy
  * As a **method**, which ties the invocation to an object
  * As a **constructor**, in which a new object is brought into being
  * Via its `apply()` or `call()` methods, covered in depth in later chapters

#### 3.3.1 From arguments to function parameters and this

* When a list of arguments is supplied as a part of a function invocation, these arguments are assigned to the parameters specified in the function declaration in the same order that each was specified. First argument to first parameter, second to second…
* If more arguments are supplied than there are parameters, the "excess" arguments are simply not assigned to parameter names.
* If there are more parameters than there are arguments, the parameters that have no corresponding argument are set to `undefined`.
* All function invocations are also passed two implicit parameters: `arguments` and `this`. They are silently passed to the function and are in scope within the function.
* Invocation as a method is only one of the four ways that a function can be invoked. And as it turns out, what the `this` parameter points to isn't, as in Java, defined by how the function is declared, but by how it's invoked. Because of this fact, it might have been clearer to call `this` the invocation context.
* The `this` parameter refers to an object that's implicitly associated with the function invocation and is termed the function context.

#### 3.3.2 Invocation as a function

* This type of invocation occurs when a function is invoked using the `()` operator, and the expression to which the `()` operator is applied doesn't reference the function as a property of an object. (In that case, we'd have a method invocation.)

```js
function ninja() {}
ninja();

const samurai = function() {};
samurai();
```

* When invoked in this manner, the function context is the global context - the `window` object.
* As long as an expression evaluates to a function the function invocation operator `()` can be applied.

```js
function foo() {
  console.log('bar');
}

const variable = foo;

// Outputs "bar"
variable();
```

#### 3.3.3 Invocation as a method

* When we invoke the function as the method of an object, that object becomes the function context and is available within the function via the `this` parameter. This is one of the primary means by which Javascript allows object-oriented code to be written.
* The `this` parameter of a function changes depending on where it's been invoked.

```js
function creep() {
  return this;
}

// function context is the window object
creep();

const ninja1 = {
  skulk: creep
};

const ninja2 = {
  skulk: creep
};

// function context is ninja1. calling ninja1.skulk() is returning the ninja1 object.
ninja1.skulk();

// function context is ninja2
ninja2.skulk();
```

* Even though the same function is used, the function context for each invocation of the function changes depending upon how the function is invoked.
* The exact same function instance is shared by both `ninja1` and `ninja2`, when it is called as a method of either object it has access to and can perform actions on that object by which it was invoked.
* ⇒ This means that we don't need to create separate copies of a function to perform the exact same processing on different objects — this is a tenet of object-oriented programming.

#### 3.3.4 Invocation as a constructor

* To invoke a function as a constructor, we proceed the function invocation with the `new` keyword.
* When a constructor is invoked, the following special actions take place:
  * A new empty object is created.
  * This new object is passed to the function as the `this` parameter, and thus becomes the constructor's function context.
  * In the absence of any explicit return value, this new object is returned.

```js
function Ninja() {
  this.skulk = function() { return this };
}:

// ninja1 is a reference to the newly created and return object
const ninja1 = new Ninja();

// evaluates to true
ninja1.skulk() === ninja1;

// not invoked as a constructor
const whatever = Ninja();

// evaluates to true, because the Ninja-Function was invoked using
// the () operator within the window scope
whatever.skulk();
```

* When invoked with the `new` keyword, an empty object instance will be created and passed to the function as `this`. The constructor creates a property named `skulk` on this object, which is assigned a function, making that property a method of the newly created object.

#### 3.3.5 Invocation with the `apply()` and `call()` methods

* We've seen that one of the major differences between the types of function invocation is what object ends up as the function context referenced by the implicit `this` parameter that is passed to the executing function. For methods, it's the method's owning object; for top-level functions, it's always `window` (in other words, a method of `window`); for constructors, it's a newly created object instance.
* Invoking a function and explicitly setting the function context is done by using the function methods `apply()` or `call()`
* Functions in Javascript are first-class objects and that is why they can have properties, including methods, just like any other object.
* The first argument of `apply()` and `call()` is the desired function context. The second is either a array or a comma separated list of the other arguments.

```js
function juggle() {
  let result = 0;
  for (let n = 0; n < arguments.length; n++) {
    result += arguments[n];
  }
  this.result = result;
}

const ninja1 = {};
const ninja2 = {};

juggle.apply(ninja1, [3, 4, 5]);
juggle.call(ninja2, 6, 7, 8);

// both true
ninja1.result === 12;
ninja2.result === 21;
```

* The above results show that we are able to specify arbitrary objects to serve as function contexts for function invocations.
* This is useful for example in callback functions. You could implement an iteration function such as forEach() that would not simply pass the current element to the callback but make the current element the function context of the callback function.

#### 3.4 Summary

* Functions are first-class objects that are treated just like any other objects within JavaScript.
  Just like any other object type, they can be:
  * Created via literals
  * Assigned to variables or properties
  * Passed as parameters
  * Returned as function results
  * Possess properties and methods
* Each function invocation is passed two implicit parameters:
  * `arguments`, a collection of the actual passed arguments
  * `this`, a reference to the object serving as the function context
* Functions can be invoked in various ways, and the invocation mechanism determines the function context value:
  * When invoked as a simple function, the context is the global object (`window`).
  * When invoked as a method, the context is the object owning the method.
  * When invoked as a constructor, the context is a newly allocated object.
  * When invoked via the `apply()` or `call()` methods of the function, the context can be whatever the heck we want.

### Chapter 4: Wielding Functions

#### 4.2 Recursion

* Must satisfy two criteria:
  * a reference to self
  * convergence towards termination. If it doesn't converge towards termination it is better known as an infinite loop!

```js
function isPalindrome(text) {
  if (text.length <= 1) return true;
  if (text.charAt(0) != text.charAt(text.length - 1)) return false;
  return isPalindrome(text.substr(1, text.length - 2));
}
```

* The above implementation is straightforward, by just making a recursive call using the function's name in the last line of the function

#### 4.3 Fun with function as objects

* Javascript gives functions many capabilities, not the last of which is their treatment as first-class objects. We've seen that functions can have properties, can have methods, can be assigned to variables and properties, and generally enjoy all the abilities of plain vanilla objects, but with an amazing superpower: they're callable.
* Just as with any other object properties can be attached to a function.

```js
const obj = {};
const fn = function() {};
obj.prop = 'hitsuke (distraction)';
fn.prop = 'tanuki (climbing)';
```

#### 4.3.1 Storing functions

* There are times when we may want to store a collection of related but unique functions, event callback management being the most obvious example.
* See example below: store object has three properties. `id` and `cache` just store data and the `add` property is referencing a anonymous function. In `add()` we first check if the passed function has an `id` property. If it has one we do nothing (the `id` property could have been applied by something else, but whatever). If it does not have an id property we assign `id` and increment `nextId`. Add the function as a property to the `cache` using `id` as the property name and return `true`.
* `this.nextId++` or `this.cache[fn.id]` could've been used just as well.

```js
const store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = store.nextId++;
      store.cache[fn.id] = fn;
      return true;
    }
  }
};
function ninja() {}

// function is added to the cache
store.add(ninja);
// false, because it was already added
store.add(ninja);
```

#### 4.3.2 Self-memoizing functions

* Using the fact that we can assign properties to functions and building a cache with that ability/knowledge.
  For example DOM query caching elements you get by tag or id

```js
function getElement(name) {
  // basically the first time the function is called, the cache property is assigned to it
  if (!getElement.cache) getElement.cache = {};
  // if, assign and return in a one liner
  return (getElement.cach[name] =
    getElement.cache[name] || document.getElementById(name));
}
```

#### 4.3.3 Faking array methods

* Using `Array.prototype.<method>.call(<obj>, element)` we can exploit the fact that we can explicitly set the function context by invoking a function through the function method `call()`
* By doing the above we can just use the existing implementation of array methods on our own custom object

#### 4.4 Variable-length argument lists and function overloading

Use `apply()` when manipulating the function context and the parameter to be passed is an array
Using the implicitly passed arguments parameter to our advantage

#### 4.5 Checking for functions

This should be the typical way that we check if a value is a function:

```js
function ninja() {}

// true
typeof ninja == 'function';
```

#### 4.6 Summary

* Anonymous functions let us create smaller units of execution rather than large function full of imperative statements.
* Recursive functions can be referenced in various ways:
  * By Name
  * As a method (via an object property name)
  * By an inline name
  * Through the `callee` property of `arguments`
* Functions can have properties and those properties can be used to store any information we might wish to use.
* By controlling what function context is passed to a function invocation, we can "fool" methods into operating on objects that aren't the object that they're methods for. This can be useful for leveraging already existing methods on objects like Array and Math to operate on our own data.
* Functions can perform different operations based upon the arguments that are passed to it (function overloaded). We can inspect arguments list to determine what it is we'd like to do given the type or number of the passed arguments.
* An object can be checked to see if it's an instance of a function by testing if the result of the `typeof` operator is "function".

### Chapter 5: Closing in on closures

#### 5.1 How closures work

A `closure` is the scope created when a function is declared that allows the function to access and manipulate variables that are external to that function. Put another way, `closures` allow a function to access all the variables, as well as other functions, that are in scope when the function itself is declared.

#### 5.2 Putting closures to work, private variables, callback and timers…

```js
function animateIt(elementId) {
  let tick = 0;
  const elem = document.getElementById(elementId);
  const timer = setInterval(() => {
    if (tick < 100) {
      elem.style.left = elem.style.top = tick + 'px';
      tick++;
    } else {
      clearInterval(timer);
      assert(tick == 100, 'Tick accessed via a closure.');
      assert(elem, 'Element also accessed via a closure.');
      assert(timer, 'Timer reference also obtained via a closure.');
    }
  }, 10);
}
animateIt('box');
```

* All of the above assert statements evaluate to `true`. The single anonymous function has and does access all the three variables it needs to control the animation process via a `closure`.
* `closures` are like protective bubbles that keep variables in a functions scope from being garbage-collected as long as the function exists. This "safety bubble" of the function makes sure that all variables that are in scope at the point of the function's declaration can be accessed by that function ⇒ so that the function has all it will need to execute.

#### 5.6 Immediate functions

* `(function(){})()`
* Deconstructing the above syntax in order to find out what's going on and how it works.
* `(...)()`
* We can call functions by using the `functionName()` syntax, but we can also call the function using any expression that references a function instance. Eg function is referenced by a variable and we can just call the function by `variable()`. If we want an operator e.g. `()` to be applied to an entire expression, we have to surround the expression with parentheses `(<expression>)()`. That means the **first set of parentheses** is just a set of **delimiters enclosing an expression**, whereas the **second set is an operator**.

```js
const someFunction = function(){ ... };
result = someFunction();

// Does the same thing as the above. The expression that references the function is just enclosed in parentheses
result = (someFunction)();
```

* We can just provide a anonymous function as the expression inside the first set of parentheses.

```js
(function() {
  statement - 1;
  statement - 2;
  statement - n;
})();
```

* The result of this code is an expression that does all of the following in a single statement:
  * Creates a function instance
  * Executes the function
  * Discards the function (as there are no longer any references to it after the statement has ended)
* Additionally, because we're dealing with a function that can have a closure just like any other, we also have access to all the outside variables and parameters that are in the same scope as the statement, during the brief life of the function.

#### 5.6.1 - 5.6.3 Immediate functions: private variables, loops and library wrapping

* As with all functions, all the variables inside of it are confined to its inner scope, we can create a temporary scope.
* We can also pass parameters to immediate functions:

```js
(name => console.log(`Hi ${name}`))('Peter');
```

* A more practical example would be if there is a naming conflict when using multiple libraries. jQuery and Prototype both claim `$` as a reference for themselves.

```js
$ = function() {
  alert('not jQuery!');
};

($ => {
  $('img').on('click', event => $(event.target).addClass('clickedOn'));
})(jQuery);
```

* This is a technique employed by many jQuery plugin authors whose code will be included in pages that they didn't write. It's unsafe to assume that `$` refers to jQuery, so they can include the plugin code inside an immediate function that lets them safely use `$` to refer to jQuery.
* Another useful application of immediate functions is the ability to solve a nasty issue with loops and closures.

```js
var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener(
    'click',
    function() {
      alert('divs #' + i + ' was clicked.');
    },
    false
  );
}
```

* The variable `i` that's being closured is updated after the function is bound. This means that every bound function handler will always alert the last value stored in `i`; in this case `2`. This is because closures remember **references** to included variables and **not just their values** at the time which they're created.

```js
var div = document.getElementsByTagName('div');
for (var i = 0; i < div.length; i++) {
  (function(n) {
    div[n].addEventListener(
      'click',
      function() {
        alert('div #' + n + ' was clicked.');
      },
      false
    );
  })(i);
}
```

* Fighting closures with closures. By using an immediate function as the body of the `for` loop, we enforce the correct value by passing that value into the immediate function. This means that within the scope of each step of the `for` loop, the `i` variable is defined anew, giving the closure of the click handler the value we expect.

#### 5.7 Summary

* We looked at a number of cases where closures were particularly useful, including in the definition of private variables and in the use of callbacks.
* We looked at forcing function context, partially applying functions, overriding functions and immediate functions.
* In total, understanding closures will be an invaluable asset when developing complex JavaScript applications and will aid in solving a number of common problems that we'll inevitably encounter.

### Chapter 6: Object-orientation with prototypes

#### 6.1 Instantiation and prototypes

* All functions have a `prototype` that initially references an empty object. This property doesn't serve much purpose until the function is used as a _constructor_.

```js
function Ninja() {
  this.swung = false;

  this.swingSword = function() {
    return !this.swung;
  };
}

Ninja.prototype.swingSword = function() {
  return this.swung;
};

// returns true, because it called the instance method and not the prototype method
var ninja = new Ninja();
```

* Binding operations within the `constructor` always take precedence over those in the `prototype`. This is because
  * When a property reference to an object is made, the object itself is checked to see if the property exists. If it does, the value is taken. If not…
  * The prototype associated with the object is located, and it is checked for the property. If it exists, the value is taken. If not…
  * The value is `undefined`.
* Each object in JS has an implicit property named `constructor` the references the `constructor` that was used to create the object. And because the `prototype` is a property of the constructor, each object has a way to find its prototype.

#### 6.1.3 Inheritance and the prototype chain

* The best technique for creating a prototype chain is to use an instance of an object as the other object's prototype:
  `SubClass.prototype = new SuperClass();`
* This will preserve the `prototype chain` because the `prototype` of the `SubClass` instance will be an instance of the `SuperClass`, which has a prototype with all the properties of SuperClass, and which will in turn have a prototype pointing to an instance of its superclass, and on and on.

```js
function Person() {}
Person.prototype.dance = function() {};
function Ninja() {}

Ninja.prototype = new Person();

// is a instance of Ninja, Person and Object. Has a reference and is able to invoke the anonymous function referenced by the dance property
var ninja = new Ninja();
```

### Chapter 7: Wrangling regular expressions

#### 7.2.1 Regular expressions explained

* Regular expression is simply a way to express a pattern for matching strings of text. In JavaScript, we have two ways to create a regular expression: via a **regular expression `literal`** and by constructing an instance of a **`RegExp` object**.

```js
// regex literals are delimited using forward slashes in the same way string literals are delimited with quote characters.
const pattern = /test/;

// constructing RegExp instance, passing the regex as a string
const pattern = new RegExp('test');
```

* Both of these formats result in the same regex being created in the variable `pattern`.
* In addition to the expression itself, there are three flags that can be associated with a regex:
  * `i` - makes the regex case-insensitive
  * `g` - matches all instances of the pattern, as opposed to the default "local", which matches only the first occurence.
  * `m` - allows matches across multiple
  * `u` - unicode
  * `y` - sticky

**To match from a set of characters use the character class operator `[]`**

* `[abc]` would match any of the characters `"a"`, `"b"` or `"c"`. Note that even though this expression spans five characters, it matches only a single character in the candidate string.

**Exclude characters by using `^`**

* `[^abc]` would match anything but `"a"`, `"b"` or `"c"`

**Beginning `^` and End `$`**

* Caret character `^`, when used as the first character of the regex, anchors the match at the beginning of the string.
* Dollar sign `$` signifies that the pattern must appear at the end of the string.

**Repeated occurrences**

* `?` ⇒ zero or one
* `*` ⇒ one to many
* `+` ⇒ zero to many
* `{number n}` ⇒ fixed number of n times
* `{n1, n2}` ⇒ range
* `{n1, }` ⇒ open-ended range

**Predefined character classes**

* Some characters are impossible to specify literally, like carriage return and others are used so frequently that these have predefined terms that represent them.
* `\d` ⇒ Any decimal digit
* `.` ⇒ Any character, except for newline `\n`

**Grouping**

* By using parentheses `()` just as in a mathematical expression.
* `/(id\d{3})+/` matches one or more consecutive occurrences of the substring `"id000"`, `"id999"` etc…

**Alternation (OR)** can be expressed using the `|` (pipe) character.

**Backreferences**

* Reference a previous capture
* E.g. `/^([dtn])a\1/` matches a string which starts with either `"d"`,`"t"` or `"n"`, followed by an `"a"`, followed by whatever character matched the first capture!
  * `/^([dtn])a\1/` is not the same as `/[dtn]a[dtn]/`.
  * If the regex was triggered by a `"t"` then the backreference expects a `"t"`.
  * Compliant strings are `"dad"`, `"tat"` and `"nan"`.
  * Which character will be backreferenced can't be known until evaluation time.

#### 7.3 Compiling regular expressions

#### 7.4 Capturing matching segments

* Capturing the integer value in `str="filter:alpha(opacity=50);"`
  * `str.match(/opacity=([0-9]+)/)[1]`
  * The capture is the 1st and not 0th index of the result array

### Chapter 8: Taming threads and timers

## Part 3 - Ninja training

## Part 4 - Master training
