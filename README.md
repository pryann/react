# React

## Different html attribute names, and other differences

- `class`: className
- `tabindex`: tabIndex
- `for`: htmlFor
- `onclick`: onClick (**all event**)
- `disabled`: disabled={true} (**all boolean like attribute**)
- `style`: style={{ color: 'blue', fontSize: '16px' }} (**style is an object, use camelCase property names**)
- `render html`: dangerouslySetInnerHTML={{ __html: '<p>Some HTML</p>' }}> (**not secure**)

## Hook

- `use`: can read the value of a resource like a Promise or context  
  _(pl: indítasz egy fetch kérést és kiolvasod a Promise értékét)_
- `useCallback`: cache a function definition between re-renders  
  _(pl: szülőből adsz át egy függvényt a gyermeknek, akkor az újra rendereléskor a függvényt mindig létre kell hozni, na ezt el tudod kerülni)_
- `useContext`: subscribe to context from your component  
  _(pl: globális state-et hoz létre, ha több mélységbe kell adatot levinni akkor jó, nem kell props-okkal játszani)_
- `useDebugValue`: add a label to a custom Hook in React DevTools  
  _(pl: gyakorlatilag bármit fel tudsz címkézni és látod a devtoolban)_
- `useDeferredValue`: defer updating a part of the UI  
  _(pl.: autocomplete esetében az leütésénél megy kérés, de nem update-eli rögtön a UI-t, megvárja míg a második karakter leütésére is megjön a válasz)_
- `useEffect`: synchronize a component with an external system  
  _(pl. ha van valamilyen számított érték, vagy itt vannak a http requestek is - axios, fetch)_
- `useId`: generating unique IDs that can be passed to accessibility attributes  
  _(pl.: ennyi, készít egy egyedi azonosítót, amit hozzá tudsz rendelni elsőként HTML elemekhez, tipikusan label+input kapcsolat esetében)_
- `useImperativeHandle`: customize the handle exposed as a ref  
  _(pl.: a szülő komponensnek meg tudjuk engedni, hogy hozzáférjen a gyerek komponens egyes funkcióihoz, modalban egy form, a modalból lehet resetelni a formot)_
- `useInsertionEffect`: insert element to DOM before layoutEffect  
  **DO NOT USE IT! NOT USE CSS-in-JS LIBS! PLEASE NOOOOOOOO! STOP THIS POPULAR BAD PRACTICE! GOD SAVE THE DEVELOPERS! ANY GOOD! ALL OF THEM!**
- `useLayoutEffect`: before browser repaint the site, cause performance issue
- **DO NOT USE IT! NO! NO! NOOOOO!!!**
- `useMemo`: cache the result of a calculation between re-renders  
  _(pl.: a React egy szülő változásakor a gyerekeket is újra rendereli, viszont ha volt valami heavy időigényes művelet valamelyik gyermekben, akkor ennek is újra le kellene futnia, akkor is ha semmilyen hozzá kapcsolódó adat változatlan. Ezzel a hook-kal ez elkerülhető)_
- `useReducer`: add a reducer to your component  
  _(pl.: Haladó state management. Akkor érdemes használni, ha összetett a state. Felveszem külön a state-et egy változóba. Különböző action-öket (művelet) definiálok. Megadom, melyik nevű action esetében milyen művelet hajtódjon végre, azaz mit csináljon a state-el. Ezeket az action-öket tudom dispatch-elni. A dispatch egy függvény, amit a useReducer hook ad vissza. A dispatch-nek megadom az melyik action-t akarom kiváltani és megadom a payload-ot azaz a szükséges adatokat amivel dolgoznia kell.)_
- `useRef`: reference a value that’s not needed for rendering  
  _(pl.: egy DOM elemre hivatkozol, és a referencián keresztül el fogod érni, nem kell querySelector meg semmi egyéb)_
- `useState`: add a state variable to your component  
  _(pl.: a komponens belső adatait, az state-et tárolja, ezeket az értékeket figyeli a React, ha változik szükség esetén frissíti a UI-t is)_
- `useSyncExternalStore`: subscribe to an external store  
  _(pl.: egy state management lib-bel, tudod szinkronizálni a komponens adatait)_
- `useTransition`: update the state without blocking the UI  
  _(pl.: csini animációk készítése a UI blokkolása nélkül. Egyszerű animációkhoz ott a CSS oké?)_

## Strict mode

- Identifying components with unsafe lifecycles
- Warning about legacy string ref usage
- Detecting unexpected side effects in function components
- Detecting usage of legacy context API
- Identifying Deprecated FindDOMNode Usage
- Detecting Deprecated String Refs
- Detecting Async SetState in Render
- Detecting Legacy Context.Consumer Usage

## Old style lifecycle method and hooks

- `constructor(props)`: A konstruktor a komponens létrejöttekor hívódik meg. Itt inicializálhatjuk a komponens állapotát (this.state) és köthetjük a metódusokat a komponens példányhoz.
- `componentWillMount()`: Ez a metódus a React 16.3 verziójával került eltávolításra. Használata nem javasolt, helyette a componentDidMount()-ot használjuk.
- `componentDidMount()`: Ebben a metódusban végezhetünk aszinkron műveleteket, például AJAX hívásokat vagy az állapot frissítését, miután a komponens már renderelődött.
- `shouldComponentUpdate(nextProps, nextState)`: Ezt a metódust használhatjuk annak eldöntésére, hogy a komponensnek újra kell-e renderelődnie a következő állapot- vagy propváltozások miatt. A metódus visszaadott értéke meghatározza, hogy a render() függvényt le kell-e futtatni.
- `componentWillUpdate(nextProps, nextState)`: Ez a metódus a React 16.3 verziójával került eltávolításra. Használata nem javasolt, helyette a componentDidUpdate()-ot használjuk.
- `componentDidUpdate(prevProps, prevState)`: Ebben a metódusban végezhetünk aszinkron műveleteket a komponens frissítése után. Itt például ellenőrizhetjük a korábbi és új prop- vagy állapotértékeket és reagálhatunk a változásokra.
- `componentWillUnmount()`: Ez a metódus a komponens elrendezése előtt hívódik meg. Használhatjuk itt a tisztítási műveleteket, például az eseményfigyelők eltávolítását vagy az erőforrások felszabadítását.
  `componentDidCatch(error, info)`: Ez a metódus a komponens gyermek komponenseiben keletkezett hibák elkapására szolgál. Hasznos lehet a hibák naplózására és a felhasználóbarát hibaüzenetek megjelenítésére.
  ![React 16.3 lifecycle methods](/img/lifecycle-methods16-3.jpg)
  ![lifecycle hooks](/img/react-lifecycle-methods-in-hooks.jpeg)

## State management

**Context API**  
A Context API lehetővé teszi az adatok vagy funkciók globális elérését az alkalmazás különböző részein keresztül, 
anélkül, hogy azokat minden komponens átadná.

**Provider komponens**:  
A Provider komponens szolgáltatja a Context API-ban definiált értékeket, így azok hozzáférhetőek lesznek az alkalmazás más részein. 
A kontextus értékeit biztosítja a leszármazott komponenseknek, akik pedig feliratkozhatnak a kontextus változásaira.

**useContext hook**:
Lehetőséget biztosít a kontextushoz való rugalmas hozzáférésre és módosításra.

