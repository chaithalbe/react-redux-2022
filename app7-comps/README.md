# Components App

Concepts & Features

-   `children` prop
-   `prop-types` library
-   TailwindCSS
-   `classnames` library
-   Enhancing native HTML elements eg. Button
-   Project Organization
-   Accordion Component
-   State Deisgn Process
-   Conditonal Rendering
    -   `||` gives back the first value that is truthy
    -   `&&` gives back the first falsey value or the last truthy value
-   Delayed State update bug in React and a fix to that
-   Dropdown Component
-   Panel Component
-   Handling close Dropdown on click outside using `useEffect` and `useRef` hooks
    -   Event capturing / bubbling
-   Navigation (without React Router)
    -   Traditional Browser navigation
    -   Navigation in React
    -   `History.pushState()` function for no full page refresh
    -   Handling Link clicks - to override normal navigation with `a` element
    -   Handling Back/Forward buttons
        -   `popstate` event - emitted by `window` if the user's current url was added by `pushState()`
    -   Custom hook for navigation
    -   Navigation Context
    -   Cmd + click should open the app in new tab
-   SideBar Component
-   Modal Component
    -   position absolute, why it doesn't work for Modal without Portal
    -   Using React Portal, `ReactDOM.createPortal()`
    -   Fix the scrolling issue
    -   Using position fixed to display the Modal whereever we are scrolled in the document
