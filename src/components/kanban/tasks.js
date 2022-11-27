export function TasksList() {
  return {
    newTasks: {
      title: "New task",
      status: "new",
      items: [
        {
          id: "task-1",
          text: "Check email",
          time: "0:20h",
          color: "green",
        },
        {
          id: "task-2",
          text: "Compare PPC agencies and make a report for Steven",
          time: "3:00h",
          color: "blue",
        },
        {
          id: "task-3",
          text: "Meeting with Amanda (PR department)",
          time: "0:30h",
          color: "green",
        },
        {
          id: "task-4",
          text: "Get Patrick's approval for homepage new design",
          time: "0:20h",
          color: "blue",
        },
      ],
    },
    scheduled: {
      title: "Scheduled",
      status: "scheduled",
      items: [
        {
          id: "task-5",
          text: "Check email",
          time: "0:20h",
          color: "orange",
        },
        {
          id: "task-6",
          text: 'Write a blogpost "7 best strategies for SEO in 2020"',
          time: "5:00h",
          color: "red",
        },
        {
          id: "task-7",
          text: "New Ad copies for Manamaja",
          time: "2:00h",
          color: "light-green",
        },
      ],
    },
    progress: {
      title: "In progress",
      status: "progress",
      items: [
        {
          id: "task-8",
          text: "Check email",
          time: "0:20h",
          color: "orange",
        },
        {
          id: "task-9",
          text: 'Write a blogpost "7 best strategies for SEO in 2020"',
          time: "5:00h",
          color: "purple",
        },
        {
          id: "task-10",
          text: "Process all resumes for Content Marketer position",
          time: "2:00h",
          color: "orange",
        },
      ],
    },
    completed: {
      title: "Completed",
      status: "complete",
      items: [
        {
          id: "task-11",
          text: "Check email",
          time: "0:20h",
          color: "orange",
        },
        {
          id: "task-12",
          text: 'Write a blogpost "7 best strategies for SEO in 2020"',
          time: "5:00h",
          color: "purple",
        },
        {
          id: "task-13",
          text: "Process all resumes for Content Marketer position",
          time: "2:00h",
          color: "orange",
        },
        {
          id: "task-14",
          text: "Process all resumes for Content Marketer position",
          time: "2:00h",
          color: "orange",
        },
      ],
    },
  };
}
