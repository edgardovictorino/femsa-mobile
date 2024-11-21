import React, { useState } from "react";

// Props definition for the List component
interface ListProps<T> {
  /**
   * The collection of items to be rendered in the list.
   */
  items: ReadonlyArray<T>;

  /**
   * Function to render each item in the list.
   */
  renderItem: (item: T, index: number) => React.ReactNode;

  /**
   * Optional function to filter items in the list.
   */
  filter?: (item: T, index: number) => boolean;

}

/**
 * Generic List component supporting flexible types and filtering.
 */
const List = <T,>({
  items,
  renderItem,
  filter,
}: ListProps<T>): JSX.Element => {
  const [filteredItems, setFilteredItems] = useState(() =>
    filter ? items.filter(filter) : items
  );

  // Update the filtered list whenever the filter or items change
  React.useEffect(() => {
    if (filter) {
      setFilteredItems(items.filter(filter));
    } else {
      setFilteredItems(items);
    }
  }, [items, filter]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index} className="list-item">
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

export default List;
