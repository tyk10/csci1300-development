# Development

### Link to Deployed Website

https://tyk10.github.io/csci1300-development/

### Goal and Value of the Application

My Bakery App is an online bakery shopping application. The user can filter (by bakery type or maximum calories) and sort (by calories or price in ascending order) available bakery options. Then, the user can add/remove items to/from the shopping cart.

This app provides the user an intuitive interface which makes it easy to select the bakery product that meets the user's demand. For example, the user can simply locate cheap bread, low-calorie pastry, etc.

### Usability Principles Considered

The app hierarchy is as followed:

- App (root)
  - Navigation (MyNavbar.js)
  - Page (Container)
    - Bakery Item List (BakeryItemList.js)
      - Filter & Sort Bar (DropdownButton & Form.Range)
      - Bakery Items (BakeryItems.js)
    - Shopping Cart (Cart.js)
      - Shopping Cart List (CartItemList.js & CartItem.js)

In terms of the page layout, the Navbar is placed on the top of the page, and below is the bakery item list placed side by side with the shopping cart. In terms of usability, this interface should be quite intuitive for the user because the layout is fairly standard in many modern online shopping websites.

### Organization of Components

As shown in the app hierarchy, the components are divided into three major groups: Navigation, Bakery List, and Shopping Cart. Except for the Navigation bar (which is just there for decorative purposes), the other two holds and renders based on a list of data (hence having child components to handle list rendering).

### How Data is Passed Down Through Components

The app (root component) reads all the bakery items and passes them down as props to the bakery item list component. It also passes through functions that would allow the bakery item list component to add items to the cart (which is stored in a state in the root component). Then, the root component shares the cart related states as props to the cart component.

### How the User Triggers State Changes

When the user selects a new filter or sort setting, the corresponding state variables in the bakery item list component gets updated and the list of bakery items is also updated automatically due to the **useEffect** hook which has the current filter and sort options as dependencies.

When the user adds/removes an item to/from the shopping cart, the **onAddingCart**/**onRemovingCart** handler is trigger which then updates the cart information stored in the root component.
