
export const allInvoices = [
  {
    id: "inv-2025-001",
    client: "John & Sarah Thompson",
    title: "Kitchen Renovation - Final Payment",
    amount: "£2,850.00",
    date: "10 April 2025",
    dueDate: "24 April 2025",
    status: "paid" as const,
    paymentMethod: "Bank Transfer"
  },
  {
    id: "inv-2025-002",
    client: "Mike Wilson",
    title: "Bathroom Plumbing",
    amount: "£1,250.00",
    date: "12 April 2025",
    dueDate: "26 April 2025",
    status: "pending" as const,
    paymentMethod: null
  },
  {
    id: "inv-2025-003",
    client: "Jennifer Garcia",
    title: "Electrical Inspection",
    amount: "£350.00",
    date: "14 April 2025",
    dueDate: "28 April 2025",
    status: "pending" as const,
    paymentMethod: null
  },
  {
    id: "inv-2025-004",
    client: "Robert Chen",
    title: "HVAC Maintenance",
    amount: "£420.00",
    date: "05 April 2025",
    dueDate: "19 April 2025",
    status: "overdue" as const,
    paymentMethod: null
  },
  {
    id: "inv-2025-005",
    client: "Patricia Lewis",
    title: "Window Replacement",
    amount: "£1,650.00",
    date: "02 April 2025",
    dueDate: "16 April 2025",
    status: "paid" as const,
    paymentMethod: "Card Payment"
  }
];
