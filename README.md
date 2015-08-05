# A container for wrapping react elements that you want to be able to scroll up and down
## setup:

    ````
    <ScrollComponent
      height={number}
      width={number}
      heightComp={number}
      widthComp={number}
      component={ReactElement}
    />
    ````
* height - the height of the React Element that you want to have
  scrolling capabilities
* width - the width of that React Element
* heightComp - the height of the window through which you can see the
  scrolled to part of the React Element
* widthComp - width of window
* component - the React Element you want to have scroll capabilities

## can only use measurements in px
## please report all issues here: https://github.com/niole/react-scroll-component
