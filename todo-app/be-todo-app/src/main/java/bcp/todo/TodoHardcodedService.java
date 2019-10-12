package bcp.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "bcp", "Task #" + idCounter, new Date(), false));
        todos.add(new Todo(++idCounter, "bcp", "Task #" + idCounter, new Date(), true));
        todos.add(new Todo(++idCounter, "bcp", "Task #" + idCounter, new Date(), false));
        todos.add(new Todo(++idCounter, "bcp", "Task #" + idCounter, new Date(), true));
    }

    public List<Todo> findAll() {
        return todos;
    }
}
