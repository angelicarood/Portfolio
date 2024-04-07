import UsesSection from './UsesSection';

const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: 'Microsoft Office 365',
        description:
        "Hey there! So, one tool I can't do without is Microsoft Office 365. It is like my Swiss Army knife for getting things done! Whether I'm crafting reports in Word, crunching numbers in Excel, or putting together a killer presentation in PowerPoint, Office has me covered. Plus, since it's so widely used, it's easy to collaborate with others, and I love how everything seamlessly integrates together. It's just so convenient!",
      },
      {
        title: 'Visual Studio Code',
        description:
        "You know, when it comes to coding, Visual Studio Code is my go-to. It's like my trusty sidekick in the world of development. I love how flexible and customizable it is, with all those awesome extensions that make my life easier. And the fact that it works on any platform? Total game-changer. Plus, the community around it is fantastic. It's like having a whole team of developers cheering you on!",
      },
      {
        title: 'Adobe Creative Cloud ',
        description:
        "Ah, Adobe Creative Cloud – where creativity knows no bounds! As someone who's into design, photography, and all things creative, Adobe CC is my playground. From whipping up stunning graphics in Photoshop to bringing my designs to life in Illustrator and even editing videos in Premiere Pro, it's got everything I need. And the best part? Everything works together seamlessly, so I can focus on bringing my ideas to life without any hiccups.",
      },

    ],
  },
  {
    groupName: 'Development Tools',
    items: [
      {
        title: 'Git',
        description:
        "Let me tell you about Git – it's like having a safety net for my code. With Git, I can track every change I make, collaborate with my team without worrying about stepping on each other's toes, and roll back to earlier versions if I mess something up (hey, it happens!). Plus, with platforms like GitHub, sharing my code with the world is a breeze. It's like having a superpower for software development!",
      },
      {
        title: 'Visual Studio Code (VS Code)',
        description:
          ' As mentioned earlier, VS Code is a lightweight and versatile code editor developed by Microsoft. It supports a wide range of programming languages and offers features like syntax highlighting, code completion, and debugging capabilities. Its extensibility through plugins makes it suitable for various development workflows.',
      },
    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Adobe Photoshop',
        description:
          'What I love most about Photoshop is its versatility. Need to remove a background from a photo? No problem. Want to retouch imperfections or add special effects? Easy peasy. And let us not forget about its powerful tools for creating intricate designs, from posters to web graphics to social media content.',
      },
      {
        title: 'Figma',
        description:
        "Okay, Figma? It's a game-changer for design collaboration. Picture this: I'm working on a project with my team, and instead of sending files back and forth and getting lost in endless email chains, we're all working together in real-time, making changes, giving feedback, and just getting stuff done. Plus, being web-based means I can access my designs from anywhere – talk about convenience! Figma is like having a virtual design studio right at my fingertips.",
      },

    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Trello',
        description:
        'If you are more visually inclined, Trello is a fantastic tool for organizing your tasks and projects using boards, lists, and cards. It is like having a virtual Kanban board where you can drag and drop tasks, assign them to team members, and track their progress from start to finish. Whether you are planning a project, managing a team, or just keeping track of personal tasks, Trello makes it a breeze.',
      },
      {
        title: 'Slack',
        description:
          'Communication is key to productivity, and Slack is the ultimate tool for team collaboration. It is like having a virtual office where you can chat, share files, and collaborate on projects in real-time. With channels for different teams and topics, direct messaging, and integrations with other tools, Slack keeps everyone connected and on the same page',
      },
    ],
  },
];

function UsesTable() {
  return (
    <>
      <UsesSection items={items} />
    </>
  );
}

export default UsesTable;
