package nl.hsleiden.iprwc.repository;

import nl.hsleiden.iprwc.model.WebshopUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<WebshopUser, Long> {
    WebshopUser findByUsername(String username);
}
