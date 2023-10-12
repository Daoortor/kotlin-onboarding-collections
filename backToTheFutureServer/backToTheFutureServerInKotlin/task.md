The FIFO and LIFO approaches described above are often used in programming. 
Of course, it is not difficult to implement this approach yourself, 
for example by working with a list. However, many programming languages offer their own 
implementations that perform various types of optimisations. 
Kotlin is no exception.

Let's look at our example application. 
As shown in the first step, in our tamagotchi the user can switch the game mode - queue or stack. 
This means that when we choose a data structure, 
it is important to us how quickly we get elements, 
not just from the beginning _or_ from the end, but in _both_ scenarios.

![Final application](../../utils/src/main/resources/images/tamagotchi/states/ready.gif)

For such cases, the [`ArrayDeque`](https://docs.oracle.com/javase%2F7%2Fdocs%2Fapi%2F%2F/java/util/ArrayDeque.html) implementation is the best implementation for us.
The `ArrayDeque` class provides constant time performance for inserting and
removing items from both ends of the queue, making it a good choice for our scenario.

To create a new empty instance of `ArrayDeque` you can invoke its constructor:
```kotlin
fun main() {
    val arrayDequeExample = ArrayDeque<Int>() // Create an empty ArrayDeque
}
```

This collection is _mutable_ by default. 
This means that despite the fact that we have the read-only keyword `val`, 
we can update the collection itself. 
In this case we only cannot _reassign_ the variable.

<div class="hint" title="Which implementations can be used for other scenarios?">

**TODO: add a hint about FIFO and LIFO with links**
[//]: # (If we need to use _only the queue scenario_, the best option is to use the [`LinkedList`]&#40;https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html&#41; implementation.)

[//]: # (LinkedList is an efficient data structure for inserting or deleting elements )

[//]: # (at the beginning of the list, because you only need to change the links between the elements, )

[//]: # (rather than moving all the elements after the insertion or deletion point.)

[//]: # ()
[//]: # (If we need to use _only the stack scenario_, the best option is [`ArrayDeque`]&#40;https://docs.oracle.com/javase%2F7%2Fdocs%2Fapi%2F%2F/java/util/ArrayDeque.html&#41;.)

</div>
