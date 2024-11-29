export const filterData = (data, searchTerm) =>
  data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
