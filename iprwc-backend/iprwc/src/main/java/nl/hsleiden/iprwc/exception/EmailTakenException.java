package nl.hsleiden.iprwc.exception;

public class EmailTakenException extends RuntimeException {
    public EmailTakenException() {
        super("E-mail address already in use.");
    }
}
