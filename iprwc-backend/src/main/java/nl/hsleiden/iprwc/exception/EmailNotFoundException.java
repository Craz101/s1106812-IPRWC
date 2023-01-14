package nl.hsleiden.iprwc.exception;

public class EmailNotFoundException extends RuntimeException {
    public EmailNotFoundException() {
        super("E-mail address not found.");
    }
}
