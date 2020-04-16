# Testing

## Big old test

```javascript{numberLines: true}
function createSequentialFSM(states = []) {
  let currentIndex = 0

  return {
    // highlight-start
    get state() {
      return states[currentIndex]
    },
    // highlight-end
    transition: () => {
      let nextIndex = ++currentIndex % states.length
      currentIndex = nextIndex
      return states[currentIndex]
    },
  }
}
```
