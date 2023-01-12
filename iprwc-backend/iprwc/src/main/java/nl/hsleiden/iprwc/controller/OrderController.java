package nl.hsleiden.iprwc.controller;

import nl.hsleiden.iprwc.model.CartItem;
import nl.hsleiden.iprwc.model.PurchaseOrder;
import nl.hsleiden.iprwc.model.PurchaseOrderLine;
import nl.hsleiden.iprwc.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/purchaseorder")
public class OrderController {
    private final OrderService orderService;


    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public PurchaseOrder add(@RequestBody Map<Integer, PurchaseOrderLine> purchaseOrderLines) {

        return orderService.add(purchaseOrderLines);
    }

    @PutMapping("/{orderId}")
    public PurchaseOrder edit(@RequestParam long orderId, PurchaseOrder purchaseOrder) {
        return orderService.edit(orderId, purchaseOrder);
    }

    @DeleteMapping("/{orderId}")
    public void delete(@RequestParam long orderId) {
        orderService.delete(orderId);
    }

    @GetMapping("/{orderId}")
    public PurchaseOrder get(@RequestParam long orderId) {
        return orderService.get(orderId);
    }

    @GetMapping
    public List<PurchaseOrder> getAll() {
        return orderService.getAll();
    }
}
