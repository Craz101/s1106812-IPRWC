package nl.hsleiden.iprwc.service;

import lombok.AllArgsConstructor;
import nl.hsleiden.iprwc.exception.NotFoundException;
import nl.hsleiden.iprwc.model.CartItem;
import nl.hsleiden.iprwc.model.PurchaseOrder;
import nl.hsleiden.iprwc.model.PurchaseOrderLine;
import nl.hsleiden.iprwc.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public PurchaseOrder add(Map<Integer, PurchaseOrderLine> purchaseOrderLines, long userId) {
        PurchaseOrder purchaseOrder = new PurchaseOrder();
        purchaseOrder.setPurchasedProducts(new ArrayList<>());
        purchaseOrder.setUserId(userId);
        purchaseOrderLines.forEach((k, v) -> {
            purchaseOrder.getPurchasedProducts().add(v);
            purchaseOrder.setTotalPrice(purchaseOrder.getTotalPrice() + v.getCount() * v.getProduct().getPrice());
        });
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
