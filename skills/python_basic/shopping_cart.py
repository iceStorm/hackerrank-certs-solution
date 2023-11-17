
class Item:
    def __init__(self, name: str, price: int):
        self.name = name
        self.price = price


class ShoppingCart:
    def __init__(self):
        self.items = []

    def add(self, item: Item):
        self.items.append(item)

    def total(self):
        counts = 0
        for item in self.items:
            counts += item.price
        return counts

    def __len__(self):
        return len(self.items)
