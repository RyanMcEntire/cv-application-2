interface ListProps<T> {
  items: T[];
  onUpdate: (data: T, index: number) => void;
  renderer: (data: T, onUpdate: (data: T) => void) => JSX.Element;
}

export default function List<T>({ items, onUpdate, renderer }: ListProps<T>) {
  return  (
    <>
      {items.map((item, index) =>
        renderer(item, (data) => onUpdate(data, index))
      )}
    </>
  );
}
