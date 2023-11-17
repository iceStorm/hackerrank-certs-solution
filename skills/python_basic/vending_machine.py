class VendingMachine:
    def __init__(self, num_items: int, item_price: int):
        self.num_items = num_items
        self.item_price = item_price

    def buy(self, req_items: int, money: int):
        if self.num_items < req_items:
            raise ValueError("Not enough items in the machine")

        if self.item_price * req_items > money:
            raise ValueError("Not enough coins")

        remainingCoins = money - req_items * self.item_price
        self.num_items -= req_items

        return remainingCoins
