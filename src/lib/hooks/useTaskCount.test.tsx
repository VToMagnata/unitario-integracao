import { renderHook, act } from "@testing-library/react";
import useTaskCount from "./useTaskCount";

describe("useTaskCount", () => {
  it("deve inicializar com tarefas do JSON e permitir operações", () => {
    const { result } = renderHook(() => useTaskCount());

    expect(result.current.taskCount).toBeGreaterThanOrEqual(0);

    act(() => {
      result.current.addTask({ content: "Nova Tarefa de Teste", ready: false });
    });

    expect(result.current.taskCount).toBeGreaterThan(0);
  });
});
