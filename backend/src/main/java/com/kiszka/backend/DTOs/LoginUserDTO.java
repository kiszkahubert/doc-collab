package com.kiszka.backend.DTOs;

import lombok.Data;

@Data
public class LoginUserDTO {
    private String email;
    private String password;
}
