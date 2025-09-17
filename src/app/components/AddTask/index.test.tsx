import { render, screen, fireEvent } from "@testing-library/react";
import T from "../Task";
import { Task } from "@/app/types/Task";

describe("T Component", () => {
  it("should render a new task when AddTask button is clicked", () => {
    let tasks: Task[] = [];

    const addTask = (task: Task) => {
      tasks = [...tasks, task];
      rerender(
        <T
          tasks={tasks}
          addTask={addTask}
          removeTask={jest.fn()}
          updateStatus={jest.fn()}
          taskCount={tasks.length}
        />
      );
    };

    const { rerender } = render(
      <T
        tasks={tasks}
        addTask={addTask}
        removeTask={jest.fn()}
        updateStatus={jest.fn()}
        taskCount={tasks.length}
      />
    );

    const input = screen.getByPlaceholderText("Add your task");
    fireEvent.change(input, { target: { value: "Nova Tarefa" } });
    fireEvent.click(screen.getByText("ADD"));

    expect(screen.getByText("Nova Tarefa")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument(); // contador
  });
});
