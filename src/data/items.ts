import { InputArea } from "../components/InputArea";
import { Item } from "../types/Item";

export const items: Item[] = [
  {
    date: new Date(2022, 4, 3),
    category: "food",
    title: "McDonald's",
    value: 32.12,
  },
  {
    date: new Date(2022, 2, 15),
    category: "food",
    title: "Burguer King",
    value: 50,
  },
  {
    date: new Date(2022, 2, 16),
    category: "rent",
    title: "Aluguel de apartamento",
    value: 650,
  },
  {
    date: new Date(2022, 3, 18),
    category: "salary",
    title: "Salário",
    value: 4500,
  },
];
