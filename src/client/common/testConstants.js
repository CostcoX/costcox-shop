export const sortOptions = [
  { id: "sort1", label: "Relevance", value: "relevance" },
  { id: "sort2", label: "Price: Low to High", value: "price low to high" },
  { id: "sort3", label: "Price: High to Low", value: "price high to low" },
  { id: "sort4", label: "New Arrivals", value: "new arrivals" },
  { id: "sort5", label: "Customer Rating", value: "customer rating" },
  { id: "sort6", label: "Bestsellers", value: "bestsellers" },
];

export const filtersData = [
  {
    id: "acc2",
    summary: "Category",
    type: "category",
    details: [
      {
        id: "CLOTHING",
        label: "Clothing",
        value: "clothing",
        counter: 30,
        link: "#",
      },
      {
        id: "SHOES",
        label: "Shoes",
        value: "shoes",
        counter: 28,
        link: "#",
      },
      {
        id: "ACCESSORIES",
        label: "Accessories",
        value: "accessories",
        counter: 56,
        link: "#",
      },
      {
        id: "WEARABLES",
        label: "Wearables",
        value: "wearables",
        counter: 12,
        link: "#",
      },
      {
        id: "FOOD_DRINKS",
        label: "Food & Drinks",
        value: "food and drinks",
        counter: 52,
        link: "#",
      },
    ],
  },
  {
    id: "acc5",
    summary: "Price",
    type: "radio",
    details: [
      { id: "pr1", label: "Under $24.99", value: "under", counter: 123 },
      { id: "pr2", label: "$25.00 - $49.99", value: "25-49", counter: 100 },
      { id: "pr3", label: "$50.00 - $99.99", value: "50-99", counter: 12 },
      { id: "pr4", label: "$100.00 - $199.99", value: "100-199", counter: 3 },
      { id: "pr5", label: "$200.00 and above", value: "above", counter: 18 },
    ],
  },
  {
    id: "acc6",
    summary: "Rating",
    type: "rating",
    details: [
      { id: "r1", label: "5", value: "5", counter: 10 },
      { id: "r2", label: "4 & up", value: "4", counter: 123 },
      { id: "r3", label: "3 & up", value: "3", counter: 12 },
      { id: "r4", label: "2 & up", value: "2", counter: 3 },
      { id: "r5", label: "1 & up", value: "1", counter: 13 },
    ],
  },
];
