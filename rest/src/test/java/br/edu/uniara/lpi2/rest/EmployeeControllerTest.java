package br.edu.uniara.lpi2.rest.controller;

import br.edu.uniara.lpi2.rest.model.Employee;
import br.edu.uniara.lpi2.rest.model.EmployeeRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class EmployeeControllerTest {

    @Mock
    private EmployeeRepository repository;

    @InjectMocks
    private EmployeeController controller;

    @Test
    public void testGetEmployeeById() {
        Employee employee = new Employee();
        employee.setId(1L);
        employee.setName("John Doe");

        when(repository.findById(1L)).thenReturn(Optional.of(employee));

        Employee result = controller.one(1L);
        assertEquals("John Doe", result.getName());
        assertEquals(1L, result.getId());
    }

    @Test
    public void testGetEmployeeById_NotFound() {
        when(repository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException exception = null;
        try {
            controller.one(1L);
        } catch (RuntimeException e) {
            exception = e;
        }
        assertEquals("Erro pesquisando id: 1", exception.getMessage());
    }

    @Test
    public void testGetAllEmployees_InvalidPage() {
        ResponseEntity<?> response = controller.all(0, 10);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("page deve ser > 0", response.getBody());
    }

    @Test
    public void testGetAllEmployees_InvalidSize() {
        ResponseEntity<?> response = controller.all(1, 0);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("size deve ser entre 1 e 500", response.getBody());
    }

    @Test
    public void testGetAllEmployees() {
        Employee employee1 = new Employee(1L, "John Doe");
        Employee employee2 = new Employee(2L, "Jane Doe");
        List<Employee> employees = Arrays.asList(employee1, employee2);

        when(repository.findAll()).thenReturn(employees);

        ResponseEntity<?> response = controller.all(1, 10);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(employees, response.getBody());
    }

    @Test
    public void testInsertEmployee() {
        Employee employee = new Employee();
        employee.setName("John Doe");

        when(repository.save(any(Employee.class))).thenReturn(employee);

        ResponseEntity<Employee> response = controller.insert(employee);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(employee, response.getBody());
    }

    @Test
    public void testDeleteEmployee() {
        when(repository.existsById(1L)).thenReturn(true);

        ResponseEntity<?> response = controller.delete(1L);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("1was removed", response.getBody());
        verify(repository, times(1)).deleteById(1L);
    }

    @Test
    public void testDeleteEmployee_NotFound() {
        when(repository.existsById(1L)).thenReturn(false);

        ResponseEntity<?> response = controller.delete(1L);
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }
}
