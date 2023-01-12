package nl.hsleiden.iprwc.exception;

public class UsernameTakenException extends RuntimeException {
    public UsernameTakenException() {
        super("Username already in use.");
    }
}
