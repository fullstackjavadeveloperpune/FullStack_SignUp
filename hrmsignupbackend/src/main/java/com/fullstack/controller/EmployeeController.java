package com.fullstack.controller;

import com.fullstack.entity.Employee;
import com.fullstack.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
@Slf4j
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping("/signup")
    public ResponseEntity<Employee> signUp(@RequestBody Employee employee) {

        log.info("########Trying to SignUp for Employee: " + employee.getEmpName());
        return ResponseEntity.ok(employeeService.signUp(employee));
    }
}
