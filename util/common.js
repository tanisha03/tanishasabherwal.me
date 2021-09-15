const dateFormatter = (date) => {
    return new Date(date).toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    );
};

export {
    dateFormatter
};
