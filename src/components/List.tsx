interface ListProps<T> {
  items: T[];
  onUpdate: (data: T, index: number) => void;
  onDelete: (id: string) => void;
  renderer: (
    data: T,
    onUpdate: (data: T) => void,
    onDelete: (id: string) => void
  ) => JSX.Element;
}

export default function List<T>({
  items,
  onUpdate,
  onDelete,
  renderer,
}: ListProps<T>) {
  return (
    <>
      {items.map((item, index) =>
        renderer(
          item,
          (data) => onUpdate(data, index),
          (id) => onDelete(id)
        )
      )}
    </>
  );
}
