package nl.hsleiden.iprwc.util;

import nl.hsleiden.iprwc.exception.EmailTakenException;
import nl.hsleiden.iprwc.exception.UsernameTakenException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Collections;
import java.util.Map;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(UsernameTakenException.class)
    public ResponseEntity<Map<String, String>> handle(UsernameTakenException exception) {
        return new ResponseEntity<>(Collections.singletonMap("error", exception.getMessage()), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(EmailTakenException.class)
    public ResponseEntity<Map<String, String>> handle(EmailTakenException exception) {
        return new ResponseEntity<>(Collections.singletonMap("error", exception.getMessage()), HttpStatus.CONFLICT);
    }
}
