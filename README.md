# Question 1-

Items is  an array of objects with each object with an attribute text of type string. this items array is passed to List component and List component is rendering an unordered list,with list elements being SingleListItem components. Suitable props such as index of item, text of item, clickHandler and a boolean isSelected is passed.When we Click on an element,HandleClick is executed and index of that item is stored as selectedIndex.<br>
SingleListItem is rendering li and if the isSelected attribute of that element is true its background color is set as green , otherwise red. The content of the li is set as text prop passed to the SingleListItem.


# Question 2-

## Errors, warning and their correction -

1- In wrappedsingleItem the onClickHandler(index) should  be wrapped in arrow functions.<br>
2- When usetate is used  selectedibdex should be passed before  setSelectedIndex when destructured assignment of usestate is done.<br>
3- As isSelected prop passed to SingleListItem is bool, instead of passing it as index, the output of this expression should be passed as is Selected prop-->               (index===selectedIndex)<br>

  Or simply-->
  IsSelected={(index===selectedIndex)?true:false}<br>
4- In wrapListComponent defaultProps, default value of items should be empty array [ ] instead of null, because map function will not work an array containing null.<br>
5- When passing Props to singlelistItem component, index should be passed as a key prop to avoid warnings.<br>
6- In wrappedListComponent.proptypes Proptypes.array should be replaced with prototypes.ArrayOf and Proptypes.shapeOf should be replaced by Proptypes.shape.<br>

# Question 3- 

## Optimization -

1- When passing Props to singlelistItem component, index should be passed as a key prop to avoid warnings.<br>
2- SingleListItem should be stored in a new jsx file and then exported to be used in List.jsx for increasing code readability, and more organised file structure.
