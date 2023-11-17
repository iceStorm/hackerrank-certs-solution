class Multiset:
    def __init__(self):
        self.items = []

    def add(self, val):
        # adds one occurrence of val from the multiset, if any
        self.items.append(val)

    def remove(self, val):
        # removes one occurrence of val from the multiset, if any
        if len(self.items):
            if val in self.items:
                self.items.remove(val)
        pass

    def __contains__(self, val):
        # returns True when val is in the multiset, else returns False
        if val in self.items:
            return True
        return False

    def __len__(self):
        # returns the number of elements in the multiset
        return len(self.items)
