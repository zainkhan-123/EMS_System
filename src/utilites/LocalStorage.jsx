
// data ko set karny ky liye 


const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "e@e.com",
    password: "123",
   tasksNumber: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        
        title: "Submit report",
        description: "Submit the weekly sales report to the manager.",
        date: "2024-11-20",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        
        title: "Update CRM",
        description: "Update customer data in the CRM system.",
        date: "2024-11-18",
        category: "Data Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        
        title: "Team Meeting",
        description: "Attend the scheduled team meeting.",
        date: "2024-11-19",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      }
    ]
  },
  {
    id: 2,
    firstName: "Hassan",
    email: "employee2@example.com",
    password: "123",
    tasksNumber: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        
        title: "Code Review",
        description: "Review the new feature codebase.",
        date: "2024-11-16",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        
        title: "Fix Bugs",
        description: "Resolve the critical bugs reported by QA.",
        date: "2024-11-17",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        
        title: "Database Backup",
        description: "Perform a backup of the database.",
        date: "2024-11-18",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Sara",
    email: "employee3@example.com",
    password: "123",
    tasksNumber: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
      
        title: "Client Meeting",
        description: "Discuss project requirements with the client.",
        date: "2024-11-15",
        category: "Client Interaction",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
      
        title: "Prepare Presentation",
        description: "Prepare slides for the upcoming product demo.",
        date: "2024-11-18",
        category: "Presentations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        
        title: "Research Competitors",
        description: "Gather insights on competitors' strategies.",
        date: "2024-11-19",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Ayesha",
    email: "employee4@example.com",
    password: "123",
    tasksNumber: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        
        title: "Write Blog Post",
        description: "Draft a blog post for the company's website.",
        date: "2024-11-20",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        
        title: "Social Media Update",
        description: "Schedule posts for social media platforms.",
        date: "2024-11-16",
        category: "Social Media",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
       
        title: "Design Review",
        description: "Review design assets for the new campaign.",
        date: "2024-11-18",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",
    tasksNumber: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        
        title: "Inventory Check",
        description: "Verify stock levels in the warehouse.",
        date: "2024-11-16",
        category: "Inventory",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        
        title: "Supplier Meeting",
        description: "Negotiate terms with the new supplier.",
        date: "2024-11-19",
        category: "Supplier Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        
        title: "Quality Audit",
        description: "Conduct a quality check on incoming goods.",
        date: "2024-11-20",
        category: "Quality Control",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];


  
  const admin = [
    {
      firstName:'Admin',
      id: 1,
      email: "zainkhani@gmail.com",
      password: "123"
    }
  ];

  
  export const SetLocalStorage = () => {
      localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('Admin',JSON.stringify(admin))
  }
  export const GetLocalStorage = () => {
     const employees = JSON.parse(localStorage.getItem('employees')) || []
     const admin = JSON.parse(localStorage.getItem('Admin'))|| []
    return ({employees,admin})
     
  }
  