package nl.hsleiden.iprwc;

import nl.hsleiden.iprwc.util.CustomUserDetailService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class IprwcApplication {
    public static void main(String[] args) {
        SpringApplication.run(IprwcApplication.class, args);
    }

}
