export const generateRandomId = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 24; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};

export const generateRandomQuoteNo = (): string => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Los meses comienzan desde 0
  const randomPart = Math.floor(Math.random() * 1000); // Número aleatorio de 3 dígitos
  return `${year}${month.toString().padStart(2, "0")}-${randomPart}`;
};

export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return date.toString();
};
