package com.kiszka.backend.websockets;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class PayloadController {

    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public ChangePayload handlePayload(ChangePayload payload){
        return payload;
    }
}
