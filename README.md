**UseState :**
Definition:
useState is used to create and manage state in functional components.

Use:
Store form input
Counter
Toggle (show/hide)
Any dynamic data

**2. useEffect**
Definition:
useEffect is used to perform side effects in components.

Use:
  > API call
  > DOM update
  > Event listeners
  > Timer
  > Component mount/unmount logic

**3. useContext**
Definition:
Used to access global data without prop drilling.

Use:
  > Authentication
  > Theme
  > User data
  > Language settings
 
**4. useRef**
Definition:
Used to access DOM elements or store mutable values without re-render.

Use:
  > Focus input
  > Store previous value
  > Timer reference
 

**5. useMemo**
Definition:
Used to memoize (cache) expensive calculations.

Use:
  > Large list filtering
  > Heavy computation
  > Performance optimization

**6. useCallback**
Definition:
Used to memoize functions so they don’t recreate every render.

Use:
  > Prevent child component re-render
  > Performance optimization
  > When passing function as prop

**7. useReducer**
Definition:
Alternative to useState for complex state logic.

Use:
  > Form with multiple fields
  > Complex state updates
  > State with many actions

**8. useLayoutEffect**
Definition:
Same as useEffect but runs before browser paint.

Use:
  > DOM measurements
  > Layout changes
  > Prevent flickering

**9. useDeferredValue**
Definition:
Used to delay updating a value to improve performance.

Use:
Search input optimization
Large list rendering


**10. useTransition**
Definition:
Allows marking updates as non-urgent (low priority).

Use:
  > Smooth UI updates
  > Large UI rendering
  > Search filtering
