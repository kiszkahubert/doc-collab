package com.kiszka.backend.websockets;

import lombok.*;

import java.util.Map;

@Getter @Setter @Builder
@AllArgsConstructor @NoArgsConstructor
public class ChangePayload {
    private char changeChar;
    private int changeIndex;
}
