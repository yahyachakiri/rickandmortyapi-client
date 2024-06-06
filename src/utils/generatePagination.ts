export function generatePagination(
  currentPage: number,
  totalPages: number,
  maxPages: number = 5,
  ellipsisThreshold: number = 3
): (number | string)[] {
  let pagination: (number | string)[] = [];

  if (totalPages <= maxPages) {
    pagination = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= ellipsisThreshold + 1) {
      pagination = Array.from({ length: maxPages }, (_, i) => i + 1);
      pagination.push("...");
      pagination.push(totalPages);
    } else if (currentPage >= totalPages - ellipsisThreshold) {
      pagination.push(1);
      pagination.push("...");
      pagination = pagination.concat(Array.from({ length: maxPages }, (_, i) => totalPages - maxPages + i + 1));
    } else {
      pagination.push(1);
      pagination.push("...");
      const startPage = currentPage - Math.floor(maxPages / 2);
      pagination = pagination.concat(Array.from({ length: maxPages }, (_, i) => startPage + i));
      pagination.push("...");
      pagination.push(totalPages);
    }
  }

  return pagination;
}
