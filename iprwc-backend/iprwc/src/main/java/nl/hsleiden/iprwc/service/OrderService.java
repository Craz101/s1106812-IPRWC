package nl.hsleiden.iprwc.service;

import lombok.AllArgsConstructor;
import nl.hsleiden.iprwc.exception.NotFoundException;
import nl.hsleiden.iprwc.model.PurchaseOrder;
import nl.hsleiden.iprwc.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public PurchaseOrder add(PurchaseOrder purchaseOrder) {
        return orderRepository.save(purchaseOrder);
    }

    public PurchaseOrder edit(long orderId, PurchaseOrder purchaseOrder) {
        purchaseOrder.setId(orderId);
        return orderRepository.save(purchaseOrder);
    }

    public void delete(long orderId) {
        orderRepository.deleteById(orderId);
    }

    public List<PurchaseOrder> getAll() {
        return orderRepository.findAll();
    }

    public PurchaseOrder get(long orderId) {
        return orderRepository.findById(orderId).orElseThrow(NotFoundException::new);
    }
}
