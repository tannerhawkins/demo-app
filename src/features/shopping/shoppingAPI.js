// A mock function to mimic making an async request for data
export function fetchList(item) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: item }), 500)
  );
}
