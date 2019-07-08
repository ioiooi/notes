# Underlying data in ArrayAdapter can be immutable

Creating an ArrayAdapter like so:

```cs
names = new string[] {"Peter", "Gustav", "Jane", "Maria"};
adapter = new ArrayAdapter<String>(this, Android.Resource.Layout.SimpleListItem1, names);
```

wont propagate changes to the list/array as expected.

ArrayAdapter calls

```java
Arrays.asList(T[] objects)
```

on the provided array argument.  
See [ArrayAdapter Documentation](https://android.googlesource.com/platform/frameworks/base/+/master/core/java/android/widget/ArrayAdapter.java#159).  
See [Arrays.asList Documentation](<https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html#asList(T...)>).

[stackoverflow-1](https://stackoverflow.com/questions/9380662/android-arrayadapter-items-update), [stackoverflow-2](https://stackoverflow.com/questions/3200551/unable-to-modify-arrayadapter-in-listview-unsupportedoperationexception), [stackoverflow-3](https://stackoverflow.com/questions/15022727/arrayadapter-notifydatasetchanged-is-not-working)
