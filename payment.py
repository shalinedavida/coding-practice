# class Payment:
#     def __init__(self,payee_account,payer_account,amount):
#         self.payer_account = payer_account
#         self.payee_account = payee_account
#         self.amount = amount

#     def process_payment(self):
#         print(f" Processing payment of {self.amount} from {self.payer_account} to {self.payee_account}")

class Product:
    def __init__(self,name,quantity,amount):
        self.name= name
        self.quantity = quantity
        self.amount = amount

    def restock (self,amount,quantity):
        self.quantity += self.amount
        return  self.quantity

    def sell(self):
        if amount <= quantity:
            quantity -= amount
            print(f"{self.quantity}")   
        else:
            print(f"Not enough stock")                 

