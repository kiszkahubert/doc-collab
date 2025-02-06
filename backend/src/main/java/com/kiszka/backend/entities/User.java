package com.kiszka.backend.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Table(name="users")
@Entity @Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private int id;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @CreationTimestamp
    @Column(updatable = false, name = "created_at")
    private Date createdAt;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String surname;
}
