package com.example.demo.service;

import com.example.demo.model.Admin;
import org.springframework.stereotype.Service;

@Service
public interface AdminService {
    public Admin auth(String login, String password);
}
