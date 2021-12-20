package com.example.demo.service;

import com.example.demo.model.Admin;
import com.example.demo.repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImp implements AdminService {
    @Autowired
    AdminRepo adminRepo;
    @Override
    public Admin auth(String login, String password) {
        return adminRepo.findByLoginAndPassword(login, password);
    }
}
