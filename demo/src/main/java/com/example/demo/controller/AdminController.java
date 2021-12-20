package com.example.demo.controller;


import com.example.demo.model.Admin;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/auth/{login}&{password}")
    public Admin auth(@PathVariable("login") String login, @PathVariable("password") String password) {
        return adminService.auth(login, password);
    }
}
