
export interface Enquiry {
  id: string;
  title: string;
  status: 'new' | 'quote_pending' | 'converted';
  createdAt: string;
  client: {
    name: string;
    phone: string;
    email: string;
  };
  location: string;
  description: string;
  notes?: string;
  locationNotes?: string;
  estimatedValue?: number;
}

export const mockEnquiries: Enquiry[] = [
  {
    id: "enq-001",
    title: "Kitchen Renovation",
    status: "new",
    createdAt: "2023-04-15T10:30:00Z",
    client: {
      name: "John Smith",
      phone: "07700 900123",
      email: "john.smith@example.com"
    },
    location: "14 Willow Drive, Manchester, M20 1FG",
    description: "Complete kitchen renovation including new cabinets, countertops, and appliances. Looking for a quote within the next week.",
    notes: "Client mentioned they have a flexible budget but want quality materials",
    estimatedValue: 15000
  },
  {
    id: "enq-002",
    title: "Bathroom Plumbing",
    status: "quote_pending",
    createdAt: "2023-04-14T15:45:00Z",
    client: {
      name: "Sarah Johnson",
      phone: "07700 900456",
      email: "sarah.j@example.com"
    },
    location: "27 Oak Street, Liverpool, L15 3QT",
    description: "Leaking shower and toilet that needs fixing. Also interested in replacing the vanity unit.",
    locationNotes: "Parking available on the street"
  },
  {
    id: "enq-003",
    title: "Garden Landscaping",
    status: "new",
    createdAt: "2023-04-13T09:15:00Z",
    client: {
      name: "David Williams",
      phone: "07700 900789",
      email: "d.williams@example.com"
    },
    location: "8 Meadow Lane, Birmingham, B29 6DP",
    description: "Need complete garden redesign including patio, lawn, and planting. Approximately 100 sq meters.",
    notes: "Client has design ideas and wants to discuss options"
  },
  {
    id: "enq-004",
    title: "Roof Repair",
    status: "new",
    createdAt: "2023-04-12T14:20:00Z",
    client: {
      name: "Emma Brown",
      phone: "07700 900234",
      email: "emma.b@example.com"
    },
    location: "42 High Street, Leeds, LS1 7BT",
    description: "Several missing roof tiles after recent storm. Water starting to leak into attic.",
    locationNotes: "Three story building, scaffolding may be required",
    estimatedValue: 1200
  },
  {
    id: "enq-005",
    title: "Electrical Rewiring",
    status: "quote_pending",
    createdAt: "2023-04-11T11:30:00Z",
    client: {
      name: "Michael Taylor",
      phone: "07700 900567",
      email: "michael.t@example.com"
    },
    location: "15 Church Road, Sheffield, S10 2PE",
    description: "Full house rewiring needed for 3-bedroom semi-detached house. Property was built in 1970s.",
    notes: "Client needs work done within the next month"
  },
  {
    id: "enq-006",
    title: "Driveway Installation",
    status: "new",
    createdAt: "2023-04-10T16:45:00Z",
    client: {
      name: "Lisa Davies",
      phone: "07700 900890",
      email: "lisa.d@example.com"
    },
    location: "3 Park View, Newcastle, NE1 5DQ",
    description: "New block paving driveway for 2 cars. Current driveway is gravel.",
    locationNotes: "Front garden needs clearing before work can begin",
    estimatedValue: 5000
  },
  {
    id: "enq-007",
    title: "Painting & Decorating",
    status: "converted",
    createdAt: "2023-04-09T13:15:00Z",
    client: {
      name: "Robert Wilson",
      phone: "07700 900345",
      email: "robert.w@example.com"
    },
    location: "22 Victoria Road, Bristol, BS8 4UD",
    description: "Painting for entire 2-bedroom flat including ceilings and woodwork. Walls need preparation.",
    notes: "Client has already purchased the paint"
  },
  {
    id: "enq-008",
    title: "Window Replacement",
    status: "quote_pending",
    createdAt: "2023-04-08T10:00:00Z",
    client: {
      name: "Jennifer Harris",
      phone: "07700 900678",
      email: "jennifer.h@example.com"
    },
    location: "56 Queen Street, Edinburgh, EH2 1NT",
    description: "Replacement of 8 windows with double glazed units. Current windows are single glazed.",
    estimatedValue: 4000
  }
];
